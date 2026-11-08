import type { Note } from "./notes-data";

export const oldCommentTaskNote: Note = {
  page: "noteOldCommentTask",
  category: "AI & DEVELOPMENT",
  date: "2026-11-09",
  sample: false,
  relatedPages: ["notePersistentFix", "noteApprovalVersion"],
  image: "/a/generated/notes/the-task-in-the-old-comment.webp",
  imageAlt: {
    ko: "손이 작은 화면 카드의 산호색 버튼 하나를 바꾸고 있고, 옆에는 오래된 메모와 실이 붙은 커다란 설계도가 펼쳐진 그림",
    en: "A hand replaces one coral button on a small interface card beside a large folded blueprint with an old note and tangled thread",
  },
  ko: {
    title: "버튼 이름을 고치다가 옆 일감이 생겼다",
    summary:
      "‘저장’을 ‘저장하기’로 바꾸는 가상의 작업 옆에 낡은 TODO를 놓아봤다. 읽다가 발견한 일이 오늘 할 일이 되는 순간이 궁금했다.",
    sources: [
      {
        label: "Google Developers Blog · Agent Distraction",
        href: "https://developers.googleblog.com/agent-distraction/",
      },
    ],
    sections: [
      {
        title: "두 글자를 고치러 왔다",
        paragraphs: [
          "버튼에 적힌 ‘저장’을 ‘저장하기’로 바꿔달라는 작업을 상상해보자. 눌렀을 때 하는 일은 그대로다. 화면에서 부르는 이름만 조금 길어진다.",
          "코드를 열었더니 근처에 TODO가 있다. 언젠가 날짜 변환 방식을 교체하자는 메모다. 옆에는 이슈 번호도 달려 있다.",
          "이쯤에서 에이전트가 날짜 처리 파일까지 열기 시작한다면 어떨까. 오래된 변환 함수를 찾아 새 방식으로 옮기고, 테스트도 고친다. 버튼 문구는 아직 ‘저장’이다.",
          "능숙하게 일하고는 있는데, 내가 기다리는 두 글자는 다른 파일에 남아 있다.",
          "실제로 맡겼다가 겪은 일은 아니다. Google의 Agent Distraction이라는 글을 읽고 만들어본 가상의 작업이다. 작은 요청 옆에 오래된 메모 하나를 놓으면 어떤 순서로 일이 커질지 생각해봤다.",
          "Google은 에이전트 실행 기록에서 버그 번호가 붙은 TODO를 따라가는 우회를 살폈다. 이미 닫힌 이슈를 좇은 경우도 있었고, 아직 열린 이슈지만 사용자가 요청하지 않은 일을 시작한 경우도 있었다고 설명한다.",
          "두 경우를 함께 읽으니 메모가 아직 유효한지 확인하는 것만으로는 부족하겠다는 생각이 들었다. 유효하다고 해도, 이 버튼 문구를 바꾸는 데 필요한 일인지가 남는다.",
        ],
      },
      {
        title: "열려 있는 이슈도 오늘 일은 아닐 수 있다",
        paragraphs: [
          "앞의 날짜 변환 이슈가 아직 열려 있다고 해보자. 언젠가는 고칠 필요가 있다. 담당자도 기다리고 있을 수 있다. 그렇다고 글자 두 개를 늘리는 작업에 바로 붙여야 할까.",
          "나는 먼저 연결된 부분을 보고 싶다. 버튼 문구를 바꾸면 날짜 처리도 달라지는지. 현재 저장 동작이 깨져 있어서 문구를 확인할 수조차 없는지. 그런 사정이 있으면 살펴볼 이유가 생긴다.",
          "그런데 날짜 변환은 따로 잘 돌아가고, 이번 변경과도 관련이 없다면 이야기가 달라진다. 발견한 위치가 가깝다는 이유만으로 같은 작업에 넣고 싶지는 않다.",
          "작업이 커지면 확인할 것도 커진다. 문구가 잘 보이는지 보러 왔다가, 어떤 날짜 입력을 지원하는지까지 다시 읽게 된다. 에이전트가 고친 파일보다 내가 이해해야 할 범위가 먼저 늘 수도 있다.",
          "그래서 이 가상 작업의 결과에는 두 가지가 따로 있으면 좋겠다. 바뀐 버튼 문구, 그리고 날짜 변환 TODO를 발견했다는 짧은 기록. 오늘의 변경에 넣을 근거가 없다면 그 기록은 다음 일을 고를 때 읽을 수 있겠다.",
          "할 일을 놓치지 않는 것과, 발견하자마자 시작하는 것은 사이가 조금 있어도 된다.",
        ],
      },
      {
        title: "닫혔다고 바로 지워도 될까",
        paragraphs: [
          "반대로 날짜 변환 이슈가 닫혀 있다면 메모부터 지우고 싶어질 수 있다. 이제 필요 없는 설명이 남아서 일을 시킨 셈이니까.",
          "그런데 닫힌 이유를 아직 안 읽었다. 실제로 교체했는지, 계획을 접었는지, 다른 이슈에서 이어가기로 했는지에 따라 메모를 고치는 방법도 다르겠다.",
          "Google이 설명한 정리 과정도 이슈 상태만 보고 끝나지 않았다. 파일과 변경 이력, TODO가 남은 의도까지 확인한 뒤 낡았다고 판단한 참조를 삭제 검토에 올렸다고 한다.",
          "내가 만든 예라면, 지원해야 하는 옛 날짜 형식 때문에 메모 일부가 아직 필요할 수도 있다. 이건 가정이다. 그런 이유가 남아 있는지부터 읽어봐야 한다는 뜻이다.",
          "정리도 일을 줄이려다 새 일을 만드는 작업이 될 수 있겠다. 무작정 TODO를 없애놓으면 다음 사람이 왜 이 코드가 이렇게 생겼는지 다시 찾아다닐 수도 있으니.",
          "이 글의 가상 작업으로 에이전트의 성능을 측정한 것은 아니다. 원문의 관찰을 모든 모델이 항상 같은 식으로 행동한다는 규칙으로 받아들이고 싶지도 않다. 다만 맡길 작업을 적을 때, 코드를 읽다가 만난 메모까지 한꺼번에 일감으로 세고 있지는 않은지 보게 됐다.",
          "다시 버튼으로 돌아온다. 화면에는 ‘저장하기’가 보인다. 눌러보면 원래 연결돼 있던 저장 동작이 실행된다. 여기서는 그렇게 확인을 마치는 장면을 상상한다.",
          "옆의 메모에는 날짜 변환 이야기가 남아 있다. 오늘 버튼을 바꾼 기록과는 다른 줄에.",
        ],
      },
    ],
  },
  en: {
    title: "A small button edit found another job next door",
    summary:
      "Imagine changing a button from “Save” to “Save changes” beside an old TODO. When does something found while reading become part of today’s work?",
    sources: [
      {
        label: "Google Developers Blog · Agent Distraction",
        href: "https://developers.googleblog.com/agent-distraction/",
      },
    ],
    sections: [
      {
        title: "I came for the label",
        paragraphs: [
          "Imagine a request to make a save button’s label a little longer. The Korean label changes from 저장 to 저장하기; in an English interface, think “Save” to “Save changes.” Pressing it should do the same thing as before.",
          "Opening the code reveals a nearby TODO: replace the date-conversion approach someday. There is an issue number beside it.",
          "What if the agent starts opening date-handling files? It finds the old conversion function, migrates it, and updates tests. The button still says “Save.”",
          "Work is happening competently. The little label I am waiting for is in another file.",
          "This is not a mishap I am reporting from a real task. I imagined it after reading Google’s Agent Distraction article: place one old comment beside a small request and follow how the work might grow.",
          "Google examined detours involving bug-referencing TODOs in agent traces. It describes agents following already closed issues, as well as starting work on open issues that the user had not requested.",
          "Reading those cases together made me think that checking whether the comment is still valid answers only part of the question. A valid task may still be unnecessary for this button edit.",
        ],
      },
      {
        title: "An open issue can wait for a different task",
        paragraphs: [
          "Suppose the date-conversion issue is still open. It needs attention eventually; somebody may be waiting for it. Does that put it into the label change automatically?",
          "I would first look for a connection. Does changing the label affect date handling? Is saving already broken, making the requested behaviour impossible to check? Either would give me a reason to investigate.",
          "If date conversion works and has no bearing on this change, proximity in the file does not seem a sufficient reason to include it.",
          "More work also means more to verify. A request to inspect a label becomes a reading assignment about supported date formats. The scope I must understand can grow before I have even finished looking at the edited files.",
          "For this imagined task, I would like two separate results: the changed label, and a short record that the date-conversion TODO was found. Without a reason to include it now, that record can help when choosing the next job.",
          "There can be a little distance between remembering work and starting it immediately.",
        ],
      },
      {
        title: "Would a closed ticket make deletion simple?",
        paragraphs: [
          "Now suppose the issue is closed. Deleting the comment becomes tempting. An obsolete note has apparently sent the agent off on an errand.",
          "But I have not read why it closed. Replacing the code, abandoning the plan, and continuing in another issue would call for different edits to the explanation.",
          "Google’s cleanup description also goes beyond ticket status. It says the process examined files, change history, and the TODO’s intent before proposing removal of references judged obsolete.",
          "In my invented example, part of the note might still matter because an old date format remains supported. That is a possibility to check, not a fact about a real project.",
          "Cleanup can create work of its own. Erasing the explanation too quickly might leave the next person searching for the reason the code takes this shape.",
          "The imagined task is not an agent benchmark. I would not turn the source’s observations into a rule about how every model always behaves. It did make me look at whether a note encountered during reading was quietly being counted as another job.",
          "Back at the button, the longer label is visible. Pressing it calls the original save behaviour. That is the final check I am imagining here.",
          "The date-conversion note is still in the work record, on a different line from the button change.",
        ],
      },
    ],
  },
};
