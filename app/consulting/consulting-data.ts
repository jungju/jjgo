export type ConsultingService = {
  slug: "ai-native";
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

export const aiNativeConsulting: ConsultingService = {
  slug: "ai-native",
  number: "01",
  english: "AI NATIVE CONSULTING",
  title: "AI Native",
  shortTitle: "AI Native",
  summary:
    "조직의 일하는 방식부터 AI·RAG 서비스와 플랫폼 운영까지, AI가 실제 성과로 이어지는 구조를 만듭니다.",
  detailTitle: "AI Native 컨설팅",
  detailSummary:
    "사람과 AI가 함께 일하는 방식을 설계하고, 실제 업무로 검증한 AI 서비스를 안정적으로 운영합니다. 조직·제품·플랫폼을 하나의 실행 흐름으로 연결합니다.",
  image: "/a/generated/consulting/ai-native-honeybees-v3.webp",
  keywords: ["조직과 업무", "AI · RAG · 에이전트", "플랫폼과 운영"],
  proofTitle: "조직의 변화가 제품과 운영으로 이어지도록.",
  proofBody:
    "AI Native는 도구 도입만으로 완성되지 않습니다. 역할과 검토 책임을 정하고, 현장 업무로 AI 품질을 검증하며, 배포와 운영을 반복할 기반이 함께 필요합니다. 제품 개발과 AI 제품화, 클라우드 플랫폼 운영 경험을 연결해 팀이 지속해서 실행할 수 있는 구조를 만듭니다.",
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
    {
      value: "최대 80%",
      label: "모델 반영 리드타임 단축",
      detail: "AI 모델 표준화로 신규 모델의 서비스 반영 시간을 단축",
    },
  ],
  metricsNote:
    "출처: 이정주 포트폴리오·이력서에 기재된 본인 수행 프로젝트 기록(자기보고).",
  expertise: [
    {
      title: "조직과 업무 설계",
      body: "사람과 AI의 역할, 의사결정과 검토 책임을 정의합니다. 기획·개발·리뷰·테스트·지식 공유에 재사용 가능한 AI 업무 흐름을 정착시킵니다.",
    },
    {
      title: "현장 업무와 평가 기준",
      body: "실제 질문, 문서, 예외 상황으로 평가셋을 구성합니다. 품질·비용·응답 속도와 보안 제약을 기준으로 우선 적용할 업무를 고릅니다.",
    },
    {
      title: "AI·RAG와 에이전트 구현",
      body: "모델·프롬프트·검색·재랭킹을 비교하고, 작업 분해·라우팅·도구 호출·실패 대응·사람의 검토를 하나의 서비스 흐름으로 연결합니다.",
    },
    {
      title: "개발자 플랫폼과 자동화",
      body: "개발자 여정을 기준으로 공통 개발 환경과 셀프서비스 경로를 만듭니다. CI/CD, IaC, 서비스 카탈로그와 필요한 Kubernetes 기반을 연결합니다.",
    },
    {
      title: "품질과 운영 거버넌스",
      body: "데이터 접근 권한, 평가 로그, 모니터링과 SLO를 설계합니다. 품질 회귀, 장애 대응, 배포·복구와 비용을 지속해서 관리합니다.",
    },
    {
      title: "조직 확산과 역량 강화",
      body: "파일럿에서 검증한 방식을 플레이북과 교육·코칭으로 공유합니다. 사용률, 업무 성과와 전달 시간을 측정하며 팀의 운영 방식을 개선합니다.",
    },
  ],
  situations: [
    "AI 활용이 개인의 노하우에 머물러 팀 전체의 일하는 방식으로 정착시키고 싶을 때",
    "AI·RAG PoC를 실제 업무에서 신뢰할 수 있는 서비스로 발전시키고 싶을 때",
    "팀마다 다른 개발·배포 방식과 운영 부담을 줄이며 AI 활용을 확장하고 싶을 때",
  ],
  outcomes: [
    {
      title: "AI Native 운영 모델",
      body: "활용 원칙, 역할과 책임, 데이터 경계, 승인·검토 기준과 우선순위를 정리한 실행 로드맵.",
    },
    {
      title: "검증된 업무 흐름과 평가셋",
      body: "실제 업무 시나리오, 품질·비용·속도 기준, AI·RAG·에이전트 구성과 재사용 가능한 업무 플레이북.",
    },
    {
      title: "반복 가능한 개발·운영 기반",
      body: "참조 아키텍처, 개발·배포 자동화, 관찰 가능성, 장애 대응과 비용 관리 기준을 갖춘 운영 경로.",
    },
  ],
  process: [
    {
      period: "현황과 목표",
      title: "진단과 우선순위",
      body: "조직의 업무, 데이터, 개발·운영 흐름을 살펴봅니다. 효과가 큰 한 가지 업무와 품질·비용·속도 기준을 함께 정합니다.",
    },
    {
      period: "역할과 구조",
      title: "통합 설계",
      body: "사람과 AI의 책임, AI·RAG 구성, 플랫폼 경계와 평가 방식을 설계합니다. 현재 단계에 필요한 범위를 정합니다.",
    },
    {
      period: "실제 업무 검증",
      title: "파일럿과 구현",
      body: "한 팀의 실제 업무에서 AI 흐름을 구현하고 평가합니다. 검토·예외 처리와 개발·배포 자동화를 연결합니다.",
    },
    {
      period: "지속적인 개선",
      title: "운영과 확산",
      body: "품질·사용률·비용과 피드백을 확인합니다. 검증된 방식을 표준과 교육으로 확산하고 운영 기준을 갱신합니다.",
    },
  ],
};
