import { generatedMeta, generatedStories } from './stories.generated';

const sharedVideo = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const sharedCardPoster = '/posters/story-card.svg';
const sharedBackgroundPoster = '/posters/story-bg.svg';

const defaultStories = [
	{
		slug: 'agent-loop-sprint-01',
		title: 'Agent Loop Sprint 01',
		summary: 'SvelteKit 기반 에이전트 대시보드 프로토타입을 48시간 안에 구현했다.',
		date: '2026-02-07',
		tags: ['SvelteKit', 'AI Agent', 'UX'],
		cardVideoSrc: sharedVideo,
		cardPoster: sharedCardPoster,
		bgVideoSrc: sharedVideo,
		bgPoster: sharedBackgroundPoster,
		content: [
			{
				heading: '문제 정의',
				body: [
					'여러 AI 에이전트 실행 로그를 한 화면에서 파악하기 어려워서, 우선순위와 실패 원인을 빠르게 보는 대시보드를 목표로 잡았다.',
					'핵심 KPI는 문제 재현 시간 30% 단축이었다.'
				]
			},
			{
				heading: '구현 포인트',
				body: [
					'실시간 상태 뱃지, 작업 큐 히스토리, 실패 시나리오 필터를 중심으로 정보 구조를 다시 설계했다.',
					'초기에는 카드 밀도가 너무 높아 시선이 분산되어, 핵심 지표만 상단 고정 영역으로 분리했다.'
				]
			},
			{
				heading: '회고',
				body: [
					'사용자는 기능보다 실패 시 원인 설명을 먼저 원한다는 점이 명확해졌다.',
					'다음 스프린트에서는 에러 패턴 자동 그룹핑을 붙일 예정이다.'
				]
			}
		],
		links: [
			{ label: 'Live Demo', href: 'https://example.com/demo/agent-loop-sprint-01' },
			{ label: 'Repository', href: 'https://github.com/example/agent-loop-sprint-01' }
		]
	},
	{
		slug: 'retrieval-latency-cut',
		title: 'Retrieval Latency Cut',
		summary: 'RAG 파이프라인에서 검색 지연을 줄여 응답 시간을 평균 42% 개선했다.',
		date: '2026-01-31',
		tags: ['RAG', 'Performance', 'MLOps'],
		cardVideoSrc: sharedVideo,
		cardPoster: sharedCardPoster,
		bgVideoSrc: sharedVideo,
		bgPoster: sharedBackgroundPoster,
		content: [
			{
				heading: '진단',
				body: [
					'프로파일링 결과 벡터 검색 자체보다 전처리 직렬화 단계가 병목이었다.',
					'특히 동일 질의 반복 요청에서 캐시 미스가 잦아 체감 속도가 크게 떨어졌다.'
				]
			},
			{
				heading: '개선',
				body: [
					'상위 20% 빈도 질의를 서버 메모리 캐시에 올리고, 문서 청크 스키마를 단순화했다.',
					'클라이언트에서는 낙관적 스켈레톤을 적용해 대기 체감을 줄였다.'
				]
			},
			{
				heading: '결과',
				body: [
					'P95 응답 지연이 2.1초에서 1.2초로 감소했다.',
					'모니터링 패널에 검색 단계 분해 지표를 추가해 회귀 탐지가 쉬워졌다.'
				]
			}
		],
		links: [
			{ label: 'Latency Dashboard', href: 'https://example.com/demo/retrieval-latency-cut' },
			{ label: 'Postmortem', href: 'https://github.com/example/retrieval-latency-cut' }
		]
	},
	{
		slug: 'prompt-ops-playbook',
		title: 'PromptOps Playbook',
		summary: '프롬프트 변경과 품질 회귀를 추적하는 운영 플레이북을 만들었다.',
		date: '2026-01-20',
		tags: ['PromptOps', 'Quality', 'Automation'],
		cardVideoSrc: sharedVideo,
		cardPoster: sharedCardPoster,
		bgVideoSrc: sharedVideo,
		bgPoster: sharedBackgroundPoster,
		content: [
			{
				heading: '왜 필요했나',
				body: [
					'작은 프롬프트 수정이 의외의 회귀를 만들었고, 원인 추적에 시간이 오래 걸렸다.',
					'변경 이력과 평가 결과를 같은 맥락에서 보는 규칙이 필요했다.'
				]
			},
			{
				heading: '핵심 설계',
				body: [
					'프롬프트 버전을 Git 태그로 고정하고, 평가셋을 변경 없이 재실행하도록 파이프라인을 만들었다.',
					'성능, 안정성, 톤 일관성 지표를 각각 분리해 추세를 비교했다.'
				]
			},
			{
				heading: '운영 규칙',
				body: [
					'배포 전 최소 3개 시나리오 통과를 강제하고, 실패 시 롤백 템플릿을 자동 생성했다.',
					'팀 내 공통 언어가 생겨 리뷰 속도가 빨라졌다.'
				]
			}
		],
		links: [
			{ label: 'Ops Board', href: 'https://example.com/demo/prompt-ops-playbook' },
			{ label: 'Runbook', href: 'https://github.com/example/prompt-ops-playbook' }
		]
	},
	{
		slug: 'multimodal-ui-experiment',
		title: 'Multimodal UI Experiment',
		summary: '텍스트, 음성, 이미지 입력을 묶는 멀티모달 인터페이스를 실험했다.',
		date: '2026-01-11',
		tags: ['Multimodal', 'Frontend', 'Research'],
		cardVideoSrc: sharedVideo,
		cardPoster: sharedCardPoster,
		bgVideoSrc: sharedVideo,
		bgPoster: sharedBackgroundPoster,
		content: [
			{
				heading: '실험 범위',
				body: [
					'단일 프롬프트 입력창 대신 목적 기반 입력 모듈을 구성해 사용성 차이를 측정했다.',
					'모달 전환의 인지 부담을 줄이는 것이 핵심 가설이었다.'
				]
			},
			{
				heading: '배운 점',
				body: [
					'사용자는 모달리티 선택보다 결과 신뢰 근거를 더 중요하게 평가했다.',
					'따라서 입력 UI를 복잡하게 늘리기보다 결과 설명 레이어를 강화하는 방향이 유효했다.'
				]
			},
			{
				heading: '다음 단계',
				body: [
					'음성 입력은 전문 용어 인식 사전을 붙이고, 이미지 입력은 캡션 보조를 추가할 계획이다.',
					'향후 A/B 테스트에서 완료율과 재시도율을 같이 본다.'
				]
			}
		],
		links: [
			{ label: 'Prototype', href: 'https://example.com/demo/multimodal-ui-experiment' },
			{ label: 'Design Notes', href: 'https://github.com/example/multimodal-ui-experiment' }
		]
	},
	{
		slug: 'edge-inference-notes',
		title: 'Edge Inference Notes',
		summary: '모바일 데이터 환경을 고려해 엣지 추론 전략과 폴백을 정리했다.',
		date: '2025-12-28',
		tags: ['Edge AI', 'Mobile', 'Optimization'],
		cardVideoSrc: sharedVideo,
		cardPoster: sharedCardPoster,
		bgVideoSrc: sharedVideo,
		bgPoster: sharedBackgroundPoster,
		content: [
			{
				heading: '관찰',
				body: [
					'네트워크 품질이 낮은 환경에서는 모델 정확도보다 응답 일관성이 만족도에 더 큰 영향을 줬다.',
					'특히 데이터 세이버가 켜진 기기에서 미디어 다운로드가 사용성을 크게 저하시켰다.'
				]
			},
			{
				heading: '대응',
				body: [
					'기본 응답을 경량 모델로 제공하고, 필요할 때만 고비용 경로로 승격하는 하이브리드 전략을 적용했다.',
					'비디오/애니메이션은 정적 포스터로 폴백하는 UI 제어를 함께 넣었다.'
				]
			},
			{
				heading: '효과',
				body: [
					'모바일 환경에서 첫 응답 시간 변동폭이 줄어들었고, 이탈률이 감소했다.',
					'이후에는 지역별 네트워크 프로파일을 활용한 사전 최적화를 계획 중이다.'
				]
			}
		],
		links: [
			{ label: 'Edge Demo', href: 'https://example.com/demo/edge-inference-notes' },
			{ label: 'Tech Memo', href: 'https://github.com/example/edge-inference-notes' }
		]
	},
	{
		slug: 'agent-evals-v2',
		title: 'Agent Evals v2',
		summary: '에이전트 평가 지표를 정성·정량 혼합 구조로 개편했다.',
		date: '2025-12-14',
		tags: ['Evaluation', 'AI Agent', 'Product'],
		cardVideoSrc: sharedVideo,
		cardPoster: sharedCardPoster,
		bgVideoSrc: sharedVideo,
		bgPoster: sharedBackgroundPoster,
		content: [
			{
				heading: '이전 한계',
				body: [
					'정확도 점수 하나로 품질을 판단해 실제 사용자 피드백과 어긋나는 경우가 잦았다.',
					'실패 유형을 분해하지 못해 개선 우선순위도 불명확했다.'
				]
			},
			{
				heading: '개편 방식',
				body: [
					'정확도, 근거 충실도, 작업 완료율, 복구 가능성을 별도 축으로 재정의했다.',
					'정성 리뷰 템플릿을 붙여 숫자만으로 보이지 않는 맥락을 보완했다.'
				]
			},
			{
				heading: '현재 상태',
				body: [
					'지표 간 상충 관계를 파악하기 쉬워졌고, 릴리즈 승인 기준이 명확해졌다.',
					'다음 버전에서는 사용자 세그먼트별 평가 가중치를 다르게 줄 예정이다.'
				]
			}
		],
		links: [
			{ label: 'Eval Dashboard', href: 'https://example.com/demo/agent-evals-v2' },
			{ label: 'Metrics Spec', href: 'https://github.com/example/agent-evals-v2' }
		]
	}
];

const normalizedDefaultStories = defaultStories.map((story) => ({
	...story,
	category: '',
	categoryName: ''
}));

export const stories = generatedStories.length ? generatedStories : normalizedDefaultStories;

const defaultTagCount: Record<string, number> = {};
for (const story of normalizedDefaultStories) {
	for (const tag of story.tags) defaultTagCount[tag] = (defaultTagCount[tag] || 0) + 1;
}

const defaultMeta = {
	tags: Object.keys(defaultTagCount)
		.sort((a, b) => a.localeCompare(b, 'ko-KR'))
		.map((id) => ({
			id,
			name: id,
			description: '',
			color: '',
			count: defaultTagCount[id]
		})),
	categories: []
};

export const storyMeta = generatedStories.length ? generatedMeta : defaultMeta;
export const storyTags = storyMeta.tags.map((tag) => tag.id);
export const storyCategories = storyMeta.categories;
