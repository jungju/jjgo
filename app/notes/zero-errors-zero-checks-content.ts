import type { Note } from "./notes-data";

export const zeroChecksNote: Note = {
  page: "noteZeroChecks",
  category: "AGENTS & VERIFICATION",
  date: "2026-11-20",
  sample: false,
  relatedPages: ["noteGpuFreeTest", "notePersistentFix"],
  image: "/a/generated/notes/zero-errors-zero-checks.webp",
  imageAlt: {
    ko: "포장된 상자 위의 돋보기와 체크되지 않은 점검표, 연필, 빈 쟁반을 그린 그림",
    en: "A magnifying glass over an unopened parcel beside an unchecked checklist, a pencil and an empty tray",
  },
  ko: {
    title: "오류 0건, 검사도 0건이면 통과일까?",
    summary:
      "주문 저장을 확인할 항목이 없는 점검표에도 오류는 0건일 수 있다. Reticle 문서를 읽으며, 미설정·미확인·실패·통과를 가상의 주문 확인으로 나눠봤다.",
    sources: [
      {
        label: "Reticle · 공식 README의 검증 결과와 확인 범위 설명",
        href: "https://github.com/reticlehq/reticle",
      },
    ],
    sections: [
      {
        title: "빈 점검표는 깨끗하다",
        paragraphs: [
          "점검 보고서 끝에 ‘오류 0건’이라고 적혀 있다. 일단 안심하고 싶어진다. 그런데 점검표를 열어보니 확인할 항목도 하나 없다면, 그 숫자를 같은 뜻으로 읽어도 될까.",
          "종이에 아무것도 적지 않으면 틀린 답도 없다. 채점까지 끝난 것은 아니지만, 빨간 줄은 분명히 없다.",
          "앱 검증 도구 Reticle의 문서를 읽다가 이 차이가 눈에 들어왔다. 문서는 확인할 내용이 선언되지 않은 경우를 no-fault로, 근거만으로 판단할 수 없는 경우를 unknown으로 구분한다. 통과로 인정하는 것은 yes다.",
          "둘 다 오류 목록이 비어 있을 수 있는데, 둘 다 통과는 아니다. 확인할 것을 정하지 않았는지, 정했지만 볼 수 없었는지부터 다르게 남긴다는 점이 반가웠다.",
          "가상의 주문 앱에 붙여보자. 주문 버튼을 누르면 ‘접수했습니다’라는 화면이 뜬다. 우리가 확인하려는 것은, 미리 정한 확인 시점과 테스트 범위 안에서 그 주문에 해당하는 새 기록 한 건을 찾을 수 있느냐는 것이다. 실제 결제나 주문을 실행한 사례는 아니다.",
          "점검 도구가 화면을 열고 콘솔 오류가 없는지만 살펴봤다고 하자. 그것도 할 일이지만, 주문 기록을 찾는 항목은 아직 없다. 이때의 오류 0건을 주문 저장 확인으로 옮겨 적고 싶지는 않다.",
          "보고서가 거짓말한 것은 아닐 수도 있다. 내가 그 보고서가 답한 것보다 더 많은 답을 읽어 넣었을 수 있다.",
        ],
      },
      {
        title: "검사 하나를 적은 다음에도",
        paragraphs: [
          "그럼 점검표에 ‘새 주문 기록 한 건 확인’을 넣으면 끝일까. 항목을 적었다고 기록을 볼 수 있는 것은 아니다. 테스트 데이터에 접근하지 못하거나 어떤 주문을 찾아야 하는지 연결할 정보가 없으면, 확인은 여전히 멈춘다.",
          "이것을 주문 저장 실패라고 부르기도 어렵다. 저장되지 않은 것을 본 것과, 저장됐는지 볼 수 없었던 것은 다른 일이다. 후자는 확인에 필요한 조건을 마련할 차례다.",
          "조회할 수 있고, 정해둔 확인 시점까지 조건에 맞는 새 기록이 없었다면 그 검사는 실패로 남길 수 있다. 반대로 맞는 기록 한 건을 확인했다면 그 항목은 통과다. 이때도 어디에서 어떤 주문을 확인했는지가 붙어 있어야 한다.",
          "여기까지는 문서를 읽고 만들어 본 점검표다. Reticle을 설치해 이 주문 앱을 시험한 결과가 아니다. 실제 도구가 어떤 정보를 읽을 수 있는지와 그 정보가 무엇을 증명하는지는, 연결한 앱과 설정을 놓고 확인해야 한다.",
          "Reticle의 소개는 화면뿐 아니라 요청과 응답, 앱 상태 같은 근거를 검증에 연결한다고 설명한다. 그 방향에는 동의하게 된다. 다만 요청이 성공했다는 사실을 읽었다고, 우리가 원한 주문 내용까지 맞다고 자동으로 결론 낼 수는 없다.",
          "가상의 점검표로 돌아오면, 새 기록을 찾았다는 통과도 범위가 작다. 수량과 받는 사람이 맞는지는 별도의 조건일 수 있고, 실제로 배송이 끝났다는 뜻은 더더욱 아니다. 한 칸을 확인하고 나머지 칸까지 색칠하면 다시 처음으로 돌아간다.",
          "그래서 오류 수 옆에 먼저 보고 싶은 것이 생겼다. 무엇을 확인하기로 했는지, 그중 무엇을 실제로 보았는지. 항목이 비어 있는 경우와 근거가 비어 있는 경우도 그 자리에 같이 남았으면 좋겠다.",
          "이렇게 나누면 모른다는 표시가 늘어날 수도 있다. 그래도 고장 난 것을 고칠지, 접근할 자료를 준비할지, 빠진 검사부터 적을지 구분할 수 있다. 모두 초록색으로 묶어두는 것보다 다음에 할 일이 구체적이다.",
          "주문을 기다리는 사람에게 점검표는 보이지 않을 것이다. 그 사람이 볼 것은 나중에 도착할 상자다. 지금 ‘주문 저장 확인’ 옆의 빈칸을 누가 채웠는지부터 물어보고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "Zero errors and zero checks: is that a pass?",
    summary:
      "A checklist with no order-save check can still report zero errors. Reading Reticle’s documentation prompted a fictional example separating an unconfigured check, missing evidence, failure and a narrow pass.",
    sources: [
      {
        label: "Reticle · Official README on verification outcomes and scope",
        href: "https://github.com/reticlehq/reticle",
      },
    ],
    sections: [
      {
        title: "An empty checklist is clean",
        paragraphs: [
          "A report ends with “zero errors.” It is tempting to relax. But if the checklist contains no checks either, should we read that number the same way?",
          "A blank sheet has no wrong answers. It has not been marked, but there are certainly no red corrections.",
          "That distinction caught my attention in the documentation for the app-verification tool Reticle. It distinguishes no-fault, when nothing has been declared to verify, from unknown, when the evidence cannot decide. Only yes counts as a pass.",
          "Both cases can have an empty error list, and neither is a pass. I liked the decision to preserve whether a check was never specified or was specified but could not be observed.",
          "Consider an imaginary order app. Pressing a button produces a confirmation screen. Our intended check is whether one matching new order record can be found by a stated observation point within a defined test scope. No real order or payment is being made in this example.",
          "Suppose a tool opens the page and looks only for console errors. That is useful work, but it has not been told to look for the order record. I would not translate its zero-error result into confirmation that the order was saved.",
          "The report might not have lied. I might have read more into it than it actually answered.",
        ],
      },
      {
        title: "Even after adding one check",
        paragraphs: [
          "Would adding “confirm one new order record” finish the job? Writing the check does not grant access to the data. If the test cannot read the records or lacks a way to identify the right order, verification still stops there.",
          "That does not establish a save failure either. Observing that a record is absent and being unable to observe whether it exists are different situations. The latter calls for the conditions needed to check.",
          "If we can inspect the right data and no matching new record exists by the agreed observation point, that check can fail. Finding one matching record can pass that item. We still need to retain where we looked and which order we identified.",
          "This is a checklist imagined after reading the documentation, not the result of installing Reticle and testing an order app. What a real tool can observe, and what those observations establish, depends on the connected app and its configuration.",
          "Reticle describes connecting evidence such as requests, responses and app state to verification, alongside what is on screen. That direction makes sense to me. A successful request, however, does not automatically establish that the saved order contains what we intended.",
          "Even the pass in our example is narrow. The quantity and recipient may need their own conditions. A new record certainly does not establish completed delivery. Colouring every box after checking one would bring us back to the original problem.",
          "Before the error count, I would like to see what we intended to check and what we actually observed. An empty set of checks and an empty set of evidence should remain distinguishable there too.",
          "This might produce more entries saying we do not know. It would also help distinguish fixing a fault, preparing access to evidence, and defining a missing check. The next action becomes more specific than it was under a single green result.",
          "The person waiting for the order will probably never see our checklist. They will see the parcel, if it arrives. For now, I would ask who filled the box beside “confirm order saved.”",
        ],
      },
    ],
  },
};
