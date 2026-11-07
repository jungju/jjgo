import type { Note } from "./notes-data";

export const queryCharactersNote: Note = {
  page: "noteQueryCharacters",
  category: "TOOLS & CODE",
  date: "2026-11-08",
  sample: false,
  relatedPages: ["noteSoftWrapCopy", "noteUnknownName"],
  image: "/a/generated/notes/keeping-the-query-together.webp",
  imageAlt: {
    ko: "돋보기 옆 리본 묶음이 종이 길을 지나며 갈라지는 모습과 투명한 덮개 안에서 함께 이동하는 모습을 나란히 그린 콜라주",
    en: "A ribbon bundle beside a magnifying glass, with paper paths showing separated ribbons and ribbons carried together inside a clear sleeve",
  },
  ko: {
    title: "검색어의 &가 옆 칸으로 넘어갔다",
    summary:
      "R&D를 URL 뒤에 그냥 붙였더니 q에는 R만 남았다. 검색 단축키 도구 Bong의 코드를 읽다가, 검색어를 그대로 전달하는 작은 실험을 했다.",
    sources: [
      {
        label: "Bong · 검색 단축키 리다이렉터",
        href: "https://github.com/glendalab/bong",
      },
      {
        label: "Bong · 검색어를 URL로 옮기는 코드",
        href: "https://github.com/glendalab/bong/blob/master/matcher.go",
      },
      {
        label: "MDN · URLSearchParams",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",
      },
    ],
    sections: [
      {
        title: "검색하기 전에 달라진 글자",
        paragraphs: [
          "검색어를 R&D로 정하고, 주소 끝의 ?q= 뒤에 그대로 붙여봤다. 그 주소를 다시 읽어 q 값을 꺼내니 R만 나왔다.",
          "D는 어디 갔나 봤더니 옆에 따로 있었다. 이름은 D, 값은 빈 문자열인 다른 항목이 생겼다.",
          "검색 결과가 엉뚱한 게 아니라, 아직 검색도 하기 전에 검색어가 둘로 갈라진 셈이다.",
          "이것은 실제 검색 사이트에 보낸 요청이 아니다. JavaScript의 URL 객체로 주소를 만들고 다시 읽어본 작은 로컬 실험이다. 목적지는 접속하지 않는 예시 주소로 두었다.",
          "같은 방식으로 C++도 넣어봤다. 이번에는 C 뒤의 더하기 기호 두 개가 공백 두 개로 읽혔다. 언어 이름 하나를 넘기려다가 자리를 두 칸 비워줬다.",
          "Bong이라는 검색 단축키 도구를 보다가 이 실험을 했다. 공개 화면에는 .gh, .yt처럼 목적지를 고르는 짧은 표기가 있다. 검색할 곳을 먼저 열지 않아도 된다는 점이 편해 보였다.",
          "단축키는 몇 글자를 덜 치는 장치인데, 그 뒤에 붙인 검색어까지 덜어내면 곤란하겠다 싶었다.",
        ],
      },
      {
        title: "같은 글자를 값으로 넣었을 때",
        paragraphs: [
          "다시 같은 두 검색어를 넣었다. 이번에는 주소 문자열 뒤에 이어 붙이지 않고 URL의 searchParams.set으로 q 값을 지정했다.",
          "R&D는 주소 안에서 R%26D가 됐다. 다시 q를 읽으면 R&D가 돌아왔다. C++는 C%2B%2B로 옮겨졌고, 다시 읽었을 때도 더하기 기호 두 개가 남았다.",
          "낯선 퍼센트 기호가 늘었는데, 오히려 원래 쓴 글자는 덜 바뀌었다.",
          "이 실험에서 &는 항목을 가르는 표시로 읽혔다. 쿼리 값을 읽는 방식에서는 +가 공백으로 해석됐다. 내가 쓰고 싶은 글자와 주소의 문법이 같은 자리에 있었던 것이다.",
          "Bong의 코드를 열어보니 검색어를 그냥 붙이고 있지는 않았다. 목적지 URL을 만들기 전에 Go의 url.QueryEscape를 거치고, 그 결과에서 공백을 나타내는 +는 %20으로 바꾼다.",
          "앞의 잘못 만든 주소는 Bong의 버그를 재현한 것이 아니다. 내가 별도로 만든 단순한 예다. 도구는 설치하거나 실행하지 않았고, 읽은 코드가 공개 서버의 어느 버전인지까지 확인한 것도 아니다.",
          "그래도 짧은 단축키 뒤에서 하는 일이 조금 더 보였다. 목적지를 고르는 것 말고, 검색어가 주소 문법으로 새지 않게 옮기는 일도 있었다.",
          "나는 이런 작은 도구를 AI에게 부탁한다면, ‘검색이 되네요’ 옆에 R&D와 C++도 적어두고 싶다. 입력한 것과 다시 꺼낸 것이 같은지 보면 결과 화면이 뜨기 전에도 확인할 수 있는 부분이 있다.",
        ],
      },
      {
        title: "검색창에 도착한 다음의 일",
        paragraphs: [
          "물론 글자를 그대로 전달했다고 검색 결과까지 같아지는 것은 아니다. 목적지 사이트가 기호를 어떻게 검색에 쓰는지는 그다음 문제다. 이번 실험으로 거기까지 확인한 것은 아니다.",
          "내가 확인한 범위는 좀 작다. 검색어 한 개가 주소를 지나 다시 검색어 한 개로 돌아오는지.",
          "평범한 단어만 넣었으면 두 방식이 비슷하게 보였을 것이다. R&D를 넣으니 옆 칸에 D가 생겼고, C++를 넣으니 보이지 않는 공백이 생겼다. 짧은 문자열도 그냥 지나가지는 않았다.",
          "다시 C++를 적는다. 주소에서는 조금 길어졌지만, q를 꺼내보면 여전히 C++다.",
          "이제 검색 사이트가 생각해볼 차례다. 더하기 기호 두 개는 일단 무사히 도착했다.",
        ],
      },
    ],
  },
  en: {
    title: "The ampersand left my search query",
    summary:
      "Appending R&D directly to a URL left only R in q. Reading Bong’s search-shortcut code led to a small experiment in carrying a query intact.",
    sources: [
      {
        label: "Bong · Search shortcut redirector",
        href: "https://github.com/glendalab/bong",
      },
      {
        label: "Bong · Turning a search query into a URL",
        href: "https://github.com/glendalab/bong/blob/master/matcher.go",
      },
      {
        label: "MDN · URLSearchParams",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",
      },
    ],
    sections: [
      {
        title: "Different before the search began",
        paragraphs: [
          "I chose R&D as a search term and appended it directly after ?q= in a URL. When I parsed the address and read q back, it contained only R.",
          "D had moved next door: a separate parameter named D, with an empty value.",
          "The search engine had not misunderstood me. The query had split apart before there was a search.",
          "I did not send a request to a real search site. This was a small local experiment using JavaScript’s URL object to construct an address and read it back. The example destination was never contacted.",
          "I tried C++ the same way. The two plus signs came back as two spaces after C. I had meant to pass a language name, not leave a little room beside it.",
          "The experiment began while I was looking at Bong, a search-shortcut tool. Its public page lists short destination selectors such as .gh and .yt. Choosing where to search without first opening that site looked convenient.",
          "A shortcut saves typing. It would be unfortunate if it also shortened the query you typed after it.",
        ],
      },
      {
        title: "Giving the same characters a place as a value",
        paragraphs: [
          "I tried the same two terms again. Instead of appending text to the address, I assigned q through the URL’s searchParams.set method.",
          "R&D became R%26D in the address and came back as R&D when I read q. C++ travelled as C%2B%2B, and both plus signs survived the return trip.",
          "The address gained unfamiliar percent signs. The original text changed less.",
          "In the first example, & was read as a parameter separator. The query parser interpreted + as a space. Characters I intended as content were sharing a place with the address’s syntax.",
          "Bong’s source does not simply paste the search term into the destination. It passes the query through Go’s url.QueryEscape, then replaces the resulting plus signs used for spaces with %20.",
          "My broken address was not a reproduction of a Bong bug. It was a separate, deliberately simple example. I have not installed or run Bong, or verified which source version its public server runs.",
          "Still, I could see another job behind the short prefix. It must choose a destination and carry the query without letting its characters become URL syntax along the way.",
          "If I asked an AI to build a tool like this, I would put R&D and C++ beside “the search works.” Comparing what went in with what comes back checks something before any results page appears.",
        ],
      },
      {
        title: "Once it reaches the search box",
        paragraphs: [
          "Preserving the characters does not guarantee identical search results. How a destination treats punctuation is another question. This experiment did not answer it.",
          "The part I checked was smaller: whether one query could travel through an address and return as the same query.",
          "An ordinary word might have made the two construction methods look alike. R&D produced an extra D parameter. C++ produced invisible spaces. Even a short string had things to lose.",
          "I enter C++ again. It takes a little more room in the address, but reading q still gives C++.",
          "Now the search engine can decide what to do with it. Both plus signs have at least arrived.",
        ],
      },
    ],
  },
};
