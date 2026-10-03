import type { Note } from "./notes-data";

export const waitingRequestsNote: Note = {
  page: "noteWaitingRequests",
  category: "SERVER & OPERATIONS",
  date: "2026-10-03",
  sample: false,
  image: "/a/generated/notes/idle-cpu-waiting-requests.webp",
  imageAlt: {
    ko: "멈춘 작업장 기계 옆에서 좁은 황동 문 앞에 길게 줄 선 종이 요청 표",
    en: "Paper request tickets queue at a narrow brass gate beside an idle workshop machine",
  },
  ko: {
    title: "CPU는 쉬는데 요청은 기다린다",
    summary:
      "서버가 한가해 보이는데 응답은 늦다. 가상의 주문 요청을 따라가며 DB 연결을 빌리는 시간과 돌려주는 시간을 나눠 본다.",
    sources: [
      {
        label: "GeekNews · 서버 모니터링 분석 가이드",
        href: "https://news.hada.io/topic?id=34478",
      },
      {
        label: "kciter · 서버 모니터링 분석 가이드",
        href: "https://kciter.so/posts/server-monitoring-analysis-guide/",
      },
      {
        label: "Google SRE · Monitoring Distributed Systems",
        href: "https://sre.google/sre-book/monitoring-distributed-systems/",
      },
    ],
    sections: [
      {
        title: "안에서는 조용한데",
        paragraphs: [
          "CPU 그래프는 한가하다. 그런데 주문 버튼을 누른 사람은 다음 화면을 보지 못한다. 이 상황을 가정하면 ‘서버가 바쁘지 않은데 왜 늦지?’라는 질문부터 조금 이상해진다. 계산하지 않고 기다리는 시간도 있으니까.",
          "GeekNews에서 읽은 서버 모니터링 가이드는 커넥션 풀이 말랐을 때 연결 수부터 늘리지 말고, 왜 반납이 늦어졌는지 보라고 한다. 느린 DB에 동시 작업을 더 얹으면 오히려 상황이 나빠질 수 있다는 설명이다.",
          "이 지점에서 가상의 주문 API 하나를 따라가 보고 싶어졌다. DB 연결을 빌리고, 주문을 저장하고, 배송 서비스에 알린 뒤 응답하는 프로그램이라고 해보자.",
          "사용자는 이 과정을 한 번의 기다림으로 겪는다. 서버 쪽에서는 그 시간을 여러 칸으로 나눌 수 있다. 요청이 들어온 때, 연결을 빌리려 한 때, 실제로 빌린 때, DB 작업이 끝난 때, 연결을 돌려준 때.",
          "지금은 어느 칸에 시간이 쌓이고 있을까.",
        ],
      },
      {
        title: "빌린 뒤 무엇을 하고 있나",
        paragraphs: [
          "이 예에서 풀 대기가 길다고 가정해보자. 그것만으로 DB 쿼리가 느리다고 결정할 수는 없다. 먼저 연결을 가진 요청이 무엇을 하고 있는지 봐야 한다.",
          "코드를 보니 주문 저장은 끝났는데 배송 서비스의 응답까지 기다린 뒤에야 연결을 반납하도록 되어 있다면 어떨까. DB는 일을 마쳤지만, 다음 요청은 쓸 연결이 없어 기다린다. CPU가 한가한 모습도 이상하지 않다.",
          "이것은 실제 장애 보고가 아니라, 빌리는 시간과 보유하는 시간을 나눠야 하는 이유를 드러내기 위한 가정이다. 같은 풀 대기라도 느린 쿼리, 잠금, 늦은 외부 호출 때문에 연결을 오래 붙잡는 코드는 고치는 곳이 다르다.",
          "그래서 대시보드에 ‘DB 시간’ 하나만 있으면 아쉽다. 이 말이 쿼리 실행 시간인지, 연결을 얻기까지 포함한 시간인지부터 알아야 한다. 단위가 같아도 시작점이 다르면 다른 기다림을 재고 있다.",
          "연결을 더 만든 뒤 주문이 잠깐 빨라졌다고 해도 예의 코드가 고쳐진 것은 아니다. 외부 호출이 다시 느려지면 더 많은 요청이 연결을 잡고 서 있을 수 있다. 풀 크기를 정하기 전에 반납을 막는 구간을 확인할 이유다.",
          "그렇다고 트랜잭션을 무조건 짧게 자르면 되는 것도 아니다. 이 주문에서 함께 확정되어야 할 변경이 무엇인지 보고, 외부 알림의 실패를 어떻게 다시 처리할지 따로 정해야 한다.",
        ],
      },
      {
        title: "빨리 끝난 실패",
        paragraphs: [
          "한 번 더 이 상황을 바꿔보자. 기다리던 요청들이 연결을 얻지 못하고 일찍 실패하기 시작한다. 응답 시간 평균만 보면 오히려 좋아 보일 수도 있다. 사용자는 여전히 주문을 못 했다.",
          "Google의 SRE 책도 성공과 실패의 지연을 구분해서 보라고 설명한다. 빠르게 끝나는 오류가 전체 지연 수치를 오해하게 만들 수 있기 때문이다. 낮은 숫자를 보기 전에 그 응답이 무엇이었는지 봐야 한다.",
          "이 가상의 주문 서비스라면 성공한 주문의 지연과 실패율을 먼저 놓겠다. 그다음 같은 시간대의 유입량, 풀 대기, 연결 보유 시간을 붙인다. 각각 다른 요청과 다른 집계 구간을 보고 있다면 그 차이도 표시한다.",
          "그래도 기다린 자리가 안 보일 수 있다. 계측하지 않은 구간을 ‘문제없음’으로 칠하면 그림만 말끔해진다. 여기서부터 여기까지는 아직 모른다고 남기는 편이 다음 확인에는 도움이 된다.",
          "이 글은 특정 서비스의 장애를 재현하거나 풀 크기의 정답을 제시한 것이 아니다. 한 요청에 붙은 시간을 나누어 보는 생각 실험이다.",
          "밖에서는 줄을 서고 있는데 안에서는 의자가 비어 있다. 창구를 더 만들기 전에, 빌린 열쇠를 누가 아직 가지고 있는지 보고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "The CPU is idle. The request is still waiting.",
    summary:
      "An imagined order request shows why waiting for a database connection and holding one need separate clocks.",
    sources: [
      {
        label: "GeekNews · Server monitoring analysis guide",
        href: "https://news.hada.io/topic?id=34478",
      },
      {
        label: "kciter · Server monitoring analysis guide",
        href: "https://kciter.so/posts/server-monitoring-analysis-guide/",
      },
      {
        label: "Google SRE · Monitoring Distributed Systems",
        href: "https://sre.google/sre-book/monitoring-distributed-systems/",
      },
    ],
    sections: [
      {
        title: "Quiet inside",
        paragraphs: [
          "The CPU graph looks quiet. Someone presses the order button and never gets to the next screen. In this hypothetical situation, ‘Why is it slow when the server is not busy?’ already needs a better definition of busy. Waiting takes time without doing much computation.",
          "The monitoring guide linked on GeekNews asks why database connections are being returned slowly before increasing the pool size. Adding concurrent work to an already slow database can make matters worse.",
          "That detail makes me want to follow one imaginary order API. It borrows a database connection, saves an order, notifies a delivery service and sends a response.",
          "The customer experiences one wait. Inside the application, we can give it several timestamps: request arrival, connection requested, connection acquired, database work finished, connection returned.",
          "Which gap is growing?",
        ],
      },
      {
        title: "What happens while the key is borrowed?",
        paragraphs: [
          "Assume connection acquisition is taking longer in this example. That alone does not prove the query is slow. First look at what requests holding connections are doing.",
          "Suppose the code saves the order, then waits for the delivery service before returning the connection. The database has finished its work, but the next request cannot borrow a connection. An idle CPU would be quite compatible with that scene.",
          "This is an invented example, not an incident report. It explains why acquisition time and holding time deserve separate clocks. A slow query, a lock and an external call made while holding a connection require different investigations.",
          "A dashboard showing only ‘DB time’ leaves a question unanswered. Does that mean query execution, or does it include getting a connection? Two measurements can share a unit while measuring entirely different waits.",
          "Adding connections might briefly make this hypothetical order endpoint faster without repairing the code. When the external service slows again, more requests could stand around holding connections. That is a reason to inspect the return path before choosing a pool size.",
          "Nor would I blindly shorten the transaction. The order still needs a defined set of changes that commit together, and a separate plan for retrying a failed external notification.",
        ],
      },
      {
        title: "A failure that finishes quickly",
        paragraphs: [
          "Change the scene once more. Waiting requests start failing early because they cannot obtain a connection. Average response time might look better. The customer still cannot place an order.",
          "Google’s SRE book explains why successful and failed request latency should be separated: fast errors can distort the combined number. Before appreciating a lower value, ask what response produced it.",
          "For the imagined order service, I would start with successful order latency and the error rate. Then put arrival volume, acquisition waits and connection holding time beside them for the same period. If the charts cover different requests or intervals, show that difference.",
          "Some part of the wait may remain invisible. Coloring an uninstrumented segment as healthy makes the picture tidier without explaining it. Marking the gap as unknown gives the next investigation somewhere to begin.",
          "This is a thought experiment about dividing a request’s elapsed time, not a reproduction of an outage or a prescription for the right pool size.",
          "There is a queue outside and an empty chair inside. Before adding another counter, I would like to know who still has the key.",
        ],
      },
    ],
  },
};
