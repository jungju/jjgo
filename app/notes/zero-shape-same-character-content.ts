import type { Note } from "./notes-data";

export const zeroShapeNote: Note = {
  page: "noteZeroShape",
  category: "CODE & DESIGN",
  date: "2026-10-09",
  sample: false,
  image: "/a/generated/notes/zero-shape-same-character.webp",
  imageAlt: {
    ko: "점과 사선이 각각 들어 있는 녹색 타원 종이 도형 두 개를 돋보기 옆에 놓은 모습",
    en: "Two green oval paper shapes with a dot and a diagonal stroke beside a magnifying glass",
  },
  ko: {
    title: "0에 점을 찍어도, 소스는 그대로다",
    summary:
      "D2Coding의 숫자 0 모양 선택 기능을 보며 생각한 것. 코드를 읽는 눈을 돕는 작은 표시와, 같은 화면을 다시 만드는 데 필요한 조건에 관한 메모.",
    sources: [
      {
        label: "NAVER · D2Coding 공식 저장소",
        href: "https://github.com/naver/d2-coding-font",
      },
      {
        label: "D2Coding · 공식 글꼴 체험 페이지",
        href: "https://naver.github.io/d2-coding-font/",
      },
    ],
    sections: [
      {
        title: "이 글자가 0이었나",
        paragraphs: [
          "코드 한 줄을 검토한다고 해보자. 식별자에 숫자 0이 들어 있는데, 대문자 O처럼 보인다. 글자를 하나 잘못 읽어서 다른 이름을 찾고 있었다면, 코드가 멀쩡해도 확인하는 일은 길어진다.",
          "이럴 때는 화면을 확대하거나 원래 문자를 다시 확인한다. 그런데 매번 눈을 크게 뜨는 것보다, 처음부터 조금 다르게 보이면 좋겠다는 생각도 든다.",
          "D2Coding 공식 저장소에는 1.4.0의 숫자 0 모양 선택 기능이 나온다. 기본은 안에 빗금이 있는 0이고, OpenType 기능 cv01을 켜면 점이 있는 0으로 바뀐다. ss01로도 같은 선택을 제공한다고 한다.",
          "바뀌는 것은 그려지는 모양이다. 소스 파일의 숫자 0을 다른 문자로 고치는 작업은 아니다.",
          "점 하나를 고를 수 있게 해둔 것이 사소해 보이다가도, 코드를 읽는 사람이 어디서 잠깐 멈추는지 생각하면 꽤 구체적인 기능으로 보인다.",
        ],
      },
      {
        title: "내 편집기와 네 터미널",
        paragraphs: [
          "앞의 가상 검토 상황에서 한 사람은 편집기를 보고, 다른 사람은 터미널을 본다고 해보자. ‘여기 0이잖아요’라는 말이 같은 모양을 가리킨다고 보장할 수 있을까.",
          "둘 다 같은 글꼴을 설치했어도 실제로 선택한 글꼴이나 켜둔 기능이 다를 수 있다. 글꼴 이름만 맞췄다는 말 뒤에는 앱의 설정을 확인하는 일이 남는다.",
          "D2Coding의 문서는 숫자 0 선택과 프로그래밍 합자 기능을 따로 설명한다. 숫자 모양만 바꾸고 싶은 사람과 여러 기호를 이어 보이게 하고 싶은 사람의 선택이 같을 이유는 없다.",
          "이 예에서는 폰트를 바꿨다는 말보다 어떤 앱에서 어떤 선택을 켰는지 알고 싶다. ‘내 화면에서는 잘 보인다’는 설명만으로는 다른 화면을 다시 만들기 어렵다.",
          "한글 주석이 섞이면 눈이 보는 줄의 간격도 중요해진다. 공식 문서는 한글 한 글자의 전진 폭을 영문 한 글자의 두 배로 정했다고 설명한다. 같은 격자에서 한글과 영문을 배치하려는 설계다.",
          "하지만 그 설명을 읽었다고 내 화면의 모든 글자가 그 글꼴에서 나온다고 확인한 것은 아니다. 다른 글꼴로 표시되는 문자가 있다면 그 부분부터 결과가 달라질 수 있다.",
          "원본에 실제로 들어 있는 문자와 화면에 그려진 글자, 그 글자를 그린 글꼴을 한 번에 같은 것으로 취급하고 싶지는 않다.",
        ],
      },
      {
        title: "‘이상하게 보인다’ 다음에",
        paragraphs: [
          "가상의 검토자가 ‘이 줄이 이상하게 보인다’고 화면을 보냈다고 해보자. 사진만 있으면 같이 들여다볼 수는 있다. 같은 현상을 다시 보려면 조금 더 필요하다.",
          "D2Coding 공식 체험 페이지에는 글자 크기를 달리 보여주는 도구, 포함된 문자를 확인하는 도구, 현재 설정과 환경을 정리하는 보고 양식이 있다. 무엇이 어떻게 보였는지 설명할 자리를 마련해 둔 것이다.",
          "이 예라면 문제의 문자열과 사용한 글꼴 버전, 앱과 크기 설정을 함께 받고 싶다. 숫자 0 선택을 켰는지도 남긴다. 누군가에게 똑같이 보이게 해달라고 부탁하려면, 먼저 내가 무엇을 보고 있었는지 알려줘야 한다.",
          "새 글꼴이 확인 시간을 얼마나 줄여주는지는 별도로 재야 한다. 옵션이 생겼다는 사실에서 생산성이 몇 퍼센트 올랐다는 결과까지 건너뛸 수는 없다.",
          "그래도 한 글자를 읽는 데 쓸데없는 추측을 덜 하게 만드는 방향은 반갑다. 한글 주석과 영문 이름, 숫자와 기호가 한 줄에 같이 앉는 화면에서는 작은 차이가 눈에 걸린다.",
          "점이 있는 0이 편한 사람도 있고, 빗금이 있는 0이 익숙한 사람도 있을 것이다. 하나를 모두에게 고르게 하기보다 같은 문자를 구분할 수 있는 선택을 주는 편이 낫지 않을까.",
          "앞의 두 사람이 다시 같은 코드를 본다. 저장된 문자는 숫자 0인 것으로 확인했다.",
          "이제 소스를 고칠 차례가 아닐 수도 있다.",
          "먼저 내 화면에도, 저게 0이라는 걸 조금 쉽게 알려주면 좋겠다.",
        ],
      },
    ],
  },
  en: {
    title: "A different zero, the same source character",
    summary:
      "D2Coding’s alternative zero shape raises a small question about reading code—and the settings needed to reproduce what someone sees.",
    sources: [
      {
        label: "NAVER · Official D2Coding repository",
        href: "https://github.com/naver/d2-coding-font",
      },
      {
        label: "D2Coding · Official typeface playground",
        href: "https://naver.github.io/d2-coding-font/",
      },
    ],
    sections: [
      {
        title: "Was that a zero?",
        paragraphs: [
          "Imagine reviewing a line of code. An identifier contains the digit zero, but it looks like an uppercase O. Read one character incorrectly and you can spend time looking for another name even though the code is fine.",
          "You can zoom in or inspect the original character. Still, it would be useful if the distinction were easier to see before anyone had to squint.",
          "The official D2Coding repository describes a choice of zero shape in version 1.4.0. The default is slashed; enabling the OpenType feature cv01 substitutes a dotted zero. The same option is available through ss01.",
          "This changes the drawn shape. It does not replace the zero stored in the source file with another character.",
          "A choice of one small dot can seem trivial until you think about where a person reading code pauses.",
        ],
      },
      {
        title: "My editor, your terminal",
        paragraphs: [
          "In that imagined review, suppose one person is looking at an editor and the other at a terminal. Does ‘There’s a zero here’ mean they are seeing the same shape?",
          "Installing the same font does not establish which font each app selected or which features it enabled. Matching the font’s name leaves settings to inspect.",
          "D2Coding documents the zero option separately from programming ligatures. Someone who only wants a different zero need not want operator sequences drawn together too.",
          "For this example, I would want to know the app and the enabled choices. ‘It looks fine on my screen’ is not enough to reconstruct someone else’s display.",
          "Korean comments add another consideration to the line. The documentation specifies a Hangul syllable’s advance width as twice that of a Latin character, placing both on a common grid.",
          "Reading that design description does not confirm that every character on my screen came from this font. A character rendered through a fallback can change part of the result.",
          "I would keep the stored character, the shape on screen and the font drawing it as separate things to establish.",
        ],
      },
      {
        title: "After ‘this looks wrong’",
        paragraphs: [
          "Suppose the imaginary reviewer sends a screenshot saying a line looks odd. We can examine the picture together. Reproducing it takes more information.",
          "The official D2Coding specimen provides a size ladder, a character-coverage check and a report template for settings and environment. It gives the observation somewhere more precise to go.",
          "In this example, I would ask for the string, font version, app and size settings, including whether the alternative zero is enabled. To ask someone to recreate what I saw, I first need to describe what produced my view.",
          "How much time a font saves needs a separate measurement. The existence of an option does not establish a percentage improvement in productivity.",
          "I do appreciate the direction: less unnecessary guessing over a character. Small distinctions matter on a line where Korean comments, Latin identifiers, numbers and punctuation sit together.",
          "Some readers may prefer the dot; others may be accustomed to the slash. Giving them a way to distinguish the same character seems more useful than choosing one appearance for everyone.",
          "The two people return to their code. They have confirmed that the stored character is a zero.",
          "Perhaps the source is not what needs changing next.",
          "First, I would like my screen to make that zero a little easier to recognize.",
        ],
      },
    ],
  },
};
