import type { Note } from "./notes-data";

export const intermediateOverflowNote: Note = {
  page: "noteIntermediateOverflow",
  category: "CODE & NUMBERS",
  date: "2026-10-20",
  sample: false,
  image: "/a/generated/notes/the-answer-fits-but-the-product-overflows.webp",
  imageAlt: {
    ko: "초록 트레이 밖으로 걸친 큰 흰 종이 삼각형과 작은 트레이 안의 황토색 삼각형",
    en: "A large ivory paper triangle extending beyond a green tray beside a smaller ochre triangle in another tray",
  },
  ko: {
    title: "답은 들어가는데, 계산 중에 넘친다",
    summary:
      "큰 정삼각형 하나를 계산해 보니, 제곱근을 만나기 전에 곱셈이 먼저 숫자 범위를 벗어났다.",
    sources: [
      {
        label: "오보로나 — 거대 삼각형의 헤론 공식 구현",
        href: "https://oborona.zip/post/post46",
      },
      {
        label: "MDN — Number.MAX_VALUE",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE",
      },
    ],
    sections: [
      {
        title: "삼각형이 무한해졌다",
        paragraphs: [
          "한 변의 길이를 1e100으로 둔 정삼각형의 넓이를 짧은 JavaScript 계산으로 확인했다. 헤론의 공식을 그대로 곱해서 제곱근을 구하니 Infinity가 나왔다.",
          "너무 큰 삼각형을 가져왔나 싶지만, 넓이를 정삼각형의 식으로 계산하면 약 4.33e199다. JavaScript Number가 표현하는 유한한 양수 범위 안에 있다.",
          "큰 삼각형에서 중간 연산이 넘치는 문제를 다룬 원문을 읽고, 같은 크기의 정삼각형을 Node.js에서 따로 계산해 본 것이다. 원문의 C++ 실행 시간이나 알고리즘 전체를 재현한 것은 아니다.",
          "여기서 재미있는 것은 답이 너무 커서 담을 수 없는 상황과, 답에 도착하기 전에 넘치는 상황이 다르다는 점이다.",
          "제곱근을 씌우면 작아질 예정이었는데, 그 앞의 곱셈이 먼저 끝을 봤다.",
        ],
      },
      {
        title: "제곱근 앞에 모인 네 숫자",
        paragraphs: [
          "헤론의 공식은 세 변 a, b, c와 둘레의 절반 s를 써서, s(s−a)(s−b)(s−c)의 제곱근으로 넓이를 구한다. 정삼각형이라면 네 인수는 각각 1.5a, 0.5a, 0.5a, 0.5a가 된다.",
          "a가 1e100일 때, 제곱근 안의 곱은 실수 연산으로 대략 1.875e399 규모다. 최종 넓이보다 훨씬 크다. 넓이의 제곱을 먼저 만들어 놓았으니 그렇다.",
          "MDN이 설명하는 Number.MAX_VALUE는 약 1.8e308이다. 이보다 큰 값은 Infinity로 표현되며 원래 값을 잃는다. 이번 곱셈은 제곱근에 도착하기 전에 그 범위를 넘는다.",
          "그다음 Infinity의 제곱근을 구해도, 앞에서 잃어버린 크기가 돌아오지는 않는다. 수식은 맞는데 실행 순서 속 중간값이 버티지 못한 것이다.",
          "확인한 계산에서는 직접 곱한 루트 안의 값과 최종 반환값이 둘 다 Infinity였다. 최종 반환값만 보고 있으면 어느 단계에서 넘쳤는지 한 번 더 찾아 올라가야 한다.",
          "수학식의 마지막 줄을 읽는 것과 컴퓨터가 지나갈 줄을 읽는 것이 잠깐 갈라진다.",
        ],
      },
      {
        title: "작게 계산한 뒤 되돌려 보기",
        paragraphs: [
          "이번 정삼각형 하나에서는 한 변이 1인 경우를 먼저 계산할 수 있다. 그 넓이는 약 0.4330127이다. 여기에 원래 길이 a를 두 번 곱하면 넓이의 스케일이 돌아온다.",
          "Node.js에서 이 순서로 계산한 결과는 약 4.330127e199였다. 같은 입력 크기인데, 중간에 네 개의 큰 인수를 한꺼번에 곱하지 않은 쪽은 유한값을 돌려줬다.",
          "이 한 사례가 모든 삼각형에 쓸 수 있는 구현을 검증해 주지는 않는다. 거의 납작한 삼각형에서 생기는 오차나 입력이 삼각형을 이루는지 같은 질문은 따로 남는다. 속도 비교도 하지 않았다.",
          "최종 답 자체가 너무 크면 스케일을 바꾸는 것만으로 해결되지 않는다. 한 변을 1e200으로 올린 정삼각형은 넓이가 1e400 규모가 된다. 이번에 사용한 Number로는 그 결과를 유한값으로 담을 수 없다.",
        ],
      },
      {
        title: "반환값까지 가는 길",
        paragraphs: [
          "그래서 이번 계산에서 가져가고 싶은 것은 새 만능 함수가 아니다. 답이 들어갈 자리가 있다는 확인 뒤에도, 그 답을 만들며 무엇을 먼저 계산하는지 봐야 한다는 질문이다.",
          "공식을 코드로 옮길 때 곱셈과 제곱근을 적는 순서가 자연스러워 보이면 그냥 지나가기 쉽겠다. 결과를 작은 예시로만 확인하면 더 그렇다. 하지만 같은 식이어도 중간에 만드는 수의 크기는 달라질 수 있다.",
          "다시 Infinity가 적힌 반환값을 본다. 이번에는 제곱근 호출에 넘기기 직전의 값부터 펼쳐보고 싶다. 답은 들어갈 수 있었는데, 그 길목에서 이미 넘쳤으니까.",
        ],
      },
    ],
  },
  en: {
    title: "The answer fits, but the product overflows",
    summary:
      "A large equilateral triangle showed how multiplication can exceed the numeric range before the square root has a chance to reduce it.",
    sources: [
      {
        label: "Oborona — Heron implementations for large triangles",
        href: "https://oborona.zip/post/post46",
      },
      {
        label: "MDN — Number.MAX_VALUE",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE",
      },
    ],
    sections: [
      {
        title: "The triangle became infinite",
        paragraphs: [
          "I checked the area of an equilateral triangle with side length 1e100 in a short JavaScript calculation. Multiplying out Heron’s formula before taking the square root returned Infinity.",
          "The triangle might seem too large, but its area from the equilateral formula is approximately 4.33e199. That lies within the finite positive range of JavaScript’s Number.",
          "An article about intermediate overflow in large-triangle calculations prompted this separate Node.js example at the same scale. I did not reproduce its C++ timings or validate its complete algorithms.",
          "The interesting distinction is between an answer too large to represent and overflowing before reaching an answer that would fit.",
          "The square root was going to make the quantity smaller. The preceding multiplication ran out of room first.",
        ],
      },
      {
        title: "Four quantities before the root",
        paragraphs: [
          "Heron’s formula takes the square root of s(s−a)(s−b)(s−c), where s is half the perimeter. For an equilateral triangle, the four factors become 1.5a, 0.5a, 0.5a, and 0.5a.",
          "For a equal to 1e100, the product inside the root is roughly 1.875e399 in real arithmetic. It is much larger than the final area because we first construct the square of that area.",
          "MDN gives Number.MAX_VALUE as approximately 1.8e308. Larger values are represented as Infinity and lose their original value. This multiplication crosses that boundary before the square root.",
          "Taking the square root of Infinity cannot recover the magnitude lost earlier. The mathematical expression is valid, while an intermediate quantity in its execution exceeds the available range.",
          "In the calculation, both the direct radicand and final result were Infinity. Looking only at the return value leaves another investigation: which operation overflowed first?",
          "Reading the final mathematical expression and following the computer’s intermediate steps briefly become different activities.",
        ],
      },
      {
        title: "Calculate small, then restore the scale",
        paragraphs: [
          "For this one equilateral case, we can first calculate the area with side length 1: approximately 0.4330127. Multiplying by the original side length a twice restores the area’s scale.",
          "That ordering returned approximately 4.330127e199 in Node.js. At the same input scale, avoiding the direct product of four large factors produced a finite value.",
          "One case does not validate an implementation for every triangle. Accuracy near degenerate shapes and whether inputs form a valid triangle remain separate questions. I did not compare execution speed.",
          "Rescaling also cannot fix a final answer that is itself too large. With side length 1e200, the equilateral area is on the order of 1e400. Number cannot hold that result as a finite value.",
        ],
      },
      {
        title: "The route to the return value",
        paragraphs: [
          "What I want to keep from this calculation is a question rather than a universal replacement function. After establishing that the answer fits, what do we calculate on the way to it?",
          "A familiar order of multiplication and square root is easy to accept when translating a formula into code, especially after checking only small examples. Equivalent expressions can still construct intermediate quantities of different sizes.",
          "I return to the Infinity at the end. This time I would open up the value passed into the square root first. The answer had room; the route to it had already overflowed.",
        ],
      },
    ],
  },
};
