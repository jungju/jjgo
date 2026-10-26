import type { Note } from "./notes-data";

export const sharedWindowNote: Note = {
  page: "noteSharedWindow",
  category: "TOOLS & COLLABORATION",
  date: "2026-10-27",
  sample: false,
  relatedPages: ["noteSingleFileOwnership"],
  image: "/a/generated/notes/whose-computer-is-that-window-on.webp",
  imageAlt: {
    ko: "두 노트북 위의 창을 연결한 초록 실과 왼쪽 창 아래 문서함, 같은 창을 가리키는 두 커서",
    en: "A green thread linking window shapes above two laptops, with a document tray beneath the left window and two cursors pointing to it",
  },
  ko: {
    title: "내 옆에 뜬 창은 누구 컴퓨터에 있을까",
    summary:
      "공유받은 에디터를 내 에디터 옆에 놓는다면. 같은 이름의 파일을 고칠 때, 저장되는 작업 폴더도 같은 곳일까.",
    sources: [
      {
        label: "Petal — README와 창 공유 설명",
        href: "https://github.com/kiruna-labs/petal",
      },
    ],
    sections: [
      {
        title: "내 에디터 옆의 다른 에디터",
        paragraphs: [
          "동료와 원격으로 코드를 고친다고 해보자. 각자 컴퓨터에 작업 폴더가 하나씩 있다. 동료가 에디터 창을 공유하고, 나는 그 창을 내 에디터 옆에 놓는다.",
          "화면에는 비슷한 창 두 개가 나란히 있다. 파일 이름도 같다. 이제 ‘여기 한 줄만 바꿔볼까요’라는 말의 ‘여기’가 조금 어려워진다.",
          "Petal의 README는 공유받은 창을 회의 화면의 작은 타일 대신, 내 데스크톱에서 옮기고 배치할 수 있는 독립된 창으로 보여준다고 설명한다. 그 설명을 읽으며 이런 페어 작업을 떠올렸다.",
          "내 작업 창 옆에 동료의 창을 두고 함께 보는 모습은 편해 보인다. 따로 회의 화면을 찾아갔다 돌아오는 동작도 줄어들겠다. 다만 편하게 배치할수록 어느 쪽이 내 작업인지 눈으로 구분할 자리가 더 필요할 것 같다.",
          "창이 내 화면으로 왔다는 느낌이 꽤 강할 테니까.",
        ],
      },
      {
        title: "저장되는 폴더는 한쪽에 있다",
        paragraphs: [
          "앞의 가정에서 공유한 에디터는 동료 컴퓨터의 작업 폴더를 열고 있다. 내 에디터는 내 컴퓨터의 다른 복사본을 열고 있다. 같은 이름의 파일이 보여도 두 작업 폴더가 자동으로 같아진다는 조건은 두지 않았다.",
          "Petal은 공유 창의 조작을 동료에게 넘기는 기능도 설명하며, 원격 제어는 아직 초기 단계라고 적고 있다. 이 가상 작업에서도 동료가 조작을 허용한 뒤 내가 공유 창에 입력한다고 하자.",
          "내 키보드로 글자를 넣지만 바뀌는 것은 동료가 공유한 에디터의 내용이다. 거기서 저장하면 이 예에서는 동료 쪽 파일에 남는다. 내 작업 폴더에 변경이 안 보인다고 저장이 실패한 것은 아니다.",
          "문제는 옆에 놓인 내 에디터도 꽤 비슷하다는 점이다. 동료가 ‘거기서 고쳐보세요’라고 했을 때 내가 어느 창을 눌렀는지에 따라, 같은 한 줄을 고쳐도 서로 다른 폴더에 남을 수 있다.",
          "이런 도구를 만든다면 공유 창 주변에 어느 컴퓨터의 창인지 표시하고 싶다. 작업 중인 프로젝트와 브랜치도 바로 확인할 수 있으면 좋겠다. 커서 옆에 사람 이름이 보이는 것만으로는 파일의 자리를 다 설명하지 못한다.",
          "창을 내 책상 쪽으로 당겨 놓는 일은 쉬워졌는데, 그 창 안에서 바뀌는 것들은 여전히 저쪽 책상에 있을 수 있다.",
        ],
      },
      {
        title: "잠깐 키보드를 넘기기 전에",
        paragraphs: [
          "누가 입력할지도 잠깐 맞추고 싶다. 한 사람은 수정하고 다른 사람은 옆에서 볼지, 어느 지점에서 조작을 넘길지. 좋은 배치가 생겼다고 대화의 순서까지 저절로 정해지지는 않을 것이다.",
          "통화를 끝내기 전에는 어느 작업 폴더에 수정이 남았는지 함께 보겠다. 다음에 이어서 고칠 사람이 무엇을 열어야 하는지, 어떤 변경을 넘겨받아야 하는지. 지금 같이 볼 수 있을 때 맞춰두면 덜 헷갈리겠다.",
          "이것은 Petal을 직접 써서 겪은 문제가 아니라, 소개된 창 공유 방식에서 생각해 본 작업 상황이다. 두 사람의 입력과 저장이 실제 제품에서 어떻게 처리되는지, 연결이 끊기면 무엇이 남는지는 별도 확인이 필요하다.",
          "다시 비슷한 에디터 두 개가 놓인 화면으로 돌아온다. 동료가 말한다. ‘거기 한 줄만 바꿔보세요.’",
          "이번에는 먼저 물어봐야겠다. ‘지금 어느 쪽 창을 말하는 거예요?’",
        ],
      },
    ],
  },
  en: {
    title: "Whose computer is that window on?",
    summary:
      "A shared editor sits beside my own. Two matching filenames make it worth asking which working copy receives the next edit.",
    sources: [
      {
        label: "Petal — README and shared-window overview",
        href: "https://github.com/kiruna-labs/petal",
      },
    ],
    sections: [
      {
        title: "Another editor beside mine",
        paragraphs: [
          "Imagine working on code remotely with a colleague. Each computer has its own working copy. The colleague shares an editor window, and I place it beside my editor.",
          "Two similar windows sit next to one another. Even the filename matches. “Shall we change this line here?” has acquired a slightly troublesome “here.”",
          "Petal’s README describes shared windows appearing as independent windows that participants can move around their desktops, rather than small tiles inside a meeting view. That description suggested this pairing scene.",
          "Keeping the colleague’s window beside my own looks convenient. There could be fewer trips back to the meeting screen. The more naturally the windows fit together, though, the more I would want a visible way to identify the working copy behind each.",
          "The window could feel very much as if it had arrived on my computer.",
        ],
      },
      {
        title: "The saved file is on one side",
        paragraphs: [
          "In this scenario, the shared editor has opened the colleague’s working directory. My editor has opened another copy on my machine. We have not assumed that matching filenames synchronize the two directories.",
          "Petal also describes handing a colleague control of a shared window, while identifying remote control as early-stage work. In our imagined session, suppose the colleague grants control before I type into that shared editor.",
          "My keyboard supplies the characters, but the colleague’s editor receives the change. Saving there leaves it in the colleague’s file in this example. An unchanged local working tree would not mean that save failed.",
          "The difficulty is that my neighboring editor looks similar. When the colleague says “Change it there,” which window I click determines which working copy receives that otherwise identical edit.",
          "If I were designing such a tool, I would want the window’s originating computer identified nearby. Being able to check the project and branch there would help too. A person’s name beside a cursor does not describe every location behind the file.",
          "Pulling a window toward my side of the desk has become easy. What changes inside it may still belong to the other side.",
        ],
      },
      {
        title: "Before handing over the keyboard",
        paragraphs: [
          "I would also agree briefly on who types: one person edits while the other observes, or control changes at a chosen point. A useful layout cannot decide the conversation’s turn-taking.",
          "Before ending the call, I would look together at which working copy contains the edits. What should the next person open, and which changes need handing over? The moment when both people can still see the work seems a good time to settle that.",
          "This is a situation imagined from Petal’s description, rather than a problem encountered while using it. How the actual product handles concurrent input, saving, and interrupted connections needs separate investigation.",
          "I return to the two similar editors. The colleague says, “Just change that line there.”",
          "This time I would ask first: “Which window do you mean?”",
        ],
      },
    ],
  },
};
