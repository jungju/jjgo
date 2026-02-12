<script lang="ts">
	const PROFILE_LINKS = {
		linkedin: 'https://www.linkedin.com/in/replace-me',
		github: 'https://github.com/replace-me'
	};
</script>

<svelte:head>
	<title>소개 | 나의 AI 창작기</title>
	<meta name="description" content="JJGo 소개 및 링크 모음." />
</svelte:head>

<main class="about-shell">
	<section class="about-card glass-panel">
		<p class="eyebrow">ABOUT</p>
		<h1>소개</h1>
		<p class="intro">
			AI 기반으로 창의적이고 재미있는 결과물을 만들고, 그 과정을 콘텐츠로 소개하는 작업에 집중하고 있습니다.
		</p>

		<div class="link-row" aria-label="프로필 링크">
			<a href={PROFILE_LINKS.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
			<a href={PROFILE_LINKS.github} target="_blank" rel="noreferrer noopener">GitHub</a>
		</div>
	</section>
</main>

<style>
	.about-shell {
		max-width: 860px;
		margin: 0 auto;
		padding: 1rem 1rem 2rem;
	}

	.about-card {
		padding: 1.3rem 1.2rem;
		position: relative;
		overflow: hidden;
	}

	.about-card::before {
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

	.intro {
		margin: 0.65rem 0 0;
		max-width: 40rem;
		color: #a8bdd5;
	}

	.link-row {
		margin-top: 1.1rem;
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
</style>
