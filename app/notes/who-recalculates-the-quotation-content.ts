import type { Note } from "./notes-data";

export const quotationRuleNote: Note = {
  page: "noteQuotationRule",
  category: "DOCUMENTS & CODE",
  date: "2026-11-10",
  sample: false,
  relatedPages: ["noteOctoberDate", "noteMovingChart"],
  image: "/a/generated/notes/who-recalculates-the-quotation.webp",
  imageAlt: {
    ko: "종이 견적표 두 장에 산호색 수량 토큰이 놓여 있고, 한쪽의 금색 합계 토큰은 붙어 있으며 다른 쪽은 실과 바퀴로 수량에 연결된 그림",
    en: "Two paper quotation grids with coral quantity counters: one gold total token is pasted down while the other connects to the counters through threads and a wooden wheel",
  },
  ko: {
    title: "견적서의 합계는 누가 다시 계산할까",
    summary:
      "수량을 7에서 9로 바꿨는데 합계는 84,000원에 머물렀다. Univer의 예제를 읽고, 저장된 숫자와 다시 계산할 관계를 따로 놓아봤다.",
    sources: [
      {
        label: "Univer · 편집 가능한 견적서와 저장 예제",
        href: "https://github.com/dream-num/univer#connect-your-application-to-editable-content",
      },
    ],
    sections: [
      {
        title: "수량 칸만 바꿔봤다",
        paragraphs: [
          "수량 7개, 단가 12,000원, 합계 84,000원을 적어두고 수량만 9로 바꿨다. 합계 칸에는 여전히 84,000원이 있었다.",
          "계산이 틀린 건 아니다. 계산을 다시 하지 않았다.",
          "실제 견적 프로그램에서 생긴 일은 아니다. 세 숫자가 든 작은 JavaScript 객체를 만들어 수량 값 하나만 고친 예다. 곱셈을 따로 실행하면 9개 금액은 108,000원으로 나온다. 세금이나 할인은 넣지 않은 가상의 금액이다.",
          "이 객체를 표처럼 그리면 처음에는 제법 그럴듯하겠다. 칸을 나누고 오른쪽 정렬을 하고 합계에 굵은 글씨를 주면, 누군가 계산해서 만든 견적서처럼 보일 것이다.",
          "그런데 굵은 글씨가 다음 계산까지 해주지는 않는다.",
          "Univer의 공식 문서를 읽다가 이 작은 예를 만들었다. 웹앱에 문서와 표 편집 환경을 넣는 SDK인데, 소개 글에 견적서 예제가 있었다. 셀에 수식을 넣고 애플리케이션 코드에서 수량을 바꾼 뒤, 계산 결과가 반영되기를 기다려 합계를 읽는다.",
          "내가 손댄 객체와 달리, 그 예제에는 수량과 금액 사이의 관계가 남아 있다. 수량 칸을 바꾸는 일과 합계 칸을 다시 계산하는 일이 이어져 있다.",
          "여기서 실행해 본 것은 내가 만든 객체의 값 변경과 곱셈뿐이다. Univer를 설치해서 같은 견적서를 돌린 후기는 아니다.",
          "물론 수식이 셀 안에 있어야만 계산할 수 있는 것은 아니다. 앱 코드에서 수량과 단가를 곱해 합계를 갱신할 수도 있다. 앞의 객체도 그렇게 연결하면 된다.",
          "다만 누군가는 그 연결을 맡아야 한다. 화면이 표처럼 생겼다는 이유만으로 연결까지 생기지는 않는다.",
        ],
      },
      {
        title: "내일 열어도 견적서를 고칠 수 있으려면",
        paragraphs: [
          "이 가상의 표를 오늘 닫았다가 내일 다시 연다고 해보자. 처음 보였던 84,000원만 똑같이 나오는 것으로 확인을 마쳐도 될까.",
          "나는 다시 수량을 고쳐보고 싶다. 파일을 처음 만든 사람에게 합계를 부탁하지 않아도, 이 문서 안에서 다음 견적을 만들 수 있는지.",
          "그때 필요한 것은 오늘 보였던 숫자만은 아닐 것이다. 수량과 단가가 무엇인지, 어느 칸을 바꾸면 무엇을 다시 계산하는지, 그 관계를 어디에 두었는지가 같이 따라와야 한다. 수식으로 남겼다면 수식을, 앱이 계산한다면 그 규칙을 다시 적용할 경로를 찾아야겠다.",
          "Univer 문서의 저장 부분도 그래서 눈에 들어왔다. workbook.save()는 문서 스냅샷을 돌려주고, 그것을 어디에 보관하고 다시 불러올지는 애플리케이션이 맡는다고 설명한다. 예제에서는 브라우저 저장소를 쓴다.",
          "저장 함수를 불렀다는 말과, 다음에 열 문서를 제대로 보관했다는 말 사이에도 할 일이 남아 있었다.",
          "나는 이 예제 하나로 모든 파일 형식이나 내보내기 동작을 확인한 것은 아니다. 여기서 다루는 저장 스냅샷을 곧바로 엑셀 파일과 같은 것으로 읽고 싶지도 않다.",
          "이미 전달한 금액을 그대로 보여주려는 사본이라면, 숫자가 고정된 채 남는 것이 목적에 맞을 수 있다. 내가 여기서 생각한 것은 보내기 전 수량을 다시 고치는 작업용 견적서다. 같은 모양의 표여도 다음에 할 일은 다를 수 있겠다.",
          "AI에게 표를 만들어달라고 할 때도 첫 화면의 합계가 맞는지 본 다음에 한 번 더 부탁하고 싶다. 수량을 바꾸고, 닫았다가 다시 열고, 다시 수량을 바꿔보자고. 그 사이에 계산 관계를 잃지는 않았는지.",
          "다시 수량 칸에 9를 적는다. 곱셈으로 확인한 금액은 108,000원이다. 이제 아래 칸을 보고, 다음 사람이 어떤 말을 하게 될지 생각해본다.",
          "“수량은 바꿨는데요. 아래 합계도 제가 따로 고치면 되나요?”",
        ],
      },
    ],
  },
  en: {
    title: "Who recalculates the quotation?",
    summary:
      "I changed a quantity from seven to nine, but the total stayed at ₩84,000. Univer’s example prompted a look at saved numbers and the relationships needed to calculate again.",
    sources: [
      {
        label: "Univer · Editable quotation and persistence example",
        href: "https://github.com/dream-num/univer#connect-your-application-to-editable-content",
      },
    ],
    sections: [
      {
        title: "Changing only the quantity",
        paragraphs: [
          "I put down a quantity of seven, a unit price of ₩12,000, and a total of ₩84,000. Then I changed the quantity to nine. The total still said ₩84,000.",
          "The arithmetic had not gone wrong. It had not run again.",
          "This did not happen in a quotation product. I made a small JavaScript object with those three numbers and changed one value. Multiplying separately gives ₩108,000 for nine items. These are invented amounts without tax or discounts.",
          "Draw that object as a table and it could initially look convincing. Add cell borders, right-align the amounts, and make the total bold. It would look like somebody had calculated a quotation.",
          "Bold type will not do the next multiplication.",
          "I made the example while reading Univer’s official documentation. The SDK embeds document and spreadsheet editing in web applications. Its quotation example puts formulas in cells, changes a quantity from application code, and waits for calculation results before reading the total.",
          "Unlike my plain object, that example retains the relationship between quantity and amount. Changing one cell is connected to recalculating another.",
          "What I actually executed here was changing my own object and multiplying two numbers. I did not install Univer and run this quotation through it.",
          "A formula need not live in a cell for calculation to happen. Application code can multiply quantity by unit price and update the total. My object could be wired up that way too.",
          "Somebody still has to supply the connection. Making the screen look like a spreadsheet does not create it.",
        ],
      },
      {
        title: "Being able to edit it tomorrow",
        paragraphs: [
          "Suppose I close this imagined table today and reopen it tomorrow. Is seeing the same ₩84,000 enough to call the reopening successful?",
          "I would like to change the quantity again. Could the next quotation be made here without asking the person who created the file to calculate it?",
          "More than the displayed numbers must survive for that. Where do quantity and unit price live? Which edit triggers another calculation? If a formula holds the relationship, it needs to remain available. If application code holds it, there needs to be a way to apply that rule again.",
          "That is why the persistence part of Univer’s example caught my attention. It describes workbook.save() returning a document snapshot, with the application responsible for storing and restoring it. The example uses browser storage.",
          "Calling a save method still leaves the work of retaining the document that should be opened next time.",
          "Reading that example did not verify every file format or export path. I would not treat its saved snapshot as interchangeable with an Excel file.",
          "A copy meant to show an amount already sent might appropriately keep its numbers fixed. I am considering a working quotation whose quantities are still being edited before it is sent. Identical-looking tables can have different next steps.",
          "When asking an AI to make a table, I would like one more step after checking the initial total: change the quantity, close and reopen it, then change the quantity again. Has the calculation relationship survived that trip?",
          "Back in the quantity cell, I enter nine. The multiplication gives ₩108,000. I look down at the total and imagine what the next person might ask.",
          "“I changed the quantity. Do I have to fix the total separately too?”",
        ],
      },
    ],
  },
};
