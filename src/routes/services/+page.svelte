<script lang="ts">
	type ServiceItem = {
		id: string;
		name: string;
		summary: string;
		href?: string;
		status: '운영중' | '준비중';
		score: number;
		frequency: string;
	};

	const services: ServiceItem[] = [
		{
			id: 'english-study',
			name: '아빠와 딸 영어공부 사이트',
			summary:
				'빈칸 맞추기/퀴즈/대화 학습, 영어·한국어 음성, 30분 수면모드를 지원하며 GPT+ElevenLabs로 학습 음성을 반자동 제작하는 서비스',
			href: 'https://study.jjgo.io',
			status: '운영중',
			score: 5.0,
			frequency: '매일 사용 (운전 학습 + 꾸준한 루틴)'
		},
		{
			id: 'solquiz',
			name: '귀염둥이 퀴즈',
			summary: '아이와 함께 쓰던 퀴즈 서비스. 아이가 다 커서 지금은 거의 사용하지 않는 추억용 서비스',
			href: 'https://jjgo.itch.io/quiz',
			status: '운영중',
			score: 1.0,
			frequency: '현재 사용 안함 (아이가 다 커서 중단)'
		},
		{
			id: 'voice-memory-notes',
			name: 'Voice Memory Notes',
			summary: '음성 메모를 요약하고 핵심 액션만 남기는 개인 정리 서비스',
			status: '준비중',
			score: 4.1,
			frequency: '주 2~3회 사용 예정'
		},
		{
			id: 'movie-fragment-market',
			name: '영화 조각 팔아요',
			summary: '영화의 멋진 장면만 모아 소개하고, 그 장면에 대한 내 생각을 짧게 남기는 큐레이션 사이트',
			status: '준비중',
			score: 4.7,
			frequency: '주 4~5회 사용 예정'
		}
	];

	const filledStars = (score: number) => '★'.repeat(Math.round(score)).padEnd(5, '☆');
</script>

<svelte:head>
	<title>서비스 | 나의 AI 창작기</title>
	<meta name="description" content="정주가 만든 서비스 목록. 주간 사용 빈도 기준의 5점 만점 별점으로 정리했습니다." />
</svelte:head>

<main class="services-shell">
	<section class="services-hero glass-panel">
		<p class="eyebrow">JUNGJU SERVICES</p>
		<h1>서비스</h1>
		<p>정주가 만든 서비스 목록입니다. 자주 사용할수록 점수가 높아지는 5점 만점 기준으로 정리했습니다.</p>
	</section>

	<section class="services-grid" aria-label="서비스 카드 목록">
		{#each services as service}
			<article class="service-card glass-panel">
				<header>
					<h2>{service.name}</h2>
					<span class={`status ${service.status === '운영중' ? 'live' : 'soon'}`}>{service.status}</span>
				</header>
				<p class="summary">{service.summary}</p>
				<div class="score-block" aria-label={`${service.name} 별점 ${service.score} / 5`}>
					<p class="stars">{filledStars(service.score)}</p>
					<p class="score">{service.score.toFixed(1)} / 5.0</p>
				</div>
				<p class="usage">{service.frequency}</p>
				{#if service.href}
					<a
						class="service-link"
						href={service.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${service.name} 서비스 새 창에서 열기`}
					>
						서비스 열기
						<svg class="open-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path d="M14 4h6v6" />
							<path d="M10 14L20 4" />
							<path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
						</svg>
					</a>
				{:else}
					<span class="service-link disabled" aria-disabled="true">준비중</span>
				{/if}
			</article>
		{/each}
	</section>
</main>

<style>
	.services-shell {
		max-width: 1160px;
		margin: 0 auto;
		padding: 1rem 1rem 2rem;
		display: grid;
		gap: 1rem;
	}

	.services-hero {
		padding: 1.2rem 1.15rem;
		position: relative;
		overflow: hidden;
	}

	.services-hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 90% 10%, rgba(32, 202, 255, 0.16), transparent 34%),
			radial-gradient(circle at 0% 100%, rgba(119, 253, 187, 0.12), transparent 34%);
		pointer-events: none;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.18em;
		color: #8fb3d5;
	}

	h1 {
		margin: 0.35rem 0 0;
		font-size: clamp(1.55rem, 1.3rem + 1.5vw, 2.3rem);
		letter-spacing: -0.03em;
	}

	.services-hero p {
		margin: 0.62rem 0 0;
		max-width: 52rem;
		color: #a9c1d9;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.9rem;
	}

	.service-card {
		padding: 1.05rem 1.05rem 1.1rem;
		display: grid;
		gap: 0.7rem;
	}

	.service-card header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.6rem;
	}

	h2 {
		margin: 0;
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	.status {
		height: 1.62rem;
		padding: 0 0.62rem;
		display: inline-flex;
		align-items: center;
		border-radius: 999px;
		font-size: 0.74rem;
		font-weight: 650;
	}

	.status.live {
		color: #dcfff0;
		border: 1px solid rgba(108, 237, 191, 0.45);
		background: rgba(10, 60, 47, 0.46);
	}

	.status.soon {
		color: #f0f4f8;
		border: 1px solid rgba(150, 173, 205, 0.34);
		background: rgba(18, 34, 58, 0.44);
	}

	.summary {
		margin: 0;
		color: #b3c8de;
		min-height: 2.7rem;
	}

	.score-block {
		display: flex;
		align-items: center;
		gap: 0.68rem;
	}

	.stars {
		margin: 0;
		letter-spacing: 0.08em;
		color: #f6d98f;
		font-size: 1.02rem;
	}

	.score {
		margin: 0;
		color: #d7e6f6;
		font-size: 0.87rem;
		font-weight: 640;
	}

	.usage {
		margin: 0;
		font-size: 0.84rem;
		color: #95b1cc;
	}

	.service-link {
		min-height: 2.05rem;
		padding: 0 0.8rem;
		width: fit-content;
		border-radius: 0.72rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.33rem;
		font-size: 0.84rem;
		font-weight: 650;
		border: 1px solid rgba(132, 182, 228, 0.36);
		background:
			linear-gradient(145deg, rgba(11, 29, 51, 0.95), rgba(9, 21, 39, 0.85)),
			rgba(10, 22, 40, 0.85);
		color: #deebf8;
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			color 180ms ease;
	}

	.service-link:hover {
		transform: translateY(-1px);
		border-color: rgba(133, 214, 236, 0.52);
		color: #f5fbff;
	}

	.service-link:focus-visible {
		outline: 2px solid rgba(131, 229, 250, 0.72);
		outline-offset: 2px;
	}

	.service-link.disabled {
		opacity: 0.68;
		pointer-events: none;
	}

	.open-icon {
		width: 0.92rem;
		height: 0.92rem;
		flex-shrink: 0;
		opacity: 0.92;
		stroke: currentColor;
		stroke-width: 2;
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	@media (max-width: 860px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
