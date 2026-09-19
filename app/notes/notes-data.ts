import type { SitePageId } from "../site-spec";
export type NoteContent = {
  title: string;
  summary: string;
  sections: { title: string; paragraphs: string[] }[];
};
export type Note = {
  page: SitePageId;
  category: string;
  date: string;
  image: string;
  imageAlt: { ko: string; en: string };
  ko: NoteContent;
  en: NoteContent;
};
export const notes: Note[] = [
  {
    page: "noteWorkflows",
    category: "AI NATIVE",
    date: "2026-06-06",
    image: "/a/generated/consulting/ai-native-honeybees-v3.webp",
    imageAlt: {
      ko: "벌집 위에서 함께 일하는 꿀벌들",
      en: "Honeybees working together on a honeycomb",
    },
    ko: {
      title: "AI Native는 일하는 방식에서 시작된다",
      summary:
        "도구를 고르기 전에 정해야 할 것들. 사람과 AI의 역할, 검토 책임, 그리고 작게 시작할 업무에 대한 메모.",
      sections: [
        {
          title: "먼저 하나의 업무를 고른다",
          paragraphs: [
            "AI를 어디에 쓸지 이야기하면 도구 목록부터 길어지기 쉽습니다. 하지만 시작점은 팀이 반복해서 수행하고, 결과를 확인할 수 있는 업무 하나면 충분합니다. 회의 후 실행 항목 정리, 문서 초안 작성, 코드 변경 검토처럼 입력과 결과가 분명한 일을 골라봅니다.",
            "현재 이 업무에 얼마나 시간이 들고 어디에서 다시 작업하는지 적어둡니다. 이 기록이 있어야 도입 이후의 변화를 판단할 수 있습니다. 단순히 생성 속도가 빨라졌는지보다 최종 결과를 전달하기까지의 흐름을 살펴보는 편이 좋습니다.",
          ],
        },
        {
          title: "생성과 판단의 책임을 나눈다",
          paragraphs: [
            "AI가 초안을 만든다고 해서 결과의 책임까지 넘길 수는 없습니다. 어떤 자료를 입력할 수 있는지, 무엇을 사람이 검토해야 하는지, 최종 결정을 누가 내리는지를 함께 정합니다. 특히 외부에 전달되는 결과에는 확인할 근거와 승인 기준이 필요합니다.",
            "좋은 업무 흐름에는 실패했을 때의 경로도 있습니다. 정보가 부족하면 추가 질문을 하고, 근거가 없으면 보류하며, 담당자의 판단이 필요하면 넘길 수 있어야 합니다.",
          ],
        },
        {
          title: "개인의 노하우를 팀의 자산으로",
          paragraphs: [
            "파일럿에서 잘 작동한 입력 예시와 검토 기준을 짧은 플레이북으로 남깁니다. 성공 사례뿐 아니라 수정한 결과와 실패한 상황도 기록하면 다음 사람이 같은 실수를 줄일 수 있습니다.",
            "처음부터 전사 표준을 완성할 필요는 없습니다. 한 업무를 실행하고, 결과를 검토하고, 기준을 고치는 주기를 팀이 함께 반복하는 것. 그 작은 반복이 AI Native 조직의 출발점입니다.",
          ],
        },
      ],
    },
    en: {
      title: "AI Native starts with how work gets done",
      summary:
        "Before choosing tools, define the work, human and AI responsibilities, and what a useful first experiment looks like.",
      sections: [
        {
          title: "Start with one workflow",
          paragraphs: [
            "A conversation about AI can quickly turn into a list of tools. A more useful starting point is one recurring task with a clear input and an observable result: extracting actions from a meeting, drafting a document, or reviewing a code change.",
            "Record the time spent and where rework happens today. That baseline helps you judge the change later. Look at the whole path to an accepted result, rather than generation speed alone.",
          ],
        },
        {
          title: "Separate generation from judgment",
          paragraphs: [
            "An AI-generated draft still needs an owner. Agree on what data can be supplied, what a person must review, and who makes the final decision. Work that leaves the team needs evidence and approval criteria.",
            "Design the failure path too. Missing information should trigger a question. Missing evidence should lead to a pause. Decisions requiring judgment should reach the right person.",
          ],
        },
        {
          title: "Make learning reusable",
          paragraphs: [
            "Capture useful inputs and review criteria in a short playbook. Include corrected outputs and failed attempts as well as successful examples so the next person can avoid repeating the same mistakes.",
            "You do not need an organization-wide standard on day one. Start with a team that can repeatedly do the work, review the result, and improve the criteria. That shared loop is a practical beginning for an AI Native organization.",
          ],
        },
      ],
    },
  },
  {
    page: "noteEvaluation",
    category: "AI & RAG",
    date: "2026-06-07",
    image: "/a/generated/consulting/ax-human-orchestration-v5.webp",
    imageAlt: {
      ko: "숲속에서 하나의 흐름으로 협연하는 사람과 로봇",
      en: "People and robots performing together in a forest",
    },
    ko: {
      title: "PoC 다음에 필요한 것은 평가 기준이다",
      summary:
        "그럴듯한 답변을 넘어 실제 업무에서 쓸 수 있는지 확인하기 위한 질문, 문서, 예외 사례의 구성.",
      sections: [
        {
          title: "시연 질문에서 현장 질문으로",
          paragraphs: [
            "잘 준비된 질문 몇 개에 답하는 것과 실제 사용자의 업무를 돕는 것은 다릅니다. 사용자는 문서에 없는 것을 묻고, 조건을 빠뜨리고, 한 번에 여러 요청을 합니다. 평가셋에도 이런 상황이 들어가야 합니다.",
            "자주 묻는 질문, 검색이 어려운 문서, 권한 때문에 답할 수 없는 요청을 나눠 수집합니다. 질문마다 기대하는 동작과 확인할 근거를 적으면 단순한 정답 비교보다 업무에 가까운 평가가 됩니다.",
          ],
        },
        {
          title: "답변과 행동을 따로 본다",
          paragraphs: [
            "문장을 자연스럽게 만드는 능력과 올바른 도구를 선택하는 능력은 별개입니다. 검색한 문서가 맞는지, 근거가 답변을 뒷받침하는지, 실행 전에 확인이 필요한지를 나눠 봅니다.",
            "안전하게 거절한 응답은 필요한 동작일 수 있지만 업무를 완료한 응답과 같지는 않습니다. 완료율, 적절한 보류·거절, 근거 충실도를 구분해 기록하면 개선할 지점이 더 선명해집니다.",
          ],
        },
        {
          title: "비교할 때 기준을 고정한다",
          paragraphs: [
            "모델이나 검색 구성을 바꿀 때 질문과 채점 기준도 함께 바꾸면 무엇이 좋아졌는지 알기 어렵습니다. 동일한 평가셋으로 품질과 비용, 응답 시간을 비교하고 예외 사례를 별도로 확인합니다.",
            "운영에서 발견한 질문은 다음 평가셋에 추가하되 이전 버전을 남깁니다. 평가는 한 번의 합격 판정이 아니라 변경이 기존 동작을 깨뜨리지 않는지 확인하는 반복 과정입니다.",
          ],
        },
      ],
    },
    en: {
      title: "After the PoC, define how to evaluate",
      summary:
        "Move beyond plausible answers with questions, documents, and edge cases that reflect the work people actually need to do.",
      sections: [
        {
          title: "From demo questions to real work",
          paragraphs: [
            "Answering a few prepared questions is different from helping real users. People ask about missing information, leave out constraints, and combine requests. An evaluation set should reflect those situations.",
            "Collect common questions, hard-to-find documents, and requests restricted by permissions. Write down the expected behavior and supporting evidence for each case. That makes evaluation more useful than matching answer text alone.",
          ],
        },
        {
          title: "Evaluate answers and actions separately",
          paragraphs: [
            "Writing fluent text and choosing the correct tool are different capabilities. Check whether retrieval found the right material, whether evidence supports the answer, and whether execution needs confirmation.",
            "A safe refusal can be the right behavior without completing the task. Record task completion, appropriate deferral or refusal, and evidence quality separately to make the remaining gaps visible.",
          ],
        },
        {
          title: "Keep comparisons stable",
          paragraphs: [
            "Changing the questions and scoring rules while changing the model makes improvement difficult to interpret. Compare quality, cost, and latency on the same set, and inspect edge cases separately.",
            "Add questions discovered in production to the next evaluation set while retaining earlier versions. Evaluation is a recurring check that changes preserve useful behavior, rather than a one-time approval.",
          ],
        },
      ],
    },
  },
  {
    page: "notePlatform",
    category: "PLATFORM & OPERATIONS",
    date: "2026-06-13",
    image: "/a/generated/consulting/platform-beaver-dam-v4.webp",
    imageAlt: {
      ko: "비버가 만든 댐과 안정적으로 흐르는 물",
      en: "A beaver dam shaping a steady flow of water",
    },
    ko: {
      title: "플랫폼은 팀이 반복해서 걷는 길이다",
      summary:
        "더 많은 인프라보다 중요한 것. 개발부터 배포와 복구까지, 팀이 안전하게 반복할 수 있는 기본 경로.",
      sections: [
        {
          title: "기술 목록보다 개발자의 여정",
          paragraphs: [
            "플랫폼을 논의할 때 포털, 클러스터, 파이프라인 같은 구성 요소부터 떠올리기 쉽습니다. 하지만 먼저 살펴볼 것은 개발자가 첫 변경을 배포하기까지 어떤 과정을 거치는가입니다.",
            "계정과 권한을 기다리는 시간, 매번 복사하는 설정, 배포할 때마다 물어보는 절차를 적어봅니다. 반복되는 마찰을 줄이는 것이 플랫폼의 첫 번째 제품 요구사항이 될 수 있습니다.",
          ],
        },
        {
          title: "안전한 기본 경로를 작게 만든다",
          paragraphs: [
            "모든 팀의 예외를 한 번에 지원하려고 하면 출발이 늦어집니다. 한 가지 서비스 유형을 골라 프로젝트 생성, 테스트, 배포, 로그 확인까지 이어지는 경로를 먼저 만듭니다.",
            "기본 경로에는 복구 방법과 책임도 포함되어야 합니다. 배포가 실패했을 때 이전 상태로 돌아갈 수 있는지, 경보를 누가 확인하는지가 실행 절차와 함께 보여야 합니다.",
          ],
        },
        {
          title: "사용과 피드백으로 개선한다",
          paragraphs: [
            "만들어진 기능 수만으로 플랫폼의 가치를 설명하기는 어렵습니다. 팀이 실제로 쓰는지, 대기 시간이 줄었는지, 배포와 복구가 쉬워졌는지를 확인합니다.",
            "우회하는 팀이 있다면 표준을 강제하기 전에 이유를 듣습니다. 제품 팀의 문제를 해결하는 경로가 될 때 플랫폼은 지속해서 쓰이고, AI 기반 업무도 그 위에서 더 안정적으로 운영할 수 있습니다.",
          ],
        },
      ],
    },
    en: {
      title: "A platform is a path teams can repeat",
      summary:
        "Beyond infrastructure: a dependable default path from development to deployment and recovery.",
      sections: [
        {
          title: "Begin with the developer journey",
          paragraphs: [
            "Portals, clusters, and pipelines are easy starting points for a platform discussion. A better first question is what a developer must do to get the first change into production.",
            "List the waits for access, copied configuration, and deployment steps that require asking someone. Removing recurring friction can become the platform’s first product requirement.",
          ],
        },
        {
          title: "Build a small, safe default path",
          paragraphs: [
            "Supporting every team’s exceptions at once can delay the start. Choose one service type and connect project creation, tests, deployment, and log inspection into a usable path.",
            "Include recovery and ownership. Teams need to know how to return to a previous state after a failed deployment and who responds to an alert, alongside the delivery steps.",
          ],
        },
        {
          title: "Improve through use and feedback",
          paragraphs: [
            "Feature count alone does not explain platform value. Check whether teams use the path, whether waiting time falls, and whether deployment and recovery become easier.",
            "When teams work around the platform, listen before enforcing a standard. A path that solves product teams’ problems earns continued use and provides a more dependable foundation for AI-enabled work.",
          ],
        },
      ],
    },
  },
];

export const notesNewestFirst = [...notes].sort((a, b) =>
  b.date.localeCompare(a.date),
);
