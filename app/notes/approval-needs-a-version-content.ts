import type { Note } from "./notes-data";

export const approvalVersionNote: Note = {
  page: "noteApprovalVersion",
  category: "AGENTS & WORK",
  date: "2026-10-12",
  sample: false,
  image: "/a/generated/notes/approval-needs-a-version.webp",
  imageAlt: {
    ko: "서로 다른 황토색 표시가 있는 두 장의 종이 사이에 놓인 황동 도장",
    en: "A brass stamp between two paper sheets with different arrangements of ochre marks",
  },
  ko: {
    title: "승인 버튼 옆에 남겨둘 것",
    summary:
      "Eve의 승인 대기 문서를 읽다가, 사람이 읽은 초안과 에이전트가 보낼 초안이 같은지부터 궁금해졌다.",
    sources: [
      {
        label: "Eve 공식 소개",
        href: "https://vercel.com/eve",
      },
      {
        label: "Eve — Human-in-the-Loop",
        href: "https://eve.dev/docs/human-in-the-loop",
      },
    ],
    sections: [
      {
        title: "회의에 다녀오는 동안",
        paragraphs: [
          "에이전트가 회의 요약문을 만들었다고 해보자. 받는 사람은 세 명. 내용도 읽었고, 보내도 될 것 같다. 마침 다른 회의가 시작돼서 승인 버튼은 나중에 누르기로 했다.",
          "한 시간 뒤 돌아오니 화면에는 여전히 ‘회의 요약문을 보낼까요?’가 떠 있다. 그사이 누군가 초안을 고쳤다. 받는 사람도 팀 전체로 바뀌었다. 버튼의 문구는 그대로다.",
          "이럴 때의 ‘네’는 어느 요약문을 가리킬까.",
          "Vercel의 에이전트 프레임워크 Eve는 지침과 도구를 디렉터리에 모아 정의하고, 중단된 작업을 이어가는 구조를 소개한다. 그중 사람이 답할 때까지 승인을 기다리는 문서를 읽다가 위의 상황을 생각했다. 실제로 겪은 사고나 Eve에서 재현한 문제는 아니다.",
          "기다려 주는 기능은 반갑다. 사람이 버튼 앞에 계속 앉아 있지 않아도 되니까. 다만 사람이 자리를 비운 동안에도 초안과 받는 사람은 바뀔 수 있다. 돌아온 사람이 먼저 기억하는 것은, 대개 떠나기 전에 읽었던 내용일 것이다.",
        ],
      },
      {
        title: "그 문서는 그대로인가",
        paragraphs: [
          "Eve 문서는 승인 요청에 요청·호출 식별자와 도구 입력이 연결된다고 설명한다. 승인 응답을 받아들일 사람도 정책으로 정할 수 있다. 또 버튼을 눌러 응답을 제출한 상태와 서버가 그 응답을 확정한 상태를 구분한다.",
          "이 구분을 읽으니 승인 버튼 뒤쪽의 일이 조금 보였다. 누가 어느 요청에 답했는지 붙잡을 자리가 있다. 여기서 한 걸음 더 나아가고 싶은 부분은, 그 요청이 가리킨 문서다.",
          "도구 입력이 초안의 ID 하나라고 가정해 보자. ID는 그대로인데 그 안의 글이 바뀌었다면, 요청에 남은 ID만으로는 사람이 읽은 문장을 알기 어렵다. ‘회의 요약’이라는 파일명은 더 애매하다. 어제 것도 오늘 것도 회의 요약이다.",
          "내가 이런 기능을 만든다면, 승인 화면에 띄운 본문과 받는 사람을 하나의 확정된 초안으로 남기고 싶다. 전송할 때도 그 버전을 사용하도록. 최신 파일을 다시 열어 보내는 구조라면, 승인받은 버전과 같은지 실행 조건에서 확인해야 할 것이다.",
          "이것은 문서를 보고 떠올린 애플리케이션 설계다. Eve가 임의의 외부 문서 변경까지 자동으로 감지한다고 확인한 것은 아니다. 설치해서 시험해 보지도 않았다.",
          "사람에게 긴 해시값을 외우게 할 필요는 없겠다. 승인 화면에는 읽을 내용과 수신자를 보여주고, 뒤에서는 그 내용을 식별할 수 있으면 된다. 버튼을 누르는 사람이 검산을 하는 것은 아니니까.",
        ],
      },
      {
        title: "오타 하나와 받는 사람 한 명",
        paragraphs: [
          "초안이 바뀌면 언제나 다시 물어야 할까. 그것도 너무 단순하다. 사용자가 오타 교정까지 맡긴 경우와, 이 문장을 이 사람에게 보내라고 한 경우에는 허용한 범위가 다르다.",
          "그래서 처음 맡긴 범위를 기록하는 쪽이 더 마음에 든다. 특정 초안을 승인받는 작업이라면 그 초안에 묶고, 일정한 편집과 발송을 미리 맡긴 작업이라면 그 조건 안에서 움직이도록 한다. 이미 맡긴 일을 매번 다시 묻는 버튼도 금방 귀찮아진다.",
          "가상의 요약문에서는 수신자를 세 명에서 팀 전체로 바꾼 일이 중요하다. 글자 하나 안 바뀌었어도 읽게 될 사람이 달라진다. 본문만 비교하는 장치는 이 변화를 놓칠 수 있다.",
          "확인하는 시점도 문제다. 버전이 맞는지 읽은 다음 전송하기 전까지 초안이 또 바뀔 수 있다면, 확인을 하나 더 붙여도 틈이 남는다. 고정한 초안을 쓰거나, 버전 조건과 실제 실행을 함께 다루는 방법이 필요하다. 구체적인 구현은 연결한 저장소와 전송 도구에 따라 달라질 것이다.",
        ],
      },
      {
        title: "읽었던 종이를 남겨두기",
        paragraphs: [
          "종이 문서를 승인한다고 생각하면 조금 쉬워진다. 도장 찍은 종이를 따로 보관하고, 그 위에 누군가 새 문장을 쓰면 흔적이 남는다. 파일은 같은 이름으로 아주 깨끗하게 바뀐다.",
          "깨끗해서 생기는 귀찮음도 있다.",
          "전송이 끝난 뒤의 기록에는 승인한 초안과 실제로 보낸 내용을 나란히 남기고 싶다. 전송 결과는 따로 확인하고. 승인받았다는 기록만 보고 발송까지 끝났다고 읽게 만들면, 이번에는 버튼 다음 칸에서 헷갈린다.",
          "다시 그 한 시간 뒤로 돌아가 본다. 화면에 세 명의 수신자와 아까 읽었던 요약문이 그대로 떠 있다면, 기억을 더듬어 확인할 수 있다. 팀 전체로 바뀌었다면 그 차이가 먼저 보여야 한다.",
          "승인 버튼은 작아도 괜찮다. 내가 읽었던 종이가 그 옆에 남아 있으면 좋겠다.",
        ],
      },
    ],
  },
  en: {
    title: "What belongs beside the approval button",
    summary:
      "Reading Eve’s approval documentation left me wondering whether the draft a person reviews is the draft the agent will send.",
    sources: [
      {
        label: "Introducing Eve",
        href: "https://vercel.com/eve",
      },
      {
        label: "Eve — Human-in-the-Loop",
        href: "https://eve.dev/docs/human-in-the-loop",
      },
    ],
    sections: [
      {
        title: "While you are in a meeting",
        paragraphs: [
          "Suppose an agent has prepared a meeting summary for three people. You read it and think it is ready to send. Another meeting starts, so you leave the approval button for later.",
          "An hour later, the screen still asks, “Send the meeting summary?” In the meantime, someone has edited the draft. The recipient list now includes the whole team. The button has the same label.",
          "Which summary would your “yes” refer to?",
          "Vercel’s agent framework Eve describes defining instructions and tools in a directory and resuming interrupted work. Its documentation on waiting for human approval prompted this scenario. It is a hypothetical, not an incident I experienced or a defect I reproduced in Eve.",
          "Being able to wait is useful. A person does not have to remain at the keyboard. But drafts and recipients can change while that person is away. What they remember on returning is likely to be what they read before leaving.",
        ],
      },
      {
        title: "Is it still the same document?",
        paragraphs: [
          "Eve’s documentation associates an approval request with request and call identifiers and the tool input. Policies can control who may settle it. It also distinguishes submitting a response from the server confirming its resolution.",
          "That gives the work behind the button somewhere to record who answered which request. The part I want to follow further is the document the request points to.",
          "Imagine that the tool input contains only a draft ID. The ID stays the same while its text changes. Keeping that ID does not tell us which sentences the person read. A filename such as “meeting summary” is even less helpful. Yesterday’s file had that name too.",
          "If I were building this feature, I would want to preserve the displayed text and recipients as a fixed draft, then send that revision. If sending instead involves reopening the latest file, matching the approved revision needs to be an execution condition.",
          "This is an application design I am proposing after reading the documentation. I have not established that Eve automatically detects arbitrary changes in external documents, and I have not installed it to test the behavior.",
          "The person need not memorize a long hash. Show them the text and recipients; keep a way to identify that content behind the interface. They did not open the approval screen to do arithmetic.",
        ],
      },
      {
        title: "A typo and one more recipient",
        paragraphs: [
          "Should every edit require another question? That would be too crude. Permission to correct typos differs from permission to send this exact wording to these people.",
          "I would rather preserve the scope of the original delegation. An approval for a particular draft should attach to that draft. A standing instruction to edit and send within defined conditions should operate within those conditions. A button that repeatedly asks about work already delegated soon becomes tiresome.",
          "In our hypothetical summary, changing three recipients to the whole team matters. Even with identical text, the audience has changed. A comparison of the body alone could miss it.",
          "Timing matters as well. If a draft can change between checking its revision and sending it, adding a check still leaves a gap. Using a fixed draft, or enforcing the revision condition together with the action, addresses that gap. The implementation depends on the storage and sending tools involved.",
        ],
      },
      {
        title: "Keep the paper that was read",
        paragraphs: [
          "Paper makes this easier to picture. You can keep the sheet someone stamped, and a new sentence written across it leaves a mark. A file can change very neatly under the same name.",
          "Neatness creates its own small nuisance.",
          "After sending, I would want the approved draft beside the content actually sent, with the delivery result checked separately. Treating an approval record as proof of delivery moves the confusion to the next box in the process.",
          "Back to the screen an hour later. If it still shows the three recipients and the summary you read, there is something to check against your memory. If it now includes the whole team, that difference should appear first.",
          "The approval button can stay small. I would like the paper I read to remain beside it.",
        ],
      },
    ],
  },
};
