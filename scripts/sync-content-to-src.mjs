import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.resolve('content/posts');
const DRAFT_PREFIX = 'draft-';
const TAG_META_FILE = path.resolve('content/meta/tags/index.json');
const CATEGORY_META_FILE = path.resolve('content/meta/categories/index.json');
const OUTPUT_FILE = path.resolve('src/lib/data/stories.generated.ts');
const DEFAULT_VIDEO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const DEFAULT_CARD_POSTER = '/posters/story-card.svg';
const DEFAULT_BG_POSTER = '/posters/story-bg.svg';

const parseValue = (value) => {
	if (!value) return '';
	if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
		return value.slice(1, -1);
	}
	if (value.startsWith('[') && value.endsWith(']')) {
		try {
			return JSON.parse(value.replace(/'/g, '"'));
		} catch {
			return value
				.slice(1, -1)
				.split(',')
				.map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
				.filter(Boolean);
		}
	}
	return value;
};

const parseFrontmatter = (raw) => {
	const matched = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	if (!matched) return { meta: {}, body: raw.trim() };
	const meta = {};
	for (const line of matched[1].split('\n')) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;
		const idx = trimmed.indexOf(':');
		if (idx < 0) continue;
		const key = trimmed.slice(0, idx).trim();
		const value = trimmed.slice(idx + 1).trim();
		meta[key] = parseValue(value);
	}
	return { meta, body: matched[2].trim() };
};

const toArray = (value) => {
	if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
	if (typeof value === 'string') return value.split(',').map((item) => item.trim()).filter(Boolean);
	return [];
};

const toSlug = (folderName, value, title) => {
	const base = folderName.replace(/^draft-/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
	return String(value || base || title || 'post')
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-');
};

const toDate = (folderName, value) => {
	if (typeof value === 'string' && value.trim()) return value.trim();
	const matched = folderName.match(/^draft-(\d{4}-\d{2}-\d{2})-/) || folderName.match(/^(\d{4}-\d{2}-\d{2})-/);
	return matched ? matched[1] : new Date().toISOString().slice(0, 10);
};

const readMeta = (file) => {
	if (!fs.existsSync(file)) return [];
	try {
		const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
};

const toMetaMap = (items) => {
	const result = {};
	for (const item of items) {
		const id = String(item?.id || '').trim();
		if (!id) continue;
		result[id] = item;
	}
	return result;
};

const parseSections = (body) => {
	const lines = body.replace(/\r/g, '').split('\n');
	const sections = [];
	let heading = '본문';
	let current = [];
	let paragraphs = [];

	const flushParagraph = () => {
		if (!current.length) return;
		paragraphs.push(current.join(' ').trim());
		current = [];
	};

	const flushSection = () => {
		flushParagraph();
		if (paragraphs.length) sections.push({ heading, body: paragraphs });
		paragraphs = [];
	};

	for (const rawLine of lines) {
		const line = rawLine.trim();
		if (!line) {
			flushParagraph();
			continue;
		}
		if (line.startsWith('# ')) continue;
		if (line.startsWith('## ')) {
			flushSection();
			heading = line.slice(3).trim() || '본문';
			continue;
		}
		if (/^(-|\*|\d+\.)\s+/.test(line)) {
			flushParagraph();
			paragraphs.push(line);
			continue;
		}
		current.push(line);
	}

	flushSection();

	if (sections.length) return sections;

	const fallback = body
		.replace(/^# .+$/gm, '')
		.split(/\n{2,}/)
		.map((line) => line.replace(/\n/g, ' ').trim())
		.filter(Boolean);

	return [{ heading: '본문', body: fallback }];
};

const tagMeta = readMeta(TAG_META_FILE);
const categoryMeta = readMeta(CATEGORY_META_FILE);

const tagMetaMap = toMetaMap(tagMeta);
const categoryMetaMap = toMetaMap(categoryMeta);

const postFolders = fs.existsSync(CONTENT_DIR)
	? fs
			.readdirSync(CONTENT_DIR, { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name)
			.filter((folderName) => !folderName.startsWith(DRAFT_PREFIX))
			.sort()
	: [];

const stories = postFolders
	.map((folderName) => {
		const postFile = path.join(CONTENT_DIR, folderName, 'index.md');
		if (!fs.existsSync(postFile)) return null;
		const raw = fs.readFileSync(postFile, 'utf8');
		const { meta, body } = parseFrontmatter(raw);
		const sections = parseSections(body);
		const title = String(meta.title || folderName).trim();
		const category = String(meta.category || '').trim();
		return {
			slug: toSlug(folderName, meta.slug, title),
			title,
			summary: String(meta.summary || sections[0]?.body?.[0] || '').trim(),
			date: toDate(folderName, meta.date),
			tags: toArray(meta.tags),
			category,
			categoryName: String(categoryMetaMap[category]?.name || category),
			cardVideoSrc: String(meta.cardVideoSrc || DEFAULT_VIDEO),
			cardPoster: String(meta.cardPoster || DEFAULT_CARD_POSTER),
			bgVideoSrc: String(meta.bgVideoSrc || DEFAULT_VIDEO),
			bgPoster: String(meta.bgPoster || DEFAULT_BG_POSTER),
			content: sections,
			links: Array.isArray(meta.links) ? meta.links : []
		};
	})
	.filter(Boolean);

stories.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

const tagCounts = {};
const categoryCounts = {};

for (const story of stories) {
	for (const tag of story.tags) tagCounts[tag] = (tagCounts[tag] || 0) + 1;
	if (story.category) categoryCounts[story.category] = (categoryCounts[story.category] || 0) + 1;
}

const tagIds = Array.from(new Set([...Object.keys(tagMetaMap), ...Object.keys(tagCounts)])).sort((a, b) =>
	a.localeCompare(b, 'ko-KR')
);
const categoryIds = Array.from(new Set([...Object.keys(categoryMetaMap), ...Object.keys(categoryCounts)])).sort(
	(a, b) => a.localeCompare(b, 'ko-KR')
);

const generatedMeta = {
	tags: tagIds.map((id) => ({
		id,
		name: String(tagMetaMap[id]?.name || id),
		description: String(tagMetaMap[id]?.description || ''),
		color: String(tagMetaMap[id]?.color || ''),
		count: tagCounts[id] || 0
	})),
	categories: categoryIds.map((id) => ({
		id,
		name: String(categoryMetaMap[id]?.name || id),
		description: String(categoryMetaMap[id]?.description || ''),
		count: categoryCounts[id] || 0
	}))
};

const output = `// Auto-generated by scripts/sync-content-to-src.mjs
// Do not edit this file directly.

export const generatedStories = ${JSON.stringify(stories, null, '\t')};
export const generatedMeta = ${JSON.stringify(generatedMeta, null, '\t')};
`;

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, `${output}\n`, 'utf8');

console.log(`[content-sync] ${stories.length} post(s) -> ${path.relative(process.cwd(), OUTPUT_FILE)}`);
