import type { Note } from "./notes-data";

export const movingChartNote: Note = {
  page: "noteMovingChart",
  category: "SYSTEMS & DOCUMENTS",
  date: "2026-10-22",
  sample: false,
  image: "/a/generated/notes/the-document-stayed-the-chart-moved-on.webp",
  imageAlt: {
    ko: "펼친 노트의 창을 통과하는 그래프 종이와 집게로 따로 보관한 뾰족한 그래프 조각",
    en: "A graph-paper ribbon passing through an open notebook beside a clipped piece preserving a spike",
  },
  ko: {
    title: "문서는 그대로인데, 차트는 다음 날로 갔다",
    summary:
      "장애 회고에 붙인 ‘최근 30분’ 차트를 다음 날 열면 어떨까. 링크는 잘 열리는데, 어제 설명하던 산이 사라질 수 있다.",
    sources: [
      {
        label: "Oxynote — 실시간 지표를 문서에 연결하는 기술 위키",
        href: "https://github.com/oxynote/oxynote",
      },
      {
        label: "Prometheus — 범위 조회 API",
        href: "https://prometheus.io/docs/prometheus/latest/querying/api/#range-queries",
      },
    ],
    sections: [
      {
        title: "어제의 문장 옆에 오늘의 그래프",
        paragraphs: [
          "장애 회고 문서에 ‘최근 30분’ 차트를 붙였다고 해보자. 본문에는 오전 9시 10분에 오류가 늘었다고 적었다. 다음 날 동료가 문서를 연다. 그래프는 평온하다.",
          "분명 어제는 저기에 뾰족한 산이 있었는데.",
          "서버가 회복된 것은 다행이다. 다만 문서를 처음 읽는 사람에게는 이제 설명할 것이 하나 더 생겼다. 문장은 어제 일을 말하고, 바로 옆 차트는 오늘 아침을 보고 있다.",
          "Oxynote의 소개 문서를 읽으면서 이 장면이 떠올랐다. 설명하는 문단 옆에 실시간 지표를 놓고, 문서와 차트 설정의 변경을 함께 검토하는 기술 위키다. 상태를 보러 갈 탭과 뜻을 찾으러 갈 탭이 가까워지는 점이 마음에 들었다.",
          "그렇게 가까이 붙여 놓았을 때, 두 곳의 시간이 어디를 향하는지도 같이 보이면 좋겠다.",
        ],
      },
      {
        title: "같은 주소로 다른 아침을 연다",
        paragraphs: [
          "운영 절차서에서 최근 30분을 보여주는 것은 자연스럽다. 지금도 문제가 이어지는지 보면서 다음 행동을 정해야 하니까. 문서 안에서 선이 계속 갱신되면 오히려 수고를 던다.",
          "그런데 그 절차서를 따라 처리한 사건을 기록할 때는 시간이 조금 다르게 쓰인다. ‘오류가 늘자 작업을 멈췄다’는 문장에는 판단하던 당시의 화면이 붙어 있어야 이해하기 쉽다.",
          "링크 주소를 복사해 붙여 놓으면 그 화면까지 함께 보관한 기분이 들 수 있다. 하지만 ‘최근’이라는 조건을 다시 계산하는 링크라면, 다음 사람이 같은 주소로 다른 아침을 열게 된다.",
          "친절하게 넣은 그래프가 문장의 증인 역할을 맡았다가, 다음 날 다른 곳에 가 있는 셈이다. 링크는 여전히 잘 열린다. 그래서 더 늦게 눈치챌 수도 있겠다.",
        ],
      },
      {
        title: "그날의 시간을 적는 자리",
        paragraphs: [
          "가상의 회고 문서라면 먼저 날짜와 시간대를 적겠다. ‘오전 9시 무렵’ 대신, 사건이 있었던 날짜의 09:00부터 09:30까지, 한국 시간이라고. 읽는 사람이 자기 컴퓨터의 시각으로 짐작할 일을 줄이고 싶다.",
          "Prometheus의 범위 조회 API에는 질의식과 시작·종료 시각, 조회 간격인 step을 지정하는 항목이 있다. 차트를 남길 때 내가 같이 적어 둘 조건을 생각하는 데 도움이 된다.",
          "어느 서비스와 지역을 골랐는지, 어떤 식으로 계산했는지, 얼마 간격으로 평가했는지. 그림 파일 이름 하나로는 찾기 어려운 내용들이다. 예쁜 차트 아래에 이런 작은 글자가 붙는 것은 별로 낭만적이지 않지만, 다음 사람이 다시 물어볼 거리는 줄겠다.",
          "시간 범위를 고정했다고 해서 그때 읽은 응답까지 보관된 것은 아니다. 나중에도 그 자료를 조회할 수 있는지와, 문서를 쓰던 순간 무엇을 봤는지는 별도로 남기고 싶다.",
          "그래서 중요한 장면에는 조회 조건과 함께, 그때 얻은 결과나 캡처와 저장 시각도 붙이겠다. 캡처만으로 계산을 다시 할 수는 없겠지만, 적어도 문장을 쓸 때 어떤 선을 보고 있었는지는 남는다.",
          "물론 그 선 하나가 장애 원인을 밝혀 주지는 않는다. 오류가 늘어난 시각과 어떤 변경이 겹쳤다는 관찰에서, 그 변경 때문에 오류가 늘었다는 결론까지는 더 확인할 것이 있다. 기록을 잘 남겼다고 추론이 대신 끝나는 것은 아니다.",
        ],
      },
      {
        title: "새로고침할 곳과 다시 읽을 곳",
        paragraphs: [
          "이런 생각을 하다 보면 실시간 차트를 문서에서 빼야 하나 싶지만, 나는 두 장면을 다 남기고 싶다. 지금 대응하는 사람에게는 현재 상태가 필요하고, 나중에 사건을 읽는 사람에게는 그날의 범위가 필요하다.",
          "페이지 위쪽의 운영 차트는 계속 움직이게 둔다. 사건을 설명하는 문단 옆에는 그날의 시간을 적은 작은 관측 기록을 둔다. 어느 쪽을 보고 있는지 제목에서 알아볼 수 있으면 좋겠다.",
          "현재 차트에서 다시 이상이 보이면 거기서부터 새로 살펴본다. 지난 회고의 캡처를 몰래 최신 것으로 갈아 끼우지는 않겠다. 그러면 어제 적은 문장의 뜻까지 바뀌어 버릴 것 같다.",
          "다음 날 동료가 평온한 선을 보고 고개를 갸웃하는 장면으로 돌아온다. ‘지금 상태’ 옆에 링크를 하나 더 달아 두고 싶다.",
          "‘그날 아침 보기.’",
        ],
      },
    ],
  },
  en: {
    title: "The document stayed. The chart moved on.",
    summary:
      "A rolling chart inside an incident review can move beyond the event it explains. What would I keep beside the paragraph?",
    sources: [
      {
        label: "Oxynote — technical documentation with live metrics",
        href: "https://github.com/oxynote/oxynote",
      },
      {
        label: "Prometheus — range-query API",
        href: "https://prometheus.io/docs/prometheus/latest/querying/api/#range-queries",
      },
    ],
    sections: [
      {
        title: "Yesterday’s sentence, today’s chart",
        paragraphs: [
          "Imagine attaching a “last 30 minutes” chart to an incident review. The paragraph says errors rose at 9:10 a.m. A colleague opens the document the following day. The graph is calm.",
          "There was definitely a spike there yesterday.",
          "The recovery is welcome. But the colleague now needs another explanation: the sentence describes yesterday, while its neighboring chart shows this morning.",
          "Oxynote’s README brought this scene to mind. The technical wiki places live metrics beside explanatory paragraphs and lets changes to text and chart configuration go through a shared review. Bringing the place where I check a system closer to the place where I learn what its numbers mean appeals to me.",
          "With them that close together, I would also like to see which moment each is describing.",
        ],
      },
      {
        title: "One address, another morning",
        paragraphs: [
          "A rolling 30-minute window makes sense in a runbook. Someone deciding what to do next needs to know whether the problem is continuing. An updating line inside the page can save a trip elsewhere.",
          "An account of the incident uses time differently. A sentence saying that work stopped when errors rose is easier to understand alongside what was visible at that decision.",
          "Copying a chart’s address can feel like saving that view. But if the link recalculates a window relative to now, the next reader opens another morning at the same address.",
          "The helpful graph has taken the role of a witness, then wandered elsewhere the next day. The link still opens perfectly. That could make the mismatch harder to notice.",
        ],
      },
      {
        title: "A place to write the time",
        paragraphs: [
          "For this imagined review, I would begin with a date and timezone: 09:00 to 09:30 on the incident date, Korea Standard Time. “Around nine” leaves too much for someone else to infer.",
          "Prometheus’s range-query API specifies an expression, start and end timestamps, and an evaluation interval called step. Those fields suggest conditions I would keep beside a saved chart.",
          "Which service and region were selected? What expression produced the line, and at what interval was it evaluated? An image filename is a poor place to recover those details. Small print under a beautiful chart may be unromantic, but it could spare the next reader several questions.",
          "Fixing the time range does not itself retain the response seen at that moment. Whether the data can be queried later and what the author actually observed deserve their own record.",
          "For an important scene, I would keep the query conditions together with the returned result or a capture, plus the capture time. A screenshot alone cannot reproduce the calculation, but it can preserve the line that informed the paragraph.",
          "That line still cannot establish the cause of the incident. Observing an error increase near a change leaves more work before concluding that the change caused it. A better record does not finish the reasoning for us.",
        ],
      },
      {
        title: "Somewhere to refresh, somewhere to return",
        paragraphs: [
          "I would keep both views in the document. The person responding now needs the current system; someone reading the incident later needs the interval being discussed.",
          "The operational chart could continue updating near the top. Beside the incident paragraph, a smaller observation could name that day’s interval. The headings should make clear which view the reader has reached.",
          "If a fresh problem appears in the current chart, that begins another investigation. I would leave the earlier review’s capture in place. Quietly replacing it with today’s picture could change what yesterday’s sentence appears to mean.",
          "I return to the colleague puzzling over the calm graph. Beside “Current status,” I would add another link.",
          "“That morning.”",
        ],
      },
    ],
  },
};
