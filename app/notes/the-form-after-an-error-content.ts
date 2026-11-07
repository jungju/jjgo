import type { Note } from "./notes-data";

export const formAfterErrorNote: Note = {
  page: "noteFormAfterError",
  category: "PRODUCT & AI",
  date: "2026-11-07",
  sample: false,
  relatedPages: ["noteSixthClick", "noteTvWayBack"],
  image: "/a/generated/notes/the-form-after-an-error.webp",
  imageAlt: {
    ko: "닮은 두 입력 양식 중 하나는 입력한 흔적을 버리고, 다른 하나는 내용을 남긴 채 손이 한 칸을 고치는 종이 콜라주",
    en: "Two similar paper forms: one discards its input marks while a hand corrects one field on the other, keeping the rest",
  },
  ko: {
    title: "오류가 난 뒤에도 내 문장은 남아 있을까",
    summary:
      "처음 화면이 똑같은 신청서 두 개를 상상했다. 이메일을 한 번 잘못 적고 나면, 다시 써야 할 문장의 길이가 달라진다.",
    sources: [
      {
        label: "Craft Anything · 재현 과정과 현재 구현 상태",
        href: "https://github.com/storytold/craft-anything",
      },
    ],
    sections: [
      {
        title: "제출하기 전까지는 똑같다",
        paragraphs: [
          "신청서를 거의 다 썼는데 이메일 주소에 골뱅이를 빼먹었다고 해보자. 이름은 맞게 적었다. 요청 사항에는 조금 긴 문장도 썼다. 제출을 누르자 빨간 안내가 뜬다.",
          "여기까지는 괜찮다. 틀렸으니 고치면 된다.",
          "그런데 이름도, 요청 사항도 같이 비어 있다.",
          "이메일 한 칸을 고치러 왔는데 방금 쓴 문장을 다시 떠올려야 한다. 아까는 더 자연스럽게 썼던 것 같은데. 다시 쓰다 보면 신청 자체가 조금 덜 하고 싶어질 수도 있겠다.",
          "실제로 겪은 서비스 이야기는 아니다. 화면을 재현하는 도구의 설명을 읽다가, 비교해 보고 싶은 상황을 하나 만들어봤다.",
          "Craft Anything은 원래 프로그램을 살펴보고 새 프로젝트를 만든 뒤, 결과를 비교하고 고치는 과정을 설명한다. 웹사이트는 세 가지 화면 너비에서 확인한다고 한다. 현재는 초기 알파이며 앱과 게임의 동작 검사에는 부분적으로 구현된 항목도 있다고 적혀 있다.",
          "도구를 실행해 본 것은 아니다. 설명을 읽으며 내가 궁금해진 것은, 그 비교에 제출 버튼을 누른 다음의 장면이 얼마나 들어갈까 하는 점이었다.",
        ],
      },
      {
        title: "똑같이 생긴 다른 신청서",
        paragraphs: [
          "앞의 가상 신청서를 두 개 만들어본다고 생각해보자. 둘 다 같은 색, 같은 간격, 같은 입력창을 가진다. 같은 내용을 적어 놓고 캡처하면 구분하기 어려울 것이다.",
          "첫 번째는 이메일 형식이 틀리면 모든 칸을 비운다. 두 번째는 이름과 요청 사항을 그대로 두고 이메일 칸 옆에 안내를 붙인다.",
          "두 화면의 차이는 틀리기 전에는 잘 보이지 않는다.",
          "두 번째 신청서에서는 골뱅이를 넣고 다시 제출할 수 있다. 첫 번째에서는 문장부터 복구해야 한다. 화면을 만든 쪽에서는 입력값 몇 개일지 몰라도, 쓰는 쪽에서는 방금 들인 시간이다.",
          "그래서 이 예를 확인한다면 정상 이메일로 한 번 성공시키는 데서 멈추고 싶지는 않다. 일부러 이메일을 틀리게 적고, 다른 칸에 남겨둔 문장을 보겠다. 안내를 읽고 한 칸만 고쳐서 계속할 수 있는지도.",
          "이것은 Craft Anything이 입력값을 지운다는 이야기가 아니다. 그 도구의 실제 결과를 확인하지 않았다. 처음 화면을 잘 맞췄다는 사실만으로는 앞의 두 신청서를 구분할 수 없다는 뜻이다.",
          "물론 모든 값을 언제나 남기자는 규칙을 만들려는 것도 아니다. 비밀번호나 민감한 정보라면 다른 판단이 필요하겠다. 여기서 놓고 본 것은 이름과 신청 요청 문장이다.",
          "자동으로 화면을 만들게 부탁한다면, 나는 캡처 옆에 짧은 순서도 적고 싶다. 이 내용을 적는다. 이 칸만 틀린다. 제출한다. 고친다. 나머지 문장이 남아 있는지 본다.",
          "완성 화면 한 장을 더 받는 것과는 조금 다른 부탁이다.",
        ],
      },
      {
        title: "다시 적으라는 말의 길이",
        paragraphs: [
          "이 가상 신청서의 요청 사항을 한 줄 대신 열 줄로 늘려본다. 입력창의 모양은 그대로인데, 오류 뒤에 되돌아가야 할 거리는 길어진다.",
          "그 차이를 픽셀 간격만 보고 알아내기는 어렵다. 입력창 안에 무엇을 넣고 어느 길로 돌아왔는지가 필요하다.",
          "나는 새로 만든 화면을 보면서 닮았다는 말과 함께, 잘못 눌렀을 때도 계속 쓸 수 있다는 말을 듣고 싶다. 둘 다 확인할 수 있다면 좋겠다.",
          "다시 이메일 칸으로 돌아온다. 빨간 안내는 여전히 떠 있다. 이제 골뱅이를 넣으면 된다.",
          "아래쪽에는 조금 전 어렵게 고른 문장이 그대로 남아 있다.",
        ],
      },
    ],
  },
  en: {
    title: "Will my sentence still be there after the error?",
    summary:
      "Imagine two identical signup forms. Enter one malformed email address, and the amount of writing you must do again becomes very different.",
    sources: [
      {
        label: "Craft Anything · Workflow and implementation status",
        href: "https://github.com/storytold/craft-anything",
      },
    ],
    sections: [
      {
        title: "Identical until you press Submit",
        paragraphs: [
          "Suppose you have almost finished a signup form but left the @ out of your email address. Your name is correct. You have also written a fairly long request. You press Submit, and a red message appears.",
          "So far, fine. There is a mistake to fix.",
          "But your name and request have disappeared too.",
          "You came back to correct one field. Now you have to remember the sentence you just wrote. It sounded better the first time. By the second attempt, signing up might feel a little less appealing.",
          "This is an imagined service, not an experience I am reporting. I thought up the situation while reading about a tool for recreating interfaces.",
          "Craft Anything describes studying an original, building a new project, comparing the result, and refining it. It says website checks cover three screen widths. Its status section calls it early alpha and lists app and game behaviour checks among the partly implemented features.",
          "I have not run the tool. Reading the description made me wonder how much of what happens after Submit would enter that comparison.",
        ],
      },
      {
        title: "The same-looking form, twice",
        paragraphs: [
          "Imagine building two versions of that signup form. The colours, spacing and fields match. Fill them with the same text and take screenshots; they would be hard to tell apart.",
          "The first clears every field when the email format is wrong. The second keeps the name and request, placing a message beside the email field.",
          "The difference stays hidden until somebody makes a mistake.",
          "On the second form, you can insert the @ and submit again. On the first, you must reconstruct your writing. For the builder, these may be a few input values. For the person filling them in, they are time already spent.",
          "To check this example, I would go beyond one successful submission with a valid address. I would deliberately enter a malformed address and look for the sentence left in the other field. Could I read the message, fix one field, and continue?",
          "This is not a claim that Craft Anything clears inputs. I have not inspected its output. The point is that a close match on the initial screen cannot, by itself, distinguish these two imagined forms.",
          "Nor am I proposing that every value should always survive. Passwords and sensitive information can require different choices. Here I am considering an ordinary name and a signup request.",
          "If I asked an agent to build the screen, I would put a short sequence beside the screenshot: enter this text, make a mistake in this field, submit, correct it, and check whether the other writing remains.",
          "That is a slightly different request from asking for another finished screenshot.",
        ],
      },
      {
        title: "How much writing does “try again” mean?",
        paragraphs: [
          "Extend the imagined request from one line to ten. The input box can look just the same, while the distance you must travel back after an error grows.",
          "Pixel spacing alone will not reveal that difference. You need the contents of the field and the path taken through the form.",
          "When I look at a newly built screen, I would like “it looks like the original” to come with “you can still carry on after a mistake.” It would be good to check both.",
          "Back at the email field, the red message is still there. Now you just need to add the @.",
          "Below it, the sentence you worked to get right is still waiting.",
        ],
      },
    ],
  },
};
