import type { Note } from "./notes-data";

export const firstExportNote: Note = {
  page: "noteFirstExport",
  category: "COMPILERS & WAITING",
  date: "2026-11-27",
  sample: false,
  relatedPages: ["noteDomTimer", "noteAverageSpike"],
  image: "/a/generated/notes/the-first-export-after-the-window-opens.webp",
  imageAlt: {
    ko: "열린 파란 문 옆에서 손이 주황색 쟁반으로 이어지는 나무 계단을 마저 놓는 그림",
    en: "A hand completing wooden steps toward an orange tray beside an already open blue doorway",
  },
  ko: {
    title: "창이 열린 뒤, 첫 내보내기까지",
    summary:
      "Relax의 함수별 지연 컴파일 설명에서 떠올린 가상의 편집기. 창이 뜨는 시간과 처음 내보내기를 끝내는 시간을 따로 보고 싶어졌다.",
    sources: [
      {
        label:
          "Relax · Official README: first-call compilation and experimental-tool boundaries",
        href: "https://github.com/makepad/relax",
      },
    ],
    sections: [
      {
        title: "일찍 켜진 창 앞에서",
        paragraphs: [
          "가상의 문서 편집기를 켠다. 창이 금방 열리고, 빈 문서에 글자도 들어간다. 이번에는 내보내기 버튼을 누른다. 시작이 빨라졌다는 설명을 읽었다면, 이 버튼 뒤의 시간도 이미 짧아진 것처럼 생각하기 쉽다.",
          "Relax의 공식 README에서 눈에 남은 것은 함수가 처음 호출될 때 컴파일된다는 설명이었다. 실행 중 자주 쓰이는 함수는 뒤에서 최적화한다. 전체 프로그램을 먼저 빌드하고 시작하는 흐름과 기다리는 위치가 달라진다.",
          "Relax를 설치하거나 실행해 본 후기는 아니다. 문서 편집기도 가상의 예다. README에 실린 성능 수치를 다시 재거나 옮기려는 대신, 이 방식이라면 무엇을 따로 보고 싶을지 생각했다.",
          "첫 화면을 만드는 함수와 파일을 내보내는 함수가 다르다고 해보자. 아직 부르지 않은 함수의 준비를 미룰 수 있다면, 화면을 여는 데 필요하지 않은 일까지 처음부터 기다릴 이유는 줄어든다. 글자 하나를 고치고 결과를 보고 싶은 개발자에게는 반가운 방향이다.",
          "다만 준비를 나중에 한다는 말만으로 그 비용이 없어졌다고 할 수는 없다. 처음 내보내기를 시도할 때 어떤 일이 필요한지, 그 일이 눈에 띄는 기다림이 되는지는 실제 실행을 봐야 안다. 이 가정에서 Relax의 특정 버튼이 느리다는 결론은 나오지 않는다.",
        ],
      },
      {
        title: "아직 누르지 않은 버튼",
        paragraphs: [
          "나에게 필요한 비교라면 창이 뜰 때 한 번, 처음 내보내기가 끝날 때 한 번, 같은 작업을 다시 끝낼 때 한 번 시간을 보고 싶다. 시작 지점도 적어둔다. 프로그램 실행부터인지, 버튼을 누른 순간부터인지에 따라 같은 숫자를 읽는 뜻이 달라진다.",
          "두 번째 시도가 첫 번째보다 빨랐다고 해도 이유를 바로 하나로 고르지는 못한다. 컴파일 결과뿐 아니라 문서, 파일 시스템, 다른 준비 상태도 영향을 줄 수 있다. 어떤 캐시와 상태를 남겼는지 모르면, 같은 버튼을 눌렀다는 것만으로 같은 조건이 되지는 않는다.",
          "README는 Relax를 실험적인 개발 도구로 규정한다. Rust 프로젝트의 도구가 아니며 Rust의 안전성을 자동으로 이어받지 않는다고 경고하고, 배포할 결과물은 rustc로 빌드하라고 안내한다. 빨리 창을 보는 장점에서 배포 품질의 보증까지 건너가면 안 되겠다.",
          "그래서 이 설명을 읽고 당장 바꾸고 싶은 것은 도구보다 데모의 순서다. 가상의 편집기라면 창을 띄운 뒤 바로 끝내지 않고, 처음으로 내보내기를 눌러 파일을 여는 데까지 보여주고 싶다. 일찍 시작할 수 있는 가치와 첫 작업의 기다림을 함께 볼 수 있게.",
          "다시 빈 문서 앞이다. 창은 열렸고, 커서는 깜박인다. 내보내기 버튼은 아직 한 번도 누르지 않았다. 오늘 보고 싶은 장면은 바로 그 다음이다.",
        ],
      },
    ],
  },
  en: {
    title: "After the window opens, the first export",
    summary:
      "A fictional editor prompted by Relax’s first-call compilation. The opening window and the completion of a first export are moments I would observe separately.",
    sources: [
      {
        label:
          "Relax · Official README: first-call compilation and experimental-tool boundaries",
        href: "https://github.com/makepad/relax",
      },
    ],
    sections: [
      {
        title: "An earlier window",
        paragraphs: [
          "Imagine opening a document editor. Its window appears quickly and accepts a few words. Next comes Export. After reading that startup is faster, it is easy to picture the wait behind that button shrinking too.",
          "One detail in Relax’s official README stayed with me: functions are compiled on their first call, while hot functions are optimized as the program runs. Compared with building the whole program before starting it, this changes where preparation happens.",
          "This is not a hands-on review of Relax. The editor is fictional. Rather than repeat or remeasure the README’s benchmark figures, I want to ask which moments I would observe separately.",
          "Suppose opening the window and exporting the file use different functions. Deferring preparation for uncalled functions could mean less work has to stand between a developer and the first screen. That is an appealing direction when the immediate goal is to change a word and see the result.",
          "But work scheduled later has not necessarily disappeared. What the first export still needs, and whether that becomes a noticeable wait, require an actual run. This thought experiment does not establish that any particular Relax button is slow.",
        ],
      },
      {
        title: "The button still untouched",
        paragraphs: [
          "For my comparison, I would record when the window appears, when the first export finishes and when a repeated export finishes. I would also write down the starting point: launching the program or pressing the button. The same number can mean different things with those different starts.",
          "Even a faster second attempt would not identify its cause by itself. Compiled code, document state, the file system and other preparation could matter. Without knowing which caches and state were retained, pressing the same button does not guarantee matching conditions.",
          "The README presents Relax as an experimental development tool, separate from the Rust project. It warns that Rust’s safety guarantees do not transfer automatically and directs release builds to rustc. An earlier window is not assurance about a shipped artifact.",
          "The first thing I would change after reading this is the order of a demo. With our fictional editor, I would continue beyond the opening window: press Export for the first time and open the resulting file. That would show both the value of starting sooner and the wait involved in the first task.",
          "Back at the empty document, the window is open and the cursor blinks. Export has never been pressed. The moment I want to see comes next.",
        ],
      },
    ],
  },
};
