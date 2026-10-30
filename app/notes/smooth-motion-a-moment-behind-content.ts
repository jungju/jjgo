import type { Note } from "./notes-data";

export const smoothMotionNote: Note = {
  page: "noteSmoothMotion",
  category: "GAME & DESIGN",
  date: "2026-10-31",
  sample: false,
  relatedPages: ["noteSameFrame", "noteConnectedState"],
  image: "/a/generated/notes/smooth-motion-a-moment-behind.webp",
  imageAlt: {
    ko: "두 나무 기둥 사이를 걷는 반투명 호박색 인물과 겹쳐 놓인 프레임 카드, 옆의 모래시계",
    en: "A translucent amber figure between wooden posts, overlapping frame cards and an hourglass",
  },
  ko: {
    title: "캐릭터를 부드럽게 보려고 시간을 늦춘다",
    summary:
      "받은 위치 사이를 그리려면 다음 위치가 올 때까지 잠깐 기다려야 한다. 게임의 보간에서 화면이 보여주는 시간을 생각했다.",
    sources: [
      {
        label: "lim · 온라인 게임 개발자가 말하는 렉과 서버비",
        href: "https://lim.sh/mmorpg-lag-and-server-cost",
      },
      {
        label: "Glenn Fiedler · Snapshot Interpolation",
        href: "https://gafferongames.com/post/snapshot_interpolation/",
      },
      {
        label: "Mirror · Snapshot Interpolation",
        href: "https://mirror-networking.gitbook.io/docs/manual/components/network-transform/snapshot-interpolation",
      },
    ],
    sections: [
      {
        title: "빠르게 만드는 대신",
        paragraphs: [
          "옆에서 달리던 캐릭터가 멈췄다가 한참 앞에 나타나는 장면을 떠올려 보자. 화면을 고쳐달라는 말을 듣는다면, 일단 더 빨리 정보를 받아야겠다고 생각할 것 같다.",
          "그런데 모닥 온라인 개발자의 글에서 눈에 들어온 해법은 조금 달랐다. 다른 캐릭터의 받아 둔 위치 사이를 이어 그리는 보간이다. 다음 위치도 있어야 사이를 채울 수 있으니, 보여주는 시간을 조금 뒤로 둔다고 설명한다.",
          "더 부드럽게 보려고 조금 전을 보여준다.",
          "빨라 보이는 것과 최신인 것이 이렇게 갈라지는 대목이 재미있다. 나는 ‘덜 끊긴다’는 감상 안에 ‘더 빨라졌다’까지 슬쩍 넣고 있었을지도 모르겠다.",
          "Glenn Fiedler의 구현 글도 스냅샷을 잠깐 모아 두고 그 사이를 그리는 방식을 설명한다. 도착 간격의 흔들림을 흡수하는 대신, 화면에 추가 지연을 받아들이는 선택이다. 지연이 사라진 것처럼 느껴져도 그 시간을 다른 곳에서 쓰고 있다.",
        ],
      },
      {
        title: "아직 오지 않은 점은 이을 수 없다",
        paragraphs: [
          "숫자를 작게 놓고 생각해 봤다. 가상의 캐릭터에 대해 ‘0밀리초에 위치 0’, ‘100밀리초에 위치 10’이라는 두 기록이 있다고 하자. 통신 시간과 시계 차이는 빼고, 같은 시간 기준에서 두 번째 기록까지 100밀리초에 받았다고 단순화한다. 실제 게임을 재서 얻은 값은 아니다.",
          "그때 화면이 50밀리초 시점을 재생한다면, 두 위치의 중간인 5를 그릴 수 있다. 화면은 50밀리초 늦게 가고 있다. 0에서 10으로 갑자기 옮기는 대신, 그 사이를 지나가게 보일 자리를 확보한 셈이다.",
          "반대로 50밀리초인 순간에 첫 기록만 받은 상태라면, 아직 오지 않은 두 번째 점을 이용할 수 없다. 그때부터 위치 5를 그리려면 앞으로 어디로 갈지 짐작하는 다른 선택이 필요하다.",
          "두 점을 받은 뒤에도 5라는 값이 실제로 지나간 길을 증명하지는 않는다. 0에서 잠깐 쉬다가 급히 10으로 갔을 수도 있다. 여기서 계산한 5는 두 기록 사이를 직선으로 잇기로 했을 때의 화면 위치다.",
          "그래서 같은 그림을 보고도 물어볼 것이 달라진다. 움직임을 편하게 보고 싶은지, 그 순간 어디 있었는지 확인하고 싶은지.",
          "Mirror 문서에는 보간할 다음 기록을 기다리다가 버퍼 끝에 닿는 상황도 시험 대상으로 나온다. 잠깐 뒤로 물러서서 본다고 해서, 새 기록이 영영 안 오는 문제까지 없어지는 것은 아니다.",
        ],
      },
      {
        title: "2층을 지나는 작은 그림",
        paragraphs: [
          "이 생각을 게임 밖으로 옮겨, 가상의 엘리베이터 안내 화면을 그려봤다. 실제 제어 장치 이야기가 아니라 화면의 뜻을 생각하기 위한 예다. 받은 기록은 ‘1층’과 그 뒤의 ‘3층’ 두 개뿐이다.",
          "그 사이를 부드럽게 채우면 작은 엘리베이터 그림이 2층을 지나간다. 보기에는 훨씬 그럴듯하다. 그런데 옆에 ‘2층 도착’이라는 글자까지 붙이면 다른 말을 하게 된다. 그 그림을 계산했다는 이유만으로 2층에 멈췄다는 관측이 생기지는 않는다.",
          "안내 화면을 만든다면 나는 움직이는 그림과 마지막으로 확인한 층을 나란히 보고 싶다. 조금 복잡해 보여도, 둘이 같은 뜻인 척하지는 않았으면 한다.",
          "수신된 기록이 끊긴 상태에서 그림만 계속 올라가면 처음에는 친절해 보일 것이다. 다만 기다리는 사람은 그림을 보고 계단으로 갈지 말지 결정할 수도 있다. 움직임을 예쁘게 만든 일이 누군가에게는 새 정보처럼 읽힌다.",
          "언제까지 사이를 채우고, 다음 기록이 없으면 어디서 멈출지. ‘자연스럽게 움직이게 해주세요’라는 요청 뒤에 꽤 많은 선택이 따라붙는다. 나는 완성된 애니메이션을 본 다음에야 그 질문을 할 것 같아 조금 뜨끔하다.",
          "다시 캐릭터 쪽으로 돌아가면, 조금 늦게 보여주는 선택이 충분히 마음에 든다. 끊어지는 점들 대신 함께 달리는 모습을 보고 싶은 순간에는 그 대가를 받아들일 수 있겠다. 다만 화면의 부드러움을 보고 통신까지 고쳐졌다고 결론내리지는 않으려 한다.",
          "가상의 안내 화면에서는 작은 그림이 2층을 지나간다. 그 아래 마지막 확인 기록은 아직 1층이다. 손가락을 대고 물어보고 싶다.",
          "여기는 지나간 걸까, 그려서 지나가게 한 걸까.",
        ],
      },
    ],
  },
  en: {
    title: "Smooth motion, a moment behind",
    summary:
      "Drawing between received positions can mean waiting for the next one. Snapshot interpolation made me think about which moment a smooth screen represents.",
    sources: [
      {
        label: "lim · Lag and server costs in an online game",
        href: "https://lim.sh/mmorpg-lag-and-server-cost",
      },
      {
        label: "Glenn Fiedler · Snapshot Interpolation",
        href: "https://gafferongames.com/post/snapshot_interpolation/",
      },
      {
        label: "Mirror · Snapshot Interpolation",
        href: "https://mirror-networking.gitbook.io/docs/manual/components/network-transform/snapshot-interpolation",
      },
    ],
    sections: [
      {
        title: "Instead of making it faster",
        paragraphs: [
          "Imagine another player’s character stopping beside you, then appearing some distance ahead. Asked to fix the display, I would probably start by wanting the information to arrive faster.",
          "A different response caught my attention in the MODAK Online developer’s explanation: interpolate between received positions of other characters. Having both ends means presenting a slightly older moment.",
          "Show the recent past to make movement smoother.",
          "I like the point where looking faster parts company with being more current. Perhaps I have been quietly folding “faster” into the much narrower impression of “less jerky.”",
          "Glenn Fiedler’s implementation article describes briefly buffering snapshots and rendering between them. That accommodates uneven arrivals at the cost of added display latency. The time has not vanished; it has been spent elsewhere.",
        ],
      },
      {
        title: "You cannot join a point that has not arrived",
        paragraphs: [
          "I tried a small arithmetic example: a fictional character has position 0 at time 0 milliseconds and position 10 at time 100. Ignore transit time and clock differences; assume a shared timeline, with both records available at time 100. These are invented inputs, not measurements from a game.",
          "At that point, a display replaying time 50 can draw the midpoint, position 5. It is running 50 milliseconds behind. Rather than jumping from 0 to 10, it has room to show the journey between them.",
          "At time 50, if only the first record has arrived, the second point is unavailable. Drawing position 5 then would require another choice: guessing where the character will go.",
          "Even with both records, position 5 does not prove the actual path. The character might have waited at 0 before hurrying to 10. Five is the display position produced by our decision to join the two samples with a straight line.",
          "That leaves different questions for the same image. Do I want movement that is comfortable to watch, or evidence of where something was at that moment?",
          "Mirror’s documentation includes testing what happens when playback reaches the end of the available snapshots while awaiting another. Watching slightly behind cannot solve an indefinite absence of new records.",
        ],
      },
      {
        title: "The little picture passing floor two",
        paragraphs: [
          "To think beyond games, I imagined an elevator-status display. This is a fictional interface example, not a proposal for an elevator controller. It has received just two reports: floor one, then floor three.",
          "Fill the interval smoothly and a little elevator picture passes floor two. It looks convincing. Add “Arrived at floor two” beside it, however, and the interface makes another claim. Calculating that picture has not produced an observation that the elevator stopped there.",
          "I would want the moving picture beside the last confirmed floor. That might look less tidy, but I would rather see both than have them appear interchangeable.",
          "Keep the picture climbing after reports stop and it may initially look helpful. Someone waiting might use it to decide whether to take the stairs. A visual improvement can be read as fresh information.",
          "How long should it fill the gaps? Where should it stop without another report? Several decisions hide behind “Please make it move naturally.” I suspect I might only think to ask after admiring the finished animation.",
          "Back in the game, I can appreciate the choice to show a slightly older moment. When I want to watch someone run alongside me instead of a sequence of disconnected dots, that may be a price worth paying. The smoother picture still would not establish that the connection itself had improved.",
          "On my imaginary status display, the little picture passes floor two. Below it, the last confirmed record still says floor one. I want to put a finger against the glass and ask:",
          "Did it pass here, or did we draw it passing here?",
        ],
      },
    ],
  },
};
