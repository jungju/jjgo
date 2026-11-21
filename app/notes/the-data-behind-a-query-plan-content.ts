import type { Note } from "./notes-data";

export const planContextNote: Note = {
  page: "notePlanContext",
  category: "DATA & PERFORMANCE",
  date: "2026-11-21",
  sample: false,
  relatedPages: ["noteJoinRevenue", "notePersistentFix"],
  image: "/a/generated/notes/the-data-behind-a-query-plan.webp",
  imageAlt: {
    ko: "카드가 조금 든 쟁반과 두꺼운 카드 더미 옆에서 손이 경로 카드의 황동 집게를 드는 그림",
    en: "A hand lifting a brass clip from a route card beside trays holding a few cards and a thick stack",
  },
  ko: {
    title: "빠르던 PostgreSQL 실행계획, 데이터가 바뀌어도 그대로 둘까?",
    summary:
      "같은 만 건에서 검토 대상이 열 건일 때와 팔천 건일 때를 가정했다. PostgreSQL 19의 pg_plan_advice 문서를 읽으며, 잘됐던 실행계획 옆에 남겨둘 조건을 생각했다.",
    sources: [
      {
        label: "PostgreSQL · PostgreSQL 19 출시 발표",
        href: "https://www.postgresql.org/about/news/postgresql-19-released-3449/",
      },
      {
        label: "PostgreSQL 19 · pg_plan_advice 공식 문서",
        href: "https://www.postgresql.org/docs/19/pgplanadvice.html",
      },
    ],
    sections: [
      {
        title: "열 장을 찾던 방법",
        paragraphs: [
          "검토할 문서만 보여주는 화면이 있다고 해보자. 문서 만 건 중에서 검토 대상은 열 건이다. 한동안 잘 쓰다가 나중에 같은 화면을 열었는데, 이번에는 검토할 문서가 팔천 건이다.",
          "문서 전체 수는 그대로다. 찾는 조건도 같다. 가상의 표에서 needs_review가 참인 행을 고른다고 놓고, 대상 비율을 계산하면 처음에는 0.1%, 나중에는 80%다. 실제 데이터베이스에서 측정한 값은 아니다.",
          "이때 예전에 빨랐던 찾는 방법을 그대로 붙잡고 있으면 계속 빠를까. 같은 쿼리라는 설명만으로는 선뜻 고개가 끄덕여지지 않는다. 찾아야 할 종이의 양이 이렇게 달라졌는데.",
          "2026년 11월 19일 나온 PostgreSQL 19 발표에서 눈에 들어온 기능은 pg_plan_advice였다. 공식 문서는 실행계획의 주요 선택을 표현하고 재현하거나 바꿀 수 있는 조언 형식을 소개한다. 잘되던 선택을 유지하거나 다른 선택을 시험해볼 수 있게 하는 기능이다.",
          "그런데 그 문서의 첫머리에는 경고도 있다. 데이터 분포가 바뀌면 플래너가 계획을 조정할 수 있는데, 조언이 그 선택을 막으면 오히려 나쁜 계획을 고를 수 있다는 설명이다.",
          "앞의 문서함이 떠올랐다. 처음의 열 건과 나중의 팔천 건을 모두 ‘만 건짜리 표’라고 적어두면, 꽤 중요한 차이를 지운 셈이다.",
          "어느 쪽에서 인덱스를 써야 빠른지, 전체를 훑는 편이 나은지는 이 비율만으로 결정할 수 없다. 인덱스와 행의 크기, 실제로 읽는 자료와 환경 같은 조건이 더 필요하다. 여기서는 PostgreSQL을 실행하거나 두 계획의 시간을 재지 않았다. 숫자 예가 알려주는 것은, 같은 조건에 걸리는 대상의 비율도 달라질 수 있다는 것까지다.",
        ],
      },
      {
        title: "선택을 남길 때 조건도 남기기",
        paragraphs: [
          "잘되던 방법을 남겨두고 싶은 마음은 이해된다. 문제가 생겼다가 어떤 선택으로 해결됐다면, 다음에도 같은 것을 쓰고 싶을 것이다. 다만 그때 같이 남겨야 할 것은 해결한 방법만이 아닐 것 같다.",
          "내가 이 가상의 화면을 넘겨받는다면, 어떤 쿼리와 입력값이었는지부터 보고 싶다. 그때 표에는 무엇이 얼마나 있었고, 검토 대상은 몇 건이었는지. 실행계획과 함께 실제로 측정한 조건과 결과가 있어야 ‘빨랐다’는 말을 다시 비교할 수 있다.",
          "pg_plan_advice는 플래너를 통째로 대신하는 기능도 아니다. 공식 설명에 따르면 플래너의 선택지를 제한하는 방식으로 동작한다. 생성된 조언 중 조인 순서에 관한 부분만 골라 적용하는 예도 나온다. 하나의 선택을 붙잡는 것과 모든 결정을 똑같이 만드는 것은 다르다.",
          "그 정도를 구분할 수 있다는 점이 좋다. 문제가 된 선택만 좁혀볼 수 있다면 나머지 선택까지 무심코 따라 고정할 이유는 줄어든다. 그렇다고 좁게 정했으니 언제나 안전하다고 말할 수는 없다. 여전히 지금의 자료와 쿼리에서 확인해야 한다.",
          "조언을 적용한 뒤에는 무엇이 적용됐는지도 읽어야 한다. 문서는 EXPLAIN에서 조언이 대상과 맞았는지, 적용할 수 없었는지 등의 피드백을 보여준다고 설명한다. 적용됐다는 확인을 받는 일과 실제로 더 빨라졌는지 재는 일은 또 따로다.",
          "앞의 문서함에서 기록을 한 장 만든다면, 예전에는 열 건을 찾았다는 칸을 비워두고 싶지 않다. 나중에 누군가 쿼리 문장만 보고 예전 해결책을 다시 꺼내 쓸 수도 있으니까. 데이터가 달라졌다면 예전 선택을 비교 대상으로 삼을 수는 있어도, 결론까지 빌려올 수는 없겠다.",
          "이 글은 새 확장을 적용하거나 업그레이드해서 얻은 운영 후기가 아니다. 공식 문서를 읽고, 어떤 기록이 있어야 이전 선택을 다시 판단할 수 있을지 생각한 글이다. 실제 환경에 쓸 선택은 그 환경에서 비교할 일이 남는다.",
          "예전 실행계획 옆에 작은 메모를 붙여본다. ‘이때 검토할 문서는 열 건.’ 오늘 문서함의 팔천 장을 보고도 그 집게를 같은 자리에 둘지, 그제야 다시 물어볼 수 있을 것 같다.",
        ],
      },
    ],
  },
  en: {
    title: "Should a fast PostgreSQL plan stay fixed when the data changes?",
    summary:
      "Imagine the same ten-thousand-row table with ten documents to review, then eight thousand. PostgreSQL 19’s pg_plan_advice documentation made me think about the context to keep beside a successful query plan.",
    sources: [
      {
        label: "PostgreSQL · PostgreSQL 19 release announcement",
        href: "https://www.postgresql.org/about/news/postgresql-19-released-3449/",
      },
      {
        label: "PostgreSQL 19 · Official pg_plan_advice documentation",
        href: "https://www.postgresql.org/docs/19/pgplanadvice.html",
      },
    ],
    sections: [
      {
        title: "The method that found ten sheets",
        paragraphs: [
          "Imagine a screen that shows documents awaiting review. Out of ten thousand documents, ten need attention. Later, the same screen has eight thousand documents to review.",
          "The table still has the same number of rows, and the filter is unchanged. In this fictional table we select rows where needs_review is true. The matching proportion works out to 0.1% in the first case and 80% in the second. These are invented counts, not database measurements.",
          "Would holding on to the method that was fast before keep it fast now? Saying it is the same query does not quite settle the question. There are rather more sheets to find.",
          "One feature that caught my attention in the November 19, 2026 PostgreSQL 19 announcement was pg_plan_advice. The official documentation describes a language for expressing, reproducing and changing key planning choices. It offers a way to retain choices believed to work well or experiment with alternatives.",
          "The documentation opens with a warning too. A planner can adjust its choices when the data distribution changes. Advice that prevents that adjustment can lead to a poor plan.",
          "That brought me back to the document tray. Describing both situations as a ten-thousand-row table would leave out a fairly important difference between ten matches and eight thousand.",
          "The proportions alone cannot tell us whether an index or a full scan would be faster. Indexes, row sizes, what must be read and the environment also matter. I have not run PostgreSQL or timed competing plans here. The small calculation establishes only that an unchanged filter can match a very different share of the data.",
        ],
      },
      {
        title: "Keeping the conditions beside the choice",
        paragraphs: [
          "The wish to preserve a working method is understandable. If a particular choice resolved a problem, we may want to use it again. But the chosen method is probably not the only thing worth preserving.",
          "If I inherited this imaginary screen, I would want to know the query and its inputs. What was in the table then, and how many documents matched? A plan needs its measurement conditions and observed results beside it before a claim such as “it was fast” becomes something we can compare again.",
          "Nor does pg_plan_advice replace the planner wholesale. The documentation explains that it constrains the planner’s choices. One example takes just the join-order portion of generated advice and applies that. Retaining one choice is different from forcing every decision to remain identical.",
          "I like being able to distinguish those scopes. Narrowing the problematic choice gives less reason to freeze unrelated choices along with it. A narrow constraint still needs checking against the current data and query, though; its scope alone does not make it safe in every situation.",
          "After supplying advice, we also need to read what actually applied. The documentation describes EXPLAIN feedback for whether advice matched its target or could not apply, among other outcomes. Confirming that advice applied and measuring whether it improved performance remain separate tasks.",
          "For our document tray, I would not leave the old matching-row count blank. Someone could later look only at the query text and reuse the earlier fix. When the data has changed, the old choice can be a comparison candidate without bringing its conclusion along for free.",
          "This is not an account of operating a new extension or upgrading a server. It is a reflection on the official documentation and the records needed to reconsider an earlier choice. A real environment would still need its own comparison.",
          "I would leave a small note beside the old plan: ten documents needed review then. Faced with today’s eight thousand sheets, we could finally ask again whether the clip belongs in the same place.",
        ],
      },
    ],
  },
};
