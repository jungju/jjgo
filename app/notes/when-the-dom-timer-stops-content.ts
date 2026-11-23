import type { Note } from "./notes-data";

export const domTimerNote: Note = {
  page: "noteDomTimer",
  category: "WEB & MEASUREMENT",
  date: "2026-11-24",
  sample: false,
  relatedPages: ["noteGpuFreeTest", "noteDistinctFrames"],
  image: "/a/generated/notes/when-the-dom-timer-stops.webp",
  imageAlt: {
    ko: "완성된 종이 메시지와 이를 일부 가린 반투명 화면 사이에 황동 시계가 놓인 그림",
    en: "A brass clock between an assembled paper message and a translucent screen partly concealing it",
  },
  ko: {
    title: "DOM 갱신이 끝난 시간과 답변을 읽는 시간",
    summary:
      "Words의 측정 설명에서 시계가 멈추는 지점을 읽었다. DOM까지의 작업과 눈앞에 그려진 답변을 같은 시간으로 옮겨 적고 싶지는 않았다.",
    sources: [
      {
        label: "Words · Official rendering measurement methodology",
        href: "https://diffs.com/words",
      },
    ],
    sections: [
      {
        title: "시계는 어디에서 멈췄나",
        paragraphs: [
          "답변이 다 왔다고 표시되는 화면을 하나 상상해 보자. 마지막 글자는 받았고, 프로그램도 문장을 화면 구조에 넣었다. 그런데 사람이 읽을 화면이 언제 준비됐는지를 묻는다면, 어디에서 시계를 멈춰야 할까.",
          "Words의 Markdown 렌더링 소개를 읽다가 속도 숫자보다 그 아래의 측정 설명에 눈이 갔다. 브라우저 스트리밍 항목은 갱신이 DOM에 반영될 때까지의 일을 잰다고, 페인트 전 구간이라고 설명한다.",
          "그 경계가 적혀 있는 것이 좋았다. 같은 렌더링 시간이라는 이름을 붙여도, 어떤 일을 끝으로 잡았는지에 따라 다른 질문에 답할 수 있기 때문이다.",
          "여기서 직접 라이브러리를 설치하거나 화면 시간을 재지는 않았다. 공개된 벤치마크의 빠르기나 비교 비율을 내 환경의 결과로 옮기려는 것도 아니다. 설명에 적힌 시계의 끝점을 따라가 본 것이다.",
          "가상의 답변 화면에서는 텍스트를 받는 일, 받은 것을 DOM에 넣는 일, 사람이 볼 화면을 그리는 일을 나눠 적고 싶다. 같은 시간표에 놓을 수는 있어도 같은 사건은 아니다.",
        ],
      },
      {
        title: "기다리는 사람이 보는 끝점",
        paragraphs: [
          "DOM까지의 시간이 짧아졌다면 그 구간에서 줄인 일을 볼 이유가 있다. 다만 그 사실 하나로 전체 답변이 눈앞에 더 빨리 나타났다는 결론까지 내릴 수는 없다. 측정하지 않은 뒤쪽 구간이 남아 있다.",
          "반대도 마찬가지다. 사용자가 오래 기다렸다는 말만 듣고 Markdown 파서가 느리다고 정하면, 앞에서 답변을 받는 시간이나 뒤에서 화면을 그리는 일을 놓칠 수 있다. 아직 어느 구간이었는지 모른다.",
          "그래서 화면을 고치는 일을 맡는다면, 먼저 사용자가 기다리는 끝점을 정하고 싶다. 첫 문장을 읽을 수 있는 순간인지, 긴 표까지 다 볼 수 있는 순간인지. 첫 글자와 마지막 표가 같은 목적을 갖지는 않는다.",
          "Words 페이지는 별도의 JSDOM 시험에서 파싱과 DOM 작업을 측정하며 레이아웃과 페인트는 포함하지 않는다고도 밝힌다. 이런 설명을 보고 나면 두 표의 숫자를 같은 종류의 체감 시간처럼 옮겨 적기가 조심스러워진다.",
          "특정 구간만 재는 것이 잘못이라는 생각은 들지 않는다. 고치려는 부분을 좁혀 비교할 때는 그 구간이 필요하다. 다만 보고서에 옮길 때도 그 범위를 같이 가져오고 싶다.",
          "앞의 화면에서 내가 적어둘 문장은 조금 달라질 것 같다. DOM 갱신까지 확인한 결과라면 그렇게 적고, 실제 표시 시간은 별도로 확인할 일로 남긴다. 애니메이션이 부드럽다는 감상도 다른 측정의 빈칸을 대신 채우지는 않는다.",
          "마지막 글자를 받았다는 작은 표시 옆으로 돌아온다. 사용자는 그 표시보다 답변을 읽고 싶었을 것이다. 내가 누를 정지 버튼도, 지금 무엇을 기다리는 사람의 시계인지부터 맞춰 놓고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "When the DOM timer stops, can we read the answer?",
    summary:
      "Reading the endpoints in Words’ measurement methodology: work reaching the DOM and an answer drawn on screen should not become the same timing claim.",
    sources: [
      {
        label: "Words · Official rendering measurement methodology",
        href: "https://diffs.com/words",
      },
    ],
    sections: [
      {
        title: "Where did the timer stop?",
        paragraphs: [
          "Imagine a reply screen that says the answer has finished arriving. The last character was received, and the program has written the text into the page structure. If we ask when the answer was ready for someone to read, where should the timer stop?",
          "Reading Words’ Markdown-rendering page, I paused at the measurement description beneath the speed figures. Its browser-streaming metric describes work until updates reach the DOM, before paint.",
          "I liked having that boundary stated. Two numbers called rendering time can answer different questions when their finish lines differ.",
          "I have not installed the library or timed a screen here. Nor am I treating the published speed figures or comparison ratios as results from my environment. This is a reflection on the endpoint the methodology names.",
          "For our imaginary reply screen, I would separate receiving text, writing it into the DOM and drawing what a person can see. They can share a timeline without being the same event.",
        ],
      },
      {
        title: "The reader’s finish line",
        paragraphs: [
          "A shorter time to the DOM can be useful evidence about work saved in that interval. It does not alone establish that the complete answer became visible sooner. The later interval remains unmeasured by that number.",
          "The reverse inference is risky too. Hearing that someone waited a long time does not identify a slow Markdown parser. Receiving the answer or drawing the screen could also be part of the wait. We have not located it yet.",
          "Before changing this screen, I would want to choose the endpoint the reader needs. Is it the first readable sentence, or the point when a long table is visible too? The first character and the last table need not serve the same task.",
          "The Words page also describes a separate JSDOM test measuring parsing and DOM work without layout or paint. That makes me cautious about reporting numbers from different tables as interchangeable measures of perceived waiting.",
          "Measuring a narrow interval is not inherently a problem. It can be exactly what is needed to compare the part being improved. I would just like to carry the interval’s scope into the report as well.",
          "For our screen, that changes the sentence I would write. If the observation ends at the DOM update, say so; leave actual display timing as another thing to check. An impression of smooth animation cannot fill the missing measurement either.",
          "I return to the little indicator saying the last character arrived. The person probably wanted to read the answer, not the indicator. Before pressing stop, I would like the timer to match the wait we meant to examine.",
        ],
      },
    ],
  },
};
