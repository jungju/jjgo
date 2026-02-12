<script lang="ts">
	type Offer = {
		id: string;
		title: string;
		tagline: string;
		features: string[];
		deliverables: string[];
	};

	const offers: Offer[] = [
		{
			id: 'ai-consulting',
			title: 'AI 컨설팅',
			tagline: '비즈니스 문제를 AI 활용 과제로 구조화하고, 빠르게 실행 가능한 계획으로 연결합니다.',
			features: [
				'현업 인터뷰 기반 Pain Point 진단',
				'우선순위 높은 AI Use Case 발굴',
				'데이터 준비도/품질 점검',
				'도입 리스크와 보안 체크리스트 정리',
				'PoC 범위와 성공 지표 설계',
				'팀 역할/운영 방식 제안',
				'ROI 관점의 단계별 투자 계획 수립',
				'의사결정용 실행 로드맵 제공'
			],
			deliverables: ['Use Case 맵', 'AI 도입 전략 문서', '90일 실행 계획']
		},
		{
			id: 'ai-infra',
			title: 'AI 인프라 구축',
			tagline: '모델 개발/배포/운영을 안정적으로 반복할 수 있는 인프라 기반을 설계합니다.',
			features: [
				'클라우드/온프레미스 아키텍처 설계',
				'데이터 파이프라인 및 저장소 구조화',
				'모델 서빙/배치 추론 환경 구성',
				'API 게이트웨이/인증 체계 적용',
				'모니터링·로깅·알림 체계 구축',
				'비용 최적화 정책 수립',
				'장애 대응 Runbook 정리',
				'운영 전환을 위한 문서화/핸드오버'
			],
			deliverables: ['인프라 아키텍처 다이어그램', '운영 가이드', '모니터링 대시보드']
		},
		{
			id: 'ax-service',
			title: 'AX 서비스 구축',
			tagline: '업무 프로세스에 AI를 결합해 실제 사용되는 AX 서비스를 기획부터 운영까지 구축합니다.',
			features: [
				'사용자 여정 기반 서비스 기획',
				'프롬프트/정책/가드레일 설계',
				'RAG·워크플로우·자동화 시나리오 구현',
				'웹/모바일 인터페이스 구축',
				'권한/감사 로그/보안 정책 적용',
				'실사용 지표 기반 개선 루프 설계',
				'베타 테스트와 피드백 반영',
				'운영·확장까지 고려한 제품화 지원'
			],
			deliverables: ['AX 서비스 MVP', '운영 지표 설계서', '고도화 백로그']
		},
		{
			id: 'rapid-dev-build',
			title: '맞춤 개발 대행',
			tagline: '미치도록 빠른 개발 속도와 피드백 기반 반복 개선으로 완성도 높은 구축을 진행합니다.',
			features: [
				'아이디어 검증용 프로토타입 초고속 제작',
				'요구사항 변화에 맞춘 주 단위 기능 확장',
				'디자인-개발-테스트 동시 진행 체계',
				'실사용 피드백 즉시 반영 루프 운영',
				'핵심 화면/기능 우선 구현 전략',
				'웹/모바일 반응형 제품 개발',
				'운영 자동화 및 품질 체크 체계 적용',
				'릴리즈 이후 안정화 및 개선 지원'
			],
			deliverables: ['서비스 MVP 또는 프로덕션 버전', '개발 문서/운영 매뉴얼', '개선 백로그']
		}
	];
</script>

<svelte:head>
	<title>Price | 나의 AI 창작기</title>
	<meta
		name="description"
		content="AI 컨설팅, AI 인프라 구축, AX 서비스 구축, 맞춤 개발 대행. 비용은 문의 후 맞춤 견적으로 안내합니다."
	/>
</svelte:head>

<main class="price-shell">
	<section class="hero glass-panel">
		<p class="eyebrow">PRICING & OFFERINGS</p>
		<h1>Price</h1>
		<p class="intro">
			프로젝트 상황과 범위가 모두 달라 정액 가격 대신 맞춤형으로 안내합니다.
			<strong> 모든 비용은 상담 후 견적으로 안내드립니다.</strong>
		</p>
		<div class="contact-chip" aria-label="비용 문의 안내">비용 안내: 연락 주세요</div>
	</section>

	<section class="offer-grid" aria-label="가격 서비스 목록">
		{#each offers as offer}
			<article class="offer-card glass-panel">
				<header>
					<h2>{offer.title}</h2>
					<span class="cost-badge">비용 문의</span>
				</header>
				<p class="tagline">{offer.tagline}</p>

				<div class="columns">
					<div>
						<h3>가능 기능</h3>
						<ul>
							{#each offer.features as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h3>주요 산출물</h3>
						<ul class="deliverables">
							{#each offer.deliverables as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				</div>

				<footer>
					<span>상담 후 범위 확정</span>
					<span>비용: 연락 주세요</span>
				</footer>
			</article>
		{/each}
	</section>
</main>

<style>
	.price-shell {
		max-width: 1180px;
		margin: 0 auto;
		padding: 1rem 1rem 2rem;
		display: grid;
		gap: 1rem;
	}

	.hero {
		padding: 1.25rem 1.2rem;
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 92% 6%, rgba(47, 197, 255, 0.16), transparent 36%),
			radial-gradient(circle at 4% 96%, rgba(122, 252, 204, 0.11), transparent 35%);
		pointer-events: none;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.18em;
		color: #8ab2d8;
	}

	h1 {
		margin: 0.38rem 0 0;
		font-size: clamp(1.55rem, 1.35rem + 1.35vw, 2.2rem);
		letter-spacing: -0.03em;
	}

	.intro {
		margin: 0.64rem 0 0;
		color: #a6bfd8;
		max-width: 56rem;
	}

	.intro strong {
		color: #f0f8ff;
		font-weight: 650;
	}

	.contact-chip {
		margin-top: 0.9rem;
		min-height: 2rem;
		padding: 0 0.78rem;
		border-radius: 999px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		font-size: 0.82rem;
		font-weight: 650;
		color: #e6f4ff;
		border: 1px solid rgba(128, 182, 228, 0.45);
		background:
			linear-gradient(140deg, rgba(9, 28, 49, 0.92), rgba(9, 19, 37, 0.9)),
			rgba(10, 22, 41, 0.92);
	}

	.offer-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.9rem;
	}

	.offer-card {
		padding: 1.02rem 1rem;
		display: grid;
		gap: 0.72rem;
	}

	.offer-card header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.6rem;
	}

	h2 {
		margin: 0;
		font-size: 1.14rem;
		letter-spacing: -0.02em;
	}

	.cost-badge {
		min-height: 1.55rem;
		padding: 0 0.56rem;
		border-radius: 999px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 0.73rem;
		font-weight: 650;
		color: #f3f8ff;
		border: 1px solid rgba(150, 180, 214, 0.38);
		background: rgba(20, 35, 56, 0.78);
		white-space: nowrap;
	}

	.tagline {
		margin: 0;
		color: #b0c6dd;
		min-height: 3.6rem;
	}

	.columns {
		display: grid;
		gap: 0.76rem;
	}

	h3 {
		margin: 0;
		font-size: 0.86rem;
		color: #d5e8f9;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	ul {
		margin: 0.44rem 0 0;
		padding-left: 1rem;
		display: grid;
		gap: 0.3rem;
		color: #9cb7d2;
		font-size: 0.86rem;
	}

	.deliverables li {
		color: #c7daec;
	}

	footer {
		padding-top: 0.6rem;
		margin-top: 0.1rem;
		border-top: 1px solid rgba(135, 168, 203, 0.2);
		display: flex;
		justify-content: space-between;
		gap: 0.45rem;
		flex-wrap: wrap;
		font-size: 0.8rem;
		color: #8fb0cf;
	}

	@media (max-width: 1060px) {
		.offer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
