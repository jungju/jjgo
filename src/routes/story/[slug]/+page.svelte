<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	export let data: PageData;
	let saveData = false;

	type StoryTheme = {
		className: string;
		badge: string;
		intro: string;
	};

	const getStoryTheme = (slug: string): StoryTheme => {
		if (slug === 'shorts') {
			return {
				className: 'theme-shorts',
				badge: 'Shorts Studio Build',
				intro: 'AI와 협업해 창작 도구를 완성한 제작 로그'
			};
		}
		if (slug === 'quizgame') {
			return {
				className: 'theme-quizgame',
				badge: 'Family Quiz Project',
				intro: '딸과 함께 플레이하려고 만든 Godot 퀴즈게임 기록'
			};
		}
		return {
			className: 'theme-default',
			badge: 'AI Creative Log',
			intro: ''
		};
	};

	const isVideoEmbedParagraph = (paragraph: string) => paragraph.trim().toLowerCase().startsWith('<video');
	const isDividerParagraph = (paragraph: string) => paragraph.trim() === '---';
	const isQuoteParagraph = (paragraph: string) => /^>\s+/.test(paragraph.trim());
	const quoteText = (paragraph: string) => paragraph.trim().replace(/^>\s+/, '');
	const imageMatch = (paragraph: string) => paragraph.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
	const isMarkdownImageParagraph = (paragraph: string) => Boolean(imageMatch(paragraph));
	const imageAlt = (paragraph: string) => imageMatch(paragraph)?.[1] || '';
	const imageSrc = (paragraph: string) => imageMatch(paragraph)?.[2] || '';
	const toPublicPath = (path: string) => {
		if (!path) return '';
		if (/^https?:\/\//.test(path)) return path;
		if (path.startsWith('/')) return `${base}/${path.replace(/^\/+/, '')}`;
		return path;
	};
	const resolveMediaPath = (paragraph: string) =>
		paragraph.replace(/(src|poster)=["']\/([^"']+)["']/g, (_, attr: string, path: string) => `${attr}="${base}/${path}"`);
	const escapeHtml = (text: string) =>
		text
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll("'", '&#39;');
	const renderInlineMarkdown = (text: string) =>
		escapeHtml(text)
			.replace(
				/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
				(_: string, label: string, url: string) => `<a href="${url}" target="_blank" rel="noreferrer noopener">${label}</a>`
			)
			.replace(/\[([^\]]+)\]\((\/[^)\s]+)\)/g, (_: string, label: string, path: string) => `<a href="${toPublicPath(path)}">${label}</a>`)
			.replace(/`([^`]+)`/g, '<code>$1</code>')
			.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
			.replace(/\*([^*]+)\*/g, '<em>$1</em>');

	$: theme = getStoryTheme(data.story.slug);
</script>

<svelte:head>
	<title>{data.story.title} | 나의 AI 창작기</title>
	<meta name="description" content={data.story.summary} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class={`story-shell ${theme.className}`}>
	<div class="video-background" aria-hidden="true">
		{#if saveData}
			<img class="background-poster" src={toPublicPath(data.story.bgPoster)} alt="" loading="eager" />
		{:else}
			<video class="background-video" muted playsinline loop autoplay preload="metadata" poster={toPublicPath(data.story.bgPoster)}>
				<source src={toPublicPath(data.story.bgVideoSrc)} type="video/mp4" />
			</video>
		{/if}
		<div class="shade-layer"></div>
		<div class="grain-layer"></div>
		<div class="soft-grid"></div>
	</div>

	<main class="story-main">
		<header class="top-bar glass-panel">
			<a class="back-link" href={`${base}/`} aria-label="AI 창작기 목록으로 돌아가기">← 목록으로</a>
			<label class="switch">
				<input type="checkbox" bind:checked={saveData} aria-label="데이터 절약 모드 켜기" />
				<span>데이터 절약</span>
			</label>
		</header>

		<article class="hero-panel glass-panel">
			<time class="date" datetime={data.story.date}>
				{new Date(data.story.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
			</time>
			<div class="story-accent">
				<span class="story-badge">{theme.badge}</span>
				{#if theme.intro}
					<p>{theme.intro}</p>
				{/if}
			</div>
			<h1>{data.story.title}</h1>
			<p class="summary">{data.story.summary}</p>
			{#if data.story.category}
				<div class="meta-row">
					<span class="chip">{data.story.categoryName || data.story.category}</span>
				</div>
			{/if}

			<div class="tag-row" aria-label="태그">
				{#each data.story.tags as tag}
					<span class="chip">{tag}</span>
				{/each}
			</div>

			<div class="cta-row">
				{#each data.story.links as link}
					<a href={link.href} target="_blank" rel="noreferrer noopener">{link.label}</a>
				{/each}
			</div>
		</article>

		<article class="content-panel glass-panel">
			{#each data.story.content as section}
				<section>
					<h2>{section.heading}</h2>
					{#each section.body as paragraph}
						{#if isVideoEmbedParagraph(paragraph)}
							<div class="media-embed">
								{@html resolveMediaPath(paragraph)}
							</div>
						{:else if isMarkdownImageParagraph(paragraph)}
							<figure class="media-figure">
								<img src={toPublicPath(imageSrc(paragraph))} alt={imageAlt(paragraph)} loading="lazy" />
								{#if imageAlt(paragraph)}
									<figcaption>{imageAlt(paragraph)}</figcaption>
								{/if}
							</figure>
						{:else if isDividerParagraph(paragraph)}
							<hr class="section-divider" />
						{:else if isQuoteParagraph(paragraph)}
							<blockquote>{@html renderInlineMarkdown(quoteText(paragraph))}</blockquote>
						{:else}
							<p>{@html renderInlineMarkdown(paragraph)}</p>
						{/if}
					{/each}
				</section>
			{/each}
		</article>

		<nav class="pager glass-panel" aria-label="이전 다음 기록">
			{#if data.prev}
				<a href={`${base}/story/${data.prev.slug}`} aria-label={`이전 기록: ${data.prev.title}`}>
					<span class="hint">Previous</span>
					<strong>{data.prev.title}</strong>
				</a>
			{:else}
				<div class="pager-empty">
					<span class="hint">Previous</span>
					<strong>첫 번째 기록입니다</strong>
				</div>
			{/if}

			{#if data.next}
				<a href={`${base}/story/${data.next.slug}`} aria-label={`다음 기록: ${data.next.title}`}>
					<span class="hint">Next</span>
					<strong>{data.next.title}</strong>
				</a>
			{:else}
				<div class="pager-empty">
					<span class="hint">Next</span>
					<strong>마지막 기록입니다</strong>
				</div>
			{/if}
		</nav>
	</main>
</div>

<style>
	.story-shell {
		position: relative;
		min-height: 100svh;
		padding: 1.2rem 1rem 2rem;
		--accent: #24d9ff;
		--panel-border: rgba(153, 189, 223, 0.3);
		--panel-bg: rgba(6, 24, 43, 0.76);
		--text-soft: #c2d8ec;
		--title-font: 'Space Grotesk', sans-serif;
	}

	.video-background {
		position: absolute;
		inset: 0;
		overflow: hidden;
		z-index: -3;
		background: #040915;
	}

	.background-video,
	.background-poster {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: saturate(1.08) brightness(0.52) contrast(1.06);
	}

	.shade-layer {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(180deg, rgba(4, 7, 14, 0.16) 0%, rgba(3, 6, 14, 0.74) 70%, rgba(3, 6, 12, 0.92) 100%),
			radial-gradient(circle at 22% 8%, rgba(36, 217, 255, 0.21), transparent 37%),
			radial-gradient(circle at 86% 4%, rgba(119, 253, 187, 0.16), transparent 35%);
	}

	.grain-layer {
		position: absolute;
		inset: 0;
		opacity: 0.09;
		background-image: radial-gradient(rgba(218, 243, 255, 0.45) 0.4px, transparent 0.4px);
		background-size: 3px 3px;
		mix-blend-mode: soft-light;
	}

	.story-main {
		max-width: 980px;
		margin: 0 auto;
		display: grid;
		gap: 0.9rem;
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.8rem;
		padding: 0.75rem 0.85rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		height: 2rem;
		padding: 0 0.7rem;
		border-radius: 0.6rem;
		border: 1px solid var(--panel-border);
		background: var(--panel-bg);
		font-size: 0.88rem;
		font-weight: 600;
		transition:
			transform 180ms ease,
			border-color 180ms ease;
	}

	.back-link:hover,
	.back-link:focus-visible {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--accent) 70%, white 30%);
		outline: none;
	}

	.hero-panel,
	.content-panel,
	.pager {
		padding: 1.05rem 0.95rem 1.15rem;
	}

	.date {
		margin: 0;
		color: #9fc3de;
		font-size: 0.82rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.story-accent {
		margin-top: 0.65rem;
		display: grid;
		gap: 0.35rem;
	}

	.story-accent p {
		margin: 0;
		color: #bad4ea;
		font-size: 0.88rem;
	}

	.story-badge {
		display: inline-flex;
		align-items: center;
		height: 1.75rem;
		padding: 0 0.68rem;
		border-radius: 999px;
		font-size: 0.74rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 700;
		border: 1px solid color-mix(in srgb, var(--accent) 68%, white 32%);
		color: color-mix(in srgb, var(--accent) 70%, white 30%);
		background: color-mix(in srgb, var(--accent) 12%, #071427 88%);
		width: fit-content;
	}

	h1 {
		margin: 0.4rem 0 0;
		font-size: clamp(1.5rem, 1.35rem + 1.3vw, 2.3rem);
		line-height: 1.16;
		font-family: var(--title-font);
		letter-spacing: -0.01em;
	}

	.summary {
		margin: 0.58rem 0 0;
		color: #c2d9ee;
		max-width: 68ch;
	}

	.meta-row {
		margin-top: 0.74rem;
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.tag-row {
		margin-top: 0.82rem;
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.cta-row {
		margin-top: 0.9rem;
		display: flex;
		gap: 0.55rem;
		flex-wrap: wrap;
	}

	.cta-row a {
		height: 2rem;
		padding: 0 0.72rem;
		border-radius: 0.66rem;
		display: inline-flex;
		align-items: center;
		border: 1px solid var(--panel-border);
		background: var(--panel-bg);
		font-size: 0.84rem;
		font-weight: 600;
		transition:
			transform 170ms ease,
			border-color 170ms ease,
			background-color 170ms ease;
	}

	.cta-row a:hover,
	.cta-row a:focus-visible {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--accent) 70%, white 30%);
		background: color-mix(in srgb, var(--accent) 20%, #09152a 80%);
		outline: none;
	}

	.content-panel {
		display: grid;
		gap: 1.1rem;
	}

	section {
		display: grid;
		gap: 0.6rem;
	}

	section h2 {
		margin: 0;
		font-size: 1.13rem;
	}

	section p {
		margin: 0;
		color: var(--text-soft);
		line-height: 1.67;
	}

	section p :global(code),
	blockquote :global(code) {
		padding: 0.08rem 0.32rem;
		border-radius: 0.32rem;
		background: rgba(10, 20, 34, 0.58);
		border: 1px solid rgba(131, 167, 202, 0.26);
		font-size: 0.88em;
	}

	.media-embed {
		margin: 0;
	}

	.media-embed :global(video),
	.media-figure img {
		display: block;
		width: 100%;
		max-height: 78svh;
		border-radius: 0.82rem;
		background: #0a1425;
		border: 1px solid color-mix(in srgb, var(--accent) 35%, #8fb7da 65%);
	}

	.media-figure {
		margin: 0;
		display: grid;
		gap: 0.42rem;
	}

	.media-figure figcaption {
		margin: 0;
		font-size: 0.8rem;
		color: #9cc0da;
	}

	.section-divider {
		margin: 0.45rem 0;
		border: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 55%, white 45%), transparent);
	}

	blockquote {
		margin: 0;
		padding: 0.75rem 0.85rem;
		border-left: 3px solid color-mix(in srgb, var(--accent) 66%, white 34%);
		background: color-mix(in srgb, var(--accent) 8%, #071628 92%);
		color: #d0e4f4;
		border-radius: 0.46rem;
	}

	.theme-shorts {
		--accent: #12e6d0;
		--panel-border: rgba(109, 228, 212, 0.35);
		--panel-bg: rgba(7, 35, 41, 0.68);
		--text-soft: #d2f2ee;
		--title-font: 'Space Grotesk', sans-serif;
	}

	.theme-shorts .shade-layer {
		background:
			linear-gradient(180deg, rgba(1, 16, 22, 0.18) 0%, rgba(2, 18, 24, 0.78) 74%, rgba(1, 10, 15, 0.94) 100%),
			radial-gradient(circle at 20% 10%, rgba(16, 230, 210, 0.3), transparent 38%),
			radial-gradient(circle at 88% 6%, rgba(146, 255, 191, 0.2), transparent 34%);
	}

	.theme-shorts .hero-panel,
	.theme-shorts .content-panel {
		box-shadow:
			inset 0 0 0 1px rgba(123, 236, 220, 0.24),
			0 18px 45px rgba(0, 18, 21, 0.35);
	}

	.theme-quizgame {
		--accent: #ffb100;
		--panel-border: rgba(255, 197, 84, 0.45);
		--panel-bg: rgba(62, 28, 4, 0.68);
		--text-soft: #ffe7b9;
		--title-font: 'Do Hyeon', sans-serif;
	}

	.theme-quizgame .shade-layer {
		background:
			linear-gradient(180deg, rgba(29, 14, 0, 0.2) 0%, rgba(42, 20, 2, 0.8) 74%, rgba(25, 10, 1, 0.94) 100%),
			radial-gradient(circle at 13% 8%, rgba(255, 179, 0, 0.26), transparent 37%),
			radial-gradient(circle at 91% 7%, rgba(255, 126, 39, 0.24), transparent 35%);
	}

	.theme-quizgame .hero-panel,
	.theme-quizgame .content-panel {
		box-shadow:
			inset 0 0 0 1px rgba(255, 194, 92, 0.25),
			0 16px 42px rgba(36, 13, 0, 0.33);
	}

	.theme-quizgame .chip {
		background: rgba(255, 186, 73, 0.14);
		color: #ffe3ac;
	}

	.pager {
		display: grid;
		gap: 0.58rem;
	}

	.pager a,
	.pager-empty {
		display: grid;
		gap: 0.12rem;
		padding: 0.72rem 0.78rem;
		border-radius: 0.74rem;
		border: 1px solid rgba(149, 186, 223, 0.26);
		background: rgba(5, 19, 37, 0.74);
	}

	.pager a {
		transition:
			transform 170ms ease,
			border-color 170ms ease;
	}

	.pager a:hover,
	.pager a:focus-visible {
		transform: translateY(-1px);
		border-color: rgba(36, 217, 255, 0.54);
		outline: none;
	}

	.hint {
		font-size: 0.73rem;
		color: #8fb0cc;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	strong {
		font-size: 0.96rem;
		font-weight: 600;
	}

	.pager-empty {
		opacity: 0.76;
	}

	@media (min-width: 860px) {
		.story-shell {
			padding: 1.8rem 1.2rem 2.2rem;
		}

		.hero-panel,
		.content-panel,
		.pager {
			padding: 1.2rem 1.15rem 1.25rem;
		}

		.pager {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
