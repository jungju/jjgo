import type { Note } from "./notes-data";

export const connectedStateNote: Note = {
  page: "noteConnectedState",
  category: "WEB & PRODUCT",
  date: "2026-10-04",
  sample: false,
  image: "/a/generated/notes/connected-is-not-caught-up.webp",
  imageAlt: {
    ko: "회의실 문 옆의 예약 카드 게시판 위로 초록 표시등이 켜져 있고, 아래에는 이어진 케이블과 교체할 카드가 놓인 모습",
    en: "A green indicator above a meeting-room reservation board, with a joined cable and replacement cards below",
  },
  ko: {
    title: "연결은 돌아왔는데, 예약표는 그대로다",
    summary:
      "다시 연결됐다는 초록 표시를 보면 화면도 최신일 것 같다. 가상의 회의실 예약표에서 놓친 변경을 따라가며, 그 표시가 어디까지 약속할 수 있는지 생각했다.",
    sources: [
      {
        label: "Wonkook Lee · 브라우저에서 실시간성을 어떻게 보장하나요?",
        href: "https://blog.wonkooklee.com/docs/api-and-interfaces/browser-realtime/",
      },
      {
        label: "HTML 표준 · Server-sent events",
        href: "https://html.spec.whatwg.org/multipage/server-sent-events.html",
      },
      {
        label: "MDN · Using server-sent events",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events",
      },
    ],
    sections: [
      {
        title: "초록색이 돌아왔다",
        paragraphs: [
          "회의실 예약표 앱을 하나 가정해보자. 오후에 작은 방이 비어 있다. 화면을 켜둔 채 노트북을 들고 다른 자리로 옮겼는데, 그사이 와이파이가 끊겼다.",
          "다시 연결되자 구석의 표시가 초록색으로 바뀐다. 예약표는 그대로다. 조금 전까지 비어 있던 방으로 사람들을 부르면 될 것 같다.",
          "그런데 연결이 없던 동안 다른 사람이 그 방을 예약했다면?",
          "문 앞에서 서로 같은 시간이라고 말하게 될 수도 있다. 한쪽은 최신 예약표를 봤고, 다른 쪽은 초록색을 믿었다.",
          "Wonkook Lee의 실시간 통신 가이드에서 눈에 남은 건 연결 상태와 데이터 동기화 상태를 나누자는 부분이었다. 연결을 다시 여는 일 뒤에 아직 할 일이 있다는 것이다.",
          "앞의 앱이라면 표시를 켜는 코드부터 다시 보고 싶다. 그 색은 ‘서버와 이야기할 수 있음’을 뜻할까. 아니면 ‘지금 보여주는 예약을 확인했음’을 뜻할까.",
          "사용자는 그 차이를 물어보고 싶어서 예약표를 연 게 아닐 것이다. 그냥 빈 방을 찾고 싶었을 것이다.",
        ],
      },
      {
        title: "마지막으로 들은 말",
        paragraphs: [
          "SSE의 EventSource는 연결이 끊기면 재연결을 시도하는 기능이 있고, 마지막 이벤트 ID가 있으면 Last-Event-ID로 서버에 전달한다. MDN과 HTML 표준에 나오는 동작이다.",
          "이름을 보면 이어받는 일도 끝난 것처럼 느껴진다. 하지만 서버가 지난 이벤트를 보관하고 그 위치부터 다시 보내는 일은 별도로 있어야 한다.",
          "앞의 예약표에서 ‘여기까지 받았습니다’라고 말할 수 있어도, 서버가 그 뒤의 변경을 기억하지 않는다면 빠진 예약은 돌아오지 않는다. 전화가 다시 연결됐다고 끊긴 동안의 대화가 자동으로 들리는 것은 아닌 셈이다.",
          "지금 빈 방만 찾는 화면이라면 현재 예약표를 다시 받는 방법을 먼저 검토하겠다. 누가 예약을 옮겼는지까지 따지는 변경 이력 화면이라면 중간 기록도 필요하다. 같은 앱 안에서도 되찾아야 할 내용이 달라진다.",
          "예약표를 다시 받은 뒤 변경 알림을 켜면 끝일까. 두 동작 사이에 예약이 바뀌는 작은 틈이 남는다.",
          "이 예에서는 예약표와 그 표가 가리키는 기록 위치를 함께 받아, 그 뒤의 변경을 이어받는 계약을 검토하고 싶다. 따로 읽은 최신 위치를 낡은 표에 붙이면 이미 확인한 것처럼 보이기 쉽다.",
          "따라잡은 기록에서 새 알림으로 넘어가는 순간도 그 계약에 들어가야 한다. 번호 하나를 붙였다는 사실만으로 빈틈이 사라지지는 않는다.",
          "너무 오래 끊겨 이어받을 기록이 없다면 그것도 알려줘야 한다. 그때는 새 예약표부터 다시 확인한다. 빠진 구간이 있는데도 확인을 끝낸 것처럼 표시하지 않았으면 한다.",
        ],
      },
      {
        title: "받았다는 것과 보였다는 것",
        paragraphs: [
          "연결이 계속 살아 있어도 다른 문제가 생길 수 있다. 변경 알림은 받았는데 화면에 반영하는 코드가 실패했다고 가정해보자. 표시등은 여전히 초록색이다.",
          "HTML 표준의 이벤트 처리 순서를 보면 마지막 이벤트 ID는 앱에 이벤트를 전달하기 전에 갱신된다. 그 ID를 앱이 정상적으로 적용한 예약 버전이라고 읽을 수는 없다.",
          "이 예약표에서는 화면에 적용한 버전을 따로 알고 싶다. 브라우저가 받은 위치와 앱이 반영한 위치가 달라지면, 다시 조회하거나 복구를 시작할 이유가 생긴다.",
          "초록색 하나에 그 상태들을 다 맡기면 사람은 안심하고 방 앞으로 간다. ‘연결됨, 예약 확인 중’이라고 나눠 보여주면 잠깐 더 기다릴 수 있다. 아직 모른다는 표시가 실제 행동을 바꾼다.",
          "얼마나 빨리 반영됐는지 확인할 때도 연결을 여는 시간만 재면 부족하다. 이 예의 목적이라면 서버가 예약을 확정한 때부터 화면에 적용된 때까지를 보고, 단절 뒤 다시 따라잡는 시간은 따로 보겠다.",
          "물론 서버를 마지막으로 확인했다고 다음 순간의 예약까지 보장할 수는 없다. 누군가 방을 차지하기 전에 예약을 확정하는 판단은 서버에 남겨야 한다. 화면의 최신성 표시를 예약 성공으로 바꾸어 읽어서도 곤란하다.",
          "이런 앱을 만든다면 문구 하나를 놓고 생각할 것 같다.",
          "‘다시 연결됐습니다.’",
          "그 아래 예약표도 다시 확인했는지, 한 줄을 더 쓸 수 있을 때까지.",
        ],
      },
    ],
  },
  en: {
    title: "Reconnected, with an outdated booking board",
    summary:
      "A green connection indicator can make an old screen feel current. An imagined meeting-room app reveals the work between reconnecting and catching up.",
    sources: [
      {
        label: "Wonkook Lee · Browser realtime communication",
        href: "https://blog.wonkooklee.com/docs/api-and-interfaces/browser-realtime/",
      },
      {
        label: "HTML Standard · Server-sent events",
        href: "https://html.spec.whatwg.org/multipage/server-sent-events.html",
      },
      {
        label: "MDN · Using server-sent events",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events",
      },
    ],
    sections: [
      {
        title: "The green light returns",
        paragraphs: [
          "Imagine a meeting-room booking app. A small room is free in the afternoon. You leave the board open and carry your laptop to another desk, losing Wi-Fi along the way.",
          "The connection returns. An indicator in the corner turns green. The board is unchanged, so it seems safe to send everyone to the room that was empty a moment ago.",
          "What if someone booked it while you were disconnected?",
          "Two groups could meet at the door, each expecting the same room. One checked the current booking. The other trusted the green light.",
          "The detail that stayed with me in Wonkook Lee’s realtime communication guide was separating connection status from synchronization status. Opening the connection again leaves work to do.",
          "For this imagined app, I would start with the code that lights the indicator. Does the color mean we can talk to the server, or that we have checked the bookings currently on display?",
          "People did not open the board because they wanted to discuss that distinction. They wanted an empty room.",
        ],
      },
      {
        title: "The last thing you heard",
        paragraphs: [
          "SSE’s EventSource can attempt to reconnect and pass an existing last event ID to the server in Last-Event-ID. MDN and the HTML Standard describe that behavior.",
          "The name can make resuming sound like a completed job. The server still needs to retain the events and replay the ones after that position.",
          "In the booking example, saying ‘I received everything up to here’ does little if the server no longer remembers what happened next. A restored phone call does not automatically play the conversation you missed.",
          "If the screen only helps people find a free room now, I would consider fetching the current board again. A history screen investigating who moved a booking needs the intervening changes too. Even within one app, recovery can mean different things.",
          "Does fetching the board and then subscribing to updates finish the job? A booking could change in the gap between those operations.",
          "For this app, I would consider a contract returning the board together with the log position it represents, then resuming changes after that position. Attaching a separately fetched latest position to an older board could mark something as caught up when it is not.",
          "The handoff from replayed history to new notifications belongs in that contract as well. Adding a position marker does not, by itself, close every gap.",
          "If the disconnection outlasts the retained history, the app should learn that too and check a fresh board. A missing stretch of data should not quietly become a completed synchronization.",
        ],
      },
      {
        title: "Received, but not displayed",
        paragraphs: [
          "A connection can stay healthy while something else fails. Suppose an update arrives, but the code applying it to the board throws an error. The indicator is still green.",
          "In the HTML Standard’s event processing sequence, the last event ID is updated before the event is dispatched to the application. That ID cannot be treated as a booking version the app successfully applied.",
          "For this hypothetical board, I would want to track the version actually displayed. If the browser’s received position and the app’s applied position diverge, there is a reason to fetch again or start recovery.",
          "Let one green light stand for all those states and someone may confidently walk to the room. ‘Connected; checking bookings’ gives them a reason to wait. A visible unknown can change a real decision.",
          "I would also measure more than the time needed to open a connection. For this app’s purpose, the relevant interval runs from a confirmed booking to its application on the screen. Catch-up after a disconnection deserves a separate measurement.",
          "Of course, checking the server does not guarantee the next moment will stay unchanged. Confirming a reservation still needs the server’s decision. A freshness indicator must not be mistaken for a successful booking.",
          "If I were building this app, I would pause over one small message.",
          "‘Connected again.’",
          "And whether the board below it had been checked again too, before adding the next line.",
        ],
      },
    ],
  },
};
