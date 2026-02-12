<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	export let data: PageData;
	let saveData = false;
</script>

<svelte:head>
	<title>{data.story.title} | 나의 AI 개발기</title>
	<meta name="description" content={data.story.summary} />
</svelte:head>

<div class="story-shell">
	<div class="video-background" aria-hidden="true">
		{#if saveData}
			<img class="background-poster" src={data.story.bgPoster} alt="" loading="eager" />
		{:else}
			<video class="background-video" muted playsinline loop autoplay preload="metadata" poster={data.story.bgPoster}>
				<source src={data.story.bgVideoSrc} type="video/mp4" />
			</video>
		{/if}
		<div class="shade-layer"></div>
		<div class="grain-layer"></div>
		<div class="soft-grid"></div>
	</div>

	<main class="story-main">
		<header class="top-bar glass-panel">
			<a class="back-link" href={`${base}/`} aria-label="AI 개발기 목록으로 돌아가기">← 목록으로</a>
			<label class="switch">
				<input type="checkbox" bind:checked={saveData} aria-label="데이터 절약 모드 켜기" />
				<span>데이터 절약</span>
			</label>
		</header>

		<article class="hero-panel glass-panel">
			<time class="date" datetime={data.story.date}>
				{new Date(data.story.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
			</time>
			<h1>{data.story.title}</h1>
			<p class="summary">{data.story.summary}</p>
			{#if data.story.category || data.story.series}
				<div class="meta-row">
					{#if data.story.category}
						<span class="chip">{data.story.categoryName || data.story.category}</span>
					{/if}
					{#if data.story.series}
						<span class="chip">{data.story.seriesName || data.story.series}</span>
					{/if}
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
						<p>{paragraph}</p>
					{/each}
				</section>
			{/each}
		</article>

		<nav class="pager glass-panel" aria-label="이전 다음 개발기">
			{#if data.prev}
				<a href={`${base}/story/${data.prev.slug}`} aria-label={`이전 개발기: ${data.prev.title}`}>
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
				<a href={`${base}/story/${data.next.slug}`} aria-label={`다음 개발기: ${data.next.title}`}>
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
		border: 1px solid rgba(152, 189, 226, 0.3);
		background: rgba(6, 21, 42, 0.75);
		font-size: 0.88rem;
		font-weight: 600;
		transition:
			transform 180ms ease,
			border-color 180ms ease;
	}

	.back-link:hover,
	.back-link:focus-visible {
		transform: translateY(-1px);
		border-color: rgba(36, 217, 255, 0.52);
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

	h1 {
		margin: 0.4rem 0 0;
		font-size: clamp(1.5rem, 1.35rem + 1.3vw, 2.3rem);
		line-height: 1.16;
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
		border: 1px solid rgba(153, 189, 223, 0.33);
		background: rgba(6, 24, 43, 0.76);
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
		border-color: rgba(36, 217, 255, 0.6);
		background: rgba(10, 40, 73, 0.86);
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
		color: #c2d8ec;
		line-height: 1.67;
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
