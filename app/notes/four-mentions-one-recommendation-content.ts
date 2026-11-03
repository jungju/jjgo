import type { Note } from "./notes-data";

export const bookMentionsNote: Note = {
  page: "noteBookMentions",
  category: "BOOKS & DATA",
  date: "2026-11-04",
  sample: false,
  relatedPages: ["noteBackwardBookmark", "noteReviewOrder"],
  image: "/a/generated/notes/four-mentions-one-recommendation.webp",
  imageAlt: {
    ko: "빈 표지의 책을 둘러싼 말풍선 네 개 중 하나에만 별이 있고, 옆에는 돋보기가 놓인 모습",
    en: "Four speech bubbles around a blank book, one marked with a star, beside a magnifying glass",
  },
  ko: {
    title: "책 이름은 네 번 나왔는데, 추천은 한 번이었다",
    summary:
      "서로 다른 네 사람이 쓴 가상 댓글을 나란히 놓았다. 같은 책 이름을 말해도 그 책을 권하는 것은 아닐 수 있다.",
    sources: [
      {
        label: "Hacker Books · 집계 방식과 언급·추천의 구분",
        href: "https://hackerbooks.org/about",
      },
      {
        label: "Hacker Books · Most recommended 화면",
        href: "https://hackerbooks.org/recommended",
      },
    ],
    sections: [
      {
        title: "같은 제목이 들어간 네 문장",
        paragraphs: [
          "‘푸른 사다리’라는 책이 있다고 해보자. 실제 책도, 실제 댓글도 아니다. 책 이름을 세는 작은 예를 위해 만든 제목이다.",
          "첫 번째 사람은 이렇게 쓴다. ‘푸른 사다리, 입문할 때 읽기 좋았어요. 추천합니다.’",
          "두 번째 사람은 ‘푸른 사다리는 아직 못 읽었는데, 같은 저자의 다른 책은 읽었어요’라고 한다.",
          "세 번째 사람은 ‘푸른 사다리는 제게 맞지 않았어요. 설명이 너무 빠르더라고요’라고 적는다.",
          "네 번째 사람은 ‘아까 얘기한 책 제목이 푸른 사다리였나요?’ 하고 묻는다.",
          "책 이름은 네 문장에 모두 있다. 내가 이 네 문장을 손으로 나눈다면 추천은 첫 번째에만 표시하겠다. 질문과 읽지 않았다는 말까지 추천에 넣으면, 숫자는 맞게 셌는데 문장의 뜻은 틀리게 전하게 된다.",
          "댓글에서 언급된 책을 모아 보여주는 Hacker Books를 읽으며 이런 예를 떠올렸다. 사이트는 책을 언급한 사람 수와 추천한 사람 수를 구분한다. 추천한 사람을 기준으로 정렬하는 화면도 따로 있다.",
          "처음에는 표지들이 모인 책장에 눈이 간다. 설명을 읽고 나니 숫자 옆의 작은 이름도 보게 된다. 무엇을 센 숫자인지, 그 이름이 말해주고 있었다.",
        ],
      },
      {
        title: "이름을 찾는 일 다음에",
        paragraphs: [
          "앞의 예에서 이름 찾기만 시키면 일은 간단해 보인다. 네 문장에 같은 글자가 있는지 확인한다. 그런데 ‘사람들이 권한 책을 보여달라’고 하는 순간 읽어야 할 것이 늘어난다.",
          "‘좋다고 들었다’와 ‘읽어보니 좋았다’도 같은 추천으로 받아들일까. 내게 맞지 않았지만 특정 독자에게는 권한다고 쓰면 어느 칸에 놓을까. 이런 문장들을 상상하면 제목을 찾는 것과 뜻을 정하는 일을 한꺼번에 끝낸 기분을 경계하게 된다.",
          "실제 사이트도 언급을 추천·중립·비판 등으로 분류한다고 설명한다. 여기에는 모델의 판단이 들어간다. 그 설명을 읽고 내가 확인한 것은 분류하는 단계가 있다는 사실이지, 모든 댓글이 옳게 분류됐다는 결과는 아니다.",
          "물론 책을 찾을 때마다 댓글 전부를 읽고 싶지는 않다. 모아놓은 목록 덕분에 처음 만나는 책이 생기고, 후보를 좁히는 수고도 던다. 나는 그 도움을 받으면서도 숫자 하나에 문장의 나머지를 다 맡기지는 않고 싶다.",
          "앞의 가상 목록을 만든다면 ‘4명이 언급, 1명이 추천’이라고 적겠다. 별점 모양 옆에 4만 놓지는 않겠다. 세지 않은 뜻이 모양 때문에 덧붙을 수 있으니까.",
          "한 사람이 같은 책을 여러 번 말한 경우도 따로 생각할 것이다. 문장이 몇 개인지와 말한 사람이 몇 명인지는 다르다. 어느 쪽이든 쓸모는 있지만, 숫자 아래에 같은 이름을 붙이기는 어렵다.",
        ],
      },
      {
        title: "왜 그 책을 꺼냈을까",
        paragraphs: [
          "Hacker Books는 책을 언급한 원래 댓글로 돌아갈 수 있게 해둔다. 목록에서 책을 골라낸 다음, 왜 그 책이 나왔는지 읽을 자리가 남아 있는 점이 좋다.",
          "내가 책을 고르는 가상의 장면으로 돌아가본다. 추천한 사람이 많으면 먼저 열어볼 수 있겠다. 그래도 지금 필요한 것이 입문서인지, 이미 아는 내용을 뒤집어볼 책인지에 따라 같은 댓글을 다르게 읽을 것이다.",
          "‘설명이 너무 빠르다’는 앞의 세 번째 문장은 입문자에게는 망설일 이유가 된다. 기초 설명을 반복하고 싶지 않은 독자라면, 바로 그 대목이 궁금할 수도 있다. 비판 표시 하나로 그 문장을 읽을 일이 끝나지는 않는다.",
          "그러니 이 작은 책장에서 얻고 싶은 것은 나 대신 좋아할 책을 확정해주는 도장보다, 처음 보는 책과 그 책을 두고 한 말이 가까이 놓인 모습이다.",
          "네 명이 말한 책을 연다. 그중 한 명이 권했다는 숫자를 보고, 이번에는 그 한 명의 문장을 펼친다.",
          "이 사람은 왜 이 책을 꺼냈을까.",
        ],
      },
    ],
  },
  en: {
    title: "Four mentions, one recommendation",
    summary:
      "Four fictional comments name the same imaginary book. Mentioning its title need not mean recommending it.",
    sources: [
      {
        label: "Hacker Books · Counting mentions and recommendations",
        href: "https://hackerbooks.org/about",
      },
      {
        label: "Hacker Books · Most recommended",
        href: "https://hackerbooks.org/recommended",
      },
    ],
    sections: [
      {
        title: "Four sentences with one title",
        paragraphs: [
          "Imagine a book called The Blue Ladder. Neither the book nor the comments below are real. I invented the title for a small counting example.",
          "The first person writes: “The Blue Ladder was a useful introduction. I recommend it.”",
          "The second says: “I haven’t read The Blue Ladder, but I’ve read another book by that author.”",
          "The third writes: “The Blue Ladder wasn’t for me. The explanations moved too quickly.”",
          "The fourth asks: “Was The Blue Ladder the title you mentioned earlier?”",
          "The title appears in all four sentences. Classifying these by hand, I would mark only the first as a recommendation. Include the question and the unread book, and the count can be correct while the account of what people meant is wrong.",
          "This example came to mind while reading about Hacker Books, which gathers books mentioned in comments. It separates people who mention a book from people who recommend it, with a distinct ranking by recommenders.",
          "The assembled covers catch my eye first. After reading the explanation, I also notice the small names beside the numbers. They tell me what was counted.",
        ],
      },
      {
        title: "After finding the name",
        paragraphs: [
          "Finding titles in my example looks straightforward: locate the same words in four sentences. Ask instead for books people recommend, and there is more to read.",
          "Does “I hear it’s good” count like “I read it and liked it”? What about a book someone disliked but recommends to a particular reader? Imagining those sentences makes me reluctant to treat locating a title as finishing the interpretation.",
          "The actual site describes classifying mentions as recommendations, neutral remarks, criticism and other cases, using a model. That establishes a classification step; it does not establish that every comment received the right label.",
          "I do not want to read every comment whenever I look for a book. A collected list can introduce unfamiliar titles and spare some searching. I would like that help without asking one number to carry everything the sentences say.",
          "For this fictional list, I would write “Mentioned by four people; recommended by one.” I would avoid placing a bare four beside a star. The symbol could lend the count a meaning it never measured.",
          "One person returning to the same book repeatedly presents another choice. A count of sentences and a count of people answer different questions. Both can be useful; I would hesitate to give them the same name.",
        ],
      },
      {
        title: "Why bring up that book?",
        paragraphs: [
          "Hacker Books links back to the original comments mentioning a book. I like having somewhere to read why a title appeared after finding it in the list.",
          "Return to an imagined moment of choosing a book. Many recommenders could make me open it first. Whether I need an introduction or a challenge to familiar ideas would still change how I read the comments.",
          "The third fictional commenter’s “explanations moved too quickly” might deter a beginner. Someone tired of repeated basics might become curious for that very reason. A critical label does not finish the work of reading the sentence.",
          "What I would want from this little shelf is an unfamiliar book close to what someone said about it, rather than a stamp deciding which book I will like.",
          "I open the book mentioned by four people. Seeing that one recommended it, I turn to that person’s sentence.",
          "Why did they bring up this book?",
        ],
      },
    ],
  },
};
