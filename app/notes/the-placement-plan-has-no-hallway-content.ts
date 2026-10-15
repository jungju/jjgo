import type { Note } from "./notes-data";

export const placementHallwayNote: Note = {
  page: "notePlacementHallway",
  category: "SYSTEMS & PLACEMENT",
  date: "2026-10-15",
  sample: false,
  image: "/a/generated/notes/the-placement-plan-has-no-hallway.webp",
  imageAlt: {
    ko: "세 칸에 나뉜 블록 배치 모형 옆, 좁은 문 앞에서 멈춘 블록과 구불구불한 종이 길",
    en: "A block layout in three compartments beside a narrow doorway, a paused block, and a winding paper path",
  },
  ko: {
    title: "배치표에는 복도가 없다",
    summary:
      "Rebalancer를 보며, 놓을 자리를 정하는 조건과 그 자리까지 옮기는 순서를 따로 생각하게 됐다.",
    sources: [
      {
        label: "Rebalancer 공식 저장소",
        href: "https://github.com/facebook/rebalancer",
      },
      {
        label: "OSDI 2024 — Rebalancer 논문",
        href: "https://www.usenix.org/system/files/osdi24-kumar.pdf",
      },
    ],
    sections: [
      {
        title: "방 안에는 들어가는데",
        paragraphs: [
          "종이에 가구 배치를 그려본다고 하자. 책장은 벽에 딱 맞고, 책상 앞에도 의자를 뺄 자리가 있다. 꽤 괜찮은 배치다. 그런데 책장을 들고 들어오는 복도는 그리지 않았다.",
          "방 안에서 차지할 넓이와 방까지 들어오는 일은 조금 다른 문제다.",
          "Meta의 Rebalancer 문서를 읽다가 이런 장면을 떠올렸다. Rebalancer는 작업이나 데이터 조각 같은 대상을 서버 같은 담을 곳에 배정하는 문제를 다룬다. 지켜야 할 제약 조건과 개선하려는 목표를 정의해 배치를 계산하는 도구다.",
          "문서의 용량 제한과 부하 균형 예시가 이해하기 좋았다. 서버의 메모리를 넘기지 말라는 조건과, 서버마다 부하가 비슷하면 좋겠다는 목표를 구분한다. 둘 다 ‘잘 배치하자’에 들어갈 말인데 맡은 역할은 다르다.",
          "나는 이 도구를 설치해 배치를 돌려보지는 않았다. 공식 문서와 논문을 읽으며, 배치 작업을 맡긴다면 먼저 어떤 말을 적어야 할지 생각하고 있다.",
        ],
      },
      {
        title: "반드시와 가능하면",
        paragraphs: [
          "가상의 샤드 배치 문제를 놓아보자. 한 서버에 들어갈 데이터 크기에는 상한이 있다. 같은 샤드의 복제본은 정해둔 서로 다른 장애 영역에 두기로 했다. 이 약속을 어긴 배치가 부하를 예쁘게 나눈다고 해서 받아들일 수는 없다.",
          "그다음에 균형을 얼마나 개선할지 이야기할 수 있다. 한쪽 부하를 조금 덜어주는 대신 여러 샤드를 옮겨야 한다면, 그 이동을 감수할지도 정해야 한다. 여기서는 실제 부하나 이동 시간을 측정한 것이 아니므로 어떤 선택이 낫다고 숫자를 붙일 수 없다.",
          "‘가능하면 균등하게’라고 말하면 간단하다. 무엇을 균등하게 할지는 남는다. 샤드 개수가 같은 배치와 메모리 사용량이 비슷한 배치는 다를 수 있다. 크기가 다른 상자를 같은 개수씩 나눴다고 짐의 무게가 같아지지는 않는다.",
          "그래서 배치 요청을 쓰기 전에 말을 두 번 읽어보고 싶다. 반드시 지킬 것을 ‘가능하면’ 쪽에 적지 않았는지, 선호를 필요 이상으로 고정해 선택지를 없애지는 않았는지.",
          "조건끼리 충돌할 수도 있다. 모든 복제본을 떨어뜨려 놓으라고 했는데 쓸 수 있는 장애 영역이 부족하다면, 먼저 입력 조건을 다시 봐야 한다. 점수 계산을 오래 시킨다고 자리가 생기지는 않는다.",
          "배치가 마음에 들지 않을 때도 알고리즘부터 탓하기 전에 내가 무엇을 목표로 썼는지 읽어야겠다. 내가 부탁한 것을 성실하게 해준 결과가, 내가 원한 것과 다를 수 있으니까.",
        ],
      },
      {
        title: "답을 얻은 다음의 일",
        paragraphs: [
          "Rebalancer 문서는 로컬 탐색이 전역 최적해를 보장하지 않는다고 명시한다. 따라서 이 방식으로 얻은 배치를 두고 모든 가능한 배치 중 최고라고 설명할 수는 없다. 어떤 조건과 목표로, 어떤 방법을 써서 얻은 안인지 남기는 편이 맞겠다.",
          "그리고 계산한 안을 실제 상태로 만드는 일이 있다. 가상의 샤드를 한 서버에서 다른 서버로 옮긴다면, 복사하는 동안 어디에 데이터를 두고 언제 읽는 경로를 바꿀지 같은 절차가 필요하다. 최종 배치표만으로 그 순서가 정해지지는 않는다.",
          "OSDI 2024 논문도 샤드 이동 문제를 소개하면서 장애 영역에 복제본을 분산하는 일과, 시스템을 불안정하게 할 만큼 많은 변경을 동시에 하지 않는 일을 함께 언급한다. 목적지뿐 아니라 변화가 일어나는 동안의 조건도 신경 써야 하는 이유가 보인다.",
          "여기서 말하는 실행 절차는 문서를 보고 내가 덧붙인 질문이다. Rebalancer가 내 서비스의 데이터 복사나 전환까지 수행한다고 확인한 것은 아니다. 계산 중 배정 하나를 바꾸는 것과 실제 데이터를 옮기는 일은 구분해 두고 싶다.",
        ],
      },
      {
        title: "복도를 그릴 차례",
        paragraphs: [
          "내가 이 가상의 작업을 검토한다면, 최종 배치 옆에 첫 이동부터 적어보고 싶다. 처음 옮길 샤드가 어디로 가고, 그동안 원래 복제본은 어떻게 유지되는지. 그 한 단계를 적다 보면 배치표에서 빠진 조건이 드러날 수도 있다.",
          "실행 중 지켜야 할 조건이라면 실행을 맡은 쪽에서도 확인할 수 있어야 한다. 복사할 자리가 부족한데 최종 배치에서는 여유가 있다는 설명만으로 밀어붙일 수는 없겠다.",
          "종이 위의 방으로 돌아오면 질문은 소박해진다. 책장이 벽에 들어간다는 것은 알겠다. 이제 현관에서 그 벽까지 어떻게 옮길까.",
          "배치표는 그대로 두고, 옆에 복도를 그릴 차례다.",
        ],
      },
    ],
  },
  en: {
    title: "The placement plan has no hallway",
    summary:
      "Reading Rebalancer made me separate the conditions for a destination from the steps needed to reach it.",
    sources: [
      {
        label: "Rebalancer repository",
        href: "https://github.com/facebook/rebalancer",
      },
      {
        label: "OSDI 2024 — Rebalancer paper",
        href: "https://www.usenix.org/system/files/osdi24-kumar.pdf",
      },
    ],
    sections: [
      {
        title: "It fits in the room",
        paragraphs: [
          "Imagine drawing a furniture layout on paper. The bookcase fits against the wall, and there is room to pull a chair out from the desk. It looks like a good arrangement. The hallway the bookcase must travel through is missing.",
          "Space in the room and the journey into it are slightly different problems.",
          "Meta’s Rebalancer documentation brought that scene to mind. Rebalancer assigns objects, such as tasks or data shards, to containers, such as servers, using specified constraints and optimization objectives.",
          "I found its capacity and load-balancing examples useful. A memory limit and a preference for similar loads across hosts both belong under “place things well,” but they have different jobs.",
          "I have not installed the tool or run a placement problem. Reading the official documentation and paper has made me consider what I would write down before delegating one.",
        ],
      },
      {
        title: "Must and preferably",
        paragraphs: [
          "Take a hypothetical shard-placement problem. Each server has a storage limit. We have agreed to keep replicas of the same shard in separate designated failure domains. A placement that violates that agreement cannot become acceptable simply because it balances load neatly.",
          "Then we can discuss how much balance to pursue. If a small improvement requires moving several shards, we need to decide whether those moves are worth making. Without measured loads or transfer times, I cannot attach numbers to which choice is better.",
          "“As even as possible” sounds simple. Even by which measure? Equal shard counts need not mean similar memory use. Giving everyone the same number of boxes does not give them the same weight to carry.",
          "I would read the placement request twice: have I described something mandatory as a preference? Have I fixed a preference so tightly that I removed useful choices?",
          "Requirements can conflict too. Asking for separated replicas without enough available failure domains sends us back to the inputs. Running the score calculation longer will not create another place to put them.",
          "If I dislike the result, I should read my objective before blaming the algorithm. It might have done exactly what I asked, while producing something other than what I wanted.",
        ],
      },
      {
        title: "After getting an answer",
        paragraphs: [
          "Rebalancer explicitly says its local search does not guarantee a global optimum. A placement obtained that way cannot be described as the best among every possible assignment. I would preserve its constraints, objectives, and solving method.",
          "Then comes the work of realizing the plan. Moving a hypothetical shard between servers requires decisions about where data resides during copying and when readers switch paths. A final assignment alone does not specify that sequence.",
          "The OSDI 2024 paper’s introduction discusses shard migration alongside spreading replicas across failure domains and avoiding too many simultaneous changes that could destabilize the system. It is a reminder to consider conditions during the transition as well as at the destination.",
          "The execution procedure is a question I am adding after reading, not a claim that Rebalancer performs my service’s copying and cutover. Changing an assignment in a calculation and moving live data remain distinct activities.",
        ],
      },
      {
        title: "Time to draw the hallway",
        paragraphs: [
          "If I were reviewing this hypothetical task, I would write the first move beside the final placement: where the first shard goes and how its existing replicas remain available. Describing that step might expose a condition missing from the plan.",
          "A condition that matters during execution needs to be checkable by whatever carries out the move. Free space in the final arrangement does not supply temporary space for a copy.",
          "Back in the room on paper, the question becomes modest. We know the bookcase fits against the wall. How will it get there from the front door?",
          "Keep the placement plan. Draw the hallway beside it.",
        ],
      },
    ],
  },
};
