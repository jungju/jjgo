import type { Note } from "./notes-data";

export const persistentFixNote: Note = {
  page: "notePersistentFix",
  category: "AGENTS & LEARNING",
  date: "2026-10-17",
  sample: false,
  image: "/a/generated/notes/before-a-fix-becomes-a-rule.webp",
  imageAlt: {
    ko: "노트 한 페이지에 클립으로 끼운 황토색 메모와 옆에 놓인 빈 작업 카드들",
    en: "An amber note clipped onto a notebook page beside blank task cards",
  },
  ko: {
    title: "어제의 실수를 오늘의 규칙으로 남기기 전에",
    summary:
      "하네스를 스스로 고친다는 논문을 읽고, 수정안을 만드는 일보다 다음 실행에 남기는 일이 더 궁금해졌다.",
    sources: [
      {
        label: "Self-Evolving Agent Harness — arXiv v1",
        href: "https://arxiv.org/html/2610.18813v1",
      },
      {
        label: "Naresh Jain — Are Harnesses Worth the Cost?",
        href: "https://martinfowler.com/articles/are-harnesses-worth-the-cost.html",
      },
    ],
    sections: [
      {
        title: "한 줄이 다음 일에도 따라온다",
        paragraphs: [
          "실수를 줄이려고 적은 규칙이 다음 일의 방해물이 되면, 그때는 어디를 고쳐야 할까.",
          "「Self-Evolving Agent Harness」는 모델의 가중치를 그대로 둔 채 프롬프트와 기억, 작업 흐름, 실행 코드를 고치는 과정을 다룬다. 채택한 변경은 다음 실행에도 남는다. 2026년 10월 공개된 프리프린트다.",
          "여기서 눈길이 간 것은 ‘다음 실행에도’였다. 이번 답을 고치는 일은 이번 화면에서 끝날 수 있다. 공통 지침을 고치면 아직 만나지 않은 작업에도 그 한 줄이 따라간다.",
          "가령 문서 요약에서 마감일을 빠뜨렸다고 해보자. 다시 빠뜨리지 않으려고 ‘날짜는 모두 남긴다’는 규칙을 추가했다. 방금 실패한 문서를 다시 주면 마감일이 들어온다. 일단 마음이 놓인다.",
          "다음에는 오래된 기록을 짧게 정리해달라고 했다. 이번에는 지나간 날짜가 줄줄이 남는다. 앞의 실수는 고쳤는데, 뒤의 부탁을 읽기 어려워졌다.",
          "실패한 문서 한 장이 공통 지침의 편집장을 맡은 셈이다.",
        ],
      },
      {
        title: "수정안과 채택 사이",
        paragraphs: [
          "논문은 바꿀 후보를 제안하는 과정과 그 후보를 받아들이는 과정을 구분한다. 이 구분이 마음에 들었다. 그럴듯한 수정 문장이 생겼다는 이유만으로 다음 실행의 기본값이 될 필요는 없다.",
          "가상의 요약 규칙이라면 우선 무엇을 고치려 했는지 적어두고 싶다. 목적은 마감일을 빠뜨리지 않는 것이었다. 모든 과거 날짜를 보존하는 것까지 원한 것은 아니었다.",
          "그다음에는 방금 실패한 문서 말고도 읽혀볼 일이 생긴다. 예전에 괜찮게 요약하던 문서, 날짜가 많은 기록, 일정이 아예 없는 글. 규칙을 만들 때 들여다보지 않은 작업도 필요하겠다.",
          "그 결과가 모두 좋아진다고 기대할 근거는 없다. 새 규칙을 채택할지, 범위를 좁힐지, 이번 문서의 수정으로만 남길지는 그때 판단하면 된다. 고친 줄을 반드시 공통 규칙에 올려야 하는 것은 아니다.",
          "이것은 논문을 읽고 내가 떠올린 운영 방식이다. 논문의 신뢰성 분석에는 명시적인 가정이 붙어 있다. 자동으로 지침을 고치면 어느 작업에서나 나아진다고 확인한 연구로 읽고 싶지는 않다.",
        ],
      },
      {
        title: "채점표까지 같이 고치면",
        paragraphs: [
          "논문에서 또 눈에 남은 것은 최종 평가를 수정 후보가 바꿀 수 없게 둔 부분이다. 실행을 돕는 중간 검사와 마지막에 결과를 판정하는 기준의 경계를 잡아둔다.",
          "마감일을 잘 보존하도록 고친 뒤, 평가 기준도 ‘날짜가 많으면 좋다’로 바꾼다면 좋아졌다는 말이 쉬워진다. 하지만 처음의 부탁을 더 잘 수행했는지는 확인하기 어려워진다. 이 역시 가상의 예다.",
          "Naresh Jain이 공개한 별도의 코딩 에이전트 실험도 개발 중 피드백과 외부 평가를 나눴다. 개발을 돕는 안쪽 하네스는 바깥 평가의 정답표를 보지 못하게 했다. 이 실험을 내가 다시 실행한 것은 아니며, 한 서비스에서 얻은 결과를 모든 하네스의 효과로 옮길 수는 없다.",
          "수정할 쪽과 판정할 쪽을 구분하면 적어도 비교할 자리가 남는다. 새 규칙이 마음에 든다는 감상과, 같은 요구를 더 잘 지켰다는 결과를 따로 적을 수 있다.",
          "모델은 그대로여도 입력으로 붙는 지침과 도구가 달라지면 실행 조건이 달라진다. 그래서 비교 기록에는 모델 이름뿐 아니라 어느 버전의 하네스를 썼는지도 남기고 싶다. 나중에 예전 답과 달라졌을 때 돌아갈 지점이 있어야 하니까.",
        ],
      },
      {
        title: "아직 붙이지 않은 메모",
        paragraphs: [
          "이 가상의 요약기를 맡는다면, 바꾸기 전 지침과 수정안을 나란히 보관할 것 같다. 어떤 누락 때문에 제안했는지, 어느 작업에서 도움이 됐고 어디서는 거슬렸는지도 함께.",
          "그 메모가 길어진다고 매번 지침 본문에 다 넣을 필요는 없겠다. 실패를 기록하는 자리와 다음 작업에 전달할 규칙의 자리는 달라도 된다.",
          "책상 위에 ‘날짜는 모두 남긴다’고 쓴 작은 종이가 있다고 생각해 본다. 당장 지침에 붙이기 전에, 옆에 아직 읽히지 않은 문서를 한 장 놓는다.",
          "이 문서에서도 그 한 줄이 도움이 될까. 공통 규칙으로 옮기는 일은 그다음에 해도 되겠다.",
        ],
      },
    ],
  },
  en: {
    title: "Before yesterday’s fix becomes today’s rule",
    summary:
      "Reading about self-evolving harnesses made me more curious about keeping a revision than about generating one.",
    sources: [
      {
        label: "Self-Evolving Agent Harness — arXiv v1",
        href: "https://arxiv.org/html/2610.18813v1",
      },
      {
        label: "Naresh Jain — Are Harnesses Worth the Cost?",
        href: "https://martinfowler.com/articles/are-harnesses-worth-the-cost.html",
      },
    ],
    sections: [
      {
        title: "A line follows the next task",
        paragraphs: [
          "If a rule written to prevent a mistake gets in the way of the next task, where should the correction happen?",
          "Self-Evolving Agent Harness examines revisions to prompts, memory, workflows, and executable scaffolding while model weights remain fixed. Accepted changes persist into later runs. It is an October 2026 preprint.",
          "The persistence caught my attention. Fixing this answer can end on this screen. Editing shared instructions sends a line into tasks we have not encountered yet.",
          "Suppose a document summary omits a deadline. We add “preserve every date” to prevent a repeat. Give it the failed document again, and the deadline appears. That is reassuring.",
          "Next, we ask for a short summary of an old record. Dates from the past now trail through it. The earlier omission is fixed, while the later request becomes harder to read.",
          "One failed document has become the editor of the shared instructions.",
        ],
      },
      {
        title: "Between proposing and keeping",
        paragraphs: [
          "The paper separates generating a revision from admitting it. I like that distinction. Producing a plausible edit need not make it the next run’s default.",
          "For the hypothetical summary rule, I would first record what we meant to repair: preserve the deadline. Keeping every historical date was not the original aim.",
          "Then there is more to read than the document that failed. Previously satisfactory summaries, date-heavy records, and writing without schedules all offer different questions. We also need tasks that were not used to devise the rule.",
          "There is no basis for expecting every result to improve. We could adopt the revision, narrow its scope, or leave it as a correction to one document. An edited line does not have to graduate into a shared rule.",
          "This is an operating approach I am considering after reading. The paper’s reliability analysis rests on explicit assumptions. I would not read it as confirmation that automatically edited instructions improve every task.",
        ],
      },
      {
        title: "If the scorecard changes too",
        paragraphs: [
          "Another detail stayed with me: the paper keeps the final assessment outside what revision candidates may change. It draws a boundary between provisional checks and the eventual judgment of the result.",
          "After changing the rule to retain deadlines, changing the evaluator to reward more dates would make improvement easy to claim. It would make answering the original request harder to assess. This, too, is hypothetical.",
          "Naresh Jain’s separate coding-agent experiment also distinguishes feedback during development from external evaluation. Its inner harness did not receive the outer evaluator’s answer key. I have not reproduced that experiment, and results from one service cannot establish the effect of every harness.",
          "Keeping revision and judgment distinct leaves a place to compare. Liking the new rule and observing better adherence to the same requirements can go into separate records.",
          "Even with the same model, changed instructions and tools alter the conditions of a run. I would therefore record the harness version beside the model name. If a later answer differs from an earlier one, there should be somewhere to look back.",
        ],
      },
      {
        title: "A note not yet attached",
        paragraphs: [
          "If I maintained this hypothetical summarizer, I would keep the old instructions beside the proposed edit, with the omission that prompted it and the tasks where it helped or got in the way.",
          "A growing record need not all become instruction text. The place for recording failures can differ from the rules passed to the next task.",
          "I picture a small sheet on the desk saying “preserve every date.” Before attaching it to the shared instructions, I put an unread document beside it.",
          "Would that line help here too? Moving it into the common rules can wait until after that question.",
        ],
      },
    ],
  },
};
