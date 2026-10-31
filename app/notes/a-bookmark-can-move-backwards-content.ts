import type { Note } from "./notes-data";

export const backwardBookmarkNote: Note = {
  page: "noteBackwardBookmark",
  category: "BOOKS & PRODUCT",
  date: "2026-11-01",
  sample: false,
  relatedPages: ["noteLastPage", "notePhotoSelection"],
  image: "/a/generated/notes/a-bookmark-can-move-backwards.webp",
  imageAlt: {
    ko: "서로 다른 위치에 초록색과 금색 리본을 끼운 빈 책, 옆에 놓인 전자책 단말기와 작은 종이 탭",
    en: "An open blank book with green and gold ribbon markers at different places, beside an e-reader and a small paper tab",
  },
  ko: {
    title: "책갈피가 뒤로 가도 잘 읽고 있다",
    summary:
      "9장까지 읽고 3장으로 돌아갔다면 다음에는 어디를 열어줘야 할까. 이어 읽기에서 남겨두고 싶은 선택을 생각했다.",
    sources: [
      {
        label: "BookOrbit · 프로젝트 소개",
        href: "https://github.com/bookorbit/bookorbit",
      },
      {
        label: "BookOrbit · KOReader 위치 동기화",
        href: "https://bookorbit.app/koreader",
      },
      {
        label: "BookOrbit · KOReader 플러그인 설정",
        href: "https://bookorbit.app/koreader-plugin",
      },
    ],
    sections: [
      {
        title: "9장까지 갔다가",
        paragraphs: [
          "소설을 9장까지 읽었다고 해보자. 그런데 어떤 인물이 다시 나왔는데 누구였는지 모르겠다. 3장으로 돌아가 처음 등장한 부분을 찾는다.",
          "그날 책을 덮은 곳은 3장이다.",
          "다음 날 다른 기기를 켰더니 9장을 열어준다. 많이 읽은 쪽을 기억해준 것은 고맙다. 그런데 오늘 찾던 사람은 아직 3장에 있다.",
          "BookOrbit의 소개를 읽다가 떠올린 가상의 장면이다. 이 도구는 자신의 서버에 책을 모으고 웹 리더와 전자책 기기 사이에서 독서 위치를 동기화하는 플랫폼이다. 기기를 바꿀 때마다 어디까지 읽었는지 찾지 않아도 된다는 약속이 반가웠다.",
          "다만 ‘어디까지’라는 말에 두 자리가 들어갈 수 있겠다. 가장 멀리 간 곳과, 마지막으로 책을 덮은 곳.",
          "책갈피가 뒤로 가면 읽기를 덜 한 것처럼 보일 수 있다. 앞부분을 다시 읽으며 인물을 겨우 떠올렸다면, 그때야 뒤의 이야기가 조금 더 이해됐을 수도 있는데.",
          "가장 큰 숫자를 남기는 방식으로 가상의 이어 읽기를 만든다면 이런 돌아감을 잃기 쉽겠다. 그렇다고 마지막 위치 하나만 남기면, 잠깐 앞부분을 찾아본 뒤 원래 읽던 곳으로 돌아가려는 사람은 또 자리를 찾게 된다.",
          "내가 원하는 편리함은 두 위치 중 하나를 잊어주는 일이 아닌 것 같다.",
        ],
      },
      {
        title: "다시 펼칠 자리를 고른다",
        paragraphs: [
          "여기서 BookOrbit이 큰 숫자만 고른다고 말하려는 것은 아니다. KOReader 동기화 문서는 책의 대표 진행 위치를 갱신 시각으로 정한다고 설명한다. 플러그인에는 앞뒤 위치 충돌을 어떻게 다룰지 정하는 설정도 있다.",
          "이미 선택이 필요한 문제로 다루고 있는 셈이다. 나는 그 설명에서 기능 목록보다 ‘뒤로’라는 방향이 눈에 들어왔다.",
          "앞의 가상 리더라면, ‘3장에서 이어 읽기’ 옆에 ‘전에 읽던 9장’도 남겨두고 싶다. 두 버튼에 무엇을 기억한 것인지 적혀 있으면, 어디를 열지 내가 고를 수 있겠다.",
          "물론 매번 물어보면 귀찮다. 대부분의 날에는 마지막 위치를 조용히 열어주면 좋겠다. 다만 다른 위치를 선택할 길이 가까이 있으면 한다. 한번 잘못 열린 책을 다시 뒤지는 수고가, 작은 선택지 하나보다 번거로울 때가 있다.",
          "위치를 정확히 옮기는 문제도 남는다. BookOrbit 문서는 다른 리더에서 온 위치를 KOReader로 복원할 때 정확한 줄 대신 가까운 곳에 도착할 수 있다고 적는다.",
          "그 정도 차이는 기꺼이 받아들일 수 있을 것 같다. 대신 그 자리가 대략 옮긴 위치라는 걸 알면 좋겠다. 줄 하나 어긋난 이유를 찾느라, 내가 어제 다른 데까지 읽었나 기억을 의심하지 않도록.",
          "이런 기능을 생각할 때 나는 자꾸 매끈한 장면부터 떠올린다. 지하철에서 읽던 책을 집에서 열었더니 바로 그 문장. 광고로 만들기에도 좋겠다.",
          "그런데 3장으로 돌아간 사람의 하루는 화면 전환이 잘 이어져도 조금 복잡하다. 앞으로 읽고 싶어서 앞을 넘긴 것이 아니라, 뒤로 돌아가야 다음을 읽을 수 있었던 날이다.",
          "독서량을 세는 칸과 다시 펼칠 자리를 정하는 칸에 같은 숫자를 넣으면 간단해진다. 그 간단함 때문에 다시 읽는 행동이 실수처럼 취급되지 않았으면 한다.",
          "어쩌면 책갈피가 두 개면 될 일이다. 원래 읽던 곳에는 리본 하나를 두고, 찾던 인물이 나오는 곳에는 손가락을 끼운다. 디지털 책에서도 그 손가락을 잠깐 기억해주면 좋겠다.",
          "9장까지 갔다는 것은 알고 있다.",
          "오늘은 3장을 열어주면 된다.",
        ],
      },
    ],
  },
  en: {
    title: "A bookmark can move backwards",
    summary:
      "After reaching chapter nine, you return to chapter three. Where should the next device open? A thought about the choices worth keeping in Continue reading.",
    sources: [
      {
        label: "BookOrbit · Project overview",
        href: "https://github.com/bookorbit/bookorbit",
      },
      {
        label: "BookOrbit · KOReader position sync",
        href: "https://bookorbit.app/koreader",
      },
      {
        label: "BookOrbit · KOReader plugin settings",
        href: "https://bookorbit.app/koreader-plugin",
      },
    ],
    sections: [
      {
        title: "After reaching chapter nine",
        paragraphs: [
          "Imagine reaching chapter nine of a novel when a character reappears. You cannot remember who they are. Back to chapter three, to find their first appearance.",
          "Chapter three is where you close the book that evening.",
          "Open another device the next day and it takes you to chapter nine. Remembering the furthest point is considerate. The person you were looking for is still in chapter three.",
          "This imagined scene came to mind while reading about BookOrbit, a self-hosted library platform that synchronizes reading positions between its web reader and e-readers. I like the promise of changing devices without searching for my place again.",
          "But “my place” could refer to two things: the furthest I reached, and where I last put the book down.",
          "A bookmark moving backwards can look like less reading. Yet returning to the beginning and finally remembering that character might be what makes the later story understandable.",
          "A fictional Continue reading feature that always retains the largest number could lose that return. Keep only the last position, however, and someone who briefly checked an earlier passage must find their original place again.",
          "The convenience I want probably does not involve forgetting one of those positions.",
        ],
      },
      {
        title: "Choosing where to reopen",
        paragraphs: [
          "This is not a claim that BookOrbit simply picks the larger number. Its KOReader documentation describes choosing the canonical progress source by update time. The plugin also offers settings for forward and backward position conflicts.",
          "The documentation already recognizes a choice. Among the features, the direction that caught my attention was backwards.",
          "For my imagined reader, I would put “Continue from chapter three” beside “Previously at chapter nine.” Name what each remembers, and I can choose which place to open.",
          "Asking every time would be tiresome. On most days, quietly opening the last position would be welcome. I would just like the alternative nearby. Searching again after the wrong place opens can be more work than a small choice.",
          "Transferring the position precisely is another question. BookOrbit explains that restoring a position from another reader into KOReader can land nearby rather than on the exact line.",
          "I could accept that small difference. Knowing the position was approximate would help: an unexplained shift might otherwise make me question how far I had actually read.",
          "When I imagine this feature, I keep starting with the seamless scene: open at home, find the sentence left on the train. It would make a good advertisement.",
          "The person returning to chapter three has had a less tidy reading day, even if the device transition is perfect. Going back was what made going forward possible.",
          "Using one number for a reading-total field and a resume-position field makes things simpler. I would rather that simplicity did not make rereading look like a mistake.",
          "Perhaps two bookmarks would do. Leave a ribbon at the original place and keep a finger in the passage where that character appears. I would like the digital book to remember the finger for a while too.",
          "I know I reached chapter nine.",
          "Today, open chapter three.",
        ],
      },
    ],
  },
};
