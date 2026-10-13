import type { Note } from "./notes-data";

export const pueEnergyNote: Note = {
  page: "notePueEnergy",
  category: "SYSTEMS & ENERGY",
  date: "2026-10-14",
  sample: false,
  image: "/a/generated/notes/pue-and-the-energy-bill.webp",
  imageAlt: {
    ko: "작은 서버와 냉각 팬, 케이블로 연결된 황동 계기 옆에 놓인 종이",
    en: "Paper sheets beside a miniature server, cooling fan, and brass meter connected by a cable",
  },
  ko: {
    title: "PUE 옆에 전력량도 적어두기",
    summary:
      "효율을 나타내는 비율이 내려갔을 때, 나누기 전의 두 숫자도 같이 보고 싶어졌다.",
    sources: [
      {
        label: "미국 에너지부 — PUE의 정의와 냉각 시스템",
        href: "https://www.energy.gov/cmei/femp/cooling-water-efficiency-opportunities-federal-data-centers",
      },
      {
        label: "IEA 4E — 액체냉각 보고서 소개",
        href: "https://www.iea-4e.org/edna/publications/liquid-cooling-in-data-centres/",
      },
    ],
    sections: [
      {
        title: "좋아졌다는 보고서",
        paragraphs: [
          "데이터센터 효율 보고서를 받았다고 해보자. 첫 장에 PUE가 1.30에서 1.17로 내려갔다고 적혀 있다. 숫자만 보면 뭔가 잘된 것 같다. 다음 장을 넘겼더니 총 전력량은 늘었다.",
          "어느 쪽을 잘못 읽은 걸까.",
          "PUE를 설명하는 미국 에너지부 자료를 다시 보면 계산은 분명하다. 시설 전체가 한 해 동안 쓴 전력량을 같은 해 IT 장비가 쓴 전력량으로 나눈다. kWh를 kWh로 나누니 결과에는 단위도 없다.",
          "나누고 나면 숫자 하나라 편하다. 다만 나누기 전에는 두 숫자였다.",
          "IEA 4E가 공개한 액체냉각 보고서 소개도 이 지표를 읽을 때의 한계를 짚는다. 액체냉각으로 얻는 효율 개선을 PUE가 충분히 드러내지 못할 수 있다는 설명이다. 소개문만 확인했으며, 보고서 안의 개별 절감률이나 특정 설비의 운전 조건을 여기서 평가하려는 것은 아니다.",
          "그 설명을 읽고 비율 옆에 계산 전 숫자를 다시 써보고 싶어졌다.",
        ],
      },
      {
        title: "나누기 전에 있었던 것",
        paragraphs: [
          "실제 설비와 관계없는 작은 가상 숫자를 놓아보자. 첫해 IT 장비가 1,000kWh를 쓰고, 냉각과 전력설비 등 나머지가 300kWh를 썼다. 전체는 1,300kWh, PUE는 1.30이다.",
          "다음 해에는 IT 장비가 1,200kWh, 나머지가 200kWh를 썼다고 하자. 전체는 1,400kWh다. 1,400을 1,200으로 나누면 약 1.17이 된다.",
          "PUE는 내려갔다. 전체 전력량은 100kWh 늘었다. 계산이 싸우고 있는 것은 아니다. 비율이 답하는 질문과 총량이 답하는 질문이 다르다.",
          "IT 장비 밖에서 쓴 전력량은 이 예에서 100kWh 줄었다. 동시에 IT 장비가 쓴 전력량은 200kWh 늘었다. 나누어진 결과만 남기면 이 움직임을 다시 들여다보기 어렵다.",
          "여기에 ‘냉각을 바꿔서 서버 전력이 늘었다’는 원인까지 붙일 수는 없다. 위 숫자는 계산을 위해 만든 것이고, 무엇을 바꿨는지에 관한 정보는 없다. 특정 냉각수 온도를 추천할 근거도 없다.",
          "일을 얼마나 했는지도 아직 모른다. 계산을 훨씬 많이 마쳤다면 전력량 증가를 해석할 맥락이 생긴다. 같은 일을 하며 더 썼다면 다른 질문이 필요하다. PUE의 분모에는 완료한 작업 수가 들어 있지 않다.",
          "그래서 이 보고서에는 먼저 두 칸을 더 만들고 싶다. 전체 전력량과 IT 전력량. 같은 기간과 같은 측정 범위로 적어놓고, 그 옆에서 어떤 일을 얼마나 처리했는지 확인할 수 있게.",
        ],
      },
      {
        title: "숫자를 하나 더 놓을 자리",
        paragraphs: [
          "효율 숫자가 늘 나쁜 요약이라는 생각은 들지 않는다. 시설을 지원하는 데 드는 전력량을 IT 전력량에 견줘 읽는 질문에는 쓸 자리가 있다. 그 숫자 하나로 절전과 계산 성능까지 설명하려 할 때 곤란해진다.",
          "보고서를 읽는 쪽도 질문을 조금 구체적으로 해야겠다. 시설에서 더 적게 썼는지, IT 장비 바깥의 부담이 줄었는지, 같은 계산을 더 적은 에너지로 끝냈는지. 필요한 자료가 서로 다르다.",
          "표의 기간부터 맞춰야 한다. 한쪽에는 1년치를, 다른 쪽에는 부하가 높았던 짧은 구간을 넣고 비율을 비교하면 무엇이 달라졌는지 따라가기 어렵다. 냉각 밖의 장비를 어디까지 합쳤는지도 표시해야 한다.",
          "그런 표가 조금 더 넓어지는 것은 감수할 만해 보인다. 비율 하나만 크게 써두면 회의에서는 빨리 넘어갈 수 있겠지만, 다음 사람이 총량을 물으면 원래 자료를 다시 열어야 한다.",
          "처음의 가상 보고서로 돌아간다. 이제 첫 장에 1.17 옆으로 1,400kWh도 적혀 있다. 어느 숫자를 지울 이유는 없다. 둘 다 그 예에서 계산한 결과다.",
          "마지막으로 남은 빈칸에는 그 전기로 끝낸 일을 적고 싶다. 보고서를 넘기기 전에, 이번에는 그 칸을 한번 물어봐야겠다.",
        ],
      },
    ],
  },
  en: {
    title: "Put energy use beside PUE",
    summary:
      "When an efficiency ratio falls, I would like to see the two numbers that existed before the division.",
    sources: [
      {
        label: "US Department of Energy — PUE and cooling systems",
        href: "https://www.energy.gov/cmei/femp/cooling-water-efficiency-opportunities-federal-data-centers",
      },
      {
        label: "IEA 4E — Liquid Cooling in Data Centres overview",
        href: "https://www.iea-4e.org/edna/publications/liquid-cooling-in-data-centres/",
      },
    ],
    sections: [
      {
        title: "A report with good news",
        paragraphs: [
          "Suppose a data center efficiency report arrives. Its first page says PUE fell from 1.30 to 1.17. That looks like progress. On the next page, total energy use has increased.",
          "Which page did we misread?",
          "The US Department of Energy’s explanation gives a clear calculation: total annual facility energy divided by annual IT equipment energy. Dividing kWh by kWh leaves a dimensionless ratio.",
          "One number is convenient. Before the division, though, there were two.",
          "IEA 4E’s public overview of its liquid-cooling report also identifies a limitation: PUE can understate efficiency gains from liquid cooling. I have read the overview, and am not evaluating individual savings estimates or the operating conditions of a particular installation here.",
          "It made me want to put the original quantities back beside the ratio.",
        ],
      },
      {
        title: "Before the division",
        paragraphs: [
          "Take small, invented quantities unrelated to any real installation. In the first year, IT equipment uses 1,000kWh and cooling, power infrastructure, and other non-IT loads use 300kWh. Total energy is 1,300kWh. PUE is 1.30.",
          "In the next year, suppose IT uses 1,200kWh and the rest uses 200kWh. The total is 1,400kWh. Divide 1,400 by 1,200 and the result rounds to 1.17.",
          "PUE has fallen. Total energy has risen by 100kWh. The calculations agree; the ratio and the total answer different questions.",
          "Non-IT energy in this example fell by 100kWh while IT energy rose by 200kWh. Keeping only the quotient makes those movements harder to revisit.",
          "We cannot attach a cause such as “the cooling change raised server energy” to these numbers. They were invented for arithmetic and contain no information about what changed. They supply no basis for recommending a coolant temperature.",
          "We also do not know how much work was completed. Doing substantially more computation would provide context for increased energy use. Using more energy for the same work would raise another question. Completed work is not the denominator of PUE.",
          "I would first add two fields to the report: total energy and IT energy, using matching periods and measurement boundaries. Beside them, I would want a way to examine what work was completed.",
        ],
      },
      {
        title: "Room for another number",
        paragraphs: [
          "I do not think an efficiency ratio is inevitably a poor summary. Comparing supporting infrastructure energy with IT energy gives it a useful job. Asking that one ratio to explain energy savings and computational performance creates the difficulty.",
          "The reader can be more specific too. Did the facility use less energy? Did the overhead relative to IT fall? Did the same computation finish using less energy? Each question needs different evidence.",
          "The reporting periods need to match. Comparing a year on one side with a brief high-load interval on the other makes the change hard to interpret. The report also needs to say which non-IT equipment was included.",
          "A wider table seems a reasonable price. A large ratio on its own might let a meeting move quickly, but someone asking about the total would send us back to the underlying records.",
          "Return to the imaginary report. Its first page now shows 1,400kWh beside 1.17. There is no reason to remove either. Both came from the example’s arithmetic.",
          "I would leave the final space for the work completed with that energy. Before turning the page, I would ask about that field.",
        ],
      },
    ],
  },
};
