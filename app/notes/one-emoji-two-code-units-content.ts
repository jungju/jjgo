import type { Note } from "./notes-data";

export const emojiLengthNote: Note = {
  page: "noteEmojiLength",
  category: "STRINGS & INTERFACES",
  date: "2026-11-28",
  sample: false,
  relatedPages: ["noteZeroShape", "noteFormAfterError"],
  image: "/a/generated/notes/one-emoji-two-code-units.webp",
  imageAlt: {
    ko: "액자 속 웃는 얼굴 하나와 그 아래 두 조각으로 맞춘 웃는 얼굴 퍼즐, 따로 놓인 악센트 모양",
    en: "One smiling face in a frame above a two-piece smile puzzle, with a separate accent-shaped piece",
  },
  ko: {
    title: "JavaScript length는 왜 이모지 하나를 2로 셀까?",
    summary:
      "Jolt의 문자열 설명을 읽고 Node에서 이모지와 결합 문자를 직접 세었다. 같은 문자열도 코드 단위·코드 포인트·grapheme 기준에 따라 길이가 달라졌다.",
    sources: [
      {
        label: "Jolt · Official README: differences from Clojure",
        href: "https://github.com/jolt-lang/jolt",
      },
      {
        label: "MDN · String.length and UTF-16 code units",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length",
      },
      {
        label: "MDN · Intl.Segmenter",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter",
      },
    ],
    sections: [
      {
        title: "웃는 얼굴이 둘로 세어졌다",
        paragraphs: [
          "이번 글을 위해 Node에서 웃는 얼굴 하나, ‘😀’의 길이를 확인했다. 문자열의 length 값은 2였다. 문자는 하나 입력했는데 숫자는 둘이다. 이모지가 친구를 데려온 것은 아니다.",
          "출발점은 Jolt의 공식 README였다. 이 Clojure 구현은 문자열을 UTF-16 코드 단위 대신 코드 포인트 기준으로 다루며, ‘😀’의 count가 JVM Clojure의 2와 달리 1이라고 적어둔다. 같은 문자열을 넘겨도 무엇을 세느냐가 달라질 수 있다는 대목이다.",
          "Jolt를 실행해 본 결과는 아니다. 직접 확인한 쪽은 JavaScript다. MDN이 설명하는 String.length의 단위는 UTF-16 코드 단위다. 이 이모지는 그 단위를 둘 쓰므로 2가 나온다. 코드 포인트를 세는 Array.from으로는 하나다.",
          "앞뒤에 알파벳을 붙인 ‘A😀B’도 확인했다. length는 4, 코드 포인트 수는 3이었다. Intl.Segmenter를 granularity: grapheme으로 설정해 나눈 묶음도 이 예에서는 3개였다. 문자열을 바꾸지 않고 세는 기준만 바꾼 결과다.",
          "가상의 입력란에 ‘3자까지’라고 써 있다고 해보자. 사용자가 ‘A😀B’를 넣었는데 화면의 카운터가 length를 그대로 보여주면 4가 된다. 읽는 사람은 세 덩어리를 보고 있고, 프로그램은 네 코드 단위를 세고 있다. 계산이 틀리지 않아도 안내는 어긋날 수 있다.",
        ],
      },
      {
        title: "3자까지라는 약속",
        paragraphs: [
          "그렇다고 코드 포인트 수를 쓰면 ‘한 글자’ 문제가 전부 끝나는 것은 아니다. 소문자 e 뒤에 결합 악센트 U+0301을 붙인 문자열도 같은 Node 실행에서 세었다. UTF-16 코드 단위는 2, 코드 포인트도 2인데 grapheme 묶음은 1이었다. 화면에는 악센트가 붙은 e 하나처럼 보일 수 있다.",
          "Intl.Segmenter의 grapheme 분할은 이런 묶음을 다룰 때 쓸 수 있다. 다만 이 예 몇 개로 모든 언어에서 사람이 생각하는 글자 수를 완벽히 정했다고 말할 수는 없다. 이번 확인도 로컬 Node의 해당 설정에서 나온 결과까지다.",
          "만약 그 입력란을 만든다면, 길이 제한이 필요한 이유부터 적어보고 싶다. 화면에서 너무 긴 이름을 막으려는 것인지, 저장 공간이나 다른 시스템의 제한에 맞추려는 것인지. 둘은 같은 요구가 아닐 수 있다. 사용자에게 보일 카운터와 실제 거절 조건도 함께 확인해야겠다.",
          "백엔드를 다른 언어 구현으로 옮기는 가상 작업이라면 더 그렇다. 같은 숫자 3을 양쪽 설정에 써두었다고 같은 길이를 허용하는 것은 아니다. 코드 단위, 코드 포인트, 묶음 중 어떤 약속으로 입력을 받는지 정하고, 이모지와 결합 문자를 그 약속에 넣어 확인할 일이다.",
          "다시 그 입력란이다. 웃는 얼굴은 그대로 하나다. 옆에 남은 칸이 몇 개인지 알려주는 작은 숫자가 있다. 이제는 그 숫자를 고치기 전에, 무엇을 한 칸으로 세기로 했는지부터 묻고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "Why does JavaScript count one emoji as two?",
    summary:
      "A Jolt documentation detail led to a local Node check of emoji and combining marks. Code units, code points and grapheme clusters counted the same text differently.",
    sources: [
      {
        label: "Jolt · Official README: differences from Clojure",
        href: "https://github.com/jolt-lang/jolt",
      },
      {
        label: "MDN · String.length and UTF-16 code units",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length",
      },
      {
        label: "MDN · Intl.Segmenter",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter",
      },
    ],
    sections: [
      {
        title: "One smile, counted twice",
        paragraphs: [
          "For this article, a local Node check counted a single smiling face: 😀. Its string length was 2. One character had been entered, yet the number was two. The emoji had not brought a friend.",
          "The starting point was Jolt’s official README. This Clojure implementation describes indexing strings by code point instead of UTF-16 unit, with a count of 1 for 😀 where JVM Clojure returns 2. Passing the same text across a boundary need not preserve what its length counts.",
          "That Jolt behavior was read in the documentation, not tested here. The actual check used JavaScript. MDN documents String.length in UTF-16 code units. This emoji occupies two of those units, whereas counting code points with Array.from gives one.",
          "Adding letters on either side produced A😀B. Its length was 4 and its code-point count was 3. Intl.Segmenter with granularity: grapheme also produced three clusters for this example. The string stayed the same; only the counting rule changed.",
          "Imagine a field labeled “Up to 3 characters.” If its counter simply displays length, entering A😀B produces 4. The reader sees three pieces while the program counts four code units. The calculation can be correct while the instruction and counter disagree.",
        ],
      },
      {
        title: "What “up to 3” promises",
        paragraphs: [
          "Switching to code points does not settle every meaning of “one character.” The same Node run also counted a lowercase e followed by the combining accent U+0301. That sequence had two UTF-16 units and two code points, but one grapheme cluster. On screen it can appear as a single accented e.",
          "Intl.Segmenter’s grapheme mode is a way to work with such clusters. These few examples do not establish a perfect measure of what every reader of every language considers a character. The observed results belong to the local Node run and the stated settings.",
          "If I built that field, I would first write down why the limit exists. Is it meant to keep a displayed name short, or to fit a storage or downstream-system constraint? Those may call for different rules. I would check the displayed counter alongside the actual rejection condition.",
          "That matters in a fictional backend migration too. Putting the number 3 in both implementations does not necessarily allow the same text. The input contract needs a unit—code units, code points or clusters—and examples containing emoji and combining marks to check it.",
          "Back at the field, the smiling face is still one smiling face. A small counter says how much room remains. Before changing that number, I want to ask what we agreed would occupy one space.",
        ],
      },
    ],
  },
};
