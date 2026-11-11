import type { Note } from "./notes-data";

export const changingTargetNote: Note = {
  page: "noteChangingTarget",
  category: "AGENTS & INTERFACES",
  date: "2026-11-12",
  sample: false,
  relatedPages: ["noteSharedWindow", "noteApprovalVersion"],
  image: "/a/generated/notes/the-second-row-is-not-the-same-document.webp",
  imageAlt: {
    ko: "두 종이 앱 창에서 집게가 달린 산호색 문서가 아래 위치로 옮겨졌고, 돋보기가 새 위치의 같은 문서를 비추는 그림",
    en: "A coral document with a paperclip moves lower between two paper app windows, while a magnifying glass follows the same document in its new position",
  },
  ko: {
    title: "둘째 줄은 같은 문서가 아니었다",
    summary:
      "목록 맨 앞에 항목 하나를 넣었더니 둘째 값이 B에서 A로 바뀌었다. agent-desktop의 참조 방식을 읽고, 같은 위치와 같은 대상을 나눠봤다.",
    sources: [
      {
        label: "Vercel Labs · agent-desktop의 스냅샷과 참조",
        href: "https://github.com/vercel-labs/agent-desktop",
      },
    ],
    sections: [
      {
        title: "아까는 분명히 B였는데",
        paragraphs: [
          "‘초안 A’, ‘초안 B’가 든 목록에서 둘째 값을 꺼냈다. 당연히 ‘초안 B’였다. 맨 앞에 ‘새 초안’을 하나 넣고 같은 자리의 값을 다시 꺼내니 이번에는 A가 나왔다.",
          "둘째라는 말은 그대로였는데, 문서가 바뀌었다.",
          "실제 문서 앱에서 잘못 누른 이야기는 아니다. JavaScript 배열로 해본 작은 예다. 파일을 열거나 지운 것도 없다. 순서를 바꿔놓고 같은 자리를 읽었을 뿐이다.",
          "목표를 B라고 따로 기억해두고, 예제에 붙인 id로 다시 찾으면 B가 나온다. 새 목록에서는 셋째다. 이때 id는 내가 예제에 붙인 값이지, 모든 앱에서 이런 영구 표식을 얻을 수 있다는 뜻은 아니다.",
          "화면을 조작하는 에이전트에게 ‘아까 본 그거’를 시킨다면 이 차이가 조금 더 신경 쓰이겠다. 목록 위에 항목이 생기거나 정렬이 바뀌어도, 아까 선택한 대상이 지금 같은 자리에 있을까.",
          "agent-desktop의 공식 문서를 읽다가 이 배열을 만들어봤다. 도구는 운영체제의 접근성 트리를 읽어 조작할 요소의 참조를 돌려주고, 그 참조를 어느 스냅샷에서 얻었는지 함께 다룬다.",
          "문서의 예에서는 스냅샷을 나타내는 부분이 붙은 참조를 쓴다. 짧은 @e8만 넘기는 방식은 거부하고, 화면 변경으로 참조가 오래되거나 대상이 모호해지면 다시 스냅샷을 읽도록 설명한다.",
          "내 배열의 순번이 이 도구의 내부 구현이라는 뜻은 아니다. 나는 도구를 설치하거나 실행하지 않았다. 다만 참조 앞에 관찰한 맥락까지 붙이는 이유를, 아주 작은 목록으로 생각해본 것이다.",
          "그 번호가 어디를 가리키는지뿐 아니라 언제 본 화면의 번호인지도 같이 있어야겠구나 싶었다.",
        ],
      },
      {
        title: "한 번 더 보는 일이 남았다",
        paragraphs: [
          "앞의 목록을 화면으로 그린다고 해보자. 에이전트가 처음 본 화면에는 B가 둘째 줄에 있다. 내가 부탁한 것도 B를 여는 일이다.",
          "그 사이 새 항목이 들어오면 ‘둘째 줄’과 ‘B’는 서로 다른 요청이 된다. 에이전트가 내 말을 잘 기억하고 있어도, 화면이 그대로 기다려주지는 않는다.",
          "이런 상황에서 이전 참조가 더는 맞지 않는다고 알려주면 나는 반가울 것 같다. 지금 화면을 다시 읽고, 원래 열려던 대상이 어디로 갔는지 찾을 기회가 생기니까.",
          "새로 읽었다고 목표를 새로 고를 필요까지 생기는 것은 아닐 것이다. 다시 찾고 싶은 건 여전히 B다. 순서를 갱신하는 동안 부탁의 대상까지 바뀌면 곤란하다.",
          "물론 B를 찾았다는 사실만으로 작업이 다 끝나는 것도 아니다. 이름이 같은 문서가 여럿일 수 있고, 내용이 바뀌었을 수도 있다. 내 예제처럼 두 글자만 놓은 목록에서는 그런 문제가 잘 안 보인다.",
          "그래서 B를 연 뒤 무엇이 보였는지도 확인하고 싶다. 참조를 받아들였다는 응답과, 원래 부탁한 문서가 열렸다는 확인은 서로 이어져 있어야겠다.",
          "도구의 문서도 조작 뒤에 화면을 다시 읽는 흐름을 보여준다. 나는 이 대목을 ‘클릭 명령이 끝났으니 완료’보다 조금 긴 일의 단위로 읽었다.",
          "이 글로 실제 데스크톱 조작의 성공률을 확인한 것은 아니다. 배열에서 자리가 바뀌는 것만 실행해봤고, 나머지는 문서를 읽으며 떠올린 가상의 화면이다.",
          "다시 새 목록을 본다. 첫째는 새 초안, 둘째는 A, 셋째는 B다. B를 열어달라는 부탁은 아직 그대로다.",
          "손을 뻗기 전에 이름을 한 번 더 읽는다. 아까 둘째 줄에 있던 문서는 지금 셋째 줄에 있다.",
        ],
      },
    ],
  },
  en: {
    title: "The second row was no longer the same document",
    summary:
      "Adding one item to the front changed the second value from B to A. Reading agent-desktop’s reference model prompted a small distinction between the same position and the same target.",
    sources: [
      {
        label: "Vercel Labs · agent-desktop snapshots and references",
        href: "https://github.com/vercel-labs/agent-desktop",
      },
    ],
    sections: [
      {
        title: "It was definitely B a moment ago",
        paragraphs: [
          "I took the second value from a list containing Draft A and Draft B. It was Draft B. I added New draft at the front and read the same position again. This time it was A.",
          "“Second” had stayed the same. The document had changed.",
          "This is not a report of clicking the wrong document in an app. I ran a small JavaScript array example. No files were opened or deleted; I changed the order and read the same position.",
          "Remember B separately and find it by the id I assigned in the example, and B still appears. It is now third. That id belongs to my invented data; it does not mean every app offers a permanent marker like it.",
          "Asking an agent to operate a screen makes “the one we saw earlier” a little more interesting. If an item appears above it or the list is sorted again, will the target still occupy the same place?",
          "I made the array while reading agent-desktop’s official documentation. The tool reads an operating system’s accessibility tree and returns references to actionable elements, keeping those references tied to the snapshot that produced them.",
          "Its example uses a reference with a snapshot component. A bare @e8 is rejected. The documentation says to obtain a new snapshot when a changed interface leaves a reference stale or the target ambiguous.",
          "My array positions are not a reconstruction of the tool’s internals. I have not installed or run it. The small list was a way to think about why a reference carries the context of an observation.",
          "Knowing what a reference points at seems to need the screen it came from too.",
        ],
      },
      {
        title: "There is still another look to take",
        paragraphs: [
          "Imagine drawing that list as an interface. In the agent’s first view, B occupies the second row. My request is to open B.",
          "An arriving item makes “the second row” and “B” different instructions. Remembering my words perfectly does not make the interface stand still.",
          "I think I would welcome a response saying the old reference no longer applies. It creates a chance to read the current screen and find where the intended target went.",
          "Reading again should not require choosing a new goal. I still want B. Updating the order should not quietly change the object of the request.",
          "Finding B would not finish every check either. Multiple documents could share a name, or their contents could have changed. A two-item invented list hides those complications.",
          "I would want to see what appeared after opening it. An accepted reference and confirmation that the intended document opened need to connect.",
          "The tool’s documentation also shows observing the interface again after an action. I read that as a slightly longer unit of work than a click command returning.",
          "This essay does not establish a desktop automation success rate. I executed only the changing-array example. The interface around it is imagined from reading the documentation.",
          "Back in the new list, the first item is New draft, the second is A, and the third is B. The request to open B has not changed.",
          "Before reaching for it, I read the name once more. The document that was second is now third.",
        ],
      },
    ],
  },
};
