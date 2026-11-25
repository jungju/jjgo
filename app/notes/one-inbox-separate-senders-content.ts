import type { Note } from "./notes-data";

export const replyAccountNote: Note = {
  page: "noteReplyAccount",
  category: "MAIL & IDENTITY",
  date: "2026-11-26",
  sample: false,
  relatedPages: ["noteApprovalVersion", "notePrivateMemory"],
  image: "/a/generated/notes/one-inbox-separate-senders.webp",
  imageAlt: {
    ko: "두 색의 봉투가 든 받은편지함 앞에서 손이 서로 다른 발신 표식 두 개 사이를 고르는 그림",
    en: "A hand choosing between two sender tokens in front of a unified tray holding differently marked envelopes",
  },
  ko: {
    title: "받은편지함은 하나인데, 답장은 어느 계정에서 나갈까?",
    summary:
      "MailFlow의 통합 메일 설명을 읽으며, 업무·개인 계정을 모은 가상의 답장 창을 생각했다. 읽는 화면을 합쳐도 보내는 주체의 선택은 남는다.",
    sources: [
      {
        label:
          "MailFlow · Official README on unified mail and per-account routing",
        href: "https://github.com/maathimself/mailflow",
      },
    ],
    sections: [
      {
        title: "같은 문장을 다른 나로 보내기",
        paragraphs: [
          "업무 계정과 개인 계정의 메일을 한 목록에 모았다고 해보자. 탭을 바꾸지 않아도 새 편지를 볼 수 있다. 그중 하나를 열어 답장을 쓰면, 보내는 사람 칸에는 어느 계정이 들어가 있을까.",
          "MailFlow의 통합 받은편지함 소개를 읽다가 이 칸이 궁금해졌다. 공식 README는 여러 IMAP·SMTP 계정을 한 화면에서 관리하는 웹메일이라고 설명하고, 답장과 작성의 계정별 SMTP 라우팅도 기능으로 적어둔다.",
          "앱을 설치하거나 계정을 연결해 확인한 후기는 아니다. 실제 메일을 읽거나 보내지도 않았다. 한 화면으로 모으는 일과 그 화면에서 어떤 주체로 행동하는지를 나눠 생각해 본 가상 사례다.",
          "가상의 업무 편지에 ‘내일 자료 보내겠습니다’라고 답장을 썼다고 해보자. 문장만 보면 특별할 것이 없다. 하지만 업무 계정으로 나간 편지인지, 개인 계정으로 나간 편지인지에 따라 받는 사람이 다음 답장을 보낼 곳은 달라질 수 있다.",
          "받은편지함을 합쳤다고 그 계정들까지 하나가 된 것은 아니다. 같은 사람이 읽고 있다는 설명만으로, 발송할 계정의 선택까지 끝나지는 않는다.",
          "이런 화면을 만든다면 목록에서 편지를 고르는 순간부터 그 편지가 어느 계정에 속했는지 알고 싶다. 답장 초안을 열 때도 그 맥락이 이어지고, 보내기 전에는 지금 선택한 보낸이를 다시 볼 수 있게.",
        ],
      },
      {
        title: "초안에 남겨둘 보낸 사람",
        paragraphs: [
          "항상 받은 계정으로만 답장하자는 뜻은 아니다. 업무 흐름에 따라 다른 발신 주체를 선택해야 할 수도 있다. 중요한 것은 그 선택이 무엇인지 드러나고, 실행할 때도 의도한 선택으로 이어지는 일이다.",
          "가령 초안을 남겨두었다가 다른 편지를 읽고 돌아왔다고 해보자. 화면 구석의 계정 선택이 바뀌었다면, 지금의 초안도 바뀐 선택을 따라가야 할까. 나는 최신 화면의 상태보다 이 초안에 대해 정해둔 발신 주체를 먼저 확인하고 싶다.",
          "이것은 MailFlow에서 그런 문제가 생긴다는 보고가 아니다. 소개에 계정별 라우팅이 명시된 것을 보고 떠올린 설계 질문이다. 실제 동작은 제품의 설정과 구현을 놓고 확인해야 한다.",
          "AI가 답장 문장을 써주는 가상의 흐름에도 같은 칸이 남는다. 문장이 자연스럽고 필요한 내용을 담았다는 확인과, 어느 계정으로 누구에게 보낼지는 서로 다른 확인이다. 잘 쓴 문장이 발신 주체를 대신 정하지는 않는다.",
          "통합 화면의 편리함을 줄이고 싶지는 않다. 오히려 한곳에서 읽고 처리할 수 있을수록, 지금 누구로 행동하고 있는지는 작고 분명하게 남아 있으면 좋겠다. 보내는 사람을 확인하려고 원래 웹메일을 다시 열어야 한다면 통합의 이점도 줄어든다.",
          "처음의 답장 창으로 돌아간다. ‘내일 자료 보내겠습니다’라는 문장은 그대로다. 보내기 버튼을 누르기 전에 이번에는 문장 아래 서명만 읽지 않고, 그 위의 보낸 사람 칸도 한 번 보고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "One inbox: which account sends the reply?",
    summary:
      "A fictional reply screen prompted by MailFlow’s unified-mail description. Bringing work and personal messages together leaves the sending identity to choose and preserve.",
    sources: [
      {
        label:
          "MailFlow · Official README on unified mail and per-account routing",
        href: "https://github.com/maathimself/mailflow",
      },
    ],
    sections: [
      {
        title: "The same sentence, a different sender",
        paragraphs: [
          "Imagine work and personal mail collected in one list. New messages can be read without switching tabs. Open one and begin a reply: which account appears in the sender field?",
          "That field caught my attention while reading about MailFlow’s unified inbox. Its official README describes managing multiple IMAP/SMTP accounts in one interface and lists per-account SMTP routing for replies and composition.",
          "This is not an account of installing the app or connecting mail accounts. No real messages were read or sent. The example is fictional: bringing views together and choosing the identity that acts within them are separate matters.",
          "Suppose a reply to a work message says, “I will send the material tomorrow.” The sentence is unremarkable. But whether it leaves from a work account or a personal one can change where the recipient sends the next reply.",
          "Combining inboxes does not merge the accounts themselves. Knowing that the same person reads them does not settle which account should send a message.",
          "If I built this screen, I would want the selected message’s account context to remain available as its reply draft opens. Before sending, I would want to see the sender currently chosen for that draft.",
        ],
      },
      {
        title: "The sender belonging to the draft",
        paragraphs: [
          "That is not a rule that every reply must use the account that received the message. A workflow may call for another sending identity. The choice should be visible and should carry through to the intended execution.",
          "Imagine leaving a draft, reading another message and returning. If an account selector elsewhere has changed, should the draft follow it? I would first want to know which sending identity was chosen for this draft, rather than infer it from the latest surrounding screen state.",
          "This is not a report of a MailFlow defect. It is a design question prompted by the documented per-account routing. Actual behavior would need checking against the product’s settings and implementation.",
          "The same field matters in a fictional workflow where AI writes a reply. Checking that the sentence is fluent and complete is separate from deciding which account sends it and to whom. Good prose does not choose its sender.",
          "I would not want to undo the convenience of a unified interface. The more work it gathers in one place, the more useful a small, clear indication of the acting identity becomes. Reopening an original webmail tab just to confirm the sender would give back some of that convenience.",
          "I return to the draft. “I will send the material tomorrow” is unchanged. Before pressing Send, I would like to read the sender field above it as well as the signature below it.",
        ],
      },
    ],
  },
};
