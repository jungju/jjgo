import type { Note } from "./notes-data";

export const reviewOrderNote: Note = {
  page: "noteReviewOrder",
  category: "AI & REVIEW",
  date: "2026-10-03",
  sample: false,
  image: "/a/generated/notes/review-order-is-not-exemption.webp",
  imageAlt: {
    ko: "확대경 아래의 문서와 아직 검토하지 않은 문서 더미가 담긴 두 개의 녹색 트레이",
    en: "Two green trays hold documents under a magnifying glass and a stack still awaiting review",
  },
  ko: {
    title: "먼저 읽을 글을 고르면, 나머지는 안 읽어도 될까",
    summary:
      "Jev를 활용한 위키 실험을 읽고, 검토 순서를 정하는 점수가 검토를 생략할 근거가 되려면 무엇을 확인해야 할지 생각했다.",
    sources: [
      {
        label: "GeekNews · Jev와 LLM Wiki 검토",
        href: "https://news.hada.io/topic?go=comments&id=34483",
      },
      {
        label: "LLM Wiki Newsroom · 공개 실험과 한계",
        href: "https://alfadur7.github.io/llm-wiki-newsroom/scooping-stones/",
      },
    ],
    sections: [
      {
        title: "트레이가 두 개 생겼다",
        paragraphs: [
          "검토할 초안이 책상에 쌓여 있다고 해보자. 점수가 낮은 글을 왼쪽 트레이로 옮기면 오늘 무엇부터 읽을지는 정해진다. 오른쪽 트레이의 글이 맞다는 사실은 아직 하나도 생기지 않았다.",
          "GeekNews에서 소개한 Jev 위키 실험을 읽으며 걸린 부분이 이것이다. 검토 순서를 잘 정하는 일과 검토할 글의 수를 줄이는 일은 얼마나 가까울까.",
          "원문의 현재 작성 파이프라인 표본은 62페이지다. critical 또는 high 결함이 하나 이상인 페이지는 4개였고, Jev 순위의 AUC는 0.491, 95% 신뢰구간은 0.20–0.79였다. 오래된 글을 섞으면 다른 수치가 나오므로 두 집단을 구분해야 한다.",
          "판정은 사람의 정답표가 아니라 AI 검토자들이 만든 것이고, 비공개 위키 수치는 외부에서 확인할 수 없다. 이 작은 공개 실험을 Jev 전체의 성능 판정으로 확대할 수는 없다.",
          "그래서 여기서는 모델의 좋고 나쁨보다, 그 점수로 어떤 일을 생략하려는지를 생각해보고 싶다.",
        ],
      },
      {
        title: "틀린 글의 뜻부터",
        paragraphs: [
          "가상의 고객 안내문 검토로 옮겨보자. AI가 써둔 안내문에서 신청 마감일이 틀렸다면 독자가 기회를 놓칠 수 있다. 어색한 문장은 고치면 좋지만, 같은 종류의 손해는 아니다.",
          "‘불량 글을 찾았다’고 셀 때 두 가지를 한 바구니에 넣으면 성과가 금방 달라진다. 문장 다듬기는 많이 발견했는데 정작 틀린 날짜는 못 찾는 검토 정책일 수도 있다.",
          "이 예라면 실험 전에 마감일 오류, 지원 조건 누락처럼 반드시 찾아야 할 결함을 적겠다. 점수를 본 뒤 쉬운 오류까지 합쳐 성적을 올리지 않도록.",
          "그다음에는 이 안내문 더미에 그런 결함이 얼마나 있는지 알아야 한다. 거의 모든 글에 중요한 오류가 있다면 오른쪽 트레이도 결국 읽어야 한다. 순서를 바꾼 것은 유용할 수 있어도 검토를 크게 덜었다고 하기는 어렵다.",
          "반대로 오류가 드물다면 몇 장 읽고 아무것도 안 나왔다고 안심하기 어렵다. 실제로 없었던 건지, 고른 방식이 놓친 건지 구별할 자료가 적기 때문이다.",
        ],
      },
      {
        title: "뒤에 둔 글에서 확인할 것",
        paragraphs: [
          "이 가상의 팀에서 순위 정책을 비교한다면 같은 버전의 초안 묶음을 고정하고 시작하고 싶다. 낮은 점수부터 읽는 방법과 무작위로 읽는 방법, 기존 검토 순서에 같은 시간을 준다.",
          "읽은 장수뿐 아니라 중요한 오류를 몇 개 찾았는지, 읽는 데 얼마나 걸렸는지, 뒤에 남긴 글에는 무엇이 있었는지 기록한다. 점수 계산과 판정에 든 시간도 검토 비용에 넣는다.",
          "특히 뒤로 밀린 높은 점수의 글 일부를 독립적으로 확인해야 한다. 앞에서 오류를 많이 찾았다는 결과만으로 뒤가 깨끗하다고 말할 수는 없다. 이 예의 마감일 오류가 어느 트레이에 남았는지가 중요하다.",
          "예전 작성 규칙으로 만든 안내문과 새 규칙으로 만든 안내문도 나눠 보겠다. 점수가 옛 글을 잘 골라냈을 수는 있다. 그것이 오늘 생성하는 글에서 오류를 잘 찾는다는 뜻까지 주지는 않는다.",
          "이것은 해당 위키 실험을 직접 재현한 결과가 아니라, 그 글에서 출발해 상상한 검토 절차다. 사람의 판단도 필요하다. 모델끼리 같은 오류를 놓치면 서로 동의한 기록이 있어도 날짜는 여전히 틀릴 수 있다.",
          "점수를 붙이면 책상은 정돈된다. 오늘 할 일도 더 또렷해진다.",
          "퇴근할 때 오른쪽 트레이에 덮개를 씌우기 전에, 거기에 ‘검토 완료’라고 적을 수 있는지는 한 번 더 보게 될 것 같다.",
        ],
      },
    ],
  },
  en: {
    title: "Choosing what to read first does not clear the rest",
    summary:
      "A Jev wiki experiment raises a practical question: what evidence turns a review ranking into permission to skip a draft?",
    sources: [
      {
        label: "GeekNews · Jev and LLM Wiki review",
        href: "https://news.hada.io/topic?go=comments&id=34483",
      },
      {
        label: "LLM Wiki Newsroom · Public experiment and limits",
        href: "https://alfadur7.github.io/llm-wiki-newsroom/scooping-stones/",
      },
    ],
    sections: [
      {
        title: "Now there are two trays",
        paragraphs: [
          "Imagine a desk covered in drafts awaiting review. Move the lowest-scoring ones to the left tray and you have decided where to start today. You have not learned anything new about the accuracy of the drafts on the right.",
          "That distinction stayed with me while reading the Jev wiki experiment linked on GeekNews. How far is a useful reading order from a smaller review workload?",
          "In the source’s current-pipeline sample, 4 of 62 pages had at least one critical or high defect. Jev’s ranking had an AUC of 0.491, with a 95% confidence interval of 0.20–0.79. Including older pages changes the picture, so the cohorts matter.",
          "The labels came from AI reviewers, not human ground truth, and the private-wiki measurements are not externally verifiable. This small public experiment cannot settle Jev’s general performance.",
          "I want to follow a narrower question: what work are we proposing to omit because of the score?",
        ],
      },
      {
        title: "What counts as a bad draft?",
        paragraphs: [
          "Consider a hypothetical team reviewing customer notices. An incorrect application deadline can cost someone an opportunity. An awkward sentence deserves editing, but it does not create the same harm.",
          "Put both in a single count of ‘bad drafts found’ and a review policy can look very different. It might find plenty of clumsy prose while missing the incorrect dates.",
          "For this imagined team, I would define the defects that must be caught before running the comparison: wrong deadlines, missing eligibility conditions. Otherwise it is too easy to improve the result afterward by adding easier findings.",
          "Then we need to know how common those defects are in this particular stack. If important errors are almost everywhere, the right tray still needs review. A useful order may remain useful without removing much work.",
          "If the errors are rare, a few clean pages offer little reassurance. We need enough evidence to distinguish an empty sample from a selection method that missed the defects.",
        ],
      },
      {
        title: "Check the drafts left behind",
        paragraphs: [
          "To compare policies in this imaginary team, I would freeze one set of draft versions. Give low-score-first, random order and the existing review order the same time budget.",
          "Record important errors found, reading time and what remains in the unread drafts, alongside the number of pages reviewed. Include the time spent producing scores and labels in the cost.",
          "In particular, independently inspect a sample of high-scoring drafts left at the back. Finding plenty of errors at the front does not establish that the back is clean. Which tray still contains the wrong deadline?",
          "I would also separate notices produced under old writing rules from those made under the current rules. A score might be good at finding the old material without being useful for detecting errors in today’s drafts.",
          "This is a proposed review procedure, not my reproduction of the wiki experiment. Human judgment still has a role. Models can agree because they share a blind spot; the date can remain wrong after that agreement.",
          "Scores make the desk look organized. They can make today’s starting point clearer too.",
          "Before covering the right tray at the end of the day, I would pause over whether its label can honestly say ‘review complete.’",
        ],
      },
    ],
  },
};
