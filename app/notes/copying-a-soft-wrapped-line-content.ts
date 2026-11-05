import type { Note } from "./notes-data";

export const softWrapCopyNote: Note = {
  page: "noteSoftWrapCopy",
  category: "WEB & DESIGN",
  date: "2026-11-05",
  sample: false,
  relatedPages: ["noteCloneContract", "noteSharedWindow"],
  image: "/a/generated/notes/copying-a-soft-wrapped-line.webp",
  imageAlt: {
    ko: "황동 가이드를 돌아 이어진 초록 종이 띠와 따로 떨어진 흰 종이 띠 두 개, 뒤편의 노트북",
    en: "A continuous green paper ribbon around a brass guide, two separate ivory strips and a laptop behind",
  },
  ko: {
    title: "접힌 한 줄을 복사한다",
    summary:
      "좁은 터미널에서 두 줄로 보인 경로를 다른 창에 옮긴다. 화면의 접힘과 실제 줄바꿈은 복사할 때도 같을까.",
    sources: [
      {
        label: "wterm · README의 복사·선택·검색 범위",
        href: "https://github.com/vercel-labs/wterm",
      },
      {
        label: "wterm · 공식 소개",
        href: "https://wterm.dev/",
      },
    ],
    sections: [
      {
        title: "창이 좁아서 생긴 두 줄",
        paragraphs: [
          "터미널에서 긴 파일 경로를 복사해 동료에게 보낸다고 해보자. 창이 좁아 화면에는 두 줄로 보인다. 붙여넣은 메시지에서도 경로가 둘로 갈라지면, 동료는 어느 쪽을 받아야 할까.",
          "가상의 경로를 하나 적어봤다. ‘reports/weekly-summary-2026-11.txt’. 창 끝에서 ‘reports/weekly-’ 다음이 아래로 내려갔다고 하자. 파일 이름 가운데 엔터를 친 것은 아니다. 화면이 모자랐을 뿐이다.",
          "그래서 이 경로를 꺼낼 때는 화면의 두 줄이 다시 한 줄이었으면 한다. 내가 복사하려는 것은 좁은 창의 생김새보다 경로 자체에 가깝다.",
          "반대로 ‘상태=완료’와 ‘건수=3’을 각각 한 줄로 출력했다면 이야기가 달라진다. 둘을 붙여 ‘상태=완료건수=3’으로 만들면, 읽기 좋게 정리한 것이 아니라 두 기록의 경계를 없앤 셈이다.",
          "둘 다 화면에서는 아래 줄로 내려간다. 보고 있을 때는 비슷한데, 복사해서 다른 곳으로 데려갈 때는 다르게 다뤄야 한다.",
          "웹 터미널 wterm의 설명을 읽으며 이 작은 동작이 눈에 들어왔다. 문서에는 실제 줄바꿈은 보존하고, Ghostty 쪽에서 확인한 화면 접힘은 이어서 복사하는 기능이 나온다.",
          "이 글의 경로와 출력은 그 동작을 생각하려고 만든 예다. wterm을 설치해 클립보드 결과를 시험한 기록은 아니다.",
          "검은 화면 안에 글자를 잘 그리면 터미널의 일이 거의 끝난 것처럼 보일 수 있다. 그런데 한 줄을 마우스로 훑고 다른 창에 내려놓는 순간에도 아직 결정할 것이 있다.",
        ],
      },
      {
        title: "드래그한 뒤에 남는 것",
        paragraphs: [
          "wterm은 DOM으로 글자를 그리는 웹 터미널이다. README는 브라우저 기본 선택과 검색이 화면에 올려둔 행에서 동작한다고 범위를 적어둔다. 브라우저에 익숙한 손동작을 가져오는 점이 마음에 든다.",
          "그래도 ‘글자를 드래그할 수 있다’는 설명에서 내가 복사하고 싶은 문장이 그대로 나온다는 데까지는 더 볼 일이 있겠다.",
          "앞의 경로를 내보내는 가상의 화면을 만든다면, 먼저 창을 넓게 열고 복사해보겠다. 그다음 창을 좁혀 같은 경로가 접히게 한다. 붙여넣은 결과가 창 너비에 따라 다른 경로가 되어서는 곤란하다.",
          "화면 아래에 새 출력이 계속 붙는 경우도 상상해본다. 경로의 앞부분을 고르고 있는데 화면이 올라가면, 드래그가 끝났을 때 무엇이 선택되어 있을까. 이런 질문은 멋진 첫 화면을 캡처할 때는 잘 떠오르지 않는다.",
          "한글과 기호가 섞인 이름을 골라도 확인하고 싶다. 화면에서 글자 하나처럼 보이는 것을 반만 가져오는 일이 없어야, 받은 사람이 파일 이름을 다시 물어보지 않을 것이다. 특정 구현에서 벌어진 오류를 말하는 것이 아니라 이 가상의 화면에서 확인하고 싶은 장면들이다.",
          "검색도 이름만으로 범위를 짐작하지 않고 싶다. 화면에 올라온 행을 찾는 기능과 보관된 출력 전체를 찾는 기능은 서로 다른 약속일 수 있다. 검색 결과가 없을 때 어디까지 살펴봤는지 알면, 놓친 로그를 다시 찾을 출발점이 생긴다.",
          "다만 이 작은 동작을 설명하느라 쓰는 사람에게 터미널 구조를 가르치고 싶지는 않다. 경로를 건네려는 사람은 경로를 건네면 되고, 두 줄의 기록을 옮기는 사람은 두 줄을 받으면 좋겠다.",
          "그 단순함을 만들기 위해 안쪽에서는 화면 줄과 원래 줄을 구분해야 한다는 점이 재미있다. 화면에서는 감춰도 되는 차이가, 구현하는 쪽에서는 꼭 남겨둘 정보가 된다.",
          "나라면 기능 소개를 쓸 때 ‘복사 지원’이라고 한 줄 적고 넘어갔을 것 같다. 실제로 무엇을 복사할지 생각하니, 그 한 줄의 할 일이 조금 길어진다.",
        ],
      },
      {
        title: "동료의 창에서",
        paragraphs: [
          "다시 가상의 메시지 창으로 돌아온다. 나는 터미널에서 고른 경로를 보냈고, 동료는 자기 화면에서 그것을 받아본다.",
          "그 사람의 창은 내 창보다 넓을 수도 있다. 내 화면에서 어디가 접혔는지는 이제 별로 중요하지 않다.",
          "‘중간에 엔터 친 거예요?’",
          "그 질문에 원래 터미널의 너비부터 설명하지 않아도 되면 좋겠다. 화면에서는 두 줄이었어도, 건네준 것은 한 줄의 경로였으니까.",
        ],
      },
    ],
  },
  en: {
    title: "Copying a line that only looked broken",
    summary:
      "A path occupies two rows in a narrow terminal. What should happen to that visual wrap when it is copied into another window?",
    sources: [
      {
        label: "wterm · Copy, selection and find in the README",
        href: "https://github.com/vercel-labs/wterm",
      },
      {
        label: "wterm · Official introduction",
        href: "https://wterm.dev/",
      },
    ],
    sections: [
      {
        title: "Two rows made by a narrow window",
        paragraphs: [
          "Imagine copying a long file path from a terminal into a message to a colleague. The narrow window displays it on two rows. If the pasted message splits the path as well, what has the colleague received?",
          "I made up a path: reports/weekly-summary-2026-11.txt. Suppose everything after reports/weekly- drops onto the next row. Nobody pressed Enter inside the filename. The window ran out of room.",
          "When taking that path elsewhere, I would want the two displayed rows to become one line again. The thing I am copying is the path, rather than the shape of a narrow window.",
          "Now imagine two separate output lines, status=done and count=3. Joining them as status=donecount=3 would erase the boundary between records, rather than simply tidy their appearance.",
          "Both cases move down a row on screen. They look similar while reading, but need different treatment when carried elsewhere.",
          "That small action caught my attention in wterm’s documentation. Its feature list describes preserving explicit newlines and joining confirmed Ghostty soft wraps when copying.",
          "The path and output in this essay are invented examples for thinking about that behavior. They are not results from installing wterm and testing its clipboard.",
          "Drawing legible characters inside a dark rectangle can look like most of a terminal’s work. Selecting a line and putting it into another window leaves decisions to make.",
        ],
      },
      {
        title: "What remains after the drag",
        paragraphs: [
          "wterm renders terminal text to the DOM. Its README scopes native browser selection and find to mounted rows. I like the prospect of retaining familiar browser gestures.",
          "Still, being able to drag over characters leaves more to inspect before concluding that the intended sentence comes out intact.",
          "For an imagined interface exporting that path, I would first copy it from a wide window. Then I would narrow the window until the path wraps. The pasted path should not change with the window’s width.",
          "I would also consider output arriving during selection. If the display scrolls while I am selecting the beginning of a path, what will be selected by the end? A polished screenshot does not usually bring that question to mind.",
          "Names containing Korean characters and symbols would be worth trying too. A character that looks whole should arrive whole, without making the recipient ask for the filename again. These are scenes I would check in the imagined interface, rather than failures observed in a particular implementation.",
          "I would want to understand the scope of find as well. Searching mounted rows and searching all retained output can be different promises. Knowing what a search covered gives me somewhere to begin when looking again for a missing log entry.",
          "I would not want explaining this small gesture to turn into teaching terminal internals. Someone handing over a path should be able to hand over the path. Someone moving two records should receive two lines.",
          "The interesting part is the information needed to make that feel simple. A distinction that readers can ignore on screen becomes something the implementation needs to retain.",
          "I suspect I might have written “copy supported” in a feature list and moved on. Thinking about what gets copied makes that short line of work rather longer.",
        ],
      },
      {
        title: "In the colleague’s window",
        paragraphs: [
          "Return to the fictional message window. I have sent the path selected in the terminal, and my colleague is looking at it on their screen.",
          "Their window might be wider than mine. Where my display wrapped is no longer very relevant.",
          "“Did you press Enter in the middle?”",
          "I would like to answer without first explaining how wide my terminal was. It occupied two rows on screen, but the thing handed over was one path.",
        ],
      },
    ],
  },
};
