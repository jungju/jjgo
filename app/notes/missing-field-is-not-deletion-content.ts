import type { Note } from "./notes-data";

export const missingFieldNote: Note = {
  page: "noteMissingField",
  category: "DATA & PRODUCT",
  date: "2026-10-05",
  sample: false,
  image: "/a/generated/notes/missing-field-is-not-deletion.webp",
  imageAlt: {
    ko: "봉투에 담긴 연락처 카드 옆에 빈 수정 메모와 지우개, 녹색 전화 수화기가 놓인 모습",
    en: "A contact card in an envelope beside a blank update slip, an eraser and a green telephone handset",
  },
  ko: {
    title: "전화번호를 지우기 전에, 무엇이 왔는지 본다",
    summary:
      "이름만 고쳤는데 전화번호도 사라진다면. 가상의 연락처 수정 화면을 따라가며 JSONB의 빈 값과 부분 수정의 삭제 지시를 나눠 생각했다.",
    sources: [
      {
        label: "VisuaLeaf · PostgreSQL JSONB 조회와 수정",
        href: "https://visualeaf.com/blog/postgresql-jsonb-query-update-index/",
      },
      {
        label: "PostgreSQL · JSON Functions and Operators",
        href: "https://www.postgresql.org/docs/current/functions-json.html",
      },
      {
        label: "RFC 7396 · JSON Merge Patch",
        href: "https://www.rfc-editor.org/rfc/rfc7396",
      },
    ],
    sections: [
      {
        title: "이름만 고쳤는데",
        paragraphs: [
          "연락처 수정 화면을 하나 가정해보자. 이름에 오타가 있어서 한 글자를 고쳤다. 전화번호는 건드리지 않았다. 저장을 누르고 다시 보니 이름은 맞는데 전화번호가 사라졌다.",
          "‘번호도 지우려고 하셨나요?’라고 물으면 조금 황당할 것이다. 이름을 고치러 왔다고 했는데.",
          "이 화면이 바뀐 항목만 보내는 부분 수정 방식이라고 해보자. 이름이 요청에 들어 있고, 전화번호 항목은 아예 없다. 그런데 서버가 보내지 않은 항목을 빈 값으로 채운 뒤 저장하면, 수정하지 않은 번호까지 없어질 수 있다.",
          "한 화면에서는 빈칸처럼 보이는 것들이 있다. 요청에 없던 항목, null로 온 항목, 빈 문자열로 온 항목. 눈에는 비슷해도 무슨 일을 하라는 말인지는 다를 수 있다.",
          "VisuaLeaf의 JSONB 사용 가이드는 문서 전체를 교체하지 않고 개별 값을 고치는 방법을 설명한다. 그 예를 읽다가, 저장 함수 앞에서 이미 지울 것과 남길 것을 잘못 고를 수도 있겠다는 생각이 들었다.",
        ],
      },
      {
        title: "없었다는 말이 어디에서 나왔나",
        paragraphs: [
          "PostgreSQL 문서는 JSON에서 존재하지 않는 키나 경로를 꺼내면 SQL NULL을 돌려준다고 설명한다. JSONB 객체 안에 실제로 들어 있는 JSON null과는 구분해야 한다.",
          "키의 존재를 확인하는 연산과 jsonb_typeof 같은 함수를 함께 보면 그 구분에 도움이 된다. JSON null의 타입을 물었을 때 나오는 문자열 ‘null’도 SQL NULL과 같지 않다.",
          "앞의 수정 요청에서 전화번호를 꺼낸 결과만 보고 ‘값이 없네’라고 판단하면 질문 하나를 건너뛰기 쉽다. 처음부터 그 항목을 보냈는가.",
          "이 부분 수정 앱이라면, 전화번호가 요청에 없는 경우에는 기존 번호를 그대로 두는 규칙을 택하고 싶다. 값에 기본값을 채우기 전에 항목이 있었는지부터 확인한다.",
          "번호를 지우려는 경우에는 지우겠다는 뜻이 따로 전달되어야 한다. 어떤 값을 그 뜻으로 사용할지도 클라이언트와 서버가 합의해야 한다.",
          "JSON Merge Patch에는 그런 약속이 있다. RFC 7396이 정의한 객체 패치에서는 보내지 않은 항목을 그대로 두고, null로 보낸 항목은 삭제한다.",
          "그래서 이 앱이 그 방식을 채택했다면 전화번호 항목을 빼고 보낸 요청과 ‘phone: null’이 들어 있는 요청은 다른 수정이다. 단순히 PATCH라는 이름을 썼다는 이유로 모든 API가 이 규칙을 따르는 것은 아니다.",
        ],
      },
      {
        title: "저장할 값과 시킬 일",
        paragraphs: [
          "여기서 또 헷갈릴 수 있다. JSONB에 저장된 ‘phone: null’은 데이터의 한 상태다. JSON Merge Patch 요청의 ‘phone: null’은 해당 항목을 제거하라는 지시다.",
          "DB에 null을 넣는 함수가 이 약속까지 알아서 해주지는 않는다. 수정 요청을 어떤 작업으로 바꿀지는 API가 정해야 한다.",
          "만약 업무상 JSON null 자체를 저장해두는 일이 필요하다면 어떨까. 삭제 지시에도 null을 쓰는 형식으로는 그 값을 그대로 설정하기 어렵다. 그 요구에 맞는 다른 수정 형식이나 명시적인 작업 표현을 검토해야 한다.",
          "빈 문자열도 그냥 같은 바구니에 넣고 싶지 않다. 이 연락처 앱에서 빈 번호를 허용할지, 잘못된 입력으로 돌려보낼지 정해야 한다. 화면의 전화번호 칸을 비웠을 때 실제 요청이 무엇으로 나가는지도 함께 본다.",
          "이 가상의 앱을 확인한다면 세 번 저장해보겠다. 이름만 고친 경우, 번호를 명시적으로 지운 경우, 번호 칸을 비운 경우. 이름과 번호가 각각 어떻게 남는지 확인하고, 클라이언트가 보내지 않은 항목을 중간에서 null로 바꾸는지도 살펴본다.",
          "서버가 이미 정해둔 수정 형식과 화면이 보내는 형식이 다르면, 어느 한쪽의 함수만 고쳐서는 같은 일이 다시 생길 수 있다.",
          "연락처에 번호가 없는 상태를 보고도 이유는 하나로 정해지지 않는다. 아직 입력하지 않았을 수 있고, 일부러 지웠을 수도 있다. 수정 요청에서는 건드리지 않았다는 뜻까지 더해진다.",
          "빈칸 하나가 생각보다 많은 말을 대신한다.",
          "이름의 오타를 고치고 저장하려는 사람에게는 그런 사정이 보이지 않는다. 다시 열린 화면에 전화번호가 그대로 있으면 될 뿐이다.",
          "그 번호를 지우기 전에, 지우라는 말이 어디에 있었는지 먼저 찾아보고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "Before erasing a phone number, check what was sent",
    summary:
      "An imagined contact form loses a phone number after a name edit. JSONB values and partial-update instructions need different interpretations.",
    sources: [
      {
        label: "VisuaLeaf · PostgreSQL JSONB queries and updates",
        href: "https://visualeaf.com/blog/postgresql-jsonb-query-update-index/",
      },
      {
        label: "PostgreSQL · JSON Functions and Operators",
        href: "https://www.postgresql.org/docs/current/functions-json.html",
      },
      {
        label: "RFC 7396 · JSON Merge Patch",
        href: "https://www.rfc-editor.org/rfc/rfc7396",
      },
    ],
    sections: [
      {
        title: "Only the name changed",
        paragraphs: [
          "Imagine a contact-editing screen. There is a typo in the name, so you fix one letter. You leave the phone number alone. After saving, the name is correct and the number has disappeared.",
          "‘Did you mean to erase the number too?’ would be a strange question to receive. You came to fix the name.",
          "Suppose this screen uses partial updates, sending only changed fields. The request contains the name and omits the phone field. If the server fills omitted fields with empty values before saving, it can erase a number nobody edited.",
          "A missing field, an explicit null and an empty string can all look like an empty box on a screen. They can still ask the application to do different things.",
          "VisuaLeaf’s JSONB guide describes changing individual values without replacing the whole document. Reading it made me think about a decision made earlier: choosing what to erase or preserve before the storage function even runs.",
        ],
      },
      {
        title: "Where did the absence come from?",
        paragraphs: [
          "PostgreSQL’s documentation says extracting a nonexistent JSON key or path returns SQL NULL. That needs to be distinguished from a JSON null actually present in a JSONB object.",
          "Checking key existence alongside functions such as jsonb_typeof can help. The text ‘null’ returned for a JSON null’s type is also distinct from SQL NULL.",
          "Look only at the extracted phone value in this example, conclude ‘there is no value,’ and it is easy to skip a question. Was that field included in the request at all?",
          "For this hypothetical partial-update app, I would choose to preserve the existing number when the phone field is omitted. Check presence before supplying a default value.",
          "An intentional deletion should arrive as an intentional instruction. The client and server need to agree on how to express it.",
          "JSON Merge Patch provides one such contract. For the object patches defined in RFC 7396, omitted members remain unchanged and members sent as null are removed.",
          "If this app adopts that format, a request omitting phone and one containing ‘phone: null’ request different edits. Naming an endpoint PATCH does not make every API follow those rules.",
        ],
      },
      {
        title: "A stored value and an instruction",
        paragraphs: [
          "There is another possible mix-up. ‘Phone: null’ stored in JSONB describes a data state. In a JSON Merge Patch request, it instructs the recipient to remove that member.",
          "A database function that stores a null does not automatically implement this contract. The API must translate the request into the intended operation.",
          "What if the product needs to store a JSON null as an explicit value? A format using null for removal cannot directly express setting that value in the same way. A different update format or explicit operation may fit that requirement better.",
          "I would keep empty strings out of the same bucket too. This imagined contact app needs to decide whether an empty phone value is allowed or rejected. Then check what the form actually sends when someone clears the box.",
          "To examine this hypothetical app, I would save three cases: a name-only edit, an explicit number deletion and a cleared phone box. Check the resulting name and number, and inspect whether an intermediate layer turns an omitted field into null.",
          "If the server’s chosen update format differs from what the screen sends, changing one storage function may leave the problem waiting to happen again.",
          "A contact without a number does not tell its whole story. The number might never have been supplied, or it might have been deliberately removed. In an update request, leaving it out can carry another meaning: leave it alone.",
          "One empty box is doing a surprising amount of talking.",
          "The person fixing a typo does not see any of this. They just expect the number to remain when the screen opens again.",
          "Before erasing it, I would like to find the instruction that asked for that.",
        ],
      },
    ],
  },
};
