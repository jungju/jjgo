import type { Note } from "./notes-data";

export const sixthClickNote: Note = {
  page: "noteSixthClick",
  category: "TOOLS & EXPLANATION",
  date: "2026-10-21",
  sample: false,
  image: "/a/generated/notes/the-sixth-click-in-the-diagram.webp",
  imageAlt: {
    ko: "황동 동전이 담긴 초록 트레이와 문 앞의 산호색 블록으로 구성한 소형 장치",
    en: "A miniature mechanism with brass discs in a green tray and a coral block outside a gate",
  },
  ko: {
    title: "그림 속 버튼을 여섯 번 눌러보고 싶다",
    summary:
      "동전이 차오르는 토큰 버킷 그림에 버튼을 단다면, 통과하지 못한 요청은 어디로 보내야 할까.",
    sources: [
      {
        label: "Anatomy — 움직이는 기술 도해 도구",
        href: "https://github.com/wheresryan22/anatomy",
      },
      {
        label: "RFC 3290 — 부록 A.4, 토큰 버킷의 잔량과 상한",
        href: "https://datatracker.ietf.org/doc/html/rfc3290#appendix-A.4",
      },
    ],
    sections: [
      {
        title: "여섯 번째 손가락",
        paragraphs: [
          "버튼을 다섯 번 누르면 다섯 개가 통과한다. 여섯 번째에는 어떻게 될까. 요청 제한을 설명하는 그림을 만든다고 가정하면, 나는 그 장면부터 정하고 싶다.",
          "Anatomy의 소개 문서를 읽다가 이런 그림을 떠올렸다. 기술 개념을 작동하는 입체 도해로 만들고, 표시되는 숫자도 내부 모델과 연결한다는 도구다. 여기서는 직접 실행한 사용기 대신, 그런 도해에 어떤 조작을 넣고 싶은지 생각해 봤다.",
          "설명용 양동이에 동전이 차오르고, 요청이 지나갈 때 동전 하나가 빠지는 모습. 토큰 버킷이라는 이름에는 이미 소품이 준비돼 있다. 양동이만 잘 그리면 절반쯤 설명한 기분이 들겠다.",
          "그런데 물이 차오르는 모습을 가만히 보는 동안에는 내가 무엇을 이해했는지 잘 드러나지 않는다. 버튼을 하나 달면 이야기가 달라진다. 이번에는 내가 곤란한 순간을 골라 볼 수 있다.",
        ],
      },
      {
        title: "시간을 조금 빌려 쓰자",
        paragraphs: [
          "가상의 도해 규칙을 정해 보자. 처음 동전 다섯 개, 최대 다섯 개, 초당 하나 보충, 요청 하나에 동전 하나. 같은 시각에 요청 여섯 개를 보내고, 부족하면 즉시 거절하도록 한다. 대기 줄은 두지 않는다.",
          "다섯 개는 통과하고 하나는 거절된다. 그 뒤 아무 요청 없이 1분을 보내도 저장된 동전은 다섯 개다. RFC 3290 부록 A.4의 상한과 잔량 확인 방식을 요청 단위로 단순화한 예다. 원문은 패킷 크기를 다루므로 API 구현 명세로 그대로 가져올 수는 없다.",
          "이 장면에는 보통 마우스 클릭보다 가상 시계를 붙이는 편이 낫겠다. 손으로 여섯 번 누르는 사이에 시간이 흐르면 동전이 보충될 수 있으니까. 같은 시각에 여섯 요청을 넣는 버튼과, 시간을 한 칸 진행하는 버튼을 따로 두고 싶다.",
          "설명은 여섯 번째 요청에서 막히는데, 시연하는 사람의 손이 느려서 여섯 번째도 통과한다. 잘 만든 애니메이션 옆에서 굳이 이런 해명을 하고 싶지는 않다.",
          "반대로 애니메이션을 천천히 재생한다고 계산 속도까지 바뀌어서도 곤란하다. 화면에서 동전이 날아가는 시간과, 예시가 계산하는 시간을 어디서 나눴는지 먼저 정해야겠다.",
        ],
      },
      {
        title: "줄을 그려 놓으면 기다리게 된다",
        paragraphs: [
          "내가 가장 조심하고 싶은 소품은 양동이 옆의 줄이다. 요청을 작은 사람이나 상자로 그리면, 통과하지 못한 것들이 문 앞에 얌전히 서 있게 만들기 쉽다.",
          "그러면 독자는 기다리면 들어갈 수 있다고 읽을 수 있다. 그런데 우리가 정한 예시에서 여섯 번째 요청은 이미 거절됐다. 문 앞에 세워 두면 다음 동전이 생길 때 자동으로 처리되는 것처럼 보인다.",
          "거절된 상자는 옆으로 빠지고, 다시 시도하려면 새 요청을 넣게 하고 싶다. 대기를 설명하려면 그때 별도로 줄을 만들면 된다. 그림에 줄 하나를 더하는 일이 제품 동작 하나를 더 약속하는 셈이다.",
          "이런 차이는 문장으로 쓰면 조금 딱딱하다. 그림에서는 상자가 어디로 가는지만 바꿔도 바로 질문이 생긴다. 저 상자는 아직 내 요청인가, 다시 보내야 하는 요청인가.",
          "그래서 그림을 부탁할 때 색과 구도 다음에 적고 싶은 말이 있다. 통과하지 못한 상자가 마지막에 어디에 있어야 하는지.",
        ],
      },
      {
        title: "한 장면을 바꿔 볼 수 있다면",
        paragraphs: [
          "처음에는 동전 다섯 개를 그대로 두고, 보충 속도만 바꾸는 조작을 넣어 보겠다. 그다음에는 속도를 그대로 두고 그릇 크기만 바꾼다. 두 손잡이를 한꺼번에 움직이면 무엇 때문에 결과가 달라졌는지 다시 설명해야 한다.",
          "독자에게 예측할 틈도 주고 싶다. 결과가 계속 자동 재생되는 대신, 요청을 보낸 직후 잠깐 멈춰서 어느 상자가 통과할지 생각하게 하는 것이다. 정답을 먼저 본 뒤 고개를 끄덕이는 것과는 다른 대화가 될 수 있다.",
          "이것으로 학습 효과가 좋아진다고 측정한 것은 아니다. 내가 설명을 준비한다면 넣어 보고 싶은 장치들이다. 실제 분산 서비스의 동시 처리나 실패 복구까지 이 작은 그림에 담았다고 말할 생각도 없다.",
          "양동이의 그림자를 다듬는 작업도 즐겁겠다. 다만 그림자가 예뻐지는 동안 여섯 번째 상자가 슬쩍 문을 통과하고 있으면, 손이 먼저 그쪽으로 갈 것 같다.",
          "시계를 멈추고 버튼을 한 번 더 눌러 보고 싶다. 이번에는 그 상자가 어디로 가는지 보면서.",
        ],
      },
    ],
  },
  en: {
    title: "I want to press the diagram’s button six times",
    summary:
      "An animated token bucket needs a destination for the request that cannot pass. Drawing that destination means choosing a behavior.",
    sources: [
      {
        label: "Anatomy — interactive technical illustrations",
        href: "https://github.com/wheresryan22/anatomy",
      },
      {
        label: "RFC 3290 — Appendix A.4, token balance and capacity",
        href: "https://datatracker.ietf.org/doc/html/rfc3290#appendix-A.4",
      },
    ],
    sections: [
      {
        title: "The sixth press",
        paragraphs: [
          "Five presses send five objects through. What happens on the sixth? If I were designing a diagram to explain request limiting, I would start with that moment.",
          "Reading Anatomy’s README suggested this exercise. It describes interactive isometric explanations with readouts connected to an underlying model. This is a proposed design for an explanation, rather than an account of running the tool.",
          "A bucket fills with coins; each passing request takes one. The name token bucket has already supplied the props. Drawing an attractive bucket could feel like half the explanation.",
          "Watching it fill, though, reveals little about what I have understood. Give me a button and I can choose an awkward moment myself.",
        ],
      },
      {
        title: "Borrow a clock",
        paragraphs: [
          "For an imagined demonstration, start with five credits, cap them at five, replenish one per second, and charge one per request. Send six requests at one simulated instant. Reject insufficient requests immediately; provide no queue.",
          "Five pass and one fails. A minute without requests still leaves only five credits. This adapts the cap and balance check in RFC 3290, Appendix A.4, from packet sizes to request units; it is not an API implementation specification.",
          "I would give this scene a simulated clock. Six manual clicks take time, during which credits might replenish. One control would submit six simultaneous requests; another would advance time.",
          "The explanation says the sixth request fails, but the presenter clicks slowly enough for it to pass. I would prefer not to explain that discrepancy beside an otherwise polished animation.",
          "Slowing the animation should not accidentally alter the example’s calculation either. Before drawing flying coins, I would decide how presentation time relates to simulated time.",
        ],
      },
      {
        title: "Draw a line and people expect to wait",
        paragraphs: [
          "The prop I would handle most carefully is the line beside the bucket. Represent requests as people or boxes and it becomes tempting to leave unsuccessful arrivals standing neatly at the gate.",
          "That invites an expectation: wait and you will get through. Our sixth request has already been rejected. Leaving it at the entrance could suggest that the next credit will process it automatically.",
          "I would move that box aside. Another attempt would require another request. If I wanted to explain waiting, I would introduce a queue explicitly. A small addition to the drawing can promise another behavior.",
          "The distinction can sound dry in prose. In a picture, changing where a box goes raises a very immediate question: is that request still pending, or must I send it again?",
          "So after specifying colors and composition, I would write down where an unsuccessful box should end up.",
        ],
      },
      {
        title: "Let me change one thing",
        paragraphs: [
          "I would first hold capacity at five and let the reader change replenishment speed. Then hold speed steady and change capacity. Moving both controls together would leave us explaining which change caused the result.",
          "I would also leave room for a prediction. Instead of playing the outcome automatically, pause after submission and let the reader decide which boxes will pass. That could open a different conversation from watching an answer and nodding.",
          "I have not measured a learning benefit here. These are controls I would try when preparing an explanation. The small scene would not claim to cover concurrency or recovery in a distributed production service.",
          "Polishing the bucket’s shadow sounds enjoyable too. But if the sixth box quietly slips through while the shadow gets prettier, my hand will probably move toward that box.",
          "I would stop the clock and press the button once more, watching where it goes.",
        ],
      },
    ],
  },
};
