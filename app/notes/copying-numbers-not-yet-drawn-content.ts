import type { Note } from "./notes-data";

export const copiedRandomNote: Note = {
  page: "noteCopiedRandom",
  category: "RUNTIME & STATE",
  date: "2026-10-23",
  sample: false,
  relatedPages: ["notePrivateMemory"],
  image: "/a/generated/notes/copying-numbers-not-yet-drawn.webp",
  imageAlt: {
    ko: "같은 원·삼각형·사각형 순서의 종이표가 나온 두 개의 초록색 번호표 서랍",
    en: "Two green ticket drawers dispensing paper strips with matching circles, triangles, and squares",
  },
  ko: {
    title: "아직 안 뽑은 번호까지 복사됐다",
    summary:
      "새 창구를 빨리 열려고 서랍까지 복사했더니, 앞으로 나올 번호도 같아졌다. 시작 상태에 무엇을 담을지 생각하게 한 보안 공지.",
    sources: [
      {
        label: "Node.js — 2026년 10월 21일 보안 릴리스",
        href: "https://nodejs.org/en/blog/vulnerability/october-2026-security-releases",
      },
      {
        label: "Node.js — crypto.randomUUID와 난수 캐시",
        href: "https://nodejs.org/api/crypto.html#cryptorandomuuidoptions",
      },
    ],
    sections: [
      {
        title: "두 번째 서랍",
        paragraphs: [
          "추첨 창구를 하나 더 열기로 했다고 해보자. 첫 번째 창구의 책상과 안내문을 복사하고, 서랍 안에 미리 섞어 둔 번호표 묶음까지 그대로 가져왔다.",
          "준비는 빨리 끝났다. 두 창구에서 다음으로 나올 번호도 같아졌다.",
          "번호표를 섞을 때 대충 섞은 것은 아니다. 한 묶음 안에서 다음 번호를 알아맞히기 어려웠더라도, 그 묶음을 통째로 복사한 뒤에는 다른 문제가 생긴다. 두 번째 창구가 첫 번째 창구의 순서를 들고 출발한다.",
          "Node.js의 10월 21일 보안 공지에서 비슷한 항목을 읽었다. CVE-2026-106074는 crypto.randomUUID와 randomInt의 난수 캐시가 사용자 영역의 시작 스냅샷과 단일 실행 파일에 저장돼, 프로세스들이 같은 값을 반복하는 문제를 수정 항목으로 설명한다.",
          "모든 Node.js 프로세스가 같은 번호를 낸다는 이야기는 아니다. 공지가 지목한 저장·복원 조건에서 생긴 문제다. 여기서는 취약점을 재현하는 대신, 미리 준비한 상태를 어디까지 복사해도 되는지 생각해 보고 싶다.",
        ],
      },
      {
        title: "뽑을 때 준비하는 줄 알았다",
        paragraphs: [
          "randomUUID라는 이름을 보면 호출하는 그 순간에 재료를 새로 마련할 것 같은 느낌이 든다. 공식 문서는 성능을 위해 여러 UUID를 만들 난수 데이터를 미리 생성해 캐시에 둔다고 설명한다.",
          "미리 준비해 두는 것 자체는 이해하기 쉽다. 손님이 올 때마다 번호표 종이를 자르는 것보다는, 묶음으로 만들어 서랍에 넣어 두는 편이 창구를 빨리 움직이게 한다.",
          "그런데 책상 배치를 저장하는 일과 서랍의 내용물을 저장하는 일이 한꺼번에 일어나면, 다음 창구를 위한 준비인지 지난 창구의 남은 준비물인지 구분해야 한다.",
          "정적인 안내문은 두 창구가 같아도 좋겠다. 반면 별도로 뽑아야 할 표의 순서까지 같아지는 것은 처음 바라던 복사와 거리가 있다.",
          "이미 뽑은 번호만 복사됐는지 살피고 있었는데, 아직 뽑지 않은 번호가 기다리는 곳도 있었던 셈이다.",
        ],
      },
      {
        title: "한 서랍만 열어서는",
        paragraphs: [
          "가상의 창구 하나에서 표를 몇 장 꺼내 보면, 표끼리 달라 보일 수 있다. 그래서 서랍 준비가 잘됐다고 생각하기 쉽겠다. 두 번째 창구를 나란히 열어야 복사한 묶음의 문제가 눈에 들어온다.",
          "한번 같은 번호가 나왔다는 사실만으로 결함을 단정할 수는 없다. 이 글에서 생각하는 것은 공지에 적힌 캐시 복제 문제를 번호표로 옮긴 상황이다. 실제 난수의 품질이나 충돌 확률을 이 비유로 측정할 수는 없다.",
          "그래도 질문을 바꾸는 데는 도움이 된다. 한 창구 안에서 순서가 그럴듯한가를 넘어서, 새 창구가 어떤 상태를 물려받고 시작하는지 보게 된다.",
          "스냅샷에 담을 것들을 정리하는 표가 있다면, ‘저장할 수 있음’ 옆에 한 칸을 더 만들고 싶다. 복원한 뒤에도 이 값의 주인이 같은가.",
          "모두가 읽어도 되는 안내문, 이 창구에서만 이어 써야 하는 준비물, 새로 시작할 때 다시 마련해야 하는 것. 같은 서랍 모양 안에 넣었다고 수명까지 같아지지는 않을 것이다.",
        ],
      },
      {
        title: "새 창구의 첫 손님",
        paragraphs: [
          "캐시를 전부 없애자는 결론으로 가고 싶지는 않다. 빠르게 시작하고 싶은 이유는 그대로 남아 있다. 다만 무엇을 준비한 채로 빠르게 시작하는지까지 알고 싶다.",
          "실제 해당 문제의 대응은 공식 보안 릴리스와 사용하는 배포 방식을 함께 확인해야 한다. 위 비유가 임의의 캐시 설정 하나를 바꾸면 해결된다는 뜻은 아니다.",
          "창구가 하나일 때 쓸 만했던 시작 상태가, 두 번째 창구를 열 때도 그대로 쓸 만한지. ‘복사해서 실행’이라는 짧은 말 안에 그 질문이 숨어 있었다.",
          "두 번째 창구의 첫 손님이 표를 기다린다. 직원이 서랍을 열기 전에, 나는 그 묶음을 누가 넣어 두었는지 한번 물어보고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "The copy included numbers not yet drawn",
    summary:
      "Copying a prepared drawer can copy its upcoming draws. A fixed Node.js issue prompts a question about what belongs in startup state.",
    sources: [
      {
        label: "Node.js — October 21, 2026 security releases",
        href: "https://nodejs.org/en/blog/vulnerability/october-2026-security-releases",
      },
      {
        label: "Node.js — crypto.randomUUID and cached random data",
        href: "https://nodejs.org/api/crypto.html#cryptorandomuuidoptions",
      },
    ],
    sections: [
      {
        title: "The second drawer",
        paragraphs: [
          "Imagine opening another raffle desk. We copy the first desk’s layout and instructions, along with the already shuffled strip of tickets sitting in its drawer.",
          "Setup is quick. The two desks now have the same next ticket.",
          "The original shuffle need not have been careless. Even if its order was hard to predict, copying the whole strip gives the second desk the first desk’s sequence.",
          "A related item appears in Node.js’s October 21 security release. Its entry for CVE-2026-106074 describes entropy caches for crypto.randomUUID and randomInt being saved in user-land startup snapshots and single executable applications, causing processes to repeat values.",
          "This does not describe every ordinary Node.js process producing identical numbers. The announcement identifies a particular saved-state condition. Rather than reproduce the vulnerability here, I want to consider which prepared state should cross a copying boundary.",
        ],
      },
      {
        title: "I imagined preparation happening at the draw",
        paragraphs: [
          "The name randomUUID can suggest that fresh material is prepared at the instant of the call. Its official documentation explains that Node.js generates and caches random data for multiple UUIDs to improve performance.",
          "Preparing material in advance is easy to understand. A desk can serve visitors faster with a strip ready in a drawer than by cutting paper for each arrival.",
          "But saving the desk layout together with the drawer’s contents raises a question: are those contents preparation for a new desk, or preparation left over from the old one?",
          "Identical instructions would be useful at both desks. Identical upcoming draws are a different kind of inheritance.",
          "We were watching for numbers already drawn to be copied. There was also a place holding numbers not yet drawn.",
        ],
      },
      {
        title: "Opening only one drawer",
        paragraphs: [
          "Pull several tickets from the imagined first drawer and they may look different from one another. That can make the preparation seem satisfactory. The copied strip becomes visible when we open the second desk beside it.",
          "A single matching value would not prove a defect. This analogy assumes the cache-copying problem described in the announcement; it does not measure random quality or collision probabilities.",
          "It does help change the question. Beyond whether one desk’s sequence looks plausible, what state did the new desk inherit?",
          "If I were listing what goes into a startup image, I would put another column beside “Can be saved”: does this value still belong to the same instance after restoration?",
          "Instructions everyone may share, preparation meant to continue at one desk, material that a fresh desk should obtain again. A common drawer shape does not give them a common lifetime.",
        ],
      },
      {
        title: "The new desk’s first visitor",
        paragraphs: [
          "I would not take this as an argument to remove every cache. The reason for a quick start remains. I would like to know what has already been prepared when that start happens.",
          "Responding to the actual issue requires checking the official security release together with the deployment method in use. The analogy does not establish that changing an arbitrary cache setting fixes it.",
          "A starting state that worked for one desk needs another look when opening a second. The short phrase “copy and run” had room for that question.",
          "The second desk’s first visitor is waiting. Before the drawer opens, I would like to ask who put that strip inside.",
        ],
      },
    ],
  },
};
