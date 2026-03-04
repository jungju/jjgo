<script lang="ts">
	import { base } from '$app/paths';
	import { stories } from '$lib/data/stories';

	const ctaLinks = [
		{ label: 'GitHub', href: 'https://github.com/jungju' },
		{ label: 'Website', href: 'https://jjgo.io' }
	];

	const toPublicPath = (path: string) => {
		if (!path) return path;
		if (/^https?:\/\//.test(path)) return path;
		if (path.startsWith('/')) return `${base}/${path.replace(/^\/+/, '')}`;
		return path;
	};
</script>

<svelte:head>
	<title>나의 AI 창작기 | Jungju</title>
	<meta
		name="description"
		content="Svelte 기반 개인 홈페이지. AI를 활용해 만든 창의적이고 재미있는 결과물을 영상 카드와 상세 페이지로 소개합니다."
	/>
</svelte:head>

<div class="home-shell">
	<div class="soft-grid"></div>

	<header class="hero glass-panel">
		<p class="eyebrow">PERSONAL AI CREATIVE LOG</p>
		<h1>나의 AI 창작기</h1>
		<p class="intro">AI 기반으로 창조적이고 재미난 것들을 만들고, 그 결과물과 과정을 소개합니다.</p>

		<div class="hero-meta">
			<span>{stories.length} Stories</span>
		</div>

		<div class="cta-row" aria-label="외부 링크">
			{#each ctaLinks as link}
				<a href={link.href} target="_blank" rel="noreferrer noopener">{link.label}</a>
			{/each}
		</div>
	</header>

	<main aria-live="polite">
		{#if stories.length === 0}
			<div class="empty-state glass-panel">
				<p>아직 등록된 창작 기록이 없습니다.</p>
			</div>
		{:else}
			<ul class="cards-grid" aria-label="AI 창작기 카드 목록">
				{#each stories as story, index (story.slug)}
					<li>
						<a class="video-card glass-panel" href={`${base}/story/${story.slug}`} aria-label={`${story.title} 상세 페이지로 이동`}>
							<div class="media-shell">
								<img class="card-poster" src={toPublicPath(story.cardPoster)} alt="" loading={index < 3 ? 'eager' : 'lazy'} />
								<span class="date-pill">
									{new Date(story.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}
								</span>
							</div>

							<div class="card-content">
								<h2>{story.title}</h2>
								<p>{story.summary}</p>
								<div class="tag-row" aria-label="태그 목록">
									{#each story.tags as tag}
										<span class="chip">{tag}</span>
									{/each}
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</main>
</div>

<style>
	.home-shell {
		position: relative;
		padding: 1.5rem 1rem 2.2rem;
		max-width: 1240px;
		margin: 0 auto;
		display: grid;
		gap: 1rem;
	}

	.hero {
		position: relative;
		padding: 1.35rem 1.2rem 1.4rem;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 90% 15%, rgba(36, 217, 255, 0.16), transparent 34%),
			radial-gradient(circle at 8% 100%, rgba(119, 253, 187, 0.12), transparent 35%);
		pointer-events: none;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.22em;
		color: #89bbd8;
	}

	h1 {
		margin: 0.36rem 0 0;
		font-size: clamp(1.6rem, 1.4rem + 1.3vw, 2.35rem);
		letter-spacing: -0.02em;
	}

	.intro {
		max-width: 46rem;
		margin: 0.62rem 0 0;
		color: var(--text-muted);
	}

	.hero-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.hero-meta span {
		height: 1.85rem;
		padding: 0 0.72rem;
		display: inline-flex;
		align-items: center;
		border-radius: 999px;
		font-size: 0.79rem;
		border: 1px solid rgba(140, 177, 216, 0.28);
		background: rgba(4, 14, 28, 0.54);
	}

	.cta-row {
		margin-top: 1.05rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.cta-row a {
		padding: 0.48rem 0.86rem;
		border-radius: 0.72rem;
		background: rgba(6, 19, 40, 0.72);
		border: 1px solid rgba(150, 184, 222, 0.28);
		font-size: 0.86rem;
		font-weight: 600;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 0.9rem;
		padding: 0;
		list-style: none;
		margin: 0;
	}

	.video-card {
		display: grid;
		grid-template-rows: auto 1fr;
		overflow: hidden;
		min-height: 100%;
		transition:
			transform 240ms ease,
			border-color 240ms ease,
			box-shadow 240ms ease;
	}

	.video-card:hover,
	.video-card:focus-visible {
		transform: translateY(-6px);
		box-shadow: 0 24px 40px rgba(2, 10, 29, 0.62);
		border-color: rgba(36, 217, 255, 0.45);
		outline: none;
	}

	.media-shell {
		position: relative;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: rgba(4, 12, 26, 0.95);
	}

	.card-poster {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.date-pill {
		position: absolute;
		top: 0.85rem;
		left: 0.85rem;
		display: inline-flex;
		align-items: center;
		height: 1.6rem;
		padding: 0 0.6rem;
		border-radius: 999px;
		background: rgba(3, 9, 25, 0.62);
		border: 1px solid rgba(146, 182, 230, 0.25);
		font-size: 0.75rem;
		color: #d5ecff;
	}

	.card-content {
		display: grid;
		gap: 0.72rem;
		padding: 1rem 1rem 1.1rem;
	}

	.card-content h2 {
		margin: 0;
		font-size: 1.08rem;
	}

	.card-content p {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.91rem;
		line-height: 1.45;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.tag-row {
		display: flex;
		gap: 0.42rem;
		flex-wrap: wrap;
	}

	.empty-state {
		padding: 2.1rem 1rem;
		text-align: center;
	}

	.empty-state p {
		margin: 0;
		color: #b2cde5;
	}

	@media (min-width: 720px) {
		.home-shell {
			padding: 2rem 1.2rem 2.4rem;
			gap: 1.15rem;
		}

		.cards-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1040px) {
		.cards-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 1rem;
		}
	}

	@media (min-width: 1320px) {
		.cards-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (max-width: 620px) {
		.card-content {
			padding: 0.92rem;
		}
	}
</style>
