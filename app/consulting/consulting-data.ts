import type { ConsultingSlug } from "../site-spec";

export type ConsultingService = {
  slug: ConsultingSlug;
  number: string;
  english: string;
  title: string;
  shortTitle: string;
  summary: string;
  detailTitle: string;
  detailSummary: string;
  image: string;
  keywords: string[];
  proofTitle: string;
  proofBody: string;
  metrics: { value: string; label: string; detail: string }[];
  metricsNote: string;
  expertise: { title: string; body: string }[];
  situations: string[];
  outcomes: { title: string; body: string }[];
  process: { period: string; title: string; body: string }[];
};

export const consultingServices: ConsultingService[] = [
  {
    slug: "ai-native",
    number: "01",
    english: "AI NATIVE ORGANIZATION",
    title: "AI Native 조직 만들기",
    shortTitle: "AI Native 조직",
    summary:
      "AI를 일부 구성원의 도구가 아니라 조직 전체의 일하는 방식과 제품 개발 구조로 정착시킵니다.",
    detailTitle: "AI Native 조직 전환",
    detailSummary:
      "AI를 일부 구성원의 도구가 아니라 조직 전체의 문제 해결 방식으로 정착시킵니다.",
    image: "/a/generated/consulting/ai-native-honeybees-v3.webp",
    keywords: ["조직 구조", "업무 방식", "AI 활용 체계"],
    proofTitle: "개발 경험을 조직의 실행 체계로 바꿉니다.",
    proofBody:
      "도구 교육에 머물지 않습니다. 제품 개발, 의사결정, 코드 리뷰, 테스트, 지식 공유까지 AI가 실제 업무 흐름에 들어오도록 전략·기술·문화를 하나의 운영 모델로 연결합니다.",
    metrics: [
      {
        value: "16년",
        label: "제품 개발 경험",
        detail: "Daum·Kakao·NCSOFT부터 AI 제품 조직까지",
      },
      {
        value: "약 2개월",
        label: "제품 재설계",
        detail: "2년 이상 운영된 제품을 AI 기반 신규 제품 형태로 전환",
      },
      {
        value: "80%",
        label: "AI 환경 준비 시간 단축",
        detail: "표준화된 개발 환경으로 온보딩과 실험 준비 시간을 단축",
      },
    ],
    metricsNote:
      "출처: 이정주 포트폴리오·이력서에 기재된 본인 수행 프로젝트 기록(자기보고).",
    expertise: [
      {
        title: "AI Operating Model",
        body: "사람과 AI의 역할, 의사결정 권한, 검토 책임을 정의하고 조직이 반복해서 사용할 운영 원칙을 설계합니다.",
      },
      {
        title: "AI Workflow Design",
        body: "기획·개발·리뷰·테스트·문서화에서 효과가 큰 작업을 골라 프롬프트, 에이전트, 도구 체계를 업무 흐름에 연결합니다.",
      },
      {
        title: "Governance & Quality",
        body: "보안, 데이터 경계, 결과 검증, 추적 가능성, 휴먼 인 더 루프를 포함해 속도와 안전을 함께 관리합니다.",
      },
      {
        title: "Adoption & Capability",
        body: "리더와 실무자의 역량 기준, 코칭, 커뮤니티, 성과 지표를 설계해 일회성 도입이 아닌 조직 학습으로 정착시킵니다.",
      },
    ],
    situations: [
      "구성원마다 AI 활용 수준이 다르고 좋은 사례가 개인의 노하우에 머무는 조직",
      "도구는 도입했지만 의사결정, 검토 책임, 품질 기준이 없어 실제 성과로 이어지지 않는 조직",
      "AI 시대에 맞게 역할, 협업 구조, 제품 개발 프로세스를 다시 설계하려는 조직",
    ],
    outcomes: [
      {
        title: "AI 운영 모델",
        body: "조직의 목표와 위험 수준에 맞춘 활용 원칙, 역할과 책임, 승인·검토 체계를 하나의 운영 모델로 정리합니다.",
      },
      {
        title: "핵심 업무 플레이북",
        body: "효과가 큰 업무를 선정해 재사용 가능한 프롬프트, 에이전트 흐름, 품질 체크리스트와 측정 지표를 만듭니다.",
      },
      {
        title: "확산 로드맵",
        body: "파일럿의 학습을 표준, 교육, 커뮤니티, 리더십 운영으로 연결하는 90일 단위의 실행 계획을 수립합니다.",
      },
    ],
    process: [
      {
        period: "1–2주",
        title: "진단",
        body: "인터뷰와 업무 관찰로 AI 활용 수준, 반복 작업, 품질·보안 제약을 진단합니다.",
      },
      {
        period: "2주",
        title: "설계",
        body: "목표 운영 모델, 우선 적용 업무, 책임 구조와 성공 지표를 정의합니다.",
      },
      {
        period: "4–6주",
        title: "파일럿",
        body: "한 팀의 실제 제품 개발 흐름에서 새로운 방식과 도구 체계를 검증합니다.",
      },
      {
        period: "90일",
        title: "확산",
        body: "검증 결과를 표준, 교육, 커뮤니티와 리더십 운영 리듬으로 확장합니다.",
      },
    ],
  },
  {
    slug: "ax",
    number: "02",
    english: "AI TRANSFORMATION",
    title: "AX · RAG",
    shortTitle: "AX · RAG",
    summary:
      "현장 업무를 기준으로 AI·RAG 구성을 평가하고, 모델·에이전트·검색·도구를 운영 흐름으로 오케스트레이션합니다.",
    detailTitle: "현장 평가와 오케스트레이션 중심의 AX·RAG",
    detailSummary:
      "실제 업무 사례로 AI·RAG 구성을 비교하고, 현장에 맞는 운영 흐름으로 연결합니다.",
    image: "/a/generated/consulting/ax-human-orchestration-v5.webp",
    keywords: ["현장 업무", "AI·RAG 평가", "오케스트레이션"],
    proofTitle: "현장에 맞는 구성은 실제 업무 평가에서 찾습니다.",
    proofBody:
      "같은 모델과 RAG 구성도 사용자, 문서, 비용, 보안 조건에 따라 결과가 달라집니다. 실제 업무 사례로 품질·비용·응답 속도를 비교하고, 모델·검색·에이전트·사람의 검토를 필요한 수준으로 연결합니다.",
    metrics: [
      {
        value: "최대 80%",
        label: "모델 반영 리드타임 단축",
        detail: "AI 모델 표준화로 신규 모델의 서비스 반영 시간을 단축",
      },
      {
        value: "30%",
        label: "릴리즈 위험·영향 감소",
        detail: "모델별 독립 배포·업데이트 구조로 서비스 영향을 축소",
      },
      {
        value: "80%",
        label: "온보딩·실험 준비 단축",
        detail: "표준화된 AI 개발 환경으로 준비 시간을 단축",
      },
    ],
    metricsNote:
      "출처: 이정주 포트폴리오·이력서에 기재된 본인 수행 프로젝트 기록(자기보고).",
    expertise: [
      {
        title: "현장 업무 정의",
        body: "사용자, 업무 흐름, 문서와 예외 상황을 살펴 실제 평가 사례를 정리합니다.",
      },
      {
        title: "AI·RAG 평가",
        body: "모델·프롬프트와 문서 구성·검색·재랭킹 조합을 품질·비용·속도로 비교합니다.",
      },
      {
        title: "오케스트레이션",
        body: "작업 분해, 라우팅, 도구 호출, 실패 대응과 사람의 검토를 하나의 흐름으로 연결합니다.",
      },
      {
        title: "운영 평가",
        body: "로그와 피드백으로 품질 변화를 확인하고 구성과 평가 기준을 갱신합니다.",
      },
    ],
    situations: [
      "AI나 RAG를 도입하려 하지만 실제 업무에서 무엇을 먼저 검증할지 정하기 어려운 조직",
      "PoC는 작동하지만 현장 문서와 질문이 달라지면 답변 품질이 흔들리는 조직",
      "모델·RAG·에이전트·도구와 사람의 검토를 하나의 운영 흐름으로 연결하려는 조직",
    ],
    outcomes: [
      {
        title: "현장 시나리오와 평가셋",
        body: "실제 질문, 문서, 예외 사례와 품질·비용·속도 지표를 묶어 비교 기준을 만듭니다.",
      },
      {
        title: "AI·RAG 구성",
        body: "모델, 프롬프트, 검색·재랭킹과 도구 조합을 평가해 목적에 맞는 구성을 정합니다.",
      },
      {
        title: "오케스트레이션과 운영 평가",
        body: "라우팅, 예외 처리, 사람의 검토와 모니터링을 연결하고 운영 중 품질 변화를 확인합니다.",
      },
    ],
    process: [
      {
        period: "1주",
        title: "현장 분석",
        body: "사용자와 업무 흐름, 문서, 제약 조건을 살펴 적용 범위와 평가 사례를 정합니다.",
      },
      {
        period: "2–4주",
        title: "구성 평가",
        body: "모델·프롬프트·RAG·도구 조합을 실제 사례로 비교합니다.",
      },
      {
        period: "2–4주",
        title: "오케스트레이션",
        body: "라우팅, 예외 처리와 사람의 검토를 운영 가능한 서비스 흐름으로 연결합니다.",
      },
      {
        period: "지속",
        title: "운영 평가",
        body: "로그와 사용자 피드백을 바탕으로 품질, 비용과 구성을 조정합니다.",
      },
    ],
  },
  {
    slug: "platform-engineering",
    number: "03",
    english: "PLATFORM ENGINEERING",
    title: "플랫폼 엔지니어링",
    shortTitle: "플랫폼 엔지니어링",
    summary:
      "개발자가 인프라의 복잡성보다 제품 가치에 집중할 수 있도록 공통 플랫폼과 운영 기반을 만듭니다.",
    detailTitle: "플랫폼 엔지니어링과 개발자 플랫폼",
    detailSummary:
      "인프라 복잡성을 줄이고 제품 팀이 안전하게 빠르게 전달할 기반을 만듭니다.",
    image: "/a/generated/consulting/platform-beaver-dam-v4.webp",
    keywords: ["개발자 플랫폼", "CI/CD", "운영 자동화"],
    proofTitle: "플랫폼을 기술 프로젝트가 아닌 내부 제품으로 만듭니다.",
    proofBody:
      "DBaaS, KaaS, 클라우드 포털, AI 플랫폼을 설계하고 운영한 경험을 바탕으로 개발자 경험과 운영 안정성을 함께 봅니다. 인프라를 더 만드는 것이 아니라 제품 팀의 인지 부하와 전달 시간을 줄이는 플랫폼을 설계합니다.",
    metrics: [
      {
        value: "약 200개",
        label: "Kubernetes 클러스터",
        detail: "NCSOFT KaaS의 설계·개발·운영 경험",
      },
      {
        value: "1,000+",
        label: "클러스터 노드",
        detail: "AWS·GCP·OpenStack·베어메탈 환경 지원",
      },
      {
        value: "15+",
        label: "클라우드 서비스",
        detail: "마이크로프론트엔드 기반 사내 포털로 통합",
      },
    ],
    metricsNote:
      "출처: 이정주 포트폴리오·이력서에 기재된 본인 수행 프로젝트 기록(자기보고).",
    expertise: [
      {
        title: "Platform as a Product",
        body: "개발자를 고객으로 정의하고 여정, 페인포인트, 사용 지표를 기반으로 플랫폼 비전과 제품 백로그를 수립합니다.",
      },
      {
        title: "Reference Architecture",
        body: "조직의 기술·보안·비용 제약에 맞춰 포털, 서비스 카탈로그, IDP, 관찰 가능성의 경계와 통합 구조를 설계합니다.",
      },
      {
        title: "Golden Path & Automation",
        body: "프로젝트 생성부터 빌드, 테스트, 배포, 관찰까지 안전한 기본 경로와 셀프서비스 자동화를 구현합니다.",
      },
      {
        title: "SRE & Governance",
        body: "SLO, 오류 예산, 정책 자동화, 비용 가시성, 플랫폼 팀의 지원 모델로 속도와 안정성을 함께 운영합니다.",
      },
    ],
    situations: [
      "팀마다 개발·배포·관찰 방식이 달라 중복 작업과 운영 부담이 계속 커지는 조직",
      "클라우드와 보안, 인프라의 복잡성이 개발자의 인지 부하와 제품 전달 시간을 늘리는 조직",
      "개발자 자율성은 유지하면서 표준화, 비용 효율, 운영 안정성을 함께 높이려는 조직",
    ],
    outcomes: [
      {
        title: "플랫폼 제품 전략",
        body: "개발자 여정, 마찰 비용, 조직 목표를 연결해 플랫폼의 고객, 가치 제안, 경계, 우선순위와 성공 지표를 정의합니다.",
      },
      {
        title: "참조 아키텍처와 골든 패스",
        body: "포털과 카탈로그, CI/CD, IaC, 관찰 가능성을 연결하고 실제 팀이 사용할 셀프서비스 경로를 구축합니다.",
      },
      {
        title: "운영·거버넌스 모델",
        body: "플랫폼 팀의 책임, 제품 팀의 자율성, SLO, 정책 자동화, 지원과 비용 모델을 지속 가능한 운영 구조로 설계합니다.",
      },
    ],
    process: [
      {
        period: "2–3주",
        title: "진단",
        body: "개발자 인터뷰와 전달 흐름 분석으로 대기 시간, 반복 작업, 장애·보안 병목을 측정합니다.",
      },
      {
        period: "1–2주",
        title: "우선순위",
        body: "개발자 가치, 운영 효과, 구현 비용을 기준으로 플랫폼의 첫 제품 영역을 선정합니다.",
      },
      {
        period: "6–12주",
        title: "구축",
        body: "실제 제품 팀과 포털, 템플릿, 파이프라인, 관찰 가능성을 갖춘 골든 패스를 구현합니다.",
      },
      {
        period: "지속",
        title: "제품화",
        body: "사용률, 리드타임, 배포·복구 지표와 피드백을 바탕으로 플랫폼 백로그를 운영합니다.",
      },
    ],
  },
];

export function consultingServiceBySlug(
  services: ConsultingService[],
  slug: ConsultingSlug,
) {
  const service = services.find((candidate) => candidate.slug === slug);
  if (!service) throw new Error(`Missing consulting content for: ${slug}`);
  return service;
}
