import type { Note } from "./notes-data";

export const averageSpikeNote: Note = {
  page: "noteAverageSpike",
  category: "DATA & VISUALIZATION",
  date: "2026-11-15",
  sample: false,
  relatedPages: ["noteMovingChart", "noteWaitingRequests"],
  image: "/a/generated/notes/the-spike-inside-the-average.webp",
  imageAlt: {
    ko: "같은 금색 요약 표식이 붙은 두 종이 카드 뒤로 낮은 리본과 돋보기 아래 솟은 리본이 보이는 개념 그림",
    en: "Two paper cards with matching gold summary tokens, one hiding a low ribbon and the other a tall loop beneath a magnifying glass",
  },
  ko: {
    title: "평균 300밀리초였는데, 한 번은 900이었다",
    summary:
      "가상의 응답 시간 네 개를 계산해 보니 평균은 같고 가장 긴 기다림은 달랐다. TradeCanvas의 집계 문서를 읽으며, 요약한 뒤에도 남겨야 할 숫자를 생각했다.",
    sources: [
      {
        label: "TradeCanvas — GitHub",
        href: "https://github.com/bonguynvan/tradecanvas",
      },
      {
        label: "TradeCanvas — Tick Aggregation",
        href: "https://tradecanvas.dev/docs/realtime/#tick-aggregation",
      },
    ],
    sections: [
      {
        title: "300이라는 숫자 뒤에서",
        paragraphs: [
          "300, 300, 300, 300. 그리고 100, 100, 900, 100. 가상의 응답 시간을 밀리초 단위로 놓고 평균을 계산했다. 둘 다 300이었다. 합계도 1,200으로 같다.",
          "실제 서버에서 모은 기록은 아니다. 숫자 네 개씩을 만들어 계산한 작은 예다. 그런데 평균만 적어두고 원래 숫자를 가리니, 어느 쪽에 900이 있었는지 알 수 없었다.",
          "한 번씩 눌러 결과를 기다리는 사람을 상상하면 차이가 좀 더 선명해진다. 첫 번째에서는 네 번 모두 같은 길이로 기다린다. 두 번째에서는 세 번이 짧고 한 번이 길다. 두 사람에게 평균 300밀리초였다고 말할 수는 있다. 다만 그 말로 서로의 기다림까지 같아지지는 않는다.",
          "이 숫자를 적게 된 계기는 TradeCanvas의 실시간 데이터 문서였다. 차트를 그리는 라이브러리인데, 원시 틱을 OHLC 막대로 묶는 TickAggregator가 나온다. 한 구간에서 처음 값, 가장 높은 값, 가장 낮은 값, 마지막 값을 남긴다.",
          "차트 엔진을 설치해 돌려본 것은 아니다. 문서의 집계 방식을 보다가, 값들을 묶을 때 무엇이 살아남는지가 눈에 들어왔다. 평균 하나를 내는 것과는 다른 선택이었다.",
          "그래서 두 번째 응답 시간에도 같은 네 항목을 적어봤다. 처음 100, 최고 900, 최저 100, 마지막 100. 적어도 긴 기다림이 한 번 끼어 있었다는 흔적은 남는다. 첫 번째 묶음은 네 항목이 모두 300이다.",
          "물론 금융 차트의 OHLC를 응답 시간 모니터링에 그대로 쓰자는 뜻은 아니다. 여기서는 작은 숫자 묶음으로, 요약에 넣은 항목이 답할 수 있는 질문을 어떻게 바꾸는지만 살펴봤다.",
          "평균은 틀리지 않았다. 물어보고 싶은 것이 어느 한 번의 기다림이라면, 그 숫자 하나로는 모자랐다. 맞는 답을 받고도 다시 물어야 하는 경우가 이런 모양일 것 같다.",
        ],
      },
      {
        title: "최고값을 남겨도 사라지는 것",
        paragraphs: [
          "최고값까지 저장하면 끝일까. 이번에는 두 번째 묶음에서 900을 한 칸 앞으로 옮겼다. 100, 900, 100, 100. 평균은 여전히 300이다.",
          "처음과 마지막은 100, 최고는 900, 최저는 100. 앞서 적은 네 항목도 그대로다. 하지만 오래 기다린 것은 세 번째 요청에서 두 번째 요청으로 바뀌었다.",
          "최고값이 있다는 사실과 언제 그 값이 나왔는지는 서로 다른 정보였다. 구간의 시작과 끝을 안다고 중간 순서까지 복원할 수는 없었다.",
          "내가 알고 싶은 것이 잠깐 느려졌는지라면 최고값이 도움이 된다. 어느 요청이 느렸는지를 찾고 싶으면 시각이나 요청별 기록이 더 필요하다. 자주 느려졌는지를 묻는 데에도 최고값 하나는 충분하지 않다.",
          "대시보드에 숫자를 몇 개 더 붙이는 일이 늘 친절한 것도 아닐 것이다. 읽는 사람이 찾는 답이 없으면, 숫자는 늘고 질문은 그대로 남는다. 이 예에서도 네 항목을 다 적은 뒤에야 순서를 잃었다는 걸 확인했다.",
          "그래서 요약 화면을 볼 때 먼저 던질 질문이 하나 생겼다. 지금 이 화면으로 무엇을 찾으려는 걸까. 전체 수준인지, 가장 긴 한 번인지, 그 한 번이 생긴 자리인지.",
          "질문이 정해지면 원래 기록을 어디까지 남길지, 요약에서 어디로 내려가 볼 수 있어야 할지도 조금 구체적으로 말할 수 있다. 모든 데이터를 첫 화면에 펼치자는 얘기와는 다르다.",
          "평균 300이라고 적힌 칸은 그대로 두어도 된다. 그 옆에서, 900을 기다린 한 번을 다시 찾아갈 수 있으면 좋겠다.",
        ],
      },
    ],
  },
  en: {
    title: "An average of 300 ms, with one wait of 900",
    summary:
      "Two invented sets of four response times have the same average and very different longest waits. Reading TradeCanvas’s aggregation docs led to a small calculation about what a summary keeps.",
    sources: [
      {
        label: "TradeCanvas — GitHub",
        href: "https://github.com/bonguynvan/tradecanvas",
      },
      {
        label: "TradeCanvas — Tick Aggregation",
        href: "https://tradecanvas.dev/docs/realtime/#tick-aggregation",
      },
    ],
    sections: [
      {
        title: "Behind the number 300",
        paragraphs: [
          "300, 300, 300, 300. Then 100, 100, 900, 100. I calculated the average of these invented response times in milliseconds. Both came out to 300. Their totals were identical too: 1,200.",
          "These are made-up values, not records from a server. But once I covered the original numbers and kept only the averages, there was no way to tell which set contained the 900.",
          "Imagine someone clicking once and waiting for each result. In the first set, all four waits have the same length. In the second, three are short and one is longer. You can tell both people the average was 300 ms. That does not make their waits feel the same.",
          "I wrote these numbers down after reading TradeCanvas’s realtime data documentation. The charting library includes a TickAggregator that rolls raw ticks into OHLC bars. It keeps the open, high, low and close for an interval: the first value, the highest, the lowest and the last.",
          "I did not install or run the chart engine. What caught my attention in the documentation was the choice of information to keep when several values become one record. It was a different choice from calculating a single average.",
          "So I wrote those four fields beside the second set of response times: first 100, high 900, low 100, last 100. At least the longer wait left a trace. For the first set, all four fields were 300.",
          "This is not a proposal to use financial OHLC bars as a response-time monitoring method. The small example is simply a way to see how the fields in a summary change the questions it can answer.",
          "The average was correct. It just could not answer a question about one particular wait. Sometimes a correct answer still leaves you needing to ask again.",
        ],
      },
      {
        title: "What the high still leaves out",
        paragraphs: [
          "Would keeping the high be enough? I moved the 900 one place earlier in the second set: 100, 900, 100, 100. The average remained 300.",
          "First and last: 100. High: 900. Low: 100. Those four fields were unchanged as well. Yet the long wait had moved from the third request to the second.",
          "Knowing the highest value and knowing when it happened turned out to be different things. Keeping the ends of an interval did not recover the order inside it.",
          "If I want to know whether something briefly slowed down, the high helps. To find the particular request, I need something else, such as timestamps or individual request records. The high alone cannot tell me how often things were slow either.",
          "Adding more figures to a dashboard is not automatically helpful. If the answer someone needs is still missing, they have more numbers and the same question. In this example, writing all four fields was what made the missing order visible.",
          "It gave me a question to ask before reading a summary screen: what am I trying to find here? The overall level, the longest wait, or the place where that wait occurred?",
          "With that settled, it becomes easier to say which original records to retain and what the summary should let a reader open next. That does not mean putting every record on the first screen.",
          "The box labelled average 300 can stay. I would like a way back to the one wait of 900 beside it.",
        ],
      },
    ],
  },
};
