import type { Note } from "./notes-data";

export const cloneContractNote: Note = {
  page: "noteCloneContract",
  category: "CODE & COMPATIBILITY",
  date: "2026-10-28",
  sample: false,
  relatedPages: ["noteOnDeviceAi"],
  image: "/a/generated/notes/the-copied-date-came-back-as-text.webp",
  imageAlt: {
    ko: "두 초록 달력 모형 옆에서 투명한 통로가 줄무늬 종이 카드로 이어지는 장면",
    en: "Two green calendar models beside a transparent passage leading to a ruled paper card",
  },
  ko: {
    title: "복사한 날짜가 글자로 돌아왔다",
    summary:
      "단순한 숫자 객체는 그대로 복사됐다. 같은 방법으로 Date를 복사하니, 날짜처럼 보이는 문자열이 남았다.",
    sources: [
      {
        label: "Dumb Game Lab — 오래된 WebView의 시작 오류와 호환 처리",
        href: "https://dev.to/dumbgamelab/our-crash-reporters-first-day-three-web-standards-that-killed-boot-on-old-android-webviews-2a9d",
      },
      {
        label: "MDN — structuredClone",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone",
      },
      {
        label: "MDN — JSON.stringify와 Date의 toJSON",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",
      },
    ],
    sections: [
      {
        title: "일단 켜지게 만드는 일",
        paragraphs: [
          "오래된 Android WebView에서 게임이 시작조차 안 됐다는 개발 기록을 읽었다. 원인은 게임 규칙보다 먼저 호출한 표준 함수들이었다. 작성자는 호환 코드를 붙였고, 그중 structuredClone의 대체는 자기 게임의 단순 JSON 저장 자료에만 맞는다고 선을 그었다.",
          "그 마지막 설명이 눈에 들어왔다. 함수 하나를 채워 넣었다고, 그 함수가 다루던 값까지 모두 같은 것은 아니겠구나.",
          "그래서 작은 객체 두 개를 Node.js에서 따로 복사해 봤다. 하나는 레벨 3, 코인 10 같은 숫자만 담았고, 다른 하나에는 Date로 만든 저장 시각을 넣었다.",
          "JSON으로 바꿨다가 다시 읽는 방식은 첫 객체의 숫자를 그대로 돌려줬다. 날짜가 들어간 쪽도 날짜처럼 보이는 값을 돌려줬다. 그런데 그 값은 Date가 아닌 문자열이었다.",
          "이번에 실행한 것은 메모리 안의 복사 예시다. 오래된 Android 기기나 원문의 게임이 실제로 켜지는지를 시험한 것은 아니다.",
        ],
      },
      {
        title: "날짜처럼 생긴 글자",
        paragraphs: [
          "날짜 예시에는 2026년 10월 1일을 넣었다. 기본 structuredClone으로 복사한 값은 여전히 Date였고, getUTCFullYear로 2026을 읽을 수 있었다. JSON 왕복 뒤의 값에는 그 메서드가 없었다.",
          "JSON 쪽에서 날짜를 엉뚱하게 표시한 것도 아니다. 날짜를 나타내는 글자는 남아 있다. 다만 날짜 객체로 할 수 있던 일을 그 문자열에 바로 시킬 수는 없다.",
          "MDN의 JSON.stringify 설명을 보면 이유가 보인다. Date의 toJSON은 ISO 형식 문자열을 반환한다. 그 JSON을 별도 변환 없이 읽으면 문자열이 되는 흐름이다.",
          "저장 형식을 처음부터 문자열로 정했다면 이것이 원하는 결과일 수도 있다. 읽은 뒤 어느 지점에서 Date로 바꿀지도 함께 정하면 된다. 그런데 Date를 기대하던 함수 자리에 그대로 넣으면 다음 작업의 조건이 달라진다.",
          "겉으로 같은 날짜가 보이니 복사가 잘됐다고 지나가기 쉽겠다. 숫자 두 개만 넣은 첫 예시가 멀쩡했던 것도 안심하는 데 한몫했을 것이다.",
          "원문 작성자가 자기 자료는 단순 JSON이라고 적어 둔 이유를 이제 조금 더 구체적으로 읽게 된다. 그것은 작은 단서가 아니라, 그 대체 방식을 쓸 수 있는 자료의 범위였다.",
        ],
      },
      {
        title: "함수 이름 옆에 적을 것",
        paragraphs: [
          "호환 처리를 검토한다면 함수가 있는지부터 확인하되, 그다음에는 실제로 넣을 자료를 보고 싶다. 숫자와 문자열만 오는지, 날짜 객체도 오는지. 같은 ‘복사’라는 이름 아래에서 기대하는 결과가 달라질 수 있다.",
          "이번의 두 예시만으로 범용 대체 구현을 검증했다고 할 수는 없다. 원문의 모든 호환 코드를 검사한 것도 아니고, 어떤 브라우저 버전까지 지원해야 하는지 정한 것도 아니다.",
          "그래도 작업 메모에는 한 줄을 더 쓸 수 있겠다. 이 대체가 받기로 한 자료와, 돌려주기로 한 자료의 모양. 날짜를 문자열로 보관한다면 그 선택도 거기에 드러나야 한다.",
          "화면이 켜졌다는 확인 뒤에, 실제 저장 자료를 다시 읽어 다음 동작까지 해 보고 싶다. Date를 기대하는 부분이 있다면 그곳에서도 날짜로 다룰 수 있는지 보는 것이다.",
          "처음 출력에서 날짜처럼 보이던 값을 다시 본다. 이번에는 날짜가 맞아 보이는지보다, 다음 줄에서 그 값으로 무슨 일을 하려 했는지가 먼저 궁금해진다.",
        ],
      },
    ],
  },
  en: {
    title: "The copied date came back as a string",
    summary:
      "A numbers-only object survived a JSON roundtrip as expected. A Date field came back as text, changing what the next operation could do.",
    sources: [
      {
        label: "Dumb Game Lab — boot failures and compatibility handling",
        href: "https://dev.to/dumbgamelab/our-crash-reporters-first-day-three-web-standards-that-killed-boot-on-old-android-webviews-2a9d",
      },
      {
        label: "MDN — structuredClone",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone",
      },
      {
        label: "MDN — JSON.stringify and Date serialization",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",
      },
    ],
    sections: [
      {
        title: "Getting past startup",
        paragraphs: [
          "I read a developer’s account of games failing to start on older Android WebViews because standard functions were missing. The author added compatibility code, explicitly limiting a JSON-based structuredClone replacement to the games’ plain JSON save data.",
          "That boundary caught my attention. Supplying a missing function would not necessarily preserve every kind of value handled by the original.",
          "I compared two small objects separately in Node.js: one containing numbers such as level 3 and coins 10, another containing a saved-at value created as a Date.",
          "Converting to JSON and parsing it preserved the first object’s numbers. The second result still looked like a date, but its value was now a string rather than a Date.",
          "This was an in-memory copying example. I did not run an old Android device or launch the original games.",
        ],
      },
      {
        title: "Text shaped like a date",
        paragraphs: [
          "The date fixture used October 1, 2026. The native structuredClone result remained a Date, and getUTCFullYear returned 2026. The JSON-roundtrip result had no such method.",
          "The JSON result had not displayed a nonsensical date. The characters representing the date remained. The operations available on a Date were no longer directly available on that string.",
          "MDN’s JSON.stringify documentation explains why: Date’s toJSON returns an ISO-formatted string. Parsing that JSON without a separate conversion leaves a string.",
          "If the storage format intentionally uses strings, that may be precisely the desired result. We can decide where to reconstruct a Date when reading it. Dropping the result into a place expecting a Date, however, changes the next operation’s assumptions.",
          "A familiar date on the screen makes it easy to accept the copy. The first, numbers-only fixture working correctly could make that reassurance stronger.",
          "The original author’s plain-JSON qualification now reads more concretely to me. It defines which input data the replacement was intended to handle.",
        ],
      },
      {
        title: "Something to write beside the function name",
        paragraphs: [
          "When examining compatibility handling, I would check whether the function exists, then look at the actual inputs. Are they numbers and strings, or do Date objects arrive too? The name “copy” can cover different expectations.",
          "These two fixtures do not validate a universal replacement. I have not audited every compatibility function in the original article or determined a minimum supported browser version.",
          "They do suggest another line for the work note: the shapes of the accepted input and promised output. An intentional decision to store dates as strings belongs there too.",
          "After confirming that the screen opens, I would read actual save data back and follow the next operation. Where a Date is expected, can the value still be used as one?",
          "I return to the output that looked like a date. Before asking whether it looks right, I want to know what the next line intended to do with it.",
        ],
      },
    ],
  },
};
