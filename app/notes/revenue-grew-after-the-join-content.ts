import type { Note } from "./notes-data";

export const joinRevenueNote: Note = {
  page: "noteJoinRevenue",
  category: "DATA & QUERIES",
  date: "2026-10-24",
  sample: false,
  relatedPages: ["notePueEnergy"],
  image: "/a/generated/notes/revenue-grew-after-the-join.webp",
  imageAlt: {
    ko: "두 영수증과 세 상품 조각을 연결한 실, 초록 영수증이 두 번 나타나는 세 줄짜리 종이 표",
    en: "Threads linking two receipts to three item tiles beside a three-row paper table that repeats the green receipt",
  },
  ko: {
    title: "표 두 개를 붙였더니 매출이 늘었다",
    summary:
      "가상 주문 두 건을 상품 행과 붙여 계산했다. 300이 400이 됐고, 중복 금액을 빼는 방법도 다음 예에서는 틀렸다.",
    sources: [
      {
        label: "datapitfalls — 데이터 처리와 해석의 함정",
        href: "https://github.com/bjonesdataliteracy/datapitfalls",
      },
      {
        label: "SQLite — SELECT와 JOIN",
        href: "https://www.sqlite.org/lang_select.html",
      },
      {
        label: "SQLite — 집계 함수와 DISTINCT",
        href: "https://www.sqlite.org/lang_aggfunc.html",
      },
    ],
    sections: [
      {
        title: "주문은 두 건이었는데",
        paragraphs: [
          "주문 A는 100달러, 주문 B는 200달러. 계산용으로 만든 두 주문의 금액을 더하면 300달러다. 상품 목록을 붙인 뒤 같은 주문 금액 열을 더했더니 400달러가 나왔다.",
          "물건을 더 판 적은 없다. 표를 하나 더 읽었을 뿐이다.",
          "datapitfalls의 소개 문서는 차트의 모양뿐 아니라 질문을 정하고 데이터를 변환하는 앞 단계의 실수도 살펴야 한다고 설명한다. 그 목록에서 조인으로 행이 늘어나는 문제를 보고, 작은 자료로 직접 확인해 봤다.",
          "도구의 분석 엔진을 실행한 것은 아니다. SQLite 메모리 DB에 가상 주문과 상품 행을 넣고, 금액은 센트 단위 정수로 저장해 합계를 비교했다. 아래 숫자는 그 짧은 실험에서 나온 값이다.",
          "완성된 그래프를 보기 전에, 100달러가 어디서 한 번 더 생겼는지 찾고 싶어졌다.",
        ],
      },
      {
        title: "한 주문이 두 줄에 앉는다",
        paragraphs: [
          "주문 A에는 상품 행이 두 개, B에는 하나 있다. 주문 번호로 두 표를 붙이면 A와 첫 상품, A와 둘째 상품, B와 그 상품이 한 줄씩 만들어진다.",
          "각 줄에 주문 금액도 따라온다. 100, 100, 200. 이것을 더하면 400이다. 합산 함수가 이상한 계산을 한 것은 아니다. 넘겨받은 숫자 세 개를 더했다.",
          "SQLite의 JOIN 설명대로, 조건에 맞는 행 조합이 결과에 남는다. A에 맞는 상품 행이 두 개라면 A의 주문 정보도 두 조합에 들어간다. 주문 번호가 잘못 연결돼야만 생기는 문제가 아니다.",
          "처음 표에서 한 행은 주문 한 건이었다. 두 표를 붙인 결과에서는 한 행이 주문과 상품 행의 조합이 됐다. 열 이름은 여전히 주문 금액이라 눈에 덜 띈다.",
          "보고서에 ‘매출’이라고 쓰기 전에, 이 열의 같은 금액이 같은 주문에서 두 번 왔는지 봐야겠다. 상품을 나눠 보여주려고 만든 줄이 주문 수까지 늘려 주는 것은 아닐 테니까.",
        ],
      },
      {
        title: "같은 금액을 지우면 다른 주문도 사라진다",
        paragraphs: [
          "그렇다면 중복 값을 빼고 더하면 될까. SUM(DISTINCT total_cents)를 적용한 첫 계산은 300달러였다. 원하던 숫자가 돌아왔다.",
          "여기서 끝내기는 조금 찜찜해서, 주문 B의 금액도 100달러로 바꿨다. 실제 주문은 두 건이고 합은 200달러다. 그런데 같은 계산은 100달러를 돌려줬다.",
          "SQLite 문서에서 이 DISTINCT는 집계 함수에 들어가는 중복 값을 거른다. 서로 다른 주문이 같은 금액을 썼다는 사실까지 구분해 주지는 않는다. 첫 예에서는 우연히 두 주문 금액이 달랐던 것이다.",
          "중복된 주문 금액을 한 번만 세려던 마음은 이해된다. 하지만 없애고 싶은 것은 같은 주문이 늘어난 행이고, 남겨야 하는 것은 금액이 같아도 별개인 주문이다.",
          "지갑에서 같은 액면의 지폐 두 장을 꺼냈다고 한 장을 없는 셈 치지는 않는다. 금액이 같다는 이유만으로 합칠 수 있는 일은 생각보다 적다.",
        ],
      },
      {
        title: "먼저 한 행씩 만들기",
        paragraphs: [
          "이번 자료에서는 상품 쪽을 주문 번호별로 먼저 묶었다. 상품 개수를 세더라도 결과는 주문마다 한 행이 되게 한 뒤, 그 결과를 주문 표에 LEFT JOIN으로 붙였다. 주문 쪽에는 주문 번호마다 한 행만 있다는 조건이다.",
          "이제 주문 금액을 더하면 첫 자료에서는 300달러, 두 주문이 각각 100달러인 자료에서는 200달러가 나왔다. 합계를 억지로 맞추기보다 주문 금액이 여러 줄에 복사되는 자리를 바꾼 것이다.",
          "이 작은 예가 모든 매출 보고서의 쿼리를 대신하지는 않는다. 무엇을 주문으로 세고, 어떤 금액을 합쳐야 하는지는 자료와 질문에 따라 정해야 한다. 여기서 확인한 것은 두 가상 표의 행 단위를 맞췄을 때의 결과다.",
          "SQL을 작성하거나 AI에게 맡길 때도, 기대하는 합계와 함께 ‘결과 한 행이 무엇인가’를 먼저 적어 두고 싶다. 실행 오류가 없다는 확인만으로는 이 예의 400달러를 걸러낼 수 없다.",
          "다시 400이 적힌 결과로 돌아간다. 소수점 자리나 막대 색을 손보기 전에, 그 아래 주문 번호부터 펼쳐 보겠다. A가 두 번 앉아 있다.",
        ],
      },
    ],
  },
  en: {
    title: "Revenue grew after the join",
    summary:
      "Joining synthetic orders to their items turned 300 into 400. Summing distinct amounts looked promising until two orders had the same price.",
    sources: [
      {
        label: "datapitfalls — pitfalls across data work",
        href: "https://github.com/bjonesdataliteracy/datapitfalls",
      },
      {
        label: "SQLite — SELECT and JOIN",
        href: "https://www.sqlite.org/lang_select.html",
      },
      {
        label: "SQLite — aggregate functions and DISTINCT",
        href: "https://www.sqlite.org/lang_aggfunc.html",
      },
    ],
    sections: [
      {
        title: "There were only two orders",
        paragraphs: [
          "Order A is $100 and order B is $200. These invented orders total $300. After attaching their item rows, summing the same order-total column returns $400.",
          "No extra sale took place. We read another table.",
          "The datapitfalls README argues for examining mistakes upstream of a chart, including question framing and data transformation. Its mention of joins multiplying rows prompted a small experiment.",
          "I did not run the tool’s analysis engine. I put synthetic orders and item rows into an in-memory SQLite database, stored money as integer cents, and compared the totals. The figures below come from that isolated exercise.",
          "Before looking at a finished chart, I wanted to find where the extra $100 appeared.",
        ],
      },
      {
        title: "One order takes two seats",
        paragraphs: [
          "Order A has two item rows and B has one. Joining on order ID produces three combinations: A with its first item, A with its second, and B with its item.",
          "The order total travels into each row: 100, 100, 200. Adding them yields 400. The aggregate has added the three quantities it received.",
          "SQLite’s JOIN documentation describes retaining combinations that satisfy the join condition. Two matching item rows put A’s order information into two combinations. The join key does not have to be wrong for this to happen.",
          "In the original table, a row represented an order. The joined result represents an order paired with an item row. A column still named order total makes the change easy to overlook.",
          "Before labeling the result revenue, I would ask whether repeated amounts came from the same order. Rows added to show the items do not create more orders.",
        ],
      },
      {
        title: "Removing equal amounts removes another order",
        paragraphs: [
          "Would summing unique values fix it? SUM(DISTINCT total_cents) returns $300 for the first fixture. The expected number is back.",
          "Before accepting that result, I changed B to $100 too. Two orders now total $200. The same calculation returns $100.",
          "SQLite documents this DISTINCT as filtering duplicate inputs to an aggregate. It cannot distinguish two separate orders that happen to cost the same. The different prices in the first fixture concealed the problem.",
          "The intention was to count an order’s repeated amount once. But we need to retain separate orders even when their amounts match.",
          "Two banknotes with the same face value are still two banknotes. Equal monetary values are not enough reason to merge the things carrying them.",
        ],
      },
      {
        title: "Make one row per order first",
        paragraphs: [
          "For these fixtures, I grouped the item side by order ID first. Counting items still leaves one summary row per order. I then attached that result to the orders with a LEFT JOIN, assuming one source row per order ID.",
          "The order totals now sum to $300 in the first fixture and $200 when both orders cost $100. The change removes the place where the order total was repeated across item rows.",
          "This small example cannot supply the query for every revenue report. The data and question determine what counts as an order and which amount to sum. I checked the results of aligning the row units of these two invented tables.",
          "When writing SQL, or asking AI to write it, I would state what one result row represents alongside the expected total. A query that runs without errors still lets this example’s $400 through.",
          "I return to the result showing 400. Before adjusting decimal places or bar colors, I would unfold the order IDs beneath it. A has taken two seats.",
        ],
      },
    ],
  },
};
