export const homeCopy = {
  ko: {
    heroIntro: "이정주 · 기업 AX 컨설팅",
    heroTitle: "기업의 AI 전환,\n한 가지 실제 업무부터 검증합니다.",
    heroBody:
      "사내 문서 검색이나 견적 검토처럼 반복되는 업무를 골라 RAG PoC를 구축합니다. 검색 결과와 AI 답변 품질을 평가해 다음 개발에 필요한 근거를 만듭니다.",
    contactAction: "AX 상담 문의",
    heroAction: "제공 산출물 보기",
    capabilityTitle: "AX 프로젝트에서 함께 만드는 것",
    capabilityBody:
      "업무와 데이터에 맞춰 검증 범위를 정합니다. PoC 결과를 바탕으로 다음 단계의 개발·운영 요건을 정리합니다.",
    capabilities: [
      {
        title: "업무 시나리오와 평가셋",
        body: "현업 질문과 문서, 예외 사례를 모아 무엇을 검증할지 정합니다. 검색 결과, 답변의 근거, 응답 시간과 비용을 평가할 기준을 만듭니다.",
      },
      {
        title: "RAG PoC와 평가 리포트",
        body: "사내 자료를 검색하고 근거를 제시하는 시제품을 만듭니다. 실제 질문으로 검색과 답변을 평가하고, 실패 사례와 개선 우선순위를 정리합니다.",
      },
      {
        title: "운영 전환 계획",
        body: "접근 권한, 사람의 검토가 필요한 경우, 배포 후 품질 모니터링 방법을 정리합니다. 운영에 들어가기 전에 해결할 항목을 확인합니다.",
      },
    ],
    consultingTitle: "검증하고 싶은 업무가 있나요?",
    consultingBody:
      "어떤 일을 줄이고 싶은지, 지금 쓰는 문서나 시스템은 무엇인지 알려주세요.",
    consultingAction: "컨설팅 진행 방식 보기",
    consultingSubject: "JJGo AX 상담 문의",
  },
  en: {
    heroIntro: "Jungju Lee · Enterprise AI Consulting",
    heroTitle: "Start your AI transformation\nwith one real workflow.",
    heroBody:
      "I build RAG proofs of concept for recurring work such as searching internal documents or reviewing quotes. I evaluate retrieval and answer quality so you can decide what to build next.",
    contactAction: "Discuss an AI project",
    heroAction: "See what you’ll get",
    capabilityTitle: "What we build together",
    capabilityBody:
      "We choose what to test based on your workflow and data, then use the results to define what development and operations need next.",
    capabilities: [
      {
        title: "Workflow and evaluation set",
        body: "We gather real questions, documents, and edge cases, then define how to assess retrieval, evidence behind answers, response time, and cost.",
      },
      {
        title: "RAG proof of concept and report",
        body: "I build a prototype that retrieves internal information and cites its sources. We test it against real questions, document failures, and decide what to improve first.",
      },
      {
        title: "Plan for production",
        body: "We define access controls, when human review is needed, and how to monitor quality after deployment. You get a list of issues to resolve before rollout.",
      },
    ],
    consultingTitle: "Have a workflow to test?",
    consultingBody:
      "Tell me what work you want to reduce and which documents or systems you use today.",
    consultingAction: "See how consulting works",
    consultingSubject: "JJGo enterprise AI inquiry",
  },
} as const;
