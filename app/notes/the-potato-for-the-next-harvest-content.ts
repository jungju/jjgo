import type { Note } from "./notes-data";

export const martianHarvestNote: Note = {
  page: "noteMartianHarvest",
  category: "TECH & CINEMA",
  date: "2026-11-03",
  sample: false,
  relatedPages: ["noteEternalSunshine", "noteGpuFreeTest"],
  image: "/a/generated/notes/the-potato-for-the-next-harvest.webp",
  imageAlt: {
    ko: "붉은 풍경이 보이는 온실 안의 감자 모종, 빈 접시와 따로 남겨둔 싹 난 감자",
    en: "Potato seedlings in a greenhouse overlooking a red landscape, with an empty plate and a sprouting potato kept aside",
  },
  ko: {
    title: "《마션》에서 저 감자는 남겨둬야겠다",
    summary:
      "먹을 감자가 생겼다는 기쁨 옆에 다음 재배에 쓸 감자가 있다. 한 번 나온 결과와 다시 만들어낼 수 있는 도구를 생각했다.",
    sources: [
      {
        label: "20th Century Studios · The Martian 작품 소개",
        href: "https://www.20thcenturystudios.com/movies/the-martian",
      },
      {
        label: "NASA · 심우주 식량 작물 연구",
        href: "https://www.nasa.gov/science-research/nasa-plant-researchers-explore-question-of-deep-space-food-crops/",
      },
      {
        label: "NASA · Rocket Ranch, Mars 편",
        href: "https://www.nasa.gov/podcasts/welcome-to-rocket-ranch/episode-1-mars/",
      },
    ],
    sections: [
      {
        title: "감자가 생겼다",
        paragraphs: [
          "※ 영화 《마션》(2015)의 감자 재배 장면을 다룹니다.",
          "화성에 홀로 남은 마크 와트니는 감자를 기른다. 사람이 살기 어려운 풍경 안에 초록색이 생기는 장면이다. 당장 먹을 것이 부족한 사람에게 저 잎은 얼마나 반가울까.",
          "그런데 감자를 보면 조금 곤란한 생각도 든다. 먹으면 오늘의 식량이고, 남겨두면 다음 재배에 쓸 수 있다.",
          "NASA의 식량 작물 연구 글은 감자의 눈이 있는 부분을 다시 심어 새 식물을 기를 수 있다고 설명하며 영화도 언급한다. 접시에 올릴 것과 다음에 심을 것이 같은 감자라는 점이 새삼 눈에 들어온다.",
          "수확한 것을 전부 오늘의 식량이라고 세면 다음 농사를 시작할 몫이 빠진다. 나 같으면 감자를 두 무더기로 나눠놓고도, 배고플 때 자꾸 작은 쪽을 쳐다볼 것 같다.",
          "물론 영화의 재배를 그대로 따라 하면 화성에서도 된다는 이야기는 아니다. NASA의 별도 대담은 화성 표토의 유해 성분 같은 현실의 차이를 짚는다. 여기서 마음에 남은 것은 재배법보다 다음번을 위해 무엇을 남길지 고르는 일이다.",
        ],
      },
      {
        title: "어제 넣어둔 자료로 나온 대답",
        paragraphs: [
          "가상의 문서 검색 앱을 하나 만들어보자. 노트북 안에 모델 파일이 있고, 미리 준비한 자료를 넣어 질문하니 답이 나온다. 인터넷을 끊어도 같은 자료에는 대답한다.",
          "이 정도면 혼자서도 돌아가는 작은 도구를 얻은 기분이 들겠다.",
          "다음 날 새 문서를 넣는다. 이 앱은 새 문단을 검색용 숫자 표현으로 바꾸는 일을 외부 임베딩 API에 맡기도록 만들었다고 가정하자. 이전 자료의 변환 결과는 이미 노트북에 저장되어 있다.",
          "그러면 어제 자료로 답하는 일과 오늘 자료를 새로 준비하는 일이 서로 다른 곳에 기대고 있다. 앞의 설계에서는 인터넷이 끊기면 외부 API에 새 문서를 보낼 수 없다. 모델이 노트북에 있다는 사실만으로 그 단계까지 옮겨오지는 않는다.",
          "실제 제품을 시험해 얻은 결과가 아니라, 일부러 이렇게 나눠놓은 가상의 설계다. 그래도 ‘로컬에서 됩니다’라고 설명하려다 보면 어느 부분을 가리키는지 먼저 정해야겠다는 생각이 든다.",
          "완성된 답을 다시 보여줄 수 있는지, 새 자료에서도 답을 준비할 수 있는지. 사용자는 자료를 바꿔 넣기 전까지 그 차이를 모를 수 있다.",
          "내가 이 도구를 넘긴다면 어제의 좋은 답변만 남기기보다, 새 문서가 들어왔을 때 거치는 길도 같이 보고 싶다. 변환을 맡긴 곳은 어디인지, 연결이 없을 때는 어느 단계에서 기다리는지. 필요한 외부 서비스가 있다면 그것도 도구의 설명에 들어간다.",
          "그 단계를 노트북 안으로 옮기는 설계를 검토할 수는 있다. 다만 그때도 필요한 모델과 처리 시간, 결과가 달라지는지 확인할 일이 생긴다. ‘외부’를 지우는 설정 하나로 끝났다고 쓰고 싶지는 않다.",
        ],
      },
      {
        title: "접시 옆의 한 몫",
        paragraphs: [
          "영화의 감자와 프로그램을 같은 것으로 볼 수는 없다. 그래도 이미 나온 결과를 세다가, 다음 결과를 만들 조건을 놓치는 마음은 떠올려볼 수 있겠다.",
          "가상의 앱에서 어제 답변은 남아 있다. 보기에도 좋고, 다시 열 수도 있다. 새 문서를 준비하던 길이 막혔다는 사실은 그 답변 안에 표시되지 않는다.",
          "그래서 화성의 식탁을 상상해본다. 먹을 감자가 생긴 날에는 먼저 기뻐해도 좋겠다. 다음에 심을 몫을 따로 둔다고 오늘의 성공이 작아지는 것은 아닐 테니까.",
          "나는 아마 접시 옆에 감자 하나를 남겨둘 것 같다.",
          "먹지 않아서 남은 것인지, 다음번을 생각해서 남겨둔 것인지 알아볼 수 있게.",
        ],
      },
    ],
  },
  en: {
    title: "The potato I’d keep in The Martian",
    summary:
      "A harvest offers something to eat and something to plant again. The Martian made me think about keeping the means to produce the next result.",
    sources: [
      {
        label: "20th Century Studios · The Martian",
        href: "https://www.20thcenturystudios.com/movies/the-martian",
      },
      {
        label: "NASA · Deep-space food crop research",
        href: "https://www.nasa.gov/science-research/nasa-plant-researchers-explore-question-of-deep-space-food-crops/",
      },
      {
        label: "NASA · Rocket Ranch, Mars episode",
        href: "https://www.nasa.gov/podcasts/welcome-to-rocket-ranch/episode-1-mars/",
      },
    ],
    sections: [
      {
        title: "There are potatoes",
        paragraphs: [
          "Spoilers for the potato-growing part of The Martian (2015).",
          "Stranded on Mars, Mark Watney grows potatoes. Green appears inside a landscape inhospitable to people. For someone short of food, those leaves must be a welcome sight.",
          "The potatoes also suggest an awkward choice. Eat them and they are food today. Keep some and they can begin another crop.",
          "NASA’s food-crop article describes replanting sections containing a potato eye and mentions the film. What goes onto the plate and what gets planted again come from the same harvest.",
          "Count everything harvested as food for today and the next planting loses its share. I suspect I would divide the potatoes into two piles, then keep glancing at the smaller one when hungry.",
          "That does not make the film a practical recipe for farming on Mars. A separate NASA discussion explains differences such as harmful constituents in Martian regolith. What stays with me here is the decision about what to retain for another attempt.",
        ],
      },
      {
        title: "An answer from yesterday’s material",
        paragraphs: [
          "Imagine a document-search app on a laptop. The model file is local, the material has been prepared, and a question produces an answer. Disconnect the internet and it still answers from that material.",
          "It would feel like acquiring a little tool that could manage on its own.",
          "Add a new document the next day. Suppose this particular app sends new passages to an external embedding API to produce their searchable numerical representations. The representations for yesterday’s material are already stored on the laptop.",
          "Answering from old material and preparing new material now depend on different places. In this invented design, losing the connection prevents sending new passages to that API. Keeping the answering model on the laptop did not move that preparation step there too.",
          "This is a deliberately constructed example, not a product test. It still makes me pause before describing the tool as local: which part am I referring to?",
          "Can it show another answer from prepared material, or prepare answers from new material as well? Someone using it may not discover the distinction until changing the documents.",
          "If I handed this tool over, I would want to examine the route taken by a new document alongside yesterday’s good answer. Where does the conversion happen? Where does work wait without a connection? An external service it needs belongs in the explanation.",
          "Moving that step onto the laptop could be considered. It would bring questions about the required model, processing time and whether results change. I would hesitate to describe it as one setting that simply removes the external dependency.",
        ],
      },
      {
        title: "A share beside the plate",
        paragraphs: [
          "A film’s potatoes and a program are different things. They can still prompt a similar thought: counting the results already available can distract from the conditions needed to make another.",
          "Yesterday’s answer remains in the imagined app. It looks good and opens again. The blocked route for preparing a new document is not visible inside that answer.",
          "I picture the table on Mars. Finding food is worth celebrating first. Setting aside the next planting’s share would not make today’s success smaller.",
          "I would probably leave one potato beside the plate.",
          "Somewhere I could tell whether it was left uneaten, or deliberately kept for the next time.",
        ],
      },
    ],
  },
};
