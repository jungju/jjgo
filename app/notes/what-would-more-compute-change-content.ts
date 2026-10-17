import type { Note } from "./notes-data";

export const moreComputeNote: Note = {
  page: "noteMoreCompute",
  category: "AI & SEARCH",
  date: "2026-10-18",
  sample: false,
  image: "/a/generated/notes/what-would-more-compute-change.webp",
  imageAlt: {
    ko: "체스판 옆 갈라지는 종이 길 위의 황토색 폰과 뒤에 놓인 모래시계",
    en: "An amber pawn on branching paper paths beside a chessboard and an hourglass",
  },
  ko: {
    title: "시간을 더 주면, 더 찾아볼 수 있을까",
    summary:
      "「The Bitter Lesson」을 읽으며, 계산 예산이 늘었을 때 내가 만든 방법은 무엇을 더 할 수 있는지 생각했다.",
    sources: [
      {
        label: "Rich Sutton — The Bitter Lesson (2019), 텍사스대 보관 PDF",
        href: "https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf",
      },
    ],
    sections: [
      {
        title: "한 번 더 생각할 시간",
        paragraphs: [
          "문제를 푸는 시스템에 계산 예산을 더 주면 무엇이 달라질까. 같은 답을 조금 늦게 내놓을까, 아직 보지 않은 후보를 더 살펴볼까.",
          "Richard Sutton의 2019년 글 「The Bitter Lesson」을 읽다가 멈춘 질문이다. Sutton은 AI 연구의 역사를 돌아보며, 사람이 특정 분야에 관해 아는 것을 직접 넣는 방식보다 늘어나는 계산 자원을 활용하는 범용적인 방법이 장기적으로 강해졌다고 주장한다.",
          "그가 특히 강조하는 방법은 탐색과 학습이다.",
          "이 글을 읽으면 내가 알고 있는 좋은 답을 시스템에 더 알려주고 싶던 마음이 조금 불편해진다. 그 답을 넣는 일에 열심인 동안, 더 많은 답을 찾아볼 수 있는 방법은 얼마나 만들었을까.",
          "물론 2019년의 이 주장이 지금의 모든 작업에서 더 오래 계산하면 이긴다는 보장은 아니다. 여기서는 그 글이 던진 질문 하나를 내 설계 쪽으로 가져와 보고 싶다.",
        ],
      },
      {
        title: "답을 넣는 쪽과 찾는 쪽",
        paragraphs: [
          "간단한 가상의 문제를 놓아보자. 여러 계획 중 하나를 골라야 한다. 첫 번째 방법은 사람이 미리 적은 우선순위를 따라 바로 고른다. 두 번째 방법은 가능한 계획들을 만들어 같은 기준으로 비교한다.",
          "첫 번째가 당장 더 잘할 수도 있다. 문제를 잘 아는 사람이 쓴 우선순위는 쓸모가 있다. 두 번째는 후보를 제대로 만들지 못하거나, 엉뚱한 기준으로 비교하면 시간만 쓴다.",
          "그런데 같은 실행 환경에서 계산 예산을 더 준다고 하면 물어볼 것이 달라진다. 고정된 우선순위만 읽는 방법은 무엇을 더 할까. 후보를 비교하는 방법에는 아직 살펴보지 않은 계획을 볼 자리가 있을까.",
          "탐색할 수 있다는 말만으로 좋은 방법이 되지는 않는다. 같은 후보를 반복해 만드는지, 조금 다른 경우를 실제로 살펴보는지, 추가 계산이 선택에 도움이 되는지를 봐야 한다. 이 예를 구현하거나 성능을 잰 것은 아니다.",
          "내가 가져가고 싶은 질문은 그 정도다. 지금 넣어둔 답이 맞는지도 중요하지만, 시간이 생겼을 때 더 알아볼 수 있는 구조인가.",
          "체스라면 좋은 수에 대한 조언을 한 줄 더 적는 일과, 다음 수들을 더 살펴볼 수 있게 만드는 일을 떠올릴 수 있겠다. 둘에 쓰는 노력은 같지 않다.",
        ],
      },
      {
        title: "사람이 할 일이 없어지는 걸까",
        paragraphs: [
          "그렇게 읽고 나면 ‘그럼 아무것도 정해주지 말아야 하나’ 싶은 생각도 든다. 하지만 게임의 규칙과 내가 선호하는 수는 다른 역할을 한다. 말을 어디로 움직일 수 있는지와 어느 수가 좋아 보이는지를 한데 묶어 없앨 수는 없다.",
          "가상의 계획 선택에서도 반드시 지켜야 할 조건과 무엇을 좋은 결과로 볼지는 필요하다. 후보를 많이 만들었다고 그 조건을 어겨도 되는 것은 아니다. 찾을 공간을 열어주는 일에도 사람이 정할 부분이 있다.",
          "오히려 손이 가는 자리가 달라지는 것 같다. 결과를 하나씩 미리 써주는 대신, 비교할 수 있는 문제를 만들고 결과를 구분할 기준을 살피는 쪽으로.",
          "이것은 Sutton의 글에서 내가 이어 생각한 설계의 질문이다. 글의 역사적 주장을 내 작업의 성공 사례로 바꾸어 말할 수는 없다. 특히 잘못된 기준을 더 열심히 계산하는 시스템이라면, 내가 기대한 방향으로 나아갈 이유가 없다.",
        ],
      },
      {
        title: "내가 아는 수 너머",
        paragraphs: [
          "현실의 작업에는 기다릴 수 있는 시간과 쓸 수 있는 자원도 정해져 있다. 장기적으로 잘 커지는 방법이라는 이유만으로 오늘의 응답 시간을 무한히 늘릴 수는 없겠다.",
          "그래서 비교한다면 실제로 허용할 계산 예산을 두고 보고 싶다. 그 안에서 어떤 결과를 얻었는지, 조금 더 줬을 때 무엇이 달라졌는지. 좋아졌다고 말할 근거가 없으면 그 부분은 모르는 채로 남겨야 한다.",
          "체스판 옆에 내가 좋아하는 수를 적은 종이가 있다고 생각해 본다. 그 종이를 더 길게 만들지, 아직 펼쳐보지 않은 수를 보게 할지 잠깐 망설이게 된다.",
          "시간을 조금 더 줄 수 있다면, 이번에는 내가 적어놓지 않은 쪽도 찾아봤으면 좋겠다.",
        ],
      },
    ],
  },
  en: {
    title: "With more time, could it explore more?",
    summary:
      "Reading The Bitter Lesson made me ask what a method could actually do with a larger computation budget.",
    sources: [
      {
        label:
          "Rich Sutton — The Bitter Lesson (2019), University of Texas PDF copy",
        href: "https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf",
      },
    ],
    sections: [
      {
        title: "Another chance to think",
        paragraphs: [
          "What changes when a problem-solving system receives more computation? Does it return the same answer later, or examine candidates it has not yet seen?",
          "That question stopped me while reading Richard Sutton’s 2019 essay The Bitter Lesson. Looking back at AI research, Sutton argues that general methods able to use growing computational resources have proved stronger over the long run than approaches built around explicit human domain knowledge.",
          "He emphasizes search and learning.",
          "The essay makes my impulse to supply more good answers feel a little uncomfortable. While working to put known answers into a system, how much effort would I put into enabling it to find alternatives?",
          "This 2019 argument is not a guarantee that longer computation wins on every present-day task. I want to bring one of its questions into how I think about a design.",
        ],
      },
      {
        title: "Supplying an answer and finding one",
        paragraphs: [
          "Take a simple hypothetical choice among plans. One method follows priorities written in advance by a person and selects immediately. Another generates possible plans and compares them using the same criterion.",
          "The first may do better right away. Priorities written by someone who understands the problem can be useful. The second could waste time generating poor candidates or comparing them by the wrong measure.",
          "Now suppose we give both more computation in the same execution environment. What can the fixed-priority method do with it? Does the candidate-comparison method have room to examine plans it has not yet considered?",
          "The ability to search is not sufficient. We would need to see whether it repeatedly generates the same candidates, explores meaningfully different ones, and makes better choices with the added computation. I have not implemented or measured this example.",
          "That is the question I want to keep. Is the answer we supplied correct, and does the structure allow further discovery when resources become available?",
          "Chess offers an image for it: writing down another piece of advice about a good move, or enabling more continuations to be examined. Those are different places to spend effort.",
        ],
      },
      {
        title: "Does that leave nothing for people?",
        paragraphs: [
          "It might sound like we should specify nothing. But the rules of chess and a preference for a particular move have different jobs. Legal movement and a judgment about promising moves cannot simply be removed together.",
          "The hypothetical planning system still needs mandatory conditions and a criterion for a good result. Producing many candidates does not excuse violating those conditions. People have decisions to make when opening a space to explore.",
          "The work seems to move: from supplying each result in advance toward defining a problem that permits comparison and examining how results are distinguished.",
          "This is a design question I am extending from Sutton’s essay, not a successful implementation I can claim. A system working harder against the wrong criterion has no reason to head where I hoped.",
        ],
      },
      {
        title: "Beyond the moves I know",
        paragraphs: [
          "Real tasks also have limits on waiting time and resources. A method’s long-term scaling potential does not grant an unlimited response time today.",
          "I would therefore compare within the computation budget we could actually allow: what result it produces there, and what changes with a little more. Without evidence of improvement, that part should remain unknown.",
          "I picture a sheet beside a chessboard listing moves I favor. It makes me pause between adding another line and enabling a continuation I have not written down.",
          "If there is a little more time, I would like it to explore beyond my list.",
        ],
      },
    ],
  },
};
