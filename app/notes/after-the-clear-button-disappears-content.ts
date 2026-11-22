import type { Note } from "./notes-data";

export const clearFocusNote: Note = {
  page: "noteClearFocus",
  category: "UI & INTERACTION",
  date: "2026-11-22",
  sample: false,
  relatedPages: ["noteFormAfterError", "noteTvWayBack"],
  image: "/a/generated/notes/after-the-clear-button-disappears.webp",
  imageAlt: {
    ko: "작은 붉은 버튼이 떨어져 나온 종이 검색칸 안에 손이 황동 고리를 놓는 그림",
    en: "A hand returning a brass ring to a paper search field beside a detached coral button",
  },
  ko: {
    title: "지우기 버튼이 사라진 뒤, 다음 글자는 어디로 갈까?",
    summary:
      "UI SDK의 초점 복구 예제를 읽고 작은 HTML 검색창 두 개를 만들었다. 글자를 지우고 버튼을 없애는 것과, 다음 입력을 받을 자리를 남기는 것은 달랐다.",
    sources: [
      {
        label: "Vercel Labs · UI SDK 공식 예제",
        href: "https://github.com/vercel-labs/ui",
      },
      {
        label: "MDN · HTMLElement.focus()",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
      },
    ],
    sections: [
      {
        title: "빈칸은 돌아왔는데",
        paragraphs: [
          "초깃값이 old인 검색칸 두 개를 만들었다. 각각 옆에 지우기 버튼이 있고, 그 버튼에 키보드 초점이 있을 때 Enter를 누르면 글자를 지우고 버튼도 없앤다. 검색어가 없으니 지울 버튼도 필요 없다는 작은 화면이다.",
          "그다음 new를 입력했다. 한쪽 검색칸은 계속 비어 있었고, 다른 쪽에는 new가 들어갔다.",
          "둘의 차이는 지운 글자가 아니었다. 두 번째는 버튼을 없앤 뒤 입력칸에 focus()를 호출했다. 첫 번째는 글자를 비우고 버튼을 없애는 데서 일을 끝냈다.",
          "브라우저에서 document.activeElement도 확인했다. 첫 번째는 BODY였고 두 번째는 입력칸이었다. 빈 검색칸이 눈앞에 있다고 해서 다음 키 입력도 그 칸으로 간 것은 아니었다.",
          "이것은 UI SDK를 설치해 비교한 결과가 아니다. 별도로 만든 단순 HTML 예제를 Chromium 158.0.8127.36에서 확인했다. 버튼에 초점을 둔 뒤 Enter를 누르고, 영문 new를 입력한 한 가지 흐름이다. 실제 서비스에서 겪은 장애를 옮겨 쓴 것도 아니다.",
          "이 화면을 만들게 된 계기는 Vercel Labs의 UI SDK 예제였다. 모양이 완성된 컴포넌트 대신 초점, 선택, 닫기 같은 동작을 조합하는 라이브러리인데, 검색창의 지우기 버튼이 눈에 들어왔다.",
          "공식 예제에는 입력값이 있을 때만 지우기 버튼을 두는 조건과, createFocusRecovery의 대체 목적지를 입력칸으로 정하는 코드가 함께 있다. 버튼을 언제 없앨지만이 아니라, 그 자리에 있던 초점이 어디로 갈지도 다루는 셈이다.",
        ],
      },
      {
        title: "지우는 일의 다음 한 칸",
        paragraphs: [
          "처음의 검색창을 만든다면 나는 지웠는지부터 확인했을 것 같다. 값은 비었고 버튼도 사라졌으니, 화면만 보면 할 일이 끝났다. 다음 글자까지 입력해 보고 나서야 확인할 일이 하나 더 보였다.",
          "MDN은 focus()가 초점을 받을 수 있는 요소에 초점을 설정한다고 설명한다. 키보드 입력을 기본적으로 받을 대상과 관련된 동작이다. 입력값을 바꾸는 일과 초점을 옮기는 일이 별도로 있다는 설명이, 위 예에서는 꽤 구체적인 차이가 됐다.",
          "다시 쓰려는 사람에게 지우기는 검색을 그만두겠다는 뜻이 아닐 수 있다. 지금의 단어를 버리고 다른 단어를 찾으려는 것이라면, 빈칸 다음에 바로 다음 글자가 올 것이다. 버튼이 없어진 뒤에도 그 흐름은 이어져야 한다.",
          "그래서 이런 화면을 볼 때는 버튼을 눌렀을 때까지의 장면만 저장하고 싶지 않다. 그 버튼에 초점이 있었는지, 버튼이 사라진 뒤 무엇이 입력을 받는지, 이어서 한 단어를 쓸 수 있는지까지 보고 싶다. 이번 예에서도 두 화면은 그 다음 행동에서 갈라졌다.",
          "언제나 아무 입력칸으로 초점을 보내자는 뜻은 아니다. 다음 작업에 맞는 목적지가 있어야 하고, 그 요소가 지금도 남아 있는지도 봐야 한다. 화면을 닫는 버튼과 검색어만 지우는 버튼이 같은 목적지를 가질 이유는 없다.",
          "이번 확인으로 모바일 입력, 한글 입력기, 스크린리더를 포함한 모든 조합을 검증한 것은 아니다. UI SDK 전체의 초점 처리 품질을 평가한 것도 아니다. 다만 내가 만든 두 작은 화면에서는 값 지우기와 다음 입력의 자리를 따로 확인해야 한다는 차이를 볼 수 있었다.",
          "어떤 화면을 고쳤다는 보고를 받는다면, 다음에는 한 문장을 더 부탁하고 싶다. ‘지운 뒤에 새 검색어도 입력해 주세요.’ 화면이 깨끗해졌다는 설명보다, 빈칸에 새 단어가 들어가는 장면을 보고 싶은 것이다.",
          "지우기 버튼은 사라져도 괜찮다. 다음에 쓸 말이 갈 자리까지 같이 사라지지는 않았으면 좋겠다.",
        ],
      },
    ],
  },
  en: {
    title: "When the clear button disappears, where does typing go?",
    summary:
      "After reading UI SDK’s focus-recovery example, I made two small HTML search fields. Clearing their text and removing a button did not, by themselves, leave a place for the next word.",
    sources: [
      {
        label: "Vercel Labs · Official UI SDK example",
        href: "https://github.com/vercel-labs/ui",
      },
      {
        label: "MDN · HTMLElement.focus()",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus",
      },
    ],
    sections: [
      {
        title: "The empty field came back",
        paragraphs: [
          "I made two search fields with an initial value of old. Each has a clear button. With keyboard focus on that button, pressing Enter clears the text and removes the button. With nothing left to clear, the small interface no longer needs it.",
          "Then I typed new. One search field stayed empty. The other received new.",
          "The difference was not in the deleted text. The second handler called focus() on the input after removing the button. The first stopped after clearing the value and removing the control.",
          "I also inspected document.activeElement. It was BODY in the first case and the input in the second. Having an empty field on screen did not send the next keystrokes there.",
          "This was a separate plain-HTML fixture checked in Chromium 158.0.8127.36, not a comparison made by installing UI SDK. It covered one sequence: focus the clear button, press Enter, then type the English word new. It was not a recreation of an incident in a real service.",
          "The prompt for this little screen was Vercel Labs’ UI SDK example. The library composes behaviors such as focus, selection and dismissal rather than supplying only finished visual components. Its search-field clear button caught my attention.",
          "The example both makes the clear button conditional on a nonempty value and sets an input fallback through createFocusRecovery. It addresses where the focus should go as well as when the button should disappear.",
        ],
      },
      {
        title: "One more step after clearing",
        paragraphs: [
          "I would probably begin by checking that clearing worked. The value is empty and the button is gone; the screen looks finished. Trying the next word revealed another thing to check.",
          "MDN describes focus() as setting focus on a specified element that can receive it. Focus concerns the default recipient of keyboard input. Changing a value and moving focus are separate actions, and this small example made that separation visible.",
          "For someone about to search again, clearing a field need not mean abandoning the search. They may simply want a different word. The next character follows the empty field, even though the button is no longer there.",
          "That makes me want to inspect more than the frame immediately after pressing the button. Was the button focused? What receives input after it disappears? Can another word be entered? The two screens diverged at that next action.",
          "This does not mean sending focus to an arbitrary input every time. The destination should fit the next task and still exist. Closing an entire screen and clearing only its search text need not lead to the same place.",
          "The fixture did not verify every combination of mobile input, an input-method editor or a screen reader. Nor did it evaluate the quality of UI SDK’s focus handling as a whole. It established a narrower difference between clearing a value and preserving the next typing target in the two screens I made.",
          "When reviewing a report that a screen has been fixed, I would like one more request: enter another search term after clearing. Rather than just hearing that the screen is clean, I would like to see a fresh word enter the empty field.",
          "The clear button can disappear. I would like the next word to still have somewhere to go.",
        ],
      },
    ],
  },
};
