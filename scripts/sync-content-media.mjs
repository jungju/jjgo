import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('content/posts');
const DEST = path.resolve('static/posts');
const DRAFT_PREFIX = 'draft-';
const ALLOWED_EXT = new Set(['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.mp4', '.webm', '.m4v']);

const clearDir = (dir) => {
	fs.rmSync(dir, { recursive: true, force: true });
	fs.mkdirSync(dir, { recursive: true });
};

const copyFile = (from, to) => {
	fs.mkdirSync(path.dirname(to), { recursive: true });
	fs.copyFileSync(from, to);
};

const walkFiles = (dir, files = []) => {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walkFiles(full, files);
		else files.push(full);
	}
	return files;
};

clearDir(DEST);

if (!fs.existsSync(SRC)) {
	console.log('[content-media-sync] no posts directory');
	process.exit(0);
}

let copied = 0;
for (const entry of fs.readdirSync(SRC, { withFileTypes: true })) {
	if (!entry.isDirectory() || entry.name.startsWith(DRAFT_PREFIX)) continue;
	const postDir = path.join(SRC, entry.name);
	const outDir = path.join(DEST, entry.name);
	for (const file of walkFiles(postDir)) {
		const rel = path.relative(postDir, file);
		if (rel === 'index.md') continue;
		if (!ALLOWED_EXT.has(path.extname(file).toLowerCase())) continue;
		const baseName = path.basename(file);
		copyFile(file, path.join(outDir, rel));
		if (rel.startsWith(`assets${path.sep}`)) copyFile(file, path.join(outDir, baseName));
		copied += 1;
	}
}

console.log(`[content-media-sync] copied ${copied} file(s) -> ${path.relative(process.cwd(), DEST)}`);
