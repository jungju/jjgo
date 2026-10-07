import type { Note } from "./notes-data";

export const privateMemoryNote: Note = {
  page: "notePrivateMemory",
  category: "AI & PRODUCT",
  date: "2026-10-08",
  sample: false,
  image: "/a/generated/notes/shared-server-private-memory.webp",
  imageAlt: {
    ko: "가족 식탁의 공동 계획 종이와 생일 케이크 옆에 닫힌 서랍, 가림판 뒤의 선물과 봉투가 놓인 모습",
    en: "A shared planning sheet and birthday cake beside closed drawers, with a gift and envelope behind a divider",
  },
  ko: {
    title: "가족의 AI 비서는 누구의 비밀을 기억할까",
    summary:
      "같이 쓰는 서버에 생일 준비와 선물 영수증을 넣는다고 해보자. 공유하면 편한 정보와 각자 남겨두고 싶은 기억은 같은 범위가 아닐 수 있다.",
    sources: [
      {
        label: "Octop · 프로젝트 README",
        href: "https://github.com/TencentCloud/Octop",
      },
      {
        label: "OWASP · Authorization Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
      },
    ],
    sections: [
      {
        title: "케이크는 같이 고르고",
        paragraphs: [
          "가족이 함께 쓰는 AI 비서를 하나 가정해보자. 이번 주말 생일에 몇 명이 오는지 알려주고, 케이크를 고르고, 장볼 목록을 만든다. 같은 이야기를 여러 번 하지 않아도 되면 편할 것이다.",
          "누군가는 선물을 먼저 샀다. 영수증을 넣어두고 나중에 교환할 수 있는 날짜를 물었다. 그 대화는 본인만 보는 공간에 있었다.",
          "그런데 생일의 주인공이 가족 비서에게 ‘이번 주말 준비한 것 좀 알려줘’라고 묻는다면?",
          "케이크와 손님 수는 알려줘도 된다. 선물 상자 안에 무엇이 들어 있는지까지 함께 알려줄 일은 아니었다.",
          "같은 집에서 같은 비서를 쓴다는 말 안에도, 함께 보고 싶은 것과 혼자 남겨두고 싶은 것이 섞여 있다.",
        ],
      },
      {
        title: "서버를 같이 쓴다는 뜻",
        paragraphs: [
          "Octop의 README는 가족과 작은 팀을 위한 셀프 호스팅 AI 비서를 소개한다. 여러 사용자, 사용자별 전문가와 작업 공간, 선택적으로 공유하는 지식베이스를 설명한다. 그 구성을 보면 한 서비스를 같이 쓰면서 각자의 작업을 나누는 모습을 떠올릴 수 있다.",
          "앞의 가상 가족 비서에서 먼저 정하고 싶은 건 공유할 사람 수보다 공유할 자료의 범위다. 가족 일정은 공동 자료일 수 있다. 개인 대화와 선물 영수증은 따로 둘 수 있다.",
          "로그인 계정이 다르다고 이 선택이 전부 끝나는 것도 아니다. OWASP는 신원을 확인하는 인증과, 특정 자료나 행동을 허용하는 권한 검사를 구분한다. 로그인한 사용자라고 해서 모든 자료를 볼 수 있는 것은 아니다.",
          "이 예라면 ‘가족 구성원’이라는 조건만으로 영수증을 검색할 수 있게 하지 않겠다. 누가 올린 자료인지, 누구에게 공유했는지까지 검색 범위에 들어가야 한다.",
          "답변을 만들 때 선물 내용을 읽어놓고 마지막에 말하지 말라고 부탁하는 방식은 마음에 걸린다. 이 사용자의 질문을 처리하는 동안에는 그 자료를 가져오지 않는 쪽부터 생각하고 싶다.",
          "집 안에서 서버를 운영한다는 말도 같은 선택을 대신하지 않는다. 내 서버에 자료가 있다는 것과 가족 계정에서 그 자료를 볼 수 있다는 것은 각각 확인할 일이다.",
          "모델을 어디서 실행하는지도 따로 봐야 한다. Octop 문서는 여러 모델 제공자를 설정할 수 있다고 안내한다. 이 가상 비서에 외부 모델 API를 연결한다면, 서비스가 집에서 돌아가도 답변에 사용할 내용을 그 API로 보내는 경로가 생긴다.",
          "그래서 ‘우리 집에서 쓴다’는 소개만으로 누가 어디에서 자료를 처리하는지까지 다 알았다고 생각하고 싶지는 않다.",
        ],
      },
      {
        title: "영수증을 지웠는데 기억은 남았다면",
        paragraphs: [
          "한 번 더 가정해보자. 비서가 영수증을 읽고 ‘이번 생일 선물은 망원경’이라는 짧은 기억을 따로 저장했다. 원문 파일과 그 기억은 다른 자료가 되었다.",
          "영수증을 개인 공간에 두었다면 그 내용을 요약한 기억도 같은 공유 범위를 따라야 하지 않을까. 원문은 못 읽게 했는데 요약은 가족 전체에게 보여주면, 비밀은 여전히 밖으로 나온다.",
          "이 예에서 나중에 공유를 취소한다면 기존 요약이나 검색 결과가 다시 사용되는지도 보고 싶다. 파일 목록에서 사라진 것으로 확인을 끝내기에는 답변이 거쳐오는 자리가 더 있다.",
          "OWASP의 권한 지침은 요청마다 허용 여부를 확인하라고 한다. 이 가족 비서라면 자료를 저장한 순간의 설정만 보는 대신, 지금 질문한 사람이 지금 볼 수 있는 범위를 확인하는 데 그 원칙을 적용하겠다.",
          "공유가 불편해지자는 뜻은 아니다. 가족 일정은 한 번 정리해 같이 보고 싶다. 다만 일정 정리를 부탁하면서 개인 대화까지 공용 게시판에 올리는 선택을 한 것은 아니다.",
          "내가 이 비서를 구상한다면 ‘가족에게 공유’ 버튼을 누를 때, 자료뿐 아니라 그 자료에서 만든 기억도 어디까지 공유되는지 알 수 있었으면 한다. 기억을 잘하는 능력 옆에, 누구의 기억인지 남기는 일이 필요해 보인다.",
          "생일의 주인공이 준비한 것을 물으면 비서는 케이크 이야기를 할 수 있다.",
          "선물까지 아는 척할 필요는 없다.",
          "상자를 여는 순간의 표정을 보고 싶어서 아직 말하지 않은 것이니까.",
        ],
      },
    ],
  },
  en: {
    title: "Whose secrets does a family AI assistant remember?",
    summary:
      "Imagine putting party plans and a gift receipt into a shared assistant. Useful shared information and private memories may need different boundaries.",
    sources: [
      {
        label: "Octop · Project README",
        href: "https://github.com/TencentCloud/Octop",
      },
      {
        label: "OWASP · Authorization Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
      },
    ],
    sections: [
      {
        title: "Choose the cake together",
        paragraphs: [
          "Imagine an AI assistant used by a family. Tell it who is coming to a birthday this weekend, choose a cake and prepare a shopping list. Not having to repeat the same details would be convenient.",
          "Someone has already bought the gift. They upload the receipt and ask about the return deadline. That conversation lives in their private space.",
          "Then the person whose birthday it is asks the family assistant, ‘What have we prepared for this weekend?’",
          "The cake and guest count are fine to share. The contents of the gift box were meant to wait.",
          "Even in one household using one assistant, some information belongs together and some is meant to stay apart.",
        ],
      },
      {
        title: "Sharing the service",
        paragraphs: [
          "Octop’s README introduces a self-hosted assistant for households and small teams. It describes multiple users, per-user experts and workspaces, and optional knowledge-base sharing. That arrangement suggests a service people use together while keeping individual work separate.",
          "For the imaginary family assistant, I would define the material to share before counting the people who can log in. A family schedule might be common material. Personal conversations and the gift receipt might stay private.",
          "Separate accounts do not finish that decision. OWASP distinguishes authentication, which verifies identity, from authorization for particular resources and actions. A signed-in user is not automatically entitled to every resource.",
          "In this example, membership of the household would not be enough to search the receipt. Who owns it and who it was shared with should help determine the search scope.",
          "I would hesitate to feed the gift details into an answer and merely ask the model not to mention them. I would start by keeping that material out of the resources retrieved for this person’s question.",
          "Running the service at home does not make the decision either. A file being on my server and a family account being allowed to read it are separate things to establish.",
          "The model’s location deserves another look. Octop documents configurable model providers. If this imagined assistant connects to an external model API, material used to answer can travel to that API even while the service runs in the house.",
          "So ‘we run it at home’ would leave me with questions about who processes the material and where.",
        ],
      },
      {
        title: "The receipt goes away. What about the memory?",
        paragraphs: [
          "Add another hypothetical step. After reading the receipt, the assistant saves a short memory: ‘The birthday gift is a telescope.’ The source file and that memory are now different resources.",
          "If the receipt is private, should its derived memory inherit the same sharing scope? Restrict the original while showing its summary to the entire family, and the surprise still escapes.",
          "If sharing is revoked later in this example, I would want to examine whether old summaries or search results are reused. Removing the file from a list does not describe every place an answer draws from.",
          "OWASP recommends checking permissions on every request. For this family assistant, I would apply that principle to what the person asking can access now, rather than relying only on the setting at upload time.",
          "I still want sharing to be convenient. Organize the family schedule once and let everyone see it. Asking for that does not also ask to put personal conversations on a public noticeboard.",
          "If I were designing this assistant, the ‘share with family’ action would explain the scope of sharing both the material and memories derived from it. Remembering well needs a record of whose memory it is.",
          "When the birthday person asks what is ready, the assistant can talk about the cake.",
          "It does not need to show off its knowledge of the gift.",
          "There is a reason to keep that detail until the box opens.",
        ],
      },
    ],
  },
};
