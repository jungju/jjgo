import type { Note } from "./notes-data";

export const referenceDateNote: Note = {
  page: "noteReferenceDate",
  category: "DESIGN & CODE",
  date: "2026-10-16",
  sample: false,
  image: "/a/generated/notes/the-reference-image-does-not-set-the-date.webp",
  imageAlt: {
    ko: "초록 직사각형과 황토색 원이 있는 포스터 앞에 놓인 빈 종이 조각과 황동 핀셋",
    en: "Blank paper strips and brass tweezers before a poster with a green rectangle and ochre circle",
  },
  ko: {
    title: "참고 이미지가 날짜까지 정하면 곤란하다",
    summary:
      "AesCode를 보며, 시안에서 가져올 모양과 요청서에서 지킬 내용을 따로 읽게 됐다.",
    sources: [
      {
        label: "AesCode 공식 저장소",
        href: "https://github.com/microsoft/AesCode",
      },
      {
        label: "AesCode 프로젝트 소개",
        href: "https://microsoft.github.io/AesCode/",
      },
    ],
    sections: [
      {
        title: "토요일이라고 썼는데",
        paragraphs: [
          "작은 워크숍 포스터를 만든다고 해보자. 요청서에는 토요일이라고 썼다. 생성된 시안은 마음에 든다. 제목도 큼직하고 색도 괜찮다. 그런데 아래 날짜를 읽으니 금요일이다.",
          "그림은 벌써 행사를 하루 앞당겨 놓았다.",
          "이 시안을 참고해서 HTML과 CSS를 만들면 무엇을 따라가야 할까. 제목의 크기와 여백은 가져오고 싶다. 금요일까지 가져오고 싶은 것은 아니다.",
          "Microsoft의 AesCode 소개에서 눈에 들어온 구분이 이것이었다. 생성한 이미지를 디자인의 참고로 쓰되, 내용의 기준은 원래 요청에 둔다. 결과는 수정할 수 있는 HTML과 CSS로 만든다는 설명이다.",
          "소개 자료는 참고 이미지에도 잘못된 내용이 들어갈 수 있다고 짚는다. 나는 모델을 실행해 결과를 비교한 것은 아니다. 공식 문서를 읽다가, 포스터를 고치는 이 가상의 상황을 생각했다.",
          "예쁜 시안을 보면 통째로 따라가고 싶어진다. 그 안에 든 글자도 디자인의 일부처럼 보이니까. 다만 글자에는 모양 말고 뜻도 있다.",
        ],
      },
      {
        title: "같은 칸에 들어 있는 다른 정보",
        paragraphs: [
          "포스터 아래의 날짜 영역을 나눠 생각해 본다. 왼쪽에 둘지 가운데에 둘지, 제목에서 얼마나 떨어뜨릴지는 배치의 문제다. 실제로 어느 날 열리는지는 행사 정보에서 받아야 한다.",
          "한 이미지 안에서는 둘이 붙어 있다. 만드는 쪽에서는 잠깐 떼어놓을 필요가 있겠다.",
          "가령 요청을 보낼 때 행사명과 날짜, 장소는 그대로 쓸 내용으로 주고, 이미지에서는 색과 제목의 위계, 여백을 참고하라고 적고 싶다. 시안에만 있는 주소나 참가비는 임의로 채우지 않도록 하고.",
          "이것은 문서를 보고 떠올린 작업 방식이다. 이렇게 적기만 하면 모델이 항상 지킨다고 확인한 것은 아니다. 결과의 문구는 원래 정보와 다시 맞춰봐야 한다.",
          "원래 요청 자체가 애매하면 거기서도 틀릴 수 있다. ‘다음 토요일’이라고만 적힌 요청을 그림이 해결해 주지는 못한다. 발행할 날짜를 확정해서 넣어야 할 사람은 여전히 남는다.",
          "여기에 한 가지가 더 있다. 시안의 짧은 행사명을 실제 긴 이름으로 바꾸면, 아까 좋았던 줄바꿈이 달라질 수 있다. 올바른 내용으로 고친 뒤에야 그 디자인을 제대로 볼 수 있는 셈이다.",
          "짧은 영문 제목으로는 널찍하던 칸이 한국어 행사명을 넣자 두 줄이 된다고 해보자. 글자를 작게 줄이면 겉보기는 다시 맞출 수 있다. 하지만 사람들이 그 제목을 읽기 편한지는 화면에서 봐야 한다.",
          "그러니 시안을 닮았다는 확인과, 실제 내용을 넣어 읽을 수 있다는 확인을 따로 해보고 싶다. 두 질문이 같은 자리에서 끝나지는 않을 것 같다.",
        ],
      },
      {
        title: "수정할 수 있다는 말의 다음",
        paragraphs: [
          "HTML과 CSS로 남는다는 점은 이런 작업에서 반갑다. 날짜 문구를 찾아 바꾸고 다시 렌더링할 수 있으니까. 이미지 위의 글자를 지우고 비슷한 색으로 덮는 일부터 시작하지 않아도 된다.",
          "그렇다고 수정할 수 있다는 말이, 수정 뒤에도 모양이 괜찮다는 뜻까지 포함하지는 않는다. 한 단어가 길어졌을 때 아래 장소 줄이 밀리는지, 좁은 화면에서 서로 겹치는지는 다시 봐야 한다.",
          "내가 이 포스터를 넘겨받는다면, 원래 요청의 내용과 참고 이미지, 편집할 코드가 각각 어디에 있는지 알고 싶다. 나중에 날짜를 고칠 때 무엇을 기준으로 삼을지 헷갈리지 않게.",
          "처음의 시안으로 돌아가면 금요일을 토요일로 고치는 일은 작다. 그 작은 수정이 제대로 된 뒤에야 여백과 색을 마음 놓고 볼 수 있겠다.",
          "그때 누군가 행사명 뒤에 한 단어만 더 붙여달라고 할 수도 있다. 코드를 다시 열고, 이번에는 제목 아래가 얼마나 내려가는지 봐야겠다.",
        ],
      },
    ],
  },
  en: {
    title: "The reference image should not set the date",
    summary:
      "Reading AesCode made me separate the appearance to borrow from a mockup and the content to preserve from the brief.",
    sources: [
      {
        label: "AesCode repository",
        href: "https://github.com/microsoft/AesCode",
      },
      {
        label: "AesCode project overview",
        href: "https://microsoft.github.io/AesCode/",
      },
    ],
    sections: [
      {
        title: "The brief said Saturday",
        paragraphs: [
          "Imagine making a poster for a small workshop. The brief says Saturday. The generated mockup looks good: a large heading, pleasing colors. Then you read the date at the bottom. It says Friday.",
          "The picture has already moved the event forward a day.",
          "If we use this mockup to produce HTML and CSS, what should we follow? I would like the heading size and spacing. Friday should stay behind.",
          "This was the distinction that caught my attention in Microsoft’s AesCode introduction. A generated image supplies visual guidance, while the original prompt remains the authority for content. The output is described as editable HTML and CSS.",
          "The project also points out that reference images can contain incorrect content. I have not run the model or compared its outputs. Reading the official materials prompted this hypothetical poster-editing task.",
          "A good-looking mockup makes copying the whole thing tempting. Its words look like part of the design. Words also mean something.",
        ],
      },
      {
        title: "Different information in the same box",
        paragraphs: [
          "Consider the date area. Putting it on the left or in the center, and choosing its distance from the heading, are layout decisions. The actual day should come from the event information.",
          "In an image, those things sit together. While making the artifact, I would want to separate them for a moment.",
          "I might supply the event name, date, and venue as content to preserve, and ask for the image’s colors, hierarchy, and spacing as references. An address or ticket price appearing only in the mockup should not be filled in as fact.",
          "This is a workflow I am proposing after reading. I have not verified that writing those instructions makes the model obey every time. The resulting copy still needs comparison with the supplied information.",
          "An ambiguous brief can fail earlier. “Next Saturday” is not a question the picture can settle. Someone still needs to establish the date to publish.",
          "Something else happens when the real event name replaces a shorter one in the mockup: the line breaks may change. Only after correcting the content can we properly judge the design.",
          "Suppose a short English heading fits comfortably, but the actual Korean event name takes two lines. Shrinking the text could make it fit again. Whether people can comfortably read it needs a look at the rendered screen.",
          "I would therefore separate resemblance to the mockup from readability with the actual content. Those checks may not end in the same place.",
        ],
      },
      {
        title: "After “editable”",
        paragraphs: [
          "Keeping HTML and CSS is appealing for this kind of work. We can find the date, change it, and render again, without first erasing letters painted into a picture.",
          "Being able to edit does not establish that the layout survives the edit. After a word grows longer, we still need to see whether the venue line moves or elements overlap on a narrow screen.",
          "If I inherited this poster, I would want to know where the authoritative brief, reference image, and editable code live. A later date change should not start with guessing which one supplies the facts.",
          "Back at the original mockup, changing Friday to Saturday is a small task. Once it is correct, I can give the spacing and colors my attention.",
          "Then someone might ask to add just one more word to the event name. Time to reopen the code and see how far the heading pushes the next line down.",
        ],
      },
    ],
  },
};
