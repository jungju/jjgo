import type { Note } from "./notes-data";

export const heightOriginNote: Note = {
  page: "noteHeightOrigin",
  category: "DATA & VISUALIZATION",
  date: "2026-11-11",
  sample: false,
  relatedPages: ["notePlacementHallway", "noteMissingField"],
  image: "/a/generated/notes/where-the-thirty-metres-came-from.webp",
  imageAlt: {
    ko: "같은 높이의 종이 건물 두 채에 빈 꼬리표가 달려 있고, 한쪽은 기록지와 줄자에, 다른 쪽은 층 모양 판과 간격 조각에 실로 연결된 그림",
    en: "Two equally tall paper buildings with blank tags, one connected to a record sheet and tape measure, the other to stacked floor pieces and a spacer",
  },
  ko: {
    title: "지도에 서 있는 30미터는 어디서 왔을까",
    summary:
      "기록에 적힌 30미터와 층수로 추정한 30미터는 화면에서 닮을 수 있다. 공개 데이터로 만든 3D 지도 개발기를 읽고, 숫자의 출처를 따로 적어봤다.",
    sources: [
      {
        label: "Alvin Hong · 공개 데이터로 만든 아파트 3D 지도 개발기",
        href: "https://alvin.ing/blog/apartment-3d-map-open-data-stack/",
      },
      {
        label: "MapLibre · fill-extrusion-height 스타일 명세",
        href: "https://maplibre.org/maplibre-style-spec/layers/#fill-extrusion-height",
      },
    ],
    sections: [
      {
        title: "같은 높이로 세워본다면",
        paragraphs: [
          "지도에 높이가 30미터인 건물 두 채를 세운다고 상상해보자. 바닥 모양과 색까지 같게 그리면, 높이만 보고 둘을 구분하기는 어려울 것이다.",
          "한 채는 자료에 높이 30미터가 적혀 있다. 다른 한 채는 10층이라는 정보만 있다. 이쪽은 층마다 3미터라고 가정해서 30미터를 채웠다.",
          "실제 건물을 옮겨 적은 예는 아니다. 출처가 다른 숫자를 비교하려고 만든 가상의 두 기록이다. 여기의 3미터는 예시를 위한 가정이고, 건물 높이를 계산하는 표준으로 가져온 값도 아니다.",
          "화면에서는 둘 다 30미터다. 그런데 숫자 옆에 적을 말은 다르다. 하나에는 ‘자료에 기록된 높이’, 다른 하나에는 ‘층수와 가정한 층고로 추정’이라고 써야겠다.",
          "alvin.ing의 3D 지도 개발기에서 이 구분이 눈에 들어왔다. 개발자는 층수로 추정하거나 기본값으로 채운 높이를 화면 표시에는 쓰면서 일조 계산에서는 제외했다고 설명한다. 높이마다 근거도 함께 저장했다.",
          "처음에는 빈 곳까지 입체로 채운 지도가 완성된 결과처럼 보일 수 있겠다. 글을 읽고 나니, 같은 모양으로 세워진 건물들이 어떤 숫자로 서 있는지도 보고 싶어졌다.",
          "MapLibre의 fill-extrusion-height는 미터 단위 높이를 받는 속성이다. 그 칸에 30을 넘겼다고 해서, 30을 어디서 얻었는지까지 화면이 설명해주지는 않는다.",
          "그래서 나는 가상의 기록을 만들 때 높이 옆에 출처 종류를 따로 넣어봤다. 두 높이는 그대로 30이지만, 기록된 높이만 고르면 첫 번째 건물만 남았다. 지도나 일조 계산을 실행한 것은 아니고, 작은 데이터 예에서 항목을 고른 것뿐이다.",
          "숫자를 다르게 만드는 일보다, 같은 숫자를 구별해두는 일이 먼저 필요했다.",
        ],
      },
      {
        title: "그림자가 없다는 말까지 믿게 될 때",
        paragraphs: [
          "이 두 건물을 배치 구경에 쓰는 것과, 앞집 때문에 햇빛이 얼마나 가려지는지 계산하는 데 쓰는 것은 부담이 다르겠다. 추정한 높이가 다음 결과의 재료로 들어가면, 그 가정도 같이 들어간다.",
          "그렇다고 추정값을 빼면 문제가 다 끝나는 것도 아니다. 원문은 높이를 모르는 건물이 그림자를 만들지 않으므로 실제보다 햇빛이 많게 나올 수 있다는 한계도 적었다.",
          "나는 이 부분을 함께 읽고 싶다. 추정한 건물을 계산에서 뺐다는 설명만 남기면, 보는 사람은 남은 결과가 더 확실해졌다고 생각할 수도 있으니까.",
          "가상의 지도라면, 결과 옆에 어느 건물이 포함됐고 어느 건물이 빠졌는지도 보여주고 싶다. 앞에 건물이 없어서 그림자가 없는 것인지, 앞 건물의 높이를 몰라 계산하지 못한 것인지 구분할 수 있게.",
          "자료에 높이가 적혀 있다는 사실도 모든 확인을 끝내주지는 않을 것이다. 언제 기록했는지, 지금 건물과 맞는지 같은 질문은 더 남는다. 출처 칸 하나로 현실을 전부 보증하려는 것은 아니다.",
          "다만 출처를 떼고 30만 남겨두면, 나중에 고칠 기회도 줄어든다. 어떤 값이 추정이었는지 찾으려고 처음 자료를 다시 열어야 할 테니까.",
          "AI에게 이런 지도를 만들게 부탁한다면, 건물 모양이 채워졌는지 본 다음에는 높이 기록도 하나 열어보고 싶다. 빈 곳을 보기 좋게 채운 값이 다음 계산으로 조용히 넘어가지는 않았는지.",
          "여기서는 실제 일조 시간이나 특정 건물의 높이를 검증하지 않았다. 가상의 두 기록과 원문의 설계 선택을 놓고, 숫자에 어떤 설명을 남길지 생각한 것이다.",
          "다시 30미터짜리 건물을 누르는 장면을 떠올린다. 작은 창이 열리면 높이 숫자 아래에 한 줄을 더 읽고 싶다.",
          "이 30미터는 어디서 가져왔나요.",
        ],
      },
    ],
  },
  en: {
    title: "Where did the thirty metres on the map come from?",
    summary:
      "A recorded height of thirty metres can look like an estimated thirty metres. A 3D mapping account prompted a small example that keeps the number’s origin alongside it.",
    sources: [
      {
        label: "Alvin Hong · Building a 3D apartment map with open data",
        href: "https://alvin.ing/blog/apartment-3d-map-open-data-stack/",
      },
      {
        label: "MapLibre · fill-extrusion-height style specification",
        href: "https://maplibre.org/maplibre-style-spec/layers/#fill-extrusion-height",
      },
    ],
    sections: [
      {
        title: "If we draw them equally tall",
        paragraphs: [
          "Imagine placing two thirty-metre buildings on a map. Give them the same footprint and colour, and their height alone will not tell them apart.",
          "One has a recorded height of thirty metres. For the other, only ten storeys are known. Assume three metres per storey, and that one becomes thirty metres too.",
          "These are two invented records, not measurements of real buildings. The three-metre figure is an assumption for this example, not an engineering standard.",
          "Both display heights are thirty metres. The descriptions beside them should differ: recorded height for one, estimated from storey count and an assumed storey height for the other.",
          "That distinction stood out in Alvin Hong’s 3D mapping account on alvin.ing. The developer describes using estimated or default heights for display while excluding them from sunlight calculations, and storing the basis of each height.",
          "A map filled with solid buildings could initially look complete. After reading the account, I wanted to see which numbers were holding those identical-looking shapes up.",
          "MapLibre’s fill-extrusion-height takes a height in metres. Passing thirty to that property does not explain where the thirty came from.",
          "I made my invented records with a separate origin field. Both heights remained thirty, but selecting only recorded heights left the first building. This was a small data-selection example; I did not render a map or run a sunlight simulation.",
          "Before making the numbers different, I needed a way to distinguish equal numbers.",
        ],
      },
      {
        title: "When no shadow starts to mean something",
        paragraphs: [
          "Browsing a building layout and calculating how much sunlight a neighbour blocks ask different things of those heights. If an estimate feeds the next result, its assumption goes along too.",
          "Removing estimates does not finish the problem. The original account also notes that buildings with unknown heights cast no simulated shadow, so the result can overstate the available sunlight.",
          "I want to read those points together. Keep only the sentence about excluding estimated heights, and a reader might take the remaining result as more certain.",
          "For my imagined map, I would want the result to show which buildings were included and which were left out. No building in front, and a building whose height was unavailable, should be distinguishable explanations for an absent shadow.",
          "A recorded height would not settle every question either. When was it recorded, and does it match the building now? One origin field cannot guarantee the whole scene.",
          "Still, strip that field away and retain only thirty, and a later correction becomes harder. Someone must return to the original material to find which values were estimates.",
          "If I asked an AI to build such a map, I would open a height record after looking at the filled shapes. Had a value added to complete the display quietly entered the next calculation?",
          "I have not verified actual sunlight hours or the height of any particular building here. I used two invented records and the source’s design choice to consider what explanation should travel with a number.",
          "Back at the thirty-metre building, I imagine clicking it. When the little panel opens, I would like to read one more line below the height.",
          "Where did this thirty come from?",
        ],
      },
    ],
  },
};
