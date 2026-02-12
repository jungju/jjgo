<script lang="ts">
	import { base } from '$app/paths';
	import { stories, storyCategories, storyMeta } from '$lib/data/stories';

	const ctaLinks = [
		{ label: 'GitHub', href: 'https://github.com/jungju' },
		{ label: 'Email', href: 'mailto:jungju@example.com' }
	];

	let q = '';
	let selectedTag = 'All';
	let selectedCategory = 'All';
	let view = 'cards';
	let saveData = false;
	const toPublicPath = (path: string) => {
		if (!path) return path;
		if (/^https?:\/\//.test(path)) return path;
		if (path.startsWith('/')) return `${base}/${path.replace(/^\/+/, '')}`;
		return path;
	};

	$: filteredStories = stories.filter((story) => {
		const text = `${story.title} ${story.summary} ${story.tags.join(' ')}`.toLowerCase();
		const search = q.trim().toLowerCase();
		return (
			(!search || text.includes(search)) &&
			(selectedTag === 'All' || story.tags.includes(selectedTag)) &&
			(selectedCategory === 'All' || story.category === selectedCategory)
		);
	});
</script>

<svelte:head>
	<title>나의 AI 개발기 | Jungju</title>
	<meta
		name="description"
		content="Svelte 기반 개인 홈페이지. AI 개발 실험 기록을 영상 카드와 상세 페이지로 탐색할 수 있습니다."
	/>
</svelte:head>

<div class="home-shell">
	<div class="soft-grid"></div>

	<header class="hero glass-panel">
		<p class="eyebrow">PERSONAL AI DEVLOG</p>
		<h1>나의 AI 개발기</h1>
		<p class="intro">AI 제품을 만들며 얻은 설계 판단, 실험, 실패 복구 과정을 기록합니다.</p>

		<div class="hero-meta">
			<span>{stories.length} Stories</span>
			<span>{storyCategories.length} Categories</span>
			<span>{saveData ? '절전 모드' : '자동 재생 활성'}</span>
		</div>

		<div class="cta-row" aria-label="외부 링크">
			{#each ctaLinks as link}
				<a href={link.href} target="_blank" rel="noreferrer noopener">{link.label}</a>
			{/each}
		</div>
	</header>

	<section class="control-panel glass-panel">
		<label class="search-box" for="story-search">
			<span>Search</span>
			<input
				id="story-search"
				type="search"
				bind:value={q}
				placeholder="제목, 요약, 태그 검색"
				aria-label="AI 개발기 검색"
				autocomplete="off"
			/>
		</label>

		<div class="filter-toolbar" role="toolbar" aria-label="태그 필터">
			<button class:selected={selectedTag === 'All'} type="button" on:click={() => (selectedTag = 'All')}>
				All
			</button>
			{#each storyMeta.tags as item}
				<button class:selected={selectedTag === item.id} type="button" on:click={() => (selectedTag = item.id)}>
					{item.name}
				</button>
			{/each}
		</div>

		<div class="filter-toolbar" role="toolbar" aria-label="카테고리 필터">
			<button class:selected={selectedCategory === 'All'} type="button" on:click={() => (selectedCategory = 'All')}>
				All
			</button>
			{#each storyCategories as item}
				<button class:selected={selectedCategory === item.id} type="button" on:click={() => (selectedCategory = item.id)}>
					{item.name}
				</button>
			{/each}
		</div>

		<div class="control-footer">
			<div class="view-toggle" role="group" aria-label="뷰 모드">
				<button class:active={view === 'cards'} type="button" on:click={() => (view = 'cards')}>
					Cards
				</button>
				<button class:active={view === 'timeline'} type="button" on:click={() => (view = 'timeline')}>
					Timeline
				</button>
			</div>

			<label class="switch">
				<input type="checkbox" bind:checked={saveData} aria-label="데이터 절약 모드 켜기" />
				<span>데이터 절약</span>
			</label>
		</div>
	</section>

	<main aria-live="polite">
		{#if filteredStories.length === 0}
			<div class="empty-state glass-panel">
				<p>조건에 맞는 개발기가 없습니다.</p>
				{#if selectedTag !== 'All' || selectedCategory !== 'All' || q.trim()}
					<button type="button" on:click={() => ((q = ''), (selectedTag = 'All'), (selectedCategory = 'All'))}>
						필터 초기화
					</button>
				{/if}
			</div>
		{:else if view === 'cards'}
			<ul class="cards-grid" aria-label="AI 개발기 카드 목록">
				{#each filteredStories as story, index (story.slug)}
					<li>
						<a class="video-card glass-panel" href={`${base}/story/${story.slug}`} aria-label={`${story.title} 상세 페이지로 이동`}>
							<div class="media-shell">
								{#if saveData}
									<img class="card-poster" src={toPublicPath(story.cardPoster)} alt="" loading={index < 3 ? 'eager' : 'lazy'} />
								{:else}
									<video
										class="card-video"
										muted
										playsinline
										loop
										autoplay
										preload={index < 3 ? 'auto' : 'metadata'}
										poster={toPublicPath(story.cardPoster)}
									>
										<source src={toPublicPath(story.cardVideoSrc)} type="video/mp4" />
									</video>
								{/if}
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
		{:else}
			<ol class="timeline" aria-label="AI 개발기 타임라인 목록">
				{#each filteredStories as story (story.slug)}
					<li>
						<a class="timeline-item glass-panel" href={`${base}/story/${story.slug}`} aria-label={`${story.title} 상세 보기`}>
							<div class="thumb-wrap">
								<img src={toPublicPath(story.cardPoster)} alt="" loading="lazy" />
							</div>
							<div class="timeline-body">
								<time datetime={story.date}>
									{new Date(story.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}
								</time>
								<h2>{story.title}</h2>
								<p>{story.summary}</p>
								<div class="timeline-tags">
									{#each story.tags as tag}
										<span class="chip">{tag}</span>
									{/each}
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ol>
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
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			background-color 180ms ease;
	}

	.cta-row a:hover,
	.cta-row a:focus-visible {
		transform: translateY(-1px);
		border-color: rgba(36, 217, 255, 0.5);
		background: rgba(10, 33, 64, 0.85);
		outline: none;
	}

	.control-panel {
		display: grid;
		gap: 0.9rem;
		padding: 1rem;
	}

	.search-box {
		display: grid;
		gap: 0.4rem;
		font-size: 0.8rem;
		color: #9cc0dc;
	}

	.search-box input {
		width: 100%;
		height: 2.55rem;
		border-radius: 0.85rem;
		border: 1px solid rgba(153, 191, 230, 0.28);
		background: rgba(5, 18, 38, 0.82);
		padding: 0 0.8rem;
		color: #e7f4ff;
	}

	.search-box input:focus-visible {
		outline: 2px solid rgba(36, 217, 255, 0.7);
		outline-offset: 2px;
	}

	.filter-toolbar {
		display: flex;
		gap: 0.45rem;
		flex-wrap: wrap;
	}

	.filter-toolbar button {
		height: 1.85rem;
		padding: 0 0.68rem;
		border-radius: 999px;
		border: 1px solid rgba(153, 190, 228, 0.25);
		background: rgba(6, 22, 41, 0.72);
		color: #c6e5ff;
		font-size: 0.8rem;
		cursor: pointer;
		transition: border-color 170ms ease, transform 170ms ease, background-color 170ms ease;
	}

	.filter-toolbar button.selected {
		border-color: rgba(36, 217, 255, 0.62);
		background: rgba(9, 42, 72, 0.85);
		color: #f3fcff;
	}

	.filter-toolbar button:hover,
	.filter-toolbar button:focus-visible {
		transform: translateY(-1px);
		border-color: rgba(36, 217, 255, 0.45);
		outline: none;
	}

	.control-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.8rem;
		flex-wrap: wrap;
	}

	.view-toggle {
		display: inline-flex;
		border: 1px solid rgba(150, 186, 224, 0.28);
		border-radius: 0.75rem;
		padding: 0.2rem;
		background: rgba(6, 19, 40, 0.64);
	}

	.view-toggle button {
		border: 0;
		background: transparent;
		color: #a9c7e0;
		height: 2rem;
		padding: 0 0.82rem;
		border-radius: 0.55rem;
		cursor: pointer;
		font-size: 0.84rem;
	}

	.view-toggle button.active {
		background: rgba(8, 40, 69, 0.86);
		color: #f5fcff;
		box-shadow: 0 0 0 1px rgba(36, 217, 255, 0.35) inset;
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

	.card-video,
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

	.timeline {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.8rem;
	}

	.timeline-item {
		display: grid;
		grid-template-columns: 170px minmax(0, 1fr);
		gap: 0.8rem;
		padding: 0.7rem;
		transition:
			transform 200ms ease,
			border-color 200ms ease,
			box-shadow 200ms ease;
	}

	.timeline-item:hover,
	.timeline-item:focus-visible {
		transform: translateY(-2px);
		border-color: rgba(36, 217, 255, 0.42);
		box-shadow: 0 16px 32px rgba(2, 9, 24, 0.52);
		outline: none;
	}

	.thumb-wrap {
		aspect-ratio: 16 / 9;
		overflow: hidden;
		border-radius: 0.82rem;
		background: rgba(7, 16, 32, 0.95);
	}

	.thumb-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.timeline-body time {
		font-size: 0.78rem;
		color: #9fc0dc;
	}

	.timeline-body h2 {
		margin: 0.28rem 0 0;
		font-size: 1.06rem;
	}

	.timeline-body p {
		margin: 0.42rem 0 0;
		color: var(--text-muted);
		font-size: 0.9rem;
	}

	.timeline-tags {
		margin-top: 0.65rem;
		display: flex;
		gap: 0.35rem;
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

	.empty-state button {
		margin-top: 0.8rem;
		height: 2.2rem;
		padding: 0 0.84rem;
		border: 1px solid rgba(145, 184, 222, 0.34);
		border-radius: 0.72rem;
		background: rgba(7, 23, 46, 0.7);
		color: #e3f4ff;
		cursor: pointer;
	}

	@media (min-width: 720px) {
		.home-shell {
			padding: 2rem 1.2rem 2.4rem;
			gap: 1.15rem;
		}

		.control-panel {
			grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
			align-items: end;
		}

		.search-box {
			grid-column: 1 / 2;
		}

		.filter-toolbar {
			grid-column: 2 / 3;
			justify-content: flex-end;
		}

		.control-footer {
			grid-column: 1 / 3;
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

	@media (max-width: 730px) {
		.timeline-item {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 620px) {
		.card-content {
			padding: 0.92rem;
		}
	}
</style>
