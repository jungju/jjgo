import type { Note } from "./notes-data";

export const lookalikeNote: Note = {
  page: "noteLookalike",
  category: "AI & PRACTICE",
  date: "2026-09-29",
  sample: false,
  image: "/a/generated/notes/unknown-or-lookalike.webp",
  imageAlt: {
    ko: "서로 비슷하지만 한 기호가 다른 주소 조각 두 장을 돋보기로 살펴보는 손",
    en: "A hand examining two similar address strips with one differing symbol through a magnifying glass",
  },
  ko: {
    title: "‘모르는 주소’와 ‘수상한 주소’는 다르다",
    summary:
      "주소핀의 도메인 확인기는 공식 목록에 없는 주소와 공식 주소를 흉내 낸 주소를 다르게 다룬다. AI의 답변도 근거 없음과 틀렸음을 구분해 말해야 하지 않을까.",
    sections: [
      {
        title: "",
        paragraphs: [
          "‘kbstar.com’과 ‘kb5tar.com’을 나란히 놓으면 다른 주소라는 걸 안다. 그런데 문자를 받고 누르기 직전에도 알아챌 수 있을까. 숫자 5가 소문자 s처럼 보이는 순간, 주소는 글자보다 모양으로 읽힌다.",
          "GeekNews에 주소핀의 도메인 판별기를 만든 글이 올라왔다. 공식 사이트 목록을 늘어놓기보다, 이미 손에 들어온 주소가 진짜인지 확인하고 싶다는 데서 출발한다.",
          "판별기는 입력된 주소에 직접 접속하지 않는다. 호스트 이름을 정리하고 공개된 공식 도메인 목록과 비교한다. 이름이 비슷하면 유사 주소로 알려주고, 신고된 주소와 맞으면 피싱으로 분류한다. 목록에 없고 비슷한 주소도 찾지 못하면 ‘모름’에 남긴다.",
          "여기서 중요한 건 레벤슈타인 거리보다 결과의 이름이다. 편집 거리는 두 문자열이 몇 글자 차이인지 알려준다. 하지만 그 숫자만으로 가짜 사이트라고 확정할 수는 없다. 비슷하다는 건 한 번 더 살펴볼 이유이지, 판결문은 아니다.",
          "그래서 ‘목록에 없다’와 ‘공식 주소를 흉내 낸 것 같다’를 나눈다. 전자는 가진 목록의 범위에 관한 말이고, 후자는 입력한 주소에서 발견한 신호에 관한 말이다. 둘을 한데 묶어 “위험합니다”라고 하면 모르는 것을 아는 척하게 된다.",
          "AI가 문서를 찾아 답할 때도 비슷한 구분이 유용하다. 예를 들어 제공된 규정 문서에서 어떤 휴가 조건을 찾지 못했다고 하자. 그건 “문서에서 확인하지 못했다”는 뜻이지, “그런 조건은 없다”는 확인과 같지 않다. 반대로 문서에서 서로 다른 조건이 발견됐다면, 그것도 단순히 답을 못 찾은 상태와 다르다.",
          "문장을 그럴듯하게 만드는 일보다 이 상태를 정확히 붙이는 일이 더 중요할 때가 있다. 근거가 없는데 없다고 말하면 사람은 확인을 멈춘다. 근거가 있는데 모른다고만 하면 다시 찾을 일을 늘린다. 둘 다 짧은 답변 하나로 끝나지만, 다음 행동은 달라진다.",
          "물론 도메인 확인과 문서 답변은 같은 문제가 아니다. 주소핀은 등록된 도메인 목록과 문자열을 비교한다. 문서 답변에는 질문의 맥락과 출처의 범위가 따라온다. 가져올 수 있는 건 알고리즘이 아니라, 결과를 몇 가지 상태로 나눠 말하는 방식이다.",
          "‘모릅니다’라는 답에도 어디까지 찾아봤는지가 들어가면 쓸모가 생긴다. “제공된 문서에서는 찾지 못했습니다”라고 하면 자료를 더 줄지, 담당자에게 물을지 결정할 수 있다. “주소 목록에는 없습니다”와 “등록 주소와 매우 비슷합니다”가 다른 행동을 부르는 것처럼.",
          "확신을 조금 낮춘다고 답변이 약해지는 건 아니다. 오히려 확인된 사실과 아직 모르는 부분이 나뉘면, 다음에 무엇을 해야 하는지 보인다. 한 글자 차이도 못 볼 수 있는 사람에게 필요한 건 만능 판정이 아니라, 어디까지 확인했고 어떤 이유로 멈췄는지 알려주는 표시일지 모른다.",
          "주소창을 다시 들여다보게 만드는 건 ‘위험’이라는 큰 경고보다 이런 문장일 수 있다.",
          "“공식 주소와 일치하지 않습니다. 비슷한 주소가 하나 있습니다. 누르기 전에 한 번 더 확인해 주세요.”",
          "그 정도면 일단 손가락을 멈출 시간은 생긴다.",
        ],
      },
    ],
    sources: [
      { label: "GeekNews 글", href: "https://news.hada.io/topic?id=34307" },
      {
        label: "저자의 원문",
        href: "https://velog.io/@as123123/%ED%95%9C-%EA%B8%80%EC%9E%90%EB%A7%8C-%EB%B0%94%EA%BE%BC-%EA%B0%80%EC%A7%9C-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%BD%94%EB%93%9C%EB%A1%9C-%EA%B0%80%EB%A0%A4%EB%82%B4%EA%B8%B0-%ED%8E%B8%EC%A7%91-%EA%B1%B0%EB%A6%AC%EC%99%80-%EC%88%AB%EC%9E%90-%EC%B9%98%ED%99%98-%EC%A0%95%EA%B7%9C%ED%99%94",
      },
      { label: "주소핀 확인기", href: "https://jusopin.com/check" },
    ],
  },
  en: {
    title: "An unknown address is not automatically suspicious",
    summary:
      "Jusopin treats an address missing from its official list differently from one that imitates a known domain. AI answers should distinguish missing evidence from a confirmed false claim too.",
    sections: [
      {
        title: "",
        paragraphs: [
          "Put ‘kbstar.com’ beside ‘kb5tar.com’ and the difference is clear. But would you catch it just before tapping a link in a text message? When the number 5 looks like a lowercase s, we read the address as a shape before we read it character by character.",
          "I found a GeekNews post about a domain checker built for Jusopin. At first I thought it was mainly a neatly organized directory of official websites. The article begins somewhere else: with a person who already has an address and wants to know if it is the real one.",
          "The checker does not connect to the submitted address. It normalizes the host name and compares it with a list of official domains. A similar name is marked as a lookalike; a reported address is classified as phishing. If it is missing from the list and no similar address turns up, the result stays unknown.",
          "The useful detail here is the name of each result, more than the edit distance. That distance tells you how many characters differ. It cannot, by itself, prove that a site is fake. Similarity is a reason to look again, not a verdict.",
          "So the checker separates ‘not on the list’ from ‘looks like an official address’. The first says something about the reach of its list. The second says something about a signal in the submitted address. Roll both into ‘dangerous’ and the system starts pretending it knows more than it does.",
          "A similar distinction seems useful when AI answers from documents. Suppose it cannot find a particular leave condition in the policy files it was given. That means ‘I could not confirm it in these documents’, not ‘there is no such condition’. If it finds two conflicting conditions, that is different again from finding no answer.",
          "Sometimes naming the state accurately matters more than making the sentence sound polished. If a system says a rule does not exist when it has no evidence, a person may stop checking. If it simply says ‘I don’t know’ when the evidence is right there, it sends someone searching again. Both answers are short; they lead to different next steps.",
          "Domain checking and document answering are not the same problem, of course. Jusopin compares a string with registered domains. A document answer also depends on the question and the scope of its sources. The useful connection is not the algorithm. It is giving different states different names.",
          "‘I don’t know’ becomes more useful when it says how far the search went. ‘I couldn’t find it in the documents you provided’ leaves room to add a source or ask the owner. Just as ‘not on the address list’ and ‘very similar to a registered domain’ call for different actions.",
          "Lowering certainty does not make an answer weaker. When confirmed facts are separated from what remains unknown, the next step becomes clearer. For someone who may miss a one-character difference, the useful feature may not be a perfect verdict but a note about what was checked and why it stopped there.",
          "A message that makes someone look at the address again may be smaller than a big red warning:",
          "‘This does not match an official address. It is similar to one we know. Please check before opening it.’",
          "That is enough time to pause a finger.",
        ],
      },
    ],
    sources: [
      {
        label: "GeekNews discussion",
        href: "https://news.hada.io/topic?id=34307",
      },
      {
        label: "Original article",
        href: "https://velog.io/@as123123/%ED%95%9C-%EA%B8%80%EC%9E%90%EB%A7%8C-%EB%B0%94%EA%BE%BC-%EA%B0%80%EC%A7%9C-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%BD%94%EB%93%9C%EB%A1%9C-%EA%B0%80%EB%A0%A4%EB%82%B4%EA%B8%B0-%ED%8E%B8%EC%A7%91-%EA%B1%B0%EB%A6%AC%EC%99%80-%EC%88%AB%EC%9E%90-%EC%B9%98%ED%99%98-%EC%A0%95%EA%B7%9C%ED%99%94",
      },
      { label: "Jusopin checker", href: "https://jusopin.com/check" },
    ],
  },
};
