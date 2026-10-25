import type { Note } from "./notes-data";

export const highlightConditionNote: Note = {
  page: "noteHighlightCondition",
  category: "AI & READING",
  date: "2026-10-26",
  sample: false,
  relatedPages: ["noteReviewOrder"],
  image: "/a/generated/notes/the-condition-outside-the-highlight.webp",
  imageAlt: {
    ko: "노란 강조 줄과 아래 메모를 실로 연결한 원문, 강조 줄만 따로 잘라 둔 종이 조각",
    en: "A highlighted document line connected by thread to a lower note beside an excerpt slip containing only the highlighted line",
  },
  ko: {
    title: "형광펜은 ‘다만’까지 칠했을까",
    summary:
      "질문과 관련 있는 문장을 원문 그대로 가져왔다. 그 문장에 붙어 있던 예외까지 함께 왔는지는 다시 읽어 봐야 한다.",
    sources: [
      {
        label: "Cohere — Rerank 5와 Context Focus 소개",
        href: "https://cohere.com/blog/rerank-5",
      },
    ],
    sections: [
      {
        title: "앞줄에만 칠한 형광펜",
        paragraphs: [
          "짧은 운영 메모를 하나 만들어 보자. ‘로그는 일주일 뒤 삭제한다.’ 바로 다음 줄에는 이렇게 적는다. ‘다만 사고 조사가 진행 중인 로그는 담당자가 보관 해제를 확인한 뒤 삭제한다.’",
          "앞줄에만 형광펜을 칠하면, 보기 좋은 답 한 줄이 나온다.",
          "‘일주일 지난 로그를 지워도 되나요?’라는 질문 옆에 놓으면 더 그럴듯하다. 문서에 없는 말을 만든 것도 아니다. 하지만 지금 조사 중인 로그를 묻고 있다면, 그 한 줄만으로 답을 마칠 수는 없다.",
          "Cohere의 Rerank 5 소개를 읽다가 이 메모가 떠올랐다. Context Focus는 문서의 관련성 점수와 함께 관련 구절을 반환해, 문서 전체보다 좁은 범위를 다음 모델에 전달할 수 있도록 설명된 기능이다.",
          "읽어야 할 문장을 줄여 준다는 방향은 반갑다. 다만 어디서 자를지 생각하다 보니, 노란 줄 밖으로 빠질 수 있는 ‘다만’이 신경 쓰였다.",
          "위 메모는 이 글을 위해 만든 가정이다. 실제 제품이 그 예외를 잘라 냈다는 실행 결과는 아니다.",
        ],
      },
      {
        title: "맞는 문장을 골랐는데",
        paragraphs: [
          "앞줄은 삭제 시점을 말하니 질문과 관련이 있다. 뒷줄은 그 시점만으로 결정할 수 없는 경우를 말한다. 두 문장이 하는 일은 다르지만, 지금 질문에 답할 때는 같이 있어야 한다.",
          "발췌한 문장만 놓고 원문과 글자가 같은지 확인하면 앞줄은 통과하겠다. 여기서 빠진 것은 글자의 정확성보다, 그 문장을 적용하는 데 붙어 있던 조건이다.",
          "원문 그대로 옮겼으니 믿어도 된다는 느낌은 꽤 강하다. 인용 표시까지 붙으면 더 그렇다. 그래서 어떤 문장을 가져왔는지와 함께, 그 문장 옆에서 무엇을 두고 왔는지도 보고 싶다.",
          "예외가 꼭 바로 다음 줄에 있으리라는 보장도 없다. 이 가상 메모를 표로 옮긴다면 표 제목이 적용 대상을 정할 수도 있고, 각주에 보관 조건을 적어 둘 수도 있다. 화면에서 가까운 몇 글자만 더 붙이는 것으로 끝날지 먼저 확인해야겠다.",
          "그렇다고 질문할 때마다 모든 문서를 처음부터 끝까지 펼쳐 놓고 싶지는 않다. 우선 읽을 구절을 고르는 일은 여전히 필요하다. 골라 놓은 구절에서 필요한 문맥으로 돌아갈 길이 짧았으면 한다.",
          "한 문장짜리 카드 아래 ‘원문 보기’만 달아 놓고, 눌렀더니 긴 문서의 맨 위로 가는 흐름은 아쉽다. 내가 다시 찾고 싶은 것은 그 문장이 앉아 있던 자리다.",
        ],
      },
      {
        title: "‘다만’이 있던 자리로",
        paragraphs: [
          "이런 답변 화면을 만든다면, 발췌문에 문서 이름과 버전, 구절의 위치를 같이 남기겠다. 문서가 나중에 바뀌어도 어느 판에서 이 문장을 가져왔는지 따라갈 수 있게.",
          "그리고 그 자리에서 주변 문단을 펼쳐 보고 싶다. 짧은 답으로 시작하되, 답이 길어져야 할 이유가 보이면 덮어 두지 않는 화면이다.",
          "확인할 예도 두 개를 나란히 준비할 수 있겠다. 하나는 조사와 관계없는 오래된 로그이고, 다른 하나는 조사 중인 같은 나이의 로그다. 발췌된 문장만 본 답과 원문을 함께 읽은 답이 어느 조건에서 갈리는지 살펴보는 것이다.",
          "이것은 해 보고 싶은 검토 방식이다. 특정 모델의 정답률을 측정했다거나, 긴 문맥을 항상 더 많이 보내면 좋아진다는 결과를 얻은 것은 아니다. 구절을 줄일 때 놓치고 싶지 않은 질문을 남겨 둔다.",
          "처음 메모로 돌아가면, 앞줄의 형광펜은 틀린 데 칠해진 것이 아니다. 그 아래에서 조용히 문장의 범위를 좁히던 말이 아직 안 칠해졌을 뿐이다.",
          "펜 뚜껑을 닫기 전에, ‘다만’ 뒤쪽을 조금 더 읽어야겠다.",
        ],
      },
    ],
  },
  en: {
    title: "Did the highlight include the exception?",
    summary:
      "A relevant sentence can be copied exactly while a condition stays behind. An invented memo raises a question about where an excerpt should end.",
    sources: [
      {
        label: "Cohere — Rerank 5 and Context Focus",
        href: "https://cohere.com/blog/rerank-5",
      },
    ],
    sections: [
      {
        title: "Highlighting only the first line",
        paragraphs: [
          "Let us invent a short operational note: “Delete logs after seven days.” Its next sentence says, “However, retain logs involved in an ongoing incident investigation until the custodian confirms their release.”",
          "Highlight only the first line and we have a tidy one-line answer.",
          "Place it beside “Can I delete logs older than a week?” and it looks persuasive. Nothing was fabricated. But if the question concerns logs still under investigation, that line cannot finish the answer.",
          "Cohere’s Rerank 5 announcement suggested this example. It describes Context Focus returning relevant passages alongside document-level relevance scores, allowing applications to pass a narrower selection to a downstream model.",
          "I welcome help choosing what to read. Thinking about where to cut, though, leaves me wondering about the “however” outside the yellow line.",
          "The memo is invented for this article. It is not an observed case of the product dropping an exception.",
        ],
      },
      {
        title: "The selected sentence is correct",
        paragraphs: [
          "The first sentence gives a deletion time and is relevant to the question. The second identifies a case in which age alone cannot decide. They do different jobs, but this question needs both.",
          "A check that compares the excerpt’s characters with the original could accept the first sentence. What is missing is a condition on applying it.",
          "Verbatim text can feel reassuring, especially with a citation. Alongside which sentence was retrieved, I would like to see what was left beside it.",
          "The exception need not be on the next line. In a table version of this invented note, a heading could define the scope, or a footnote could carry the retention condition. I would check whether adding a few neighboring characters actually restores what matters.",
          "I would still want passages selected rather than every document unfolded for every question. I would like a short route from the chosen passage back to the context it needs.",
          "A one-sentence card with an “Open original” link is less helpful when that link lands at the top of a long document. I am looking for the place where the sentence lived.",
        ],
      },
      {
        title: "Return to the “however”",
        paragraphs: [
          "For such an answer panel, I would keep the document name, version, and passage location with the excerpt. If the document changes later, the reader should still be able to trace the cited edition.",
          "I would also want to expand nearby paragraphs in place. Begin briefly, then leave room for a reason the answer needs to grow.",
          "I could prepare two cases side by side: old logs unrelated to an investigation, and equally old logs still under investigation. Compare answers based only on the excerpt with answers informed by the original, watching where the conditions make them diverge.",
          "That is a review I would like to try. I have not measured a model’s accuracy or established that sending more context always helps. It records a question I would not want to lose while shortening passages.",
          "Back in the memo, the first line was not highlighted by mistake. The quieter words limiting its scope had simply remained unmarked.",
          "Before putting the cap back on the pen, I would read a little further past “however.”",
        ],
      },
    ],
  },
};
