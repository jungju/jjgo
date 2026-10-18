import type { Note } from "./notes-data";

export const mathSupportNote: Note = {
  page: "noteMathSupport",
  category: "SOFTWARE & PEOPLE",
  date: "2026-10-19",
  sample: false,
  image: "/a/generated/notes/even-a-mathematics-company-needs-support.webp",
  imageAlt: {
    ko: "문서 폴더가 쌓인 초록색 창구와 황동 종, 앞에 펼쳐진 빈 폴더",
    en: "A green service counter with document folders and a brass bell, with an open folder in front",
  },
  ko: {
    title: "수학 회사에도 고객지원팀이 있다",
    summary:
      "다익스트라의 가상 회사에서 수학자들이 고객지원으로 옮겨간다는 대목을 읽고, 결과물을 만든 다음의 일을 생각했다.",
    sources: [
      {
        label: "E. W. Dijkstra — EWD 427 (1974)",
        href: "https://www.cs.utexas.edu/~EWD/transcriptions/EWD04xx/EWD427.html",
      },
      {
        label: "E. W. Dijkstra — EWD 539 (1975)",
        href: "https://www.cs.utexas.edu/~EWD/transcriptions/EWD05xx/EWD539.html",
      },
    ],
    sections: [
      {
        title: "증명도 출시하고 고친다",
        paragraphs: [
          "다익스트라가 지어낸 회사에서는 증명도 출시한다. 첫 버전에는 오류가 남아 있고, 고객이 문제를 보내오면 다음 버전에서 고친다. 수학 회사의 이야기인데 익숙한 제품 출시 풍경처럼 읽힌다.",
          "1974년의 가상 연설에 나오는 회사 이름은 Mathematics Inc.다. 실제 기업의 역사가 아니라 다익스트라가 꾸민 풍자다.",
          "이 회사의 1975년 편지에는 더 눈에 띄는 대목이 있다. 쏟아지는 문제 보고를 처리하려고 수학자 쉰 명을 생산 부서에서 현장 지원으로 옮긴다. 잘 만들어내던 사람들이, 이미 내보낸 것을 돌보는 쪽으로 간다.",
          "그 장면이 오래 남는다. 새로운 결과를 만드는 일은 앞에서 잘 보인다. 누군가 그 결과를 쓰다가 질문했을 때 답하는 일은 조금 뒤에 있다.",
          "AI로 만든 결과물을 넘길 때도 그 뒤쪽 자리를 미리 생각해 봐야겠다는 마음이 들었다.",
        ],
      },
      {
        title: "만들어진 뒤에 오는 질문",
        paragraphs: [
          "가령 AI가 사내 분석 보고서를 작성했다고 해보자. 문장은 읽을 만하고 표도 채워졌다. 파일을 전달했다. 그런데 읽던 동료가 한 칸을 가리키며 묻는다. 이 수치는 어느 기간을 기준으로 잡았느냐고.",
          "그 질문이 왔다고 보고서 전체가 틀렸다는 뜻은 아니다. 자료가 어떻게 만들어졌는지 설명이 더 필요할 수 있다. 실제로 잘못 집계했다면 수정도 해야 한다.",
          "이것은 가상의 상황이다. 여기서 상상해 보고 싶은 것은 보고서를 생성하는 화면보다, 그 질문을 받은 사람이 여는 화면이다.",
          "그 사람에게는 무엇이 남아 있을까. 보고서 파일만 있을까. 사용한 원본과 계산 방식으로 돌아갈 수 있을까. 어느 부분을 고치면 되는지 찾아볼 수 있을까.",
          "보고서를 다시 생성하는 버튼은 있어도, 무엇 때문에 다시 만들어야 하는지 알 수 없으면 일이 길어진다. 질문 하나를 받으려고 보고서 전체를 처음부터 읽어야 할 수도 있다.",
          "처음 파일이 나온 시간만 재면 그 뒤의 작업은 잘 보이지 않겠다. 다익스트라의 회사에서 생산하던 사람을 지원으로 옮긴 장면이 다시 떠오른다.",
        ],
      },
      {
        title: "지원은 남는 일인가",
        paragraphs: [
          "이 가상의 보고서 작업을 맡긴다면, 전달할 결과물 옆에 질문을 받을 자리를 남기고 싶다. 담당자가 누구인지 알 수 있고, 그 사람이 원본으로 돌아갈 수 있도록.",
          "질문을 받은 쪽도 새 답을 그럴듯하게 만드는 것부터 시작하지 않았으면 한다. 먼저 전달한 보고서의 어느 칸을 이야기하는지 맞춰보는 편이 좋겠다. 서로 다른 파일을 열어놓고 설명하면 대화가 이상하게 길어진다.",
          "오류를 확인해 고쳤다면, 바뀐 내용을 알려줄 일도 생긴다. 새 파일을 만들었다고 예전 사본이 저절로 바뀌지는 않는다. 누군가는 어느 자료를 계속 써야 하는지 알아야 한다.",
          "이런 일을 전부 나중에 남는 시간에 맡기면, 결과물을 빨리 만드는 쪽만 계속 바빠질 것 같다. 빨리 만든 자료를 편하게 쓸 수 있게 하는 일에도 자리가 필요하다.",
        ],
      },
      {
        title: "창구 앞의 빈 의자",
        paragraphs: [
          "수학 회사의 풍자를 AI가 수학을 완전히 자동화했다는 예언으로 읽고 싶지는 않다. 이 글이 내게 남긴 것은 조직이 결과물을 팔고, 돌보고, 다시 만드는 모습을 수학으로 옮겨놓은 이상한 익숙함이다.",
          "새로운 결과를 더 만들 수 있게 됐을 때, 다음 질문을 감당할 사람도 함께 준비됐는지 묻게 된다. 여기서 생산과 지원에 얼마씩 배정해야 하는지까지 답할 수는 없다. 실제 질문과 수정 작업을 봐야 할 것이다.",
          "가상의 보고서로 돌아가면, 파일을 보낼 때 붙일 문장이 하나 더 떠오른다. 내용에 질문이 생기면 어디로 돌아오면 되는지.",
          "책상 위의 결과물 더미가 보기 좋게 쌓여 있다. 그 옆 창구의 종이 울리면 누가 일어날지도 정해두고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "Even a mathematics company needs support",
    summary:
      "A passage about mathematicians moving into field support made me think about the work that follows producing an artifact.",
    sources: [
      {
        label: "E. W. Dijkstra — EWD 427 (1974)",
        href: "https://www.cs.utexas.edu/~EWD/transcriptions/EWD04xx/EWD427.html",
      },
      {
        label: "E. W. Dijkstra — EWD 539 (1975)",
        href: "https://www.cs.utexas.edu/~EWD/transcriptions/EWD05xx/EWD539.html",
      },
    ],
    sections: [
      {
        title: "Proofs get releases and repairs",
        paragraphs: [
          "In Dijkstra’s invented company, proofs have releases. The first version contains bugs, and customers’ trouble reports lead to later corrections. For a story about mathematics, the product launch feels familiar.",
          "The company in his fictional 1974 anniversary speech is called Mathematics Inc. This is satire, not the history of a real business.",
          "A 1975 letter adds a detail that caught my attention: fifty mathematicians move from Production to Field Support to handle incoming trouble reports. People who produced new work are reassigned to care for what has already gone out.",
          "That scene stays with me. Producing a result is visible at the front. Answering someone who encounters a question while using it sits a little further back.",
          "It made me want to think about that later position before handing over AI-generated work.",
        ],
      },
      {
        title: "The question after the file",
        paragraphs: [
          "Suppose AI prepares an internal analysis report. The prose is readable and the tables are filled. The file is handed over. A colleague points to one cell and asks which period its figure covers.",
          "The question does not establish that the whole report is wrong. The work may need explanation. If the aggregation is incorrect, it also needs repair.",
          "This is hypothetical. I am interested less in the generation screen than in the screen opened by whoever receives the question.",
          "What do they have? Just the report file? Can they return to the source and calculation? Can they locate the part that needs attention?",
          "A regenerate button does little to shorten the investigation if nobody knows why regeneration is needed. One question could require reading the entire report from the beginning.",
          "Timing only the arrival of the first file would miss that later work. I return to Dijkstra’s mathematicians being moved from production into support.",
        ],
      },
      {
        title: "Is support whatever is left over?",
        paragraphs: [
          "If I delegated this hypothetical report, I would leave somewhere for its questions to go, with a named owner who can return to the underlying material.",
          "I would also want the responder to establish which cell in the delivered report is being discussed before producing another plausible answer. Conversations become strangely long when people have different files open.",
          "After confirming and correcting an error, there is another job: explaining what changed. A newly generated file does not update earlier copies by itself. Someone needs to know which material to keep using.",
          "If all of that waits for spare time, the work of producing results quickly could remain perpetually busy. Helping people use those results deserves a place too.",
        ],
      },
      {
        title: "The empty chair at the counter",
        paragraphs: [
          "I do not want to treat the satire as a prediction that AI has fully automated mathematics. What stays with me is the odd familiarity of an organization selling results, maintaining them, and producing replacements, transposed into mathematics.",
          "When creating more results becomes possible, I want to ask whether there is capacity for the questions that follow. I cannot prescribe an allocation between production and support here. That would require observing the actual questions and repairs.",
          "Back at the hypothetical report, I can imagine one more sentence to attach when sending the file: where to return with a question about its contents.",
          "The stack of finished work looks tidy. I would also like to know who gets up when the bell at the counter rings.",
        ],
      },
    ],
  },
};
