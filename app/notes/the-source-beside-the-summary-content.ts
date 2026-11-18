import type { Note } from "./notes-data";

export const wikiSourceNote: Note = {
  page: "noteWikiSource",
  category: "AI & KNOWLEDGE",
  date: "2026-11-19",
  sample: false,
  relatedPages: ["noteHeightOrigin", "noteApprovalVersion"],
  image: "/a/generated/notes/the-source-beside-the-summary.webp",
  imageAlt: {
    ko: "보호 종이 안의 원문 편지와 연필로 고치는 파란 요약 카드가 실로 연결된 그림",
    en: "A preserved letter in a translucent sleeve linked by thread to a separate blue summary card being corrected",
  },
  ko: {
    title: "AI 위키의 요약이 틀렸을 때, 원문은 남아 있어야 한다",
    summary:
      "‘출고까지 약 3영업일 예상’이 ‘3일 안에 도착’으로 바뀌는 가상의 요약을 생각했다. 요약을 고치는 일과 받은 자료를 덮어쓰는 일을 나누고 싶은 이유다.",
    sources: [
      {
        label: "느슨한 집요함 · 개인 지식 위키를 AI로 운영하며 남긴 기록",
        href: "https://neuseunhan.pages.dev/ai/llm-wiki-half-year/",
      },
    ],
    sections: [
      {
        title: "예상이 약속으로 바뀌는 동안",
        paragraphs: [
          "‘현재 재고 기준, 출고까지 약 3영업일 예상. 주문 확정 후 일정 재확인.’ 이런 안내를 받았다고 해보자. 실제 업체의 문장이 아니라, 요약을 생각해 보려고 만든 작은 예다.",
          "AI 위키에는 한 줄로 정리됐다. ‘주문하면 3일 안에 도착.’ 짧아졌다. 읽기도 쉽다. 그런데 원래 안내에는 없던 약속이 생겼다.",
          "물건을 내보내는 날이 받는 날이 됐고, 영업일이라는 말도 빠졌다. 무엇보다 아직 다시 확인할 일이 남아 있다는 문장이 없어졌다. 고객에게 전달하기에는 요약 쪽이 더 시원하겠지만, 그만큼 자신 있게 말할 근거는 어디에 있을까.",
          "느슨한 집요함의 개인 지식 위키 운영 글을 읽다가 이 상황을 떠올렸다. 글쓴이는 받은 원본 자료와 AI가 정리하는 위키, 전달할 결과물을 구분한다. 원본은 읽는 쪽에 두고, 요약과 연결은 별도로 고쳐 가는 방식이다.",
          "그중 원본을 고치지 않는다는 규칙이 눈에 남았다. 처음에는 폴더를 깔끔하게 나누는 얘기로 읽히지만, 요약이 틀렸을 때를 생각하면 조금 다르게 보인다. 두 문장을 나란히 놓을 수 있어야 무엇이 달라졌는지 따질 수 있다.",
          "앞의 가상 위키를 고친다면, 나는 먼저 ‘도착’을 ‘출고’로 돌리고 싶다. 약 3영업일이라는 조건과 주문 확정 뒤 다시 확인한다는 말도 남긴다. 그러고 나면 문장이 다시 조금 길어진다. 짧게 쓰려다가 없앤 것은 군더더기만이 아니었다.",
        ],
      },
      {
        title: "고쳐도 되는 종이와 받은 종이",
        paragraphs: [
          "요약만 고치면 두 문장이 남는다. 그때 받은 안내와 지금 고친 해석이다. 왜 고쳤는지 한 줄 적어두면, 다음 사람이 같은 질문을 했을 때도 출발점을 찾을 수 있다.",
          "반대로 원본 파일까지 요약에 맞춰 고쳐버리면 곤란해진다. 나중에 ‘누가 3일 안에 도착한다고 했죠?’라고 물었을 때, 열어본 자료가 이미 그 말을 하고 있다. 서로 다른 두 파일이 같은 내용을 가리키니 확인이 끝난 것 같지만, 사실은 한쪽을 다른 쪽에 맞춘 결과일 수 있다.",
          "그래서 받은 자료와 작업 중인 설명을 따로 두는 쪽이 마음에 든다. 위키를 잘 고칠 수 있게 하면서도, 그 위키가 무엇을 읽고 그렇게 썼는지는 남겨두는 것이다. 파일을 두 벌 만드는 것보다 그 관계를 잃지 않는 일이 더 중요해 보인다.",
          "링크가 있다는 것만으로 충분한 것은 아니다. 같은 주소의 안내가 나중에 바뀔 수도 있다. 이 예에서라면 어느 날 받은 어떤 안내를 바탕으로 정리했는지 알고 싶다. 허용된 범위에서 받은 자료의 버전이나 확인 날짜를 남겨두는 이유가 생긴다.",
          "원본을 남긴다고 그 내용이 언제나 맞아지는 것도 아니다. 업체가 나중에 재고 부족을 알려왔다면 새 안내를 반영해야 한다. 예전 안내를 몰래 새 안내로 바꾸기보다, 어떤 자료가 들어와서 판단을 바꿨는지 따라갈 수 있으면 좋겠다.",
          "이것을 위키 도구의 자동 보호 기능으로 확인한 것은 아니다. 여기서는 문서를 읽고, 가상의 두 문장을 어떻게 다룰지 생각했다. 폴더 이름에 원본이라고 써둔다고 쓰기를 막아주는 것은 아니니, 실제로 운영할 때의 권한이나 저장 방식은 따로 확인할 일이다.",
          "읽은 운영 글에는 AI가 적어둔 위키를 자신이 이해한 지식으로 착각하지 않으려는 고민도 나온다. 그 대목도 앞의 예에 붙여보고 싶다. 원문 링크가 있고 요약을 고쳤다는 기록이 있어도, 내가 출고와 도착의 차이를 설명하지 못하면 비슷한 약속을 다시 할 수 있다.",
          "위키를 읽는 사람이 해볼 질문은 길지 않겠다. ‘이 안내에서 아직 확정되지 않은 것은 뭐죠?’ 세 줄짜리 답을 다시 외우기보다, 지금 누구에게 무엇을 확인해야 하는지 말할 수 있는 편이 낫다.",
          "가상의 안내 끝에는 아직 그 문장이 남아 있다. ‘주문 확정 후 일정 재확인.’ 고객에게 도착 날짜를 알려주기 전에, 이번에는 그 확인을 누가 할지부터 묻고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "When an AI wiki summary is wrong, keep the source",
    summary:
      "An invented note saying dispatch is estimated in about three business days becomes a promise of arrival within three days. Correcting the summary should leave us a way to see what was actually supplied.",
    sources: [
      {
        label:
          "Neuseunhan · A personal account of maintaining an AI-assisted knowledge wiki",
        href: "https://neuseunhan.pages.dev/ai/llm-wiki-half-year/",
      },
    ],
    sections: [
      {
        title: "While an estimate becomes a promise",
        paragraphs: [
          "Suppose a notice says: “Based on current stock, dispatch is estimated in about three business days. Reconfirm the schedule after the order is confirmed.” This is an invented example, not a quotation from a supplier.",
          "The AI wiki condenses it to one line: “Order now and it will arrive within three days.” Shorter. Easier to read. It also makes a promise the notice never made.",
          "Dispatch has become arrival, and business days have become days. More significantly, the need to check again has disappeared. The summary sounds more decisive when passed to a customer. What would justify that extra confidence?",
          "I thought of this while reading Neuseunhan’s account of maintaining a personal knowledge wiki. The author separates received source material, an AI-maintained working wiki, and outputs intended for others. Summaries and connections can change while the sources remain separate.",
          "The rule about leaving originals untouched stayed with me. It can look like a matter of tidy folders until a summary is wrong. You need the two sentences beside each other to ask what changed.",
          "To correct the invented wiki, I would first change arrival back to dispatch. I would restore the approximate business-day estimate and the need to reconfirm after the order. The sentence gets a little longer again. Some of what brevity removed was doing useful work.",
        ],
      },
      {
        title: "The working page and the received page",
        paragraphs: [
          "Changing only the summary leaves two records: the notice received then and the interpretation corrected now. A short note explaining the change gives the next reader somewhere to start.",
          "Editing the source file to match the summary creates a different problem. Someone later asks who promised arrival within three days, opens the source, and finds that promise there too. Two agreeing files can look like confirmation even when one was rewritten to match the other.",
          "I would rather keep received material apart from the explanation being worked on. Let the wiki improve, while retaining what it read before making a claim. Preserving that relationship matters more than merely having two files.",
          "A link alone may not preserve it. The notice at the same address could change later. For this example, I would want to know which received notice the summary used and when. That gives a reason to retain an allowed copy or version reference and a date of consultation.",
          "Keeping a source does not make it permanently correct. If a later notice reports a stock shortage, the wiki should reflect that. Rather than quietly replacing the old notice with the new one, I would want to follow which new information changed the judgment.",
          "I have not verified an automatic protection feature in a wiki product. This is a reflection on a document and an invented pair of sentences. Naming a folder originals does not prevent writes; permissions and storage behavior would need their own checks in a real setup.",
          "The account also raises a separate concern: mistaking what AI has written in a wiki for something the author understands. That fits the example too. Even with a source link and a correction record, I could make the same promise again if I could not explain the difference between dispatch and arrival.",
          "The reader’s question need not be elaborate: what is still unconfirmed in this notice? Rather than memorizing another short answer, I would like to be able to say what needs checking and with whom.",
          "The invented notice still ends with the instruction to reconfirm after the order. Before giving a customer an arrival date, I would ask who is going to make that check.",
        ],
      },
    ],
  },
};
