import type { Note } from "./notes-data";

export const onDeviceAiNote: Note = {
  page: "noteOnDeviceAi",
  category: "AI & PRODUCT",
  date: "2026-09-30",
  sample: false,
  image: "/a/generated/notes/on-device-ai-targets.webp",
  imageAlt: {
    ko: "서로 다른 모바일 기기와 노트북 앞에 놓인 작은 모델 칩과 메모리 블록",
    en: "A small model chip and memory blocks beside different mobile devices and a laptop",
  },
  ko: {
    title: "앱에 AI를 넣기 전에, 기기부터 정한다",
    summary:
      "온디바이스 AI는 API 요청을 줄여도 모델 파일, 메모리, 플랫폼 지원을 없애주지는 않는다. 제품에 넣기 전에 확인할 조건을 살펴본다.",
    sections: [
      {
        title: "",
        paragraphs: [
          "앱에 AI를 넣을 때는 어떤 모델을 쓸지부터 고르고 싶어진다. 그보다 먼저 정해야 할 게 있다. 앱이 어디에서 돌아가야 하는가.",
          "브라우저인지, 휴대전화인지, 데스크톱인지에 따라 붙일 수 있는 런타임과 모델이 달라진다. GeekNews에서 소개한 NobodyWho는 앱과 게임 안에서 LLM을 로컬 실행하는 추론 엔진이다. 프로젝트 README는 Flutter, Python, Godot, Kotlin, Swift, React Native 바인딩을 안내한다.",
          "‘어떤 기기에서나’라는 소개 문구만 보고 배포 범위를 정하면 곤란하다. README에는 웹 내보내기가 없고 Windows ARM64도 아직 지원하지 않는다고 적혀 있다. Godot 바인딩은 iOS 내보내기를 지원하지 않아 iOS 앱에는 다른 바인딩이 필요하다.",
          "메모리도 모델 파일 크기만 보면 안 된다. 프로젝트 문서는 데스크톱에서 모델 파일의 약 1.5배에 해당하는 여유 RAM을, 이미 바쁜 기기라면 2배를 대략적인 기준으로 든다. 모바일은 모델 파일의 약 2배를 안내한다. 어디까지나 프로젝트가 적은 경험칙이지, 특정 앱에서 측정한 성능 결과는 아니다.",
          "모델을 처음 불러올 때의 네트워크도 확인해야 한다. README는 Hugging Face나 URL에서 모델을 내려받고 첫 사용 때 캐시할 수 있다고 설명한다. 추론을 기기 안에서 하더라도 설치 직후 모델 파일이 없다면 내려받을 경로와 실패 안내가 필요하다.",
          "그래서 검토표에는 ‘로컬 실행 가능’만 쓰기 어렵다. 지원할 OS와 앱 프레임워크, 모델 파일 크기와 메모리 여유, 첫 다운로드 방식, 업데이트 시점, 모델을 불러오지 못했을 때의 동작을 같이 적어야 한다.",
          "README만으로는 실제 앱의 응답 속도나 배터리 사용량을 알 수 없다. 어떤 GPU에서 얼마나 빨라지는지도 이 글에서 주장할 수 없다. 그 값은 목표 기기와 실제 모델로 재야 한다.",
          "온디바이스 AI를 고르는 첫 질문은 ‘어떤 모델을 쓸까?’보다 ‘어떤 기기까지 지원해야 할까?’에 가깝다. 그 답이 정해져야 모델 크기와 런타임도 현실적인 선택지가 된다.",
        ],
      },
    ],
    sources: [
      {
        label: "GeekNews 소개",
        href: "https://news.hada.io/topic?id=34463",
      },
      {
        label: "NobodyWho 프로젝트 README",
        href: "https://github.com/nobodywho-ooo/nobodywho",
      },
    ],
  },
  en: {
    title: "Before you add on-device AI, pick the target device",
    summary:
      "On-device AI can reduce API calls, but it does not remove model files, memory limits, or platform support. Here is what to check before adding it to a product.",
    sections: [
      {
        title: "",
        paragraphs: [
          "When adding AI to an app, it is tempting to start by picking a model. First answer a different question: where does the app need to run?",
          "The runtime and models available to you change between a browser, a phone, and a desktop. NobodyWho, introduced on GeekNews, is an inference engine for running LLMs locally in apps and games. Its README lists bindings for Flutter, Python, Godot, Kotlin, Swift, and React Native.",
          "The phrase ‘on any device’ is not enough to set a release plan. The README says there is no web export and Windows ARM64 is not supported yet. The Godot binding does not export to iOS, so an iOS app needs a different binding.",
          "Memory is more than the model file size. The project gives a rough desktop guide of about 1.5 times the model file in free RAM, or twice that on a busy machine. For mobile it suggests around twice the model file size. These are maintainer rules of thumb, not performance results for a particular app.",
          "Check the network path for the first model load too. The README says models can be downloaded from Hugging Face or a URL and cached on first use. Inference may run on-device, but if the model is not already installed, the product still needs a download path and a clear failure state.",
          "A planning sheet needs more than ‘runs locally’: supported operating systems and frameworks, model size and available memory, first-download behavior, update timing, and what happens when the model cannot load.",
          "The README cannot tell us the response time or battery use in a real app. It also does not establish how much faster a particular GPU will be. Those numbers need to be measured with the target device and model.",
          "So the first on-device AI question is less ‘Which model?’ and more ‘Which devices must we support?’ Once that is clear, model size and runtime become practical choices.",
        ],
      },
    ],
    sources: [
      { label: "GeekNews item", href: "https://news.hada.io/topic?id=34463" },
      {
        label: "NobodyWho project README",
        href: "https://github.com/nobodywho-ooo/nobodywho",
      },
    ],
  },
};
