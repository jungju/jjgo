import type { Note } from "./notes-data";

export const lastPageNote: Note = {
  page: "noteLastPage",
  category: "PRODUCT & DATA",
  date: "2026-10-10",
  sample: false,
  image: "/a/generated/notes/last-page-is-not-agreement.webp",
  imageAlt: {
    ko: "끝부분이 펼쳐진 책에 녹색 책갈피가 끼워져 있고, 빈 의자 앞 식탁에 메모와 설계 그림이 놓인 모습",
    en: "An open book with a green ribbon bookmark beside notes and a design sketch on a table facing empty chairs",
  },
  ko: {
    title: "마지막 페이지에 도착한 사람에게 묻고 싶은 것",
    summary:
      "PDF의 마지막 페이지까지 갔다는 기록을 보면 자료가 잘 전달된 것 같다. 설계 검토 자료를 공유하는 가상 상황에서, 그 기록 다음에 어떤 질문을 할지 생각했다.",
    sources: [
      {
        label: "PDF to Link · 문서 공유와 읽기 분석 소개",
        href: "https://pdf-to-link.com/",
      },
      {
        label: "MDN · Page Visibility API",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API",
      },
    ],
    sections: [
      {
        title: "끝에 있는 표부터",
        paragraphs: [
          "설계 검토를 앞두고 PDF를 보냈다고 해보자. 앞에는 배경 설명이 있고, 중간에는 구조 그림이 있고, 마지막에는 검토할 항목을 모아둔 표가 있다.",
          "받은 사람은 마지막 표부터 열었다. 오늘 무엇을 결정해야 하는지 먼저 본 다음, 구조 그림으로 돌아가려고 했다.",
          "공유한 쪽의 화면에는 마지막 페이지에 도달했다는 기록이 남는다. 그걸 ‘다 읽었구나’라고 받아들이면, 두 사람은 회의 전에 이미 다른 곳에 서 있게 된다.",
          "PDF to Link의 소개 페이지는 문서별 읽기 세션과 페이지 도달, 활성 시간 같은 기록을 보여준다. 마지막 페이지 도달을 읽기 완료와 구분하고 있다는 점이 눈에 들어온다.",
          "끝에 갔다는 사실이 쓸모없다는 뜻은 아니다. 다만 그 사람이 어떤 길로 거기까지 갔는지는 아직 모른다.",
        ],
      },
      {
        title: "오래 열려 있던 페이지",
        paragraphs: [
          "이번에는 가상의 수신자가 구조 그림을 오래 켜두었다고 해보자. 그 페이지에 설명이 부족해서 고민했을 수도 있다. 그림을 다른 자료와 비교하고 있었을 수도 있다.",
          "집중해서 읽고 있었다고 생각하면 기분이 좋을 것 같다. 하지만 그 해석을 기록 자체에 붙여 저장하고 싶지는 않다.",
          "문서가 열린 시간만 재면 다른 탭으로 옮긴 시간까지 들어갈 수 있다. 소개 페이지는 문서가 보이고 포커스가 있는 동안의 활성 시간을 구분해 설명한다.",
          "MDN의 Page Visibility API는 문서가 보이거나 숨겨지는 상태를 알려주는 기능이다. 탭의 상태를 아는 것과 사람이 내용을 이해했는지 아는 것은 다른 일이다.",
          "이 예에서 화면에 보인 시간은 더 구체적인 관측이 될 수 있다. 그래도 그동안 그림의 어느 화살표를 이해했고 어느 전제를 받아들였는지까지 알려주지는 않는다.",
          "페이지를 떠난 기록에도 빈틈이 있을 수 있다. PDF to Link는 일부 종료 신호를 감지하지 못할 수 있다고 설명하고, 모르는 종료 위치를 따로 보여준다.",
          "그 빈칸을 첫 페이지에서 나간 사람이나 끝까지 읽은 사람 중 어느 쪽으로 넣을지 임의로 정하면, 원래 없던 정보를 만들어내게 된다.",
        ],
      },
      {
        title: "다음 회의의 질문",
        paragraphs: [
          "이 가상 자료의 작성자라면 중간 그림에 시간이 몰린 기록을 보고 문서를 고칠 후보로 삼겠다. 그 페이지가 어렵다는 결론을 먼저 쓰기보다, 어디가 설명을 더 필요로 하는지 물을 이유로 쓰고 싶다.",
          "‘구조 그림에서 어떤 부분을 먼저 보셨어요?’라고 물으면 답이 나올 수 있다. ‘두 시스템 사이의 화살표가 무슨 뜻인지 찾고 있었어요.’ 그러면 오래 머문 시간을 조금 다르게 읽게 된다.",
          "반대로 그 그림을 가장 유용하게 봐서 회의 메모를 만들고 있었을 수도 있다. 같은 기록에서 어느 쪽인지는 대화가 더해져야 알 수 있다.",
          "마지막 페이지에 도달했다는 표시도 그렇게 사용하고 싶다. 검토 항목을 봤을 가능성을 생각할 수는 있지만, 그 항목에 동의했다는 답변으로 대신하지는 않는다.",
          "자료를 보냈다는 확인, 문서가 열렸다는 관측, 상대가 설명을 이해했다는 확인은 각각 다음 행동이 다르다. 앞의 기록을 뒤의 확인으로 부르면 질문을 너무 일찍 끝낼 수 있다.",
          "분석 화면은 상대를 대신해 답변하는 사람보다, 내가 다음에 무엇을 물을지 도와주는 메모에 가까웠으면 한다.",
          "회의가 시작된다. 작성자는 마지막 페이지까지 봤다는 기록을 알고 있다.",
          "그래도 ‘다 읽으셨죠?’부터 묻지는 않고 싶다.",
          "‘어느 페이지부터 같이 볼까요?’",
        ],
      },
    ],
  },
  en: {
    title: "What I would ask someone who reached the last page",
    summary:
      "A PDF’s last-page marker can feel like proof that a document landed. An imagined design review asks which questions should come after that observation.",
    sources: [
      {
        label: "PDF to Link · Document sharing and reader analytics",
        href: "https://pdf-to-link.com/",
      },
      {
        label: "MDN · Page Visibility API",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API",
      },
    ],
    sections: [
      {
        title: "Start with the table at the end",
        paragraphs: [
          "Imagine sending a PDF before a design review. Background comes first, an architecture diagram sits in the middle, and a table of review items closes the document.",
          "The recipient opens the final table first. They want to know what must be decided today, then return to the diagram.",
          "The sender’s dashboard records a visit to the last page. Interpret that as ‘they read everything’ and the two people arrive at the meeting with different assumptions.",
          "PDF to Link’s introduction describes reading sessions, page reach and active time. Its distinction between reaching the last page and completing a read caught my attention.",
          "Reaching the end is useful information. The route the reader took to get there is still unknown.",
        ],
      },
      {
        title: "A page left open",
        paragraphs: [
          "Now suppose the imaginary recipient spends a long time on the diagram. They might be struggling with missing explanation. They might be comparing it with another document.",
          "It would be pleasant to assume focused reading. I would hesitate to store that interpretation as though it were the observation itself.",
          "Time since opening can include time spent in other tabs. The product page describes active time while the document is visible and focused.",
          "MDN’s Page Visibility API describes a document becoming visible or hidden. Knowing a tab’s state is different from knowing whether a person understood its content.",
          "In this example, visible time can be a more specific observation. It still does not reveal which arrow the reader understood or which assumption they accepted.",
          "Exit records can have gaps too. PDF to Link explains that some exits cannot be detected and presents unknown exit locations separately.",
          "Assign those gaps to either first-page departures or completed reads without evidence and we have added information the record never contained.",
        ],
      },
      {
        title: "Questions for the meeting",
        paragraphs: [
          "If I were writing this hypothetical document, concentrated time on the middle diagram would make it a candidate for investigation. I would use it as a reason to ask where explanation is needed, before declaring that the page is difficult.",
          "‘What did you look at first in the diagram?’ could produce an answer: ‘I was trying to find out what the arrow between the systems means.’ The long visit now has a more particular interpretation.",
          "Or the reader might have found the diagram especially useful and been making meeting notes from it. The same trace needs a conversation to distinguish those possibilities.",
          "I would treat the last-page marker similarly. It can suggest that the review items were encountered, without standing in for a reply agreeing to them.",
          "Confirming that a file was sent, observing that it opened and checking that its explanation was understood each lead to different next actions. Naming an earlier trace as the later confirmation can end the questions too soon.",
          "I would like the dashboard to act more like a note helping me choose the next question than a person answering on the recipient’s behalf.",
          "The meeting begins. The author knows a last-page visit was recorded.",
          "I would still avoid opening with ‘You read everything, right?’",
          "‘Which page should we look at together first?’",
        ],
      },
    ],
  },
};
