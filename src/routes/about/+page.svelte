<script lang="ts">
	const profile = {
		name: '이정주 (JJGo)',
		title: 'AI 기반 전략 개발자 · 15년+ 개발 리더',
		intro:
			'백엔드 중심으로 제품을 설계·개발·운영하며, 최근에는 AI를 실제 서비스 루프로 연결하는 실행형 개발에 집중하고 있습니다.',
		linkedin: 'https://www.linkedin.com/in/jungjugo/',
		github: 'https://github.com/jungju',
		website: 'https://jjgo.io'
	};

	const highlights = [
		'AI 협업 개발 루프 설계 및 제품화',
		'백엔드/플랫폼 아키텍처 설계·운영',
		'개발 조직 리딩과 실행 프로세스 개선'
	];

	const facts = [
		{ label: 'Career', value: '15+ years' },
		{ label: 'Focus', value: 'AI Product + Platform' },
		{ label: 'Style', value: 'Fast Build, Real Delivery' }
	];
</script>

<svelte:head>
	<title>소개 | 나의 AI 창작기</title>
	<meta name="description" content="JJGo(이정주) 소개. AI 기반 전략 개발, 제품 설계·개발·운영, 실행 중심 빌드 철학." />
</svelte:head>

<main class="about-shell">
	<section class="about-card glass-panel">
		<p class="eyebrow">ABOUT JJGO</p>
		<h1>{profile.name}</h1>
		<p class="title">{profile.title}</p>
		<p class="intro">{profile.intro}</p>

		<div class="facts" aria-label="프로필 요약">
			{#each facts as fact}
				<div>
					<span>{fact.label}</span>
					<strong>{fact.value}</strong>
				</div>
			{/each}
		</div>

		<div class="link-row" aria-label="프로필 링크">
			<a href={profile.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
			<a href={profile.github} target="_blank" rel="noreferrer noopener">GitHub</a>
			<a href={profile.website} target="_blank" rel="noreferrer noopener">Website</a>
		</div>
	</section>

	<section class="highlights glass-panel" aria-label="핵심 역량">
		<h2>핵심 역량</h2>
		<ul>
			{#each highlights as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	.about-shell {
		max-width: 920px;
		margin: 0 auto;
		padding: 1rem 1rem 2rem;
		display: grid;
		gap: 0.95rem;
	}

	.about-card,
	.highlights {
		padding: 1.3rem 1.2rem;
		position: relative;
		overflow: hidden;
	}

	.about-card::before,
	.highlights::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 84% 12%, rgba(37, 206, 255, 0.15), transparent 38%),
			radial-gradient(circle at 5% 100%, rgba(127, 249, 211, 0.1), transparent 40%);
		pointer-events: none;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.73rem;
		letter-spacing: 0.18em;
		color: #95b4d5;
	}

	h1 {
		margin: 0.34rem 0 0;
		font-size: clamp(1.5rem, 1.2rem + 1.6vw, 2.3rem);
		letter-spacing: -0.03em;
	}

	.title {
		margin: 0.35rem 0 0;
		color: #d8ebff;
		font-weight: 650;
	}

	.intro {
		margin: 0.65rem 0 0;
		max-width: 48rem;
		color: #a8bdd5;
	}

	.facts {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.55rem;
	}

	.facts div {
		min-height: 3.2rem;
		border: 1px solid rgba(134, 177, 217, 0.25);
		border-radius: 0.8rem;
		background: rgba(9, 21, 39, 0.78);
		padding: 0.55rem 0.65rem;
		display: grid;
		align-content: center;
		gap: 0.15rem;
	}

	.facts span {
		font-size: 0.72rem;
		color: #8fb0cd;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.facts strong {
		font-size: 0.9rem;
		color: #e7f2ff;
	}

	.link-row {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.58rem;
	}

	.link-row a {
		min-height: 2.1rem;
		padding: 0 0.82rem;
		border-radius: 999px;
		border: 1px solid rgba(134, 177, 217, 0.36);
		background:
			linear-gradient(145deg, rgba(11, 25, 45, 0.92), rgba(8, 18, 34, 0.88)),
			rgba(9, 19, 36, 0.9);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 0.86rem;
		font-weight: 650;
		color: #d8e8f7;
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			color 180ms ease,
			background-color 180ms ease;
	}

	.link-row a:hover {
		transform: translateY(-1px);
		border-color: rgba(121, 214, 235, 0.52);
		color: #f2f9ff;
	}

	.link-row a:focus-visible {
		outline: 2px solid rgba(136, 230, 255, 0.72);
		outline-offset: 2px;
	}

	h2 {
		margin: 0;
		font-size: 1.05rem;
		letter-spacing: -0.01em;
	}

	ul {
		margin: 0.7rem 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.45rem;
	}

	li {
		padding: 0.62rem 0.72rem;
		border-radius: 0.7rem;
		border: 1px solid rgba(132, 177, 214, 0.26);
		background: rgba(8, 19, 35, 0.72);
		color: #c8def2;
	}

	@media (max-width: 700px) {
		.facts {
			grid-template-columns: 1fr;
		}
	}
</style>
