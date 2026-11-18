import type { Note } from "./notes-data";

export const distinctFramesNote: Note = {
  page: "noteDistinctFrames",
  category: "VIDEO & VERIFICATION",
  date: "2026-11-18",
  sample: false,
  relatedPages: ["noteSmoothMotion", "noteSameFrame"],
  image: "/a/generated/notes/sixty-fps-thirty-distinct-frames.webp",
  imageAlt: {
    ko: "비슷한 주황색 새가 반복되는 종이 필름의 두 칸 위에 황동 돋보기가 놓인 개념 그림",
    en: "A brass magnifying glass over two paper film frames with repeated coral birds",
  },
  ko: {
    title: "60fps 녹화, 서로 다른 프레임도 60개일까?",
    summary:
      "가상의 1초 기록 두 개에 프레임 자리를 60개씩 만들었다. 카운터 값은 한쪽에서 60개, 다른 쪽에서 30개였다. chrome-capture 문서를 읽으며 녹화 수치 옆에 확인할 것을 생각했다.",
    sources: [
      {
        label: "chrome-capture — README와 프레임 카운터 검증 방식",
        href: "https://github.com/paulirish/chrome-capture",
      },
    ],
    sections: [
      {
        title: "재생 시간과 칸 수는 같았다",
        paragraphs: [
          "0, 1, 2, 3. 그리고 0, 0, 1, 1. 가상의 화면 녹화 기록을 두 줄 만들고, 각 줄에 숫자를 60개씩 넣어봤다. 첫 번째는 0부터 59까지, 두 번째는 0부터 29까지를 두 번씩 적었다.",
          "두 줄 모두 1초 동안 일정한 간격으로 저장한 60개의 프레임 자리라고 가정했다. 실제 영상을 녹화하거나 파일을 분석한 결과는 아니다. 화면 안에서 새로 그릴 때마다 올라가는 카운터가 있다고 생각하고, 저장된 그 값을 배열로 만든 것이다.",
          "자리 수를 세면 둘 다 60이다. 서로 다른 카운터 값을 세면 첫 번째는 60, 두 번째는 30이다. 숫자를 직접 세어도 같은 결과였다.",
          "60개를 담을 수 있다는 것과 그 안에서 서로 다른 값을 60개 찾았다는 것은 다른 말이었다.",
          "이 예를 만든 계기는 Chrome 탭 녹화 도구인 chrome-capture의 README였다. 높은 프레임률 이야기를 읽다가, 파일에 적힌 fps를 그대로 믿는 대신 화면 안의 프레임 카운터를 확인한다는 대목에서 멈췄다.",
          "문서의 검증용 페이지는 requestAnimationFrame마다 이진 카운터를 그린다. 녹화한 MP4에서 그 표식을 다시 읽어 서로 다른 프레임을 센다고 설명한다. 새로 그린 흔적을 화면 안에도 넣어 두는 셈이다.",
          "도구를 설치해 녹화한 것은 아니어서, 문서의 성능 수치를 내 환경의 결과로 옮길 수는 없다. 대신 그 확인 방식을 작은 숫자 목록으로 옮겨보니 질문이 분명해졌다. 파일의 프레임 자리 수를 묻는 걸까, 그 자리에 담긴 화면 갱신을 묻는 걸까.",
          "가령 화면이 매번 달라지는 데모를 보고 싶었다면, 두 번째 줄에서 같은 번호가 두 번씩 나온 이유를 더 살펴보고 싶다. 파일이 1초 동안 정상적으로 재생된다는 설명만으로는 그 궁금증이 풀리지 않는다.",
        ],
      },
      {
        title: "같은 번호를 찾은 다음",
        paragraphs: [
          "그렇다고 30이라는 숫자를 발견하자마자 녹화 도구가 절반을 놓쳤다고 말할 수는 없다. 위 목록에는 그 원인이 들어 있지 않다. 원래 화면이 덜 자주 갱신됐을 수도 있고, 그 뒤의 어느 단계에서 같은 상태를 담았을 수도 있다.",
          "이 예로 어느 브라우저가 빠른지, 어떤 그래픽 장치가 문제인지도 알 수 없다. 직접 측정하지 않은 원인을 숫자 옆에 덧붙이면, 작은 계산이 어느새 제품 평가가 된다.",
          "가만히 있는 화면이라면 같은 그림이 여러 번 나오는 것도 이상하지 않다. 멈춘 문서를 녹화하면서 매 프레임이 달라야 한다고 요구할 이유는 없다. 무엇이 움직여야 하는 장면인지가 먼저다.",
          "카운터에도 범위가 있다. 번호가 바뀌었다는 것은 그 표식이 바뀌었다는 증거다. 화면의 모든 부분이 제때 그려졌는지, 클릭한 결과가 맞는지까지 한꺼번에 증명하지는 않는다.",
          "그래서 녹화 데모를 확인한다면 표식과 함께 보고 싶은 동작도 정해두고 싶다. 버튼을 누른 뒤 바뀌어야 하는 숫자인지, 끌어다 놓는 물체의 위치인지. 어떤 변화가 기록에 남아야 하는지 말할 수 있어야 놓친 변화도 찾을 수 있다.",
          "영상이 부드러워 보였다는 감상은 그대로 남겨도 된다. 다만 그 감상으로 몇 번의 갱신이 보존됐는지까지 답한 것은 아니다. 반대로 카운터만 세었다고 사람이 읽기 좋은 영상인지 알게 되는 것도 아니다.",
          "처음의 두 줄을 파일 설명에 붙인다고 생각해 본다. 둘 다 1초, 저장된 자리 60개. 옆에 카운터로 구분한 값은 각각 60개와 30개라고 적으면, 그제야 둘을 다르게 읽을 수 있다.",
          "나는 두 번째 줄의 0, 0 사이에서 잠깐 멈추고 싶다. 같은 장면을 두 번 담은 것인지, 기다리던 다음 장면이 거기 없었던 것인지. 60fps라는 표시 옆에서 한 번 더 물어볼 자리가 생겼다.",
        ],
      },
    ],
  },
  en: {
    title: "A 60 fps recording: are all 60 frames distinct?",
    summary:
      "Two invented one-second records each contain 60 frame slots. One has 60 distinct counter values; the other has 30. The chrome-capture docs prompted a small counting exercise about what a recording’s frame rate tells us.",
    sources: [
      {
        label: "chrome-capture — README and visual frame-counter checks",
        href: "https://github.com/paulirish/chrome-capture",
      },
    ],
    sections: [
      {
        title: "The same duration, the same number of slots",
        paragraphs: [
          "0, 1, 2, 3. Then 0, 0, 1, 1. I made two invented records of a screen capture, with 60 numbers in each. The first runs from 0 to 59. The second repeats each number from 0 to 29 twice.",
          "Assume each list represents 60 frame slots stored at regular intervals over one second. This is not a recording or an analysis of a video file. I imagined an on-screen counter that advances with each new render, then made arrays of the values captured from it.",
          "Count the slots and both lists have 60. Count distinct counter values and the first has 60 while the second has 30. Running the count gave those results.",
          "Having room for 60 frames and finding 60 different values inside them were separate observations.",
          "The exercise began with the README for chrome-capture, a tool for recording Chrome tabs. Among the frame-rate claims, one detail made me pause: checking a counter drawn inside the recording instead of relying on the file’s stated fps.",
          "Its test page draws a binary counter on each requestAnimationFrame. The documentation describes reading that marker back out of the recorded MP4 to count unique frames. The screen carries a trace of its own redraws.",
          "I did not install the tool or record a video, so the documented performance figures are not results from my machine. But translating the check into a small list clarified the question. Am I asking how many frame slots the file has, or which screen updates those slots contain?",
          "If I wanted a demo of something changing on every render, I would want to look into the repeated numbers in the second list. Knowing that the file plays for one second would not answer that question.",
        ],
      },
      {
        title: "After finding the repeated number",
        paragraphs: [
          "Finding 30 distinct values does not establish that the recorder lost half the updates. The list contains no cause. The original screen might have updated less often, or some later stage might have captured the same state again.",
          "It cannot tell us which browser is faster or which graphics device is at fault either. Attaching an unmeasured cause would quietly turn a counting exercise into a product review.",
          "A stationary screen can legitimately produce repeated pictures. There is no reason to demand that every frame of an unmoving document look different. We first need to say what should be moving.",
          "A counter also has limits. A changed number is evidence that the marker changed. It does not establish that every part of the screen rendered on time or that a click produced the right result.",
          "For a recording demo, I would want to name the action to watch alongside the marker. Is it a value that should change after pressing a button, or the position of an object being dragged? Saying what should appear in the record gives us something specific to look for when it does not.",
          "The impression that a video looks smooth can stand. It just does not count the updates preserved. Counting a marker, in turn, does not tell us whether the recording is pleasant or easy for a person to read.",
          "Imagine attaching the original lists to a file description. Both last one second and contain 60 stored slots. Add that their counters distinguish 60 and 30 values, and there is finally a reason to read the two records differently.",
          "I would pause between the first 0 and the second 0. Was the same scene captured twice, or was the next scene I expected absent? There is room for another question beside the 60 fps label.",
        ],
      },
    ],
  },
};
