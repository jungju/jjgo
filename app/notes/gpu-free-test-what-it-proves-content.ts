import type { Note } from "./notes-data";

export const gpuFreeTestNote: Note = {
  page: "noteGpuFreeTest",
  category: "CODE & GPU",
  date: "2026-10-11",
  sample: false,
  image: "/a/generated/notes/gpu-free-test-what-it-proves.webp",
  imageAlt: {
    ko: "작업대 위 종이 삼각형과 작은 무대에 비친 삼각형 빛",
    en: "A paper triangle on a workbench beside triangular light projected onto a miniature stage",
  },
  ko: {
    title: "GPU가 없어도 초록불은 켜진다",
    summary:
      "vgpu의 mock 테스트를 보며, 명령을 확인한 초록불에서 실제 삼각형의 픽셀까지 남은 거리를 생각했다.",
    sources: [
      {
        label: "vgpu 공식 저장소",
        href: "https://github.com/vercel-labs/vgpu",
      },
      {
        label: "vgpu mock 어댑터 문서",
        href: "https://github.com/vercel-labs/vgpu/blob/canary/packages/adapter-mock/README.md",
      },
    ],
    sections: [
      {
        title: "삼각형을 그렸다는 말",
        paragraphs: [
          "화면 가운데 작은 삼각형을 띄우는 기능을 만든다고 해보자. 코드를 올렸고, CI에 초록불이 켜졌다. 리뷰 화면에는 통과한 테스트 목록이 있다. 그런데 정작 삼각형 사진은 없다.",
          "여기서 잠깐 멈추게 된다. 이 테스트는 무엇을 봤을까. 그리라는 명령을 보냈는지, 필요한 자원을 준비했는지, 아니면 화면에 나온 픽셀까지 봤는지. 모두 같은 기능 주변의 일인데, 답을 구하는 방법은 꽤 다르다.",
          "vgpu 문서에서 눈에 들어온 것은 GPU 없이 실행하는 mock이었다. WebGPU를 다루는 이 TypeScript 라이브러리는 브라우저용 경로와 Dawn 기반의 Node 경로, 테스트용 mock 경로를 구분해 둔다. mock 어댑터 문서에는 용도가 더 짧게 적혀 있다. 명령과 자원 테스트에는 mock을, 실제 렌더링과 읽어 온 결과의 스냅샷에는 Node 경로를 쓰라고.",
          "읽으면서 종이로 만든 무대 모형을 떠올렸다. 배우가 어느 문으로 들어오고 소품을 어디에 놓을지는 모형에서도 이야기할 수 있다. 조명이 켜졌을 때 얼굴에 그림자가 어떻게 떨어지는지는 무대에 가서 봐야 한다. 모형이 다룰 수 있는 질문이 있어서, 굳이 매번 극장을 빌리지 않아도 되는 것이다.",
          "삼각형도 그럴 것이다. GPU를 쓸 수 없는 실행 환경에서 명령과 자원에 관한 테스트를 돌릴 수 있다면, 화면을 띄우기 전에도 고칠 수 있는 실수가 생긴다. 어느 검사가 실제로 무엇을 잡는지는 작성한 테스트의 단언을 읽어 확인해야겠지만.",
          "다만 초록불 하나에 모형과 조명의 일을 전부 맡기고 싶어지기는 쉽다. 통과라는 단어는 짧고, 그 옆에 붙일 설명은 길다.",
        ],
      },
      {
        title: "사진이 한 장 생긴 뒤에도",
        paragraphs: [
          "가상의 삼각형 기능으로 돌아가 보자. 자원을 만들고 정리하는 흐름에 관한 검사를 추가했다면, 그 결과에는 무엇을 검사했는지 남기면 된다. 예를 들어 작성한 검사에서 어떤 호출이나 상태를 기대했는지. 테스트 이름이 그 범위를 숨기지만 않아도 다음 사람이 초록불을 읽기 쉬워진다.",
          "다음으로 실제 렌더링 경로를 실행하고 결과 픽셀을 읽어 스냅샷을 남겼다고 해보자. 이제는 이미지가 있다. 삼각형이 기대한 자리에 있는지, 배경색이 맞는지 같은 질문을 그 이미지에 할 수 있다. 어떤 차이를 실패로 볼지도 함께 정해야 한다.",
          "이 글에서는 vgpu를 설치하거나 이 실험을 실행하지 않았다. 문서가 구분해 놓은 두 경로를 보고, 테스트 결과를 읽는 상황을 가정하고 있다. 특히 mock이 셰이더를 어느 범위까지 처리하는지는 여기서 판단하지 않는다.",
          "이미지가 생긴 뒤에는 다른 질문이 남는다. 그 그림은 어떤 어댑터와 실행 환경에서 나왔을까. Node에서 픽셀을 읽었다는 사실만으로 특정 그래픽카드에서 실행했다고 적을 수는 없다. 물리적인 GPU를 확인하려면 그 실행 환경의 증거가 따로 필요하다.",
          "성능 이야기는 한 번 더 떨어져 있다. 원하는 그림이 나왔다는 기록에 프레임 시간까지 들어 있는 것은 아니니까. 속도가 궁금하면 측정 조건과 결과를 남겨야 한다. 문서의 사용 예제를 읽은 것만으로 여기에 숫자를 붙일 수는 없다.",
          "조금 번거롭다. 기능 하나에 질문이 여러 개 붙는다. 그래도 문제가 났을 때 돌아갈 자리가 생긴다. 자원 흐름의 검사인지, 결과 이미지의 차이인지, 특정 환경에서의 실행 문제인지 알면 다음에 무엇을 봐야 할지가 좁아진다.",
          "반대로 모든 결과를 ‘GPU 테스트 통과’ 한 줄에 넣으면, 그 초록불을 만든 사람에게 다시 물어야 한다. 그때 무슨 GPU였나요. 혹시 GPU가 있기는 했나요.",
        ],
      },
      {
        title: "리뷰에 붙이고 싶은 것",
        paragraphs: [
          "mock 테스트가 반가운 이유는 GPU를 준비하지 않아도 물어볼 수 있는 질문을 늘려 주기 때문이다. 장비가 생길 때까지 모든 검사를 미뤄 두는 것보다, 지금 확인할 수 있는 명령과 자원부터 다루는 편이 나아 보인다.",
          "그다음 질문을 잊지 않게 하는 자리가 필요하다. 가령 이 삼각형 기능의 리뷰라면, 명령과 자원 검사의 결과 옆에 실제 렌더링 결과를 놓고 싶다. 실제로 실행한 환경도 적고. 아직 실행하지 못했다면 그 자리에는 이미지 대신 미실행이라는 상태가 있어야 한다.",
          "빈칸은 신경 쓰인다. 그래서 나중에 볼 일도 된다. 초록불로 덮인 빈칸은 누가 다시 열어 볼지 잘 모르겠다.",
          "모든 변경에 같은 장비와 같은 검사를 요구하자는 뜻은 아니다. 화면과 무관한 코드를 고친 날과 셰이더를 바꾼 날에는 필요한 증거도 달라질 것이다. 리뷰에서 바뀐 것과 확인한 것을 맞춰 보는 일이 먼저다.",
          "처음의 리뷰 화면을 다시 생각한다. 초록불 옆에 작은 삼각형 이미지가 한 장 붙어 있다. 그 아래에는 이미지를 만든 환경이 적혀 있다. 적어도 이 그림을 어디에서 봤는지는 알 수 있다.",
          "이제 남은 질문은 조금 구체적이다. 사용자가 열 브라우저에서도, 저 삼각형이 저 자리에 있을까.",
        ],
      },
    ],
  },
  en: {
    title: "The tests can turn green without a GPU",
    summary:
      "vgpu’s mock adapter prompted a question: how far is it from a passing command test to the pixels of a rendered triangle?",
    sources: [
      {
        label: "vgpu repository",
        href: "https://github.com/vercel-labs/vgpu",
      },
      {
        label: "vgpu mock adapter documentation",
        href: "https://github.com/vercel-labs/vgpu/blob/canary/packages/adapter-mock/README.md",
      },
    ],
    sections: [
      {
        title: "What drew the triangle?",
        paragraphs: [
          "Suppose we are adding a small triangle to the middle of a screen. The code is pushed, CI turns green, and the review shows a list of passing tests. There is no picture of the triangle.",
          "That would make me pause. What did the test observe? A drawing command, the resources prepared for it, or the resulting pixels? These questions all surround the same feature, but answering them takes different kinds of work.",
          "The GPU-free mock caught my attention in vgpu’s documentation. This TypeScript library for WebGPU provides browser, Dawn-backed Node, and mock entry points. Its mock adapter README makes the intended boundary concise: mock for command and resource tests; Node for actual rendering and readback snapshots.",
          "I thought of a cardboard stage model. You can discuss entrances and where a prop belongs around that model. To see where a light casts a shadow across an actor’s face, you need the stage. Having questions the model can answer saves you from booking a theater for every conversation.",
          "The triangle suggests a similar use. In an environment without a GPU, command and resource tests could help catch mistakes before there is a screen to inspect. Exactly which mistakes a test catches still depends on the assertions someone wrote.",
          "It is tempting to ask one green light to stand for both the model and the lighting rehearsal. “Passed” is short. The explanation beside it takes more room.",
        ],
      },
      {
        title: "After there is a picture",
        paragraphs: [
          "Back to the hypothetical feature. If we add a test around resource creation and cleanup, its result should say what was checked: perhaps a call or a state that our assertion expected. A test name that preserves this scope already makes the green light easier for the next person to read.",
          "Now suppose we run an actual rendering path and save a snapshot of the pixels read back. We have an image. We can ask whether the triangle is in the expected place and whether the background has the intended color. We also need to decide which differences should fail the comparison.",
          "I have not installed vgpu or run this experiment for the article. This is a hypothetical review prompted by the distinction in its documentation. In particular, I am making no judgment here about how much shader behavior the mock implements.",
          "Once an image exists, another question remains: which adapter and environment produced it? Reading pixels through Node does not, by itself, identify a particular graphics card. A claim about physical hardware needs evidence from the execution environment.",
          "Performance is another step away. A record of the right picture does not automatically include frame timings. A claim about speed needs measurement conditions and results. Reading a usage example supplies neither.",
          "This adds some work. Several questions attach themselves to one feature. But it gives a failure somewhere to go: a resource-flow assertion, a difference in an image, or an execution problem in a particular environment. Each points toward a narrower next investigation.",
          "Put everything under “GPU tests passed,” and someone will have to find the person who produced the green light. Which GPU was that? Was there a GPU at all?",
        ],
      },
      {
        title: "What I would attach to the review",
        paragraphs: [
          "The appeal of a mock is that it gives us more questions to ask without first obtaining a GPU. Checking the commands and resources we can examine now seems more useful than postponing every check until hardware is available.",
          "The next question needs a place to remain visible. For this hypothetical triangle, I would want the actual rendering result beside the command and resource checks, with its execution environment recorded. If that run has not happened, the space should say so.",
          "An empty space is irritating. It gives someone a reason to come back. I am less sure who comes back to an empty space that has been painted green.",
          "The evidence can vary with the change. Editing code unrelated to the image and changing a shader need not demand identical checks or identical hardware. The review first needs to connect what changed with what was examined.",
          "I picture the review again. A small triangle image now sits beside the green light. Underneath is the environment that produced it. At least we know where this picture was seen.",
          "The remaining question is more specific: will that triangle still be there in the browser the user opens?",
        ],
      },
    ],
  },
};
