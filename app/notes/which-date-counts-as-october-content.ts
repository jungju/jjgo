import type { Note } from "./notes-data";

export const octoberDateNote: Note = {
  page: "noteOctoberDate",
  category: "DATA & AI",
  date: "2026-11-06",
  sample: false,
  relatedPages: ["noteJoinRevenue", "noteMovingChart"],
  image: "/a/generated/notes/which-date-counts-as-october.webp",
  imageAlt: {
    ko: "날짜를 뜻하는 초록색과 산호색 탭이 달린 주문 카드 세 개, 두 필터 창과 달력·계산기",
    en: "Three order cards with green and coral date tabs, two filter windows, a calendar and a calculator",
  },
  ko: {
    title: "주문 세 건에서 10월이 둘 나왔다",
    summary:
      "주문일로 더하면 160, 정산일로 더하면 100. 직접 만든 작은 표에서 같은 달의 합계가 달라지는 이유를 따라갔다.",
    sources: [
      {
        label: "sutura · 지표 정의를 사용하는 런타임 소개",
        href: "https://github.com/telekom/sutura",
      },
      {
        label: "sutura · 카탈로그와 질의 방식",
        href: "https://telekom.github.io/sutura/main/",
      },
    ],
    sections: [
      {
        title: "작은 표에서 나온 두 숫자",
        paragraphs: [
          "주문 세 건만 있는 표를 만들어 10월 금액을 더해봤다. 주문일로 골랐을 때는 160, 정산일로 골랐을 때는 100이 나왔다. 같은 표인데.",
          "실제 회사 자료는 아니다. 날짜와 합계의 관계를 보려고 만든 예이고, 금액 단위도 임의로 두었다.",
          "A 주문은 금액 100이다. 10월 31일 주문했고 11월 2일 정산됐다.",
          "B 주문은 60이다. 주문일은 10월 30일, 정산일은 10월 31일이다.",
          "C 주문은 40이다. 9월 30일 주문했고 10월 2일 정산됐다.",
          "주문일이 10월인 것을 고르면 A와 B가 남는다. 100과 60을 더해 160이다. 정산일이 10월인 것을 고르면 B와 C가 남아 60과 40, 합계 100이 된다.",
          "세 건을 두 번씩 더한 것도 아니고, 표를 연결하다 주문이 늘어난 것도 아니다. 10월 안에 넣을 주문을 고르는 날짜 열이 달랐다.",
          "‘10월 매출이 얼마야?’라고만 물었다면, 이 작은 표에서도 먼저 답해줄 사람이 필요하겠다. 여기서 매출이라는 이름에 어느 기준을 붙일 것인가.",
          "두 계산 중 하나를 회계 기준으로 권하려는 것은 아니다. 이 예에서는 그런 기준을 정하지 않았다. 그래서 결과가 먼저 나와도 어느 쪽을 회사의 매출이라고 부를지는 아직 모르는 상태다.",
        ],
      },
      {
        title: "질문할 때마다 새로 정하지 않으려면",
        paragraphs: [
          "sutura의 설명을 읽다가 이 표를 만들었다. 프로젝트는 미리 정한 지표 정의를 사용해 데이터에 질의하는 런타임이라고 소개한다. 자연어로 묻는 편리함 뒤에서, 어떤 숫자를 뜻하는지도 같이 가져오려는 방향이 눈에 들어왔다.",
          "내가 앞의 표로 작은 질의 도구를 만든다면 ‘주문일 기준 주문 금액’과 ‘정산일 기준 주문 금액’부터 따로 이름 붙이고 싶다. 둘 중 무엇을 물었는지 결과 옆에서도 볼 수 있게.",
          "AI가 날짜 열을 보고 그럴듯한 것을 골라주면 처음에는 친절할 것이다. 다만 오늘은 주문일, 내일은 정산일을 고르면 질문한 사람은 같은 표에서 숫자가 바뀐 이유를 찾게 된다.",
          "이때 계산 코드를 다시 읽는 일만으로는 대화가 끝나지 않을 수 있다. 코드는 시킨 대로 더했을 수 있으니까. 그 앞에서 무엇을 더하자고 정했는지까지 봐야 한다.",
          "공식 문서는 정의를 고정한 카탈로그 스냅샷으로 받는다고 설명한다. 나는 이 대목에서 결과의 숫자와 함께, 그때 참조한 정의도 다시 찾을 수 있으면 좋겠다고 생각했다.",
          "정의를 파일에 적었다고 그 정의가 저절로 옳아지는 것은 아닐 것이다. 앞의 가상 도구라면 이름을 정한 사람에게 한번 물어봐야 한다. 이 합계는 어느 일을 보려고 만든 것인지.",
          "나중에 기준을 바꾸기로 했다면, 이전에 보낸 10월 숫자가 어느 기준이었는지도 남겨두고 싶다. 어제 숫자를 본 사람에게 오늘의 정의를 소리 없이 덧씌우고 싶지는 않다.",
          "여기서 실행한 것은 내가 만든 세 건의 날짜 필터와 덧셈이다. sutura를 연결해 회사 자료를 조회한 후기는 아니다. 작은 예를 따라가보니, 도구에 맡기기 전에 정해야 할 말이 생각보다 먼저 나왔다.",
        ],
      },
      {
        title: "10월은 어느 칸에 있었나",
        paragraphs: [
          "다시 160과 100을 나란히 놓는다. 숫자만 보면 차이가 꽤 크다. 날짜 열 이름을 붙이고 나면 같은 질문에 두 답이 싸우는 모습은 조금 사라진다.",
          "물론 실제 자료라면 취소나 반품, 시각과 시간대처럼 더 정할 것이 있겠다. 이 표에는 그 조건들을 넣지 않았다. 세 건만 놓아도 날짜 하나를 고르는 일은 남았다.",
          "둘 중 하나를 들고 회의에 들어간다고 해보자. 숫자가 틀렸다는 말을 들으면 계산기부터 열고 싶어질 것이다.",
          "그 전에 표의 맨 위를 가리키며 한 가지부터 물어보고 싶다.",
          "이번 10월은 주문한 날로 봤나요, 정산한 날로 봤나요.",
        ],
      },
    ],
  },
  en: {
    title: "Two Octobers in the same three orders",
    summary:
      "Order dates give 160; settlement dates give 100. An executed example with three invented orders explores what defines a monthly total.",
    sources: [
      {
        label: "sutura · Metric definitions and the runtime",
        href: "https://github.com/telekom/sutura",
      },
      {
        label: "sutura · Catalogs and queries",
        href: "https://telekom.github.io/sutura/main/",
      },
    ],
    sections: [
      {
        title: "Two numbers from a small table",
        paragraphs: [
          "I made a table of just three orders and added the October amounts. Selecting by order date gave 160. Selecting by settlement date gave 100. The table had not changed.",
          "These are invented records, not company data. The units are arbitrary; the example is about dates and totals.",
          "Order A has an amount of 100. It was ordered on October 31 and settled on November 2.",
          "Order B is 60, ordered on October 30 and settled on October 31.",
          "Order C is 40, ordered on September 30 and settled on October 2.",
          "October order dates leave A and B: 100 plus 60 makes 160. October settlement dates leave B and C: 60 plus 40 makes 100.",
          "No order was added twice, and a join did not multiply the rows. The date field used to decide what belongs in October changed.",
          "Ask only “What was October revenue?” and even this tiny table needs someone to answer another question first: which definition belongs to that name?",
          "I am not proposing either calculation as an accounting rule. The example deliberately has no such policy. Producing a total has not established which one the company should call revenue.",
        ],
      },
      {
        title: "Without inventing the definition each time",
        paragraphs: [
          "I made the table while reading about sutura. The project describes a runtime for querying data through predefined metric definitions. I was interested in bringing the meaning of a number along with the convenience of asking for it.",
          "For a small query tool over my example, I would start with separate names: order amounts by order date, and order amounts by settlement date. I would want the result to show which one was requested.",
          "Letting an AI choose a plausible date column could initially feel helpful. If it chooses order date today and settlement date tomorrow, the person asking must explain changing numbers from unchanged records.",
          "Reading the calculation code again might not settle that conversation. The code could have added exactly what it was told to add. The earlier choice of what to include still matters.",
          "The official documentation describes loading definitions as a pinned catalog snapshot. That made me want a way to recover the definition used at the time alongside the numerical result.",
          "Writing a definition into a file would not make it correct by itself. For my imagined tool, I would still ask whoever named the metric what work the total is meant to support.",
          "If the definition changes later, I would want the earlier October result to retain its own reference. Someone who saw yesterday’s number should not quietly receive today’s definition in its place.",
          "What I executed here was filtering dates and adding amounts in three invented rows. I did not connect sutura to company data. Even this small example left something to name before handing the question to a tool.",
        ],
      },
      {
        title: "Which column held October?",
        paragraphs: [
          "I put 160 beside 100 again. The difference looks substantial on its own. Add the date-field names, and the two answers look less as though they are fighting over the same question.",
          "Real material could bring cancellations, returns, timestamps and timezones to define as well. This table contains none of those conditions. Three rows still left a date choice to make.",
          "Imagine taking one total into a meeting. Hearing that the number is wrong might make me reach for a calculator.",
          "First, I would like to point to the table’s header and ask:",
          "Did this October mean the day of the order, or the day of settlement?",
        ],
      },
    ],
  },
};
