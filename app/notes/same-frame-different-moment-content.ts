import type { Note } from "./notes-data";

export const sameFrameNote: Note = {
  page: "noteSameFrame",
  category: "DATA & AI",
  date: "2026-10-06",
  sample: false,
  image: "/a/generated/notes/same-frame-different-moment.webp",
  imageAlt: {
    ko: "종이비행기의 위치가 서로 다른 두 필름 띠가 실로 연결되어 있고 옆에 모래시계가 놓인 모습",
    en: "Two film strips show a paper airplane at different positions, linked by threads beside an hourglass",
  },
  ko: {
    title: "두 영상의 100번째 프레임은 언제였을까",
    summary:
      "같은 종이비행기를 찍었어도 두 영상의 같은 순번이 같은 순간을 가리키지는 않는다. 파일을 묶을 때 시간의 기준과 맞춘 방법까지 남겨야 하는 이유를 생각했다.",
    sources: [
      {
        label: "Sangmin Yoon · 자율주행 데이터의 진짜 문제는 크기가 아니다",
        href: "https://sanspareilsmyn.github.io/blog/why-av-data-is-different/kr/",
      },
      {
        label: "nuScenes devkit · 데이터 스키마",
        href: "https://github.com/nutonomy/nuscenes-devkit/blob/master/docs/schema_nuscenes.md",
      },
    ],
    sections: [
      {
        title: "같이 찍었지만",
        paragraphs: [
          "종이비행기 하나를 두 사람이 휴대전화로 찍는다고 해보자. 한 사람은 던지기 전부터 녹화를 켰고, 다른 사람은 비행기가 손을 떠날 때쯤 켰다.",
          "나중에 두 영상에서 100번째 프레임을 꺼내 나란히 놓는다. 한쪽에서는 아직 손에 있고, 다른 쪽에서는 날고 있을 수도 있다. 둘 다 같은 비행기를 찍었고 같은 번호를 붙였는데.",
          "번호가 같다는 건 파일 안에서 같은 순번이라는 뜻이다. 녹화를 같은 때 시작했다는 뜻까지 들어 있지는 않다. 촬영 주기까지 다르면 순번을 맞추는 이유는 더 약해진다.",
          "Sangmin Yoon의 자율주행 데이터 글에서도 시간이 문제로 나온다. 센서마다 시계와 데이터를 만드는 주기가 달라서, 여러 기록을 한 사건으로 묶는 일이 단순한 저장 문제로 끝나지 않는다는 설명이다.",
          "파일을 빠짐없이 받았다는 말은 분명 반갑다. 그런데 앞의 두 영상을 다시 보려면 그다음 질문이 남는다.",
          "이 두 장은 언제 찍힌 걸까.",
        ],
      },
      {
        title: "어느 시계의 몇 시인가",
        paragraphs: [
          "그러면 촬영 시각이 있으면 될까. 두 기록에 같은 숫자가 적혀 있어도 그 숫자를 센 기준이 다를 수 있다. 영상 시작 이후의 시간인지, 기기의 시계가 가리킨 시간인지부터 알아야 한다.",
          "앞의 영상 하나를 잘라서 저장했다고 해보자. 비행기가 손을 떠나는 부분부터 시작하도록 앞을 잘랐다. 이제 첫 프레임이 바뀐다. 새 파일의 시작점만 남기고 원본의 어느 지점인지 잃으면, 나중에 다른 영상과 맞추기가 더 어려워진다.",
          "내가 이 예의 자료를 넘겨받는다면 파일 이름 옆에 촬영 시각의 기준과 원본에서 잘라낸 위치도 받고 싶다. 이미 시계를 맞추거나 시간을 보정했다면 그 방법도 궁금하다.",
          "둘 다 ‘12시’라고 표시한다고 해서 두 기기의 시계가 정확히 맞았다는 확인은 되지 않는다. 원래 차이가 있었는지, 녹화 중에 차이가 달라졌는지 모른다면 그 불확실성도 남겨야 한다.",
          "nuScenes 공식 스키마를 보면 센서 파일 기록에 파일 경로와 timestamp뿐 아니라 센서 보정 정보와 차량 자세 기록을 가리키는 참조가 함께 있다. 파일을 어떤 조건에서 해석할지 연결해 두는 구조다.",
          "그 구조를 휴대전화 영상에 그대로 가져올 필요는 없다. 다만 파일 하나만 떼어 보내면서 그 주변 설명은 나중에 기억해내면 된다고 생각하고 싶지는 않다.",
          "영상을 찍은 사람에게는 시작 전에 주고받은 ‘하나, 둘, 셋’이 기억에 남아 있을 수 있다. 파일만 받은 사람에게는 그것도 자료에 없으면 모르는 일이다.",
          "용량을 줄이느라 앞부분을 자르는 순간, 별것 아닌 준비 장면이 두 기록을 맞출 단서였다는 사실을 뒤늦게 알 수도 있다.",
        ],
      },
      {
        title: "맞춘 방법도 남긴다",
        paragraphs: [
          "이 가상의 두 영상을 분석할 때 가까운 시각의 프레임끼리 골랐다고 해보자. 그 선택은 쓸모 있을 수 있다. 그래도 ‘가장 가까웠다’와 ‘동시에 찍혔다’는 다른 말이다.",
          "그래서 골라낸 두 프레임과 함께 원래 기록된 시각, 어떤 기준으로 환산했는지, 환산 뒤에도 얼마나 벌어져 있었는지를 남기고 싶다. 숫자를 만들 수 없다면 모른다는 상태를 남긴다.",
          "어느 정도의 차이까지 받아들일지도 목적에 따라 정해야 한다. 비행기의 색을 확인하는 일과 손을 떠난 순간을 비교하는 일은 같은 자료에서 다른 요구를 만든다. 임의의 허용 간격을 모든 분석의 정답처럼 쓰기는 어렵다.",
          "나중에 시간을 맞추는 방법을 고치면, 같은 원본에서도 다른 쌍이 나올 수 있다. 이전 결과를 확인하려면 원본 파일뿐 아니라 그때 쓴 맞춤 규칙과 버전도 필요하다.",
          "폴더를 열면 파일은 둘 다 있다. 재생도 잘된다.",
          "그런데 한쪽 비행기는 손에 있고 다른 쪽 비행기는 이미 공중에 있다. 이걸 같은 순간이라고 묶은 사람에게, 비행기를 던지기 전부터 다시 보여달라고 해야겠다.",
        ],
      },
    ],
  },
  en: {
    title: "When was frame 100 in each recording?",
    summary:
      "Two recordings of the same paper airplane need not share a moment at the same frame index. Matching files also means preserving time references and the method used to pair them.",
    sources: [
      {
        label: "Sangmin Yoon · Why autonomous-driving data is different",
        href: "https://sanspareilsmyn.github.io/blog/why-av-data-is-different/kr/",
      },
      {
        label: "nuScenes devkit · Data schema",
        href: "https://github.com/nutonomy/nuscenes-devkit/blob/master/docs/schema_nuscenes.md",
      },
    ],
    sections: [
      {
        title: "Filmed together",
        paragraphs: [
          "Imagine two people recording one paper-airplane throw on their phones. One starts before the throw. The other starts around the moment the airplane leaves the hand.",
          "Later, take frame 100 from each recording and put them side by side. One might show the airplane still being held; the other might show it in flight. Same airplane, same frame number.",
          "The number marks a position within a file. It does not establish that the recordings started together. Different capture rates make matching sequence numbers still less meaningful.",
          "Time is also a central difficulty in Sangmin Yoon’s essay about autonomous-driving data. Sensors can use different clocks and produce data at different rates, so joining their records into one event goes beyond storing the files.",
          "It is reassuring to hear that every file arrived. With these two videos, another question follows.",
          "When were these two images captured?",
        ],
      },
      {
        title: "Which clock does the time belong to?",
        paragraphs: [
          "Would a capture timestamp settle it? Even identical numbers can refer to different origins. Time since the video began and the device’s clock time are different references.",
          "Suppose one recording is trimmed to begin as the airplane leaves the hand. Its first frame changes. Keep only the new file’s start and lose its position in the original, and matching it to the other recording becomes harder.",
          "If I received this hypothetical material, I would want the timestamp reference and the trim position alongside the filename. If someone already aligned the clocks or corrected the times, I would want to know how.",
          "Two displays saying ‘twelve o’clock’ do not prove that the devices’ clocks agreed. If their offset or its change during recording is unknown, that uncertainty belongs in the record too.",
          "The official nuScenes schema keeps a sensor file’s path and timestamp alongside references to calibration and vehicle-pose records. The file stays connected to information needed to interpret it.",
          "A phone-video project does not need to copy that entire structure. But I would hesitate to send the files alone and expect the surrounding explanation to be remembered later.",
          "The person recording might remember a shared ‘one, two, three’ before the throw. Someone receiving only the files cannot know that unless the material preserves it.",
          "Trim the lead-in to save space, and an apparently unimportant preparation scene might turn out to have been the clue linking the recordings.",
        ],
      },
      {
        title: "Keep the matching decision",
        paragraphs: [
          "Suppose we analyze these imagined videos by pairing the closest recorded times. That can be a useful choice. Closest available and captured simultaneously still make different claims.",
          "I would keep the original times with each selected pair, the conversion to a shared reference and the remaining gap. If we cannot determine a value, retain an unknown rather than manufacture one.",
          "The acceptable gap also depends on the task. Checking the airplane’s color and comparing the moment it leaves a hand ask different things of the same material. One arbitrary tolerance cannot serve as the answer for every analysis.",
          "Improve the alignment method later and the same originals might produce different pairs. Reconstructing the earlier result then needs the matching rules and their version as well as the source files.",
          "Both files are in the folder. Both play.",
          "But one airplane is still in a hand and the other is already airborne. I would ask whoever called them the same moment to show the part before the throw again.",
        ],
      },
    ],
  },
};
