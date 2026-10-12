import type { Note } from "./notes-data";

export const unknownNameNote: Note = {
  page: "noteUnknownName",
  category: "CODE & CONTEXT",
  date: "2026-10-13",
  sample: false,
  image: "/a/generated/notes/searching-before-knowing-the-name.webp",
  imageAlt: {
    ko: "펼친 책에서 책장의 다른 책으로 이어지는 황토색 실",
    en: "An amber thread leading from an open book to another book on a shelf",
  },
  ko: {
    title: "함수 이름을 모를 때",
    summary:
      "jevgrep을 보며, 동작으로 코드를 찾는 질문이 구체적인 함수 이름으로 바뀌는 순간을 생각했다.",
    sources: [
      {
        label: "jevgrep 공식 저장소",
        href: "https://github.com/dzhng/jevgrep",
      },
      {
        label: "jevgrep 아키텍처 문서",
        href: "https://github.com/dzhng/jevgrep/blob/main/docs/architecture.md",
      },
      {
        label: "공개된 검색 출력 예시",
        href: "https://github.com/dzhng/jevgrep/blob/main/specs/done/jevgrep/assets/stdout-example.txt",
      },
    ],
    sections: [
      {
        title: "그 코드는 어디에 있더라",
        paragraphs: [
          "처음 보는 저장소에서 요청 재시도를 고쳐야 한다고 해보자. 증상은 안다. 서버 응답이 늦으면 같은 요청을 다시 보낸다. 그런데 그 일을 하는 함수 이름을 모른다.",
          "검색창에 retry를 넣어 볼 수 있다. 설정 파일과 테스트, 주석이 나온다고 치자. 정작 요청을 보내는 코드는 공통 클라이언트 뒤에 숨어 있다. 재시도라는 단어가 적힌 곳을 다 읽고 나서도, 내가 고칠 요청이 그 길로 가는지는 아직 헷갈린다.",
          "이럴 때 옆 사람에게 묻고 싶은 말은 짧다. ‘시간 초과되면 다시 보내는 거, 어디서 해요?’",
          "jevgrep은 그런 질문으로 코드를 찾게 하는 도구다. 공식 문서는 저장소에 동작을 질문하면 관련 파일과 읽을 지점, 줄 위치가 붙은 원문을 돌려준다고 소개한다. 나는 설치해서 써 본 후기를 쓰는 중은 아니다. 문서와 공개 출력 예시를 읽고, 낯선 코드를 찾아가는 이 장면을 떠올렸다.",
          "책 제목을 모른 채 도서관에 들어간 기분과 조금 비슷하다. ‘주인공이 매일 같은 날을 사는 책인데요’라고 물어볼 수는 있다. 먼저 제목을 알아야만 검색할 수 있다면, 질문은 그 자리에서 빙빙 돈다.",
        ],
      },
      {
        title: "첫 페이지를 펼친 다음",
        paragraphs: [
          "문서에서 마음에 든 것은 결과에 실제 소스가 붙는다는 점이었다. 공개된 출력 예시에는 다른 클래스의 메서드로 넘기는 짧은 코드와, 그 메서드가 있는 파일이 함께 나온다. 읽던 줄에서 다음 파일로 넘어갈 손잡이가 있다.",
          "가상의 재시도 문제에서도 그런 손잡이를 원한다. 누군가 ‘공통 클라이언트 쪽을 보세요’라고 알려 주면 좋겠지만, 거기서 어떤 함수를 열어야 하는지까지 보이면 더 좋다.",
          "첫 소스에서 sendWithPolicy라는 이름을 발견했다고 가정해 보자. 이제 그 이름으로 호출하는 곳을 찾을 수 있다. 막연했던 질문에 검색할 단어가 생겼다.",
          "함수 안에 재시도 분기가 있다고 해서 내가 찾던 요청의 설명이 바로 끝나지는 않는다. 그 함수를 부르는 쪽에서 어떤 정책을 넘기는지도 읽어야 한다. 예를 들어 같은 클라이언트를 쓰는 두 경로 중 한쪽만 재시도를 켜도록 작성돼 있을 수 있다.",
          "이 예에서는 함수 본문을 찾은 뒤에 오히려 질문이 작아진다. ‘재시도를 어디서 하지?’가 ‘이 호출에서는 어떤 정책을 넘기지?’로 바뀐다. 다음에 읽을 줄을 고를 수 있게 된다.",
          "코드를 찾는 도구에 기대하는 도움도 이쪽에 가깝다. 처음부터 저장소 전체를 이해한 사람처럼 설명해 주는 것보다, 내가 다음 문장을 읽을 자리를 찾아 주면 좋겠다.",
        ],
      },
      {
        title: "같은 이름의 다른 길",
        paragraphs: [
          "jevgrep의 아키텍처 문서는 구문 분석과 읽을 지점 안내가 실제 실행 시 호출될 메서드를 증명하는 것은 아니라고 범위를 적어 둔다. 코드의 위치와 실행의 선택은 연결해서 읽어야 한다는 말로 받아들였다.",
          "상속받은 메서드, 환경에 따라 고르는 구현, 호출할 때 넘기는 옵션을 생각하면 그 구분이 이해된다. 이름이 같아도 어떤 객체와 설정을 거쳐 들어왔는지에 따라 봐야 할 코드가 달라질 수 있다.",
          "그래서 첫 결과를 읽고 나면 익숙한 일을 다시 하게 될 것 같다. 정확한 이름으로 참조를 찾고, 호출하는 쪽을 열고, 설정이 어디서 들어오는지 본다. 동작을 설명하는 질문으로 시작했어도 중간부터는 구체적인 이름이 필요해진다.",
          "검색이 비어 있을 때도 마찬가지다. 내가 물은 범위와 도구가 살펴본 범위를 확인해야 한다. 문서에는 탐색 예산에 도달한 결과를 부분 탐색으로 알린다고 쓰여 있다. 그런 결과라면 질문이나 검색할 루트를 좁혀 다시 볼 이유가 있다. 빈 목록만 보고 기능이 없다고 결론내리기는 이르다.",
          "반대로 이미 함수와 경로를 알고 있다면 바로 그 파일을 열면 될 일도 많겠다. 매번 도서관 안내 데스크에 들를 필요는 없다. 책장 위치를 외웠다면 그냥 걸어가면 된다.",
        ],
      },
      {
        title: "이제 이름 하나는 안다",
        paragraphs: [
          "가상의 재시도 작업에 남길 메모를 생각해 본다. ‘관련 코드 찾음’보다는 어떤 요청에서 시작해 어느 호출을 거쳐 어떤 정책에 도착했는지를 짧게 적고 싶다. 다음 사람이 그 줄들을 다시 열 수 있도록.",
          "정적인 소스만 읽었다면 메모도 거기까지다. 실제 요청을 실행해 관찰한 내용은 따로 남겨야 한다. 문서를 읽은 나 역시 이 글에서 특정 저장소의 재시도 동작을 확인했다고 말할 수는 없다.",
          "그래도 처음보다 상황은 낫다. 이름을 몰라서 시작하지 못했던 질문이, 다음에 찾아볼 이름 하나를 얻었다.",
          "이제 sendWithPolicy를 검색할 수 있다. 내가 고칠 요청은 어느 쪽에서 이 함수를 부르고 있을까.",
        ],
      },
    ],
  },
  en: {
    title: "Before you know the function’s name",
    summary:
      "jevgrep made me think about the moment a question about behavior turns into a concrete symbol you can follow.",
    sources: [
      {
        label: "jevgrep repository",
        href: "https://github.com/dzhng/jevgrep",
      },
      {
        label: "jevgrep architecture",
        href: "https://github.com/dzhng/jevgrep/blob/main/docs/architecture.md",
      },
      {
        label: "Published search output example",
        href: "https://github.com/dzhng/jevgrep/blob/main/specs/done/jevgrep/assets/stdout-example.txt",
      },
    ],
    sections: [
      {
        title: "Where does that code live?",
        paragraphs: [
          "Suppose you need to change request retries in an unfamiliar repository. You know the symptom: when a server takes too long to respond, the request is sent again. You do not know the name of the function responsible.",
          "You could search for retry. Imagine finding configuration, tests, and comments, while the request itself sits behind a shared client. After reading every occurrence, you might still be unsure whether your request takes that route.",
          "What you want to ask a colleague is simple: “Where do we send it again after a timeout?”",
          "jevgrep is a tool for finding code through questions like that. Its README describes returning relevant files, reading leads, and verbatim source with line locations. I have not installed it for a hands-on review. Reading its documentation and published output made me picture this search through unfamiliar code.",
          "It feels a little like entering a library without a book title. You can ask for “the one where the main character lives the same day over and over.” If you must know the title before searching, you are stuck circling the question.",
        ],
      },
      {
        title: "After opening the first page",
        paragraphs: [
          "I liked that the result includes actual source. The published output example shows a short method forwarding to another class’s method, along with the file containing that method. There is something to follow from the current line into the next file.",
          "I would want that handle in the hypothetical retry task. “Look in the shared client” is helpful. Seeing which function to open makes the next move clearer.",
          "Suppose the first excerpt gives us a name: sendWithPolicy. We can now find its callers. The vague question has acquired a precise search term.",
          "A retry branch in that function does not finish the explanation of our request. We also need to read the policy supplied by the caller. Two routes could use the same client while only one enables retries.",
          "In this example, finding the function makes the question smaller. “Where do retries happen?” becomes “Which policy does this call pass?” We have a way to choose the next line to read.",
          "That is the help I would want from a code-search tool: a place to keep reading, rather than a demand that I already understand the repository.",
        ],
      },
      {
        title: "Different routes through the same name",
        paragraphs: [
          "jevgrep’s architecture document explicitly limits what parsing and reading leads establish: they are not proof of runtime dispatch. I read this as a reason to connect the location of code with how execution selects it.",
          "Inherited methods, environment-specific implementations, and options passed at the call site make that distinction tangible. The same name can lead you to different code depending on the object and configuration involved.",
          "After the first result, familiar work resumes: find references to the exact symbol, open the caller, and trace where its configuration comes from. A search can begin with a description of behavior and still need precise names partway through.",
          "An empty result needs context too. We need to examine the scope of the question and the search. The documentation says reaching a discovery budget is reported as partial discovery. That gives us a reason to narrow the question or root and try again. An empty list alone is too little to conclude that a feature is absent.",
          "If the function and path are already known, opening the file directly may be enough. There is no need to visit the library desk every time. Once you know the shelf, you can walk there.",
        ],
      },
      {
        title: "At least one name to follow",
        paragraphs: [
          "I imagine the note I would leave on this hypothetical task. Instead of “found relevant code,” I would briefly trace the request through its calls to the selected policy, leaving locations the next person can reopen.",
          "If I only read static source, the note should stop there. Observations from actually running the request belong in a separate record. Likewise, reading these documents does not let me claim that I verified retries in a particular repository.",
          "Still, we have moved. A question that could not get started without a name now has one name to pursue.",
          "We can search for sendWithPolicy. Which caller brings our request here?",
        ],
      },
    ],
  },
};
