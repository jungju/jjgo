import type { SiteLocale, SitePageId } from "../site-spec";

export type CollectionId = "web" | "indie" | "comics" | "roblox" | "video";

export type Work = {
  id: number;
  category: string;
  collection: CollectionId;
  title: string;
  description: string;
  purpose: string;
  status: "live" | "archive";
  image: string;
  technologies: string[];
  roles: string[];
  update: string;
  url?: string;
  internalPage?: SitePageId;
  actionLabel: string;
};

type Collection = {
  id: CollectionId;
  index: string;
  title: string;
  description: string;
  emptyLabel?: string;
};

const works = [
  {
    id: 0,
    collection: "web",
    title: "Homi",
    status: "archive",
    image: "/a/versions/works/20260720/homi.jpg",
    content: {
      ko: {
        category: "웹사이트",
        description: "집에서 상시 사용하는 홈 페이스 앱",
        purpose: "집에서 상시 표시하도록 만든 홈 페이스 앱입니다.",
        technologies: ["Web", "JHub"],
        roles: ["기획", "개발", "운영"],
        update: "인증서 만료로 외부 주소는 공개하지 않고 보관 중입니다.",
        actionLabel: "상세 보기",
      },
      en: {
        category: "Website",
        description: "An always-on home face app.",
        purpose: "Built as an always-on home face app.",
        technologies: ["Web", "JHub"],
        roles: ["Strategy", "Engineering", "Operations"],
        update:
          "Archived without an external link because its certificate has expired.",
        actionLabel: "View details",
      },
    },
  },
  {
    id: 1,
    collection: "web",
    title: "GameLingo",
    status: "archive",
    image: "/a/versions/works/20260720/gamelingo.jpg",
    content: {
      ko: {
        category: "웹사이트",
        description: "게임 대사를 수집하고 연습하는 학습 앱",
        purpose: "게임 대사를 수집하고 연습할 수 있도록 만든 웹 앱입니다.",
        technologies: ["Web", "JHub"],
        roles: ["기획", "개발", "운영"],
        update: "인증서 만료로 외부 주소는 공개하지 않고 보관 중입니다.",
        actionLabel: "상세 보기",
      },
      en: {
        category: "Website",
        description: "A game-line collection and practice app.",
        purpose: "Built to collect and practice lines from games.",
        technologies: ["Web", "JHub"],
        roles: ["Strategy", "Engineering", "Operations"],
        update:
          "Archived without an external link because its certificate has expired.",
        actionLabel: "View details",
      },
    },
  },
  {
    id: 2,
    collection: "web",
    title: "English Meeting",
    status: "archive",
    image: "/a/versions/works/20260720/eng-meeting.jpg",
    content: {
      ko: {
        category: "웹사이트",
        description: "실용 영어 학습 앱",
        purpose: "실용 영어 학습을 위해 만든 웹 앱입니다.",
        technologies: ["Web", "JHub"],
        roles: ["기획", "개발", "운영"],
        update: "인증서 만료로 외부 주소는 공개하지 않고 보관 중입니다.",
        actionLabel: "상세 보기",
      },
      en: {
        category: "Website",
        description: "A practical English study app.",
        purpose: "Built for practical English study.",
        technologies: ["Web", "JHub"],
        roles: ["Strategy", "Engineering", "Operations"],
        update:
          "Archived without an external link because its certificate has expired.",
        actionLabel: "View details",
      },
    },
  },
  {
    id: 3,
    collection: "web",
    title: "okgo4",
    status: "live",
    image: "/a/versions/works/20260720/okgo4.jpg",
    url: "https://okgo4.jjgo.io",
    content: {
      ko: {
        category: "웹사이트",
        description:
          "사이트·게임·만화·쇼츠·키오스크·알림 서비스의 주문과 배포를 지원하는 쇼룸 중심 SaaS",
        purpose:
          "사이트, 게임, 만화, 쇼츠, 키오스크, 알림 서비스의 주문과 배포를 지원합니다.",
        technologies: ["Web", "SaaS"],
        roles: ["제품 기획", "개발", "운영"],
        update: "현재 공개 주소에서 운영 중입니다.",
        actionLabel: "사이트 방문",
      },
      en: {
        category: "Website",
        description:
          "A showroom-first SaaS for ordering and deploying sites, games, comics, shorts, kiosks, and notification services.",
        purpose:
          "Supports ordering and deploying sites, games, comics, shorts, kiosks, and notification services.",
        technologies: ["Web", "SaaS"],
        roles: ["Product strategy", "Engineering", "Operations"],
        update: "Currently available at its public address.",
        actionLabel: "Visit site",
      },
    },
  },
  {
    id: 4,
    collection: "comics",
    title: "Mytoon",
    status: "live",
    image: "/a/versions/works/20260720/mytoon.jpg",
    url: "https://mytoon.jjgo.io",
    content: {
      ko: {
        category: "만화",
        description:
          "개인 전용 전체이용가 웹툰 서가·리더·작가 작업실을 JHub Records DB로 저장하는 서비스",
        purpose:
          "웹툰 서가, 리더, 작가 작업실의 기록을 JHub Records DB에 저장합니다.",
        technologies: ["Web", "JHub Records"],
        roles: ["기획", "개발", "운영"],
        update: "현재 공개 주소에서 운영 중입니다.",
        actionLabel: "만화 보기",
      },
      en: {
        category: "Comics",
        description:
          "A private, all-ages webtoon library, reader, and creator studio backed by the JHub Records database.",
        purpose:
          "Stores the webtoon library, reader, and creator-studio records in the JHub Records database.",
        technologies: ["Web", "JHub Records"],
        roles: ["Strategy", "Engineering", "Operations"],
        update: "Currently available at its public address.",
        actionLabel: "View comics",
      },
    },
  },
  {
    id: 5,
    collection: "web",
    title: "AI Slop",
    status: "live",
    image: "/a/versions/works/20260720/wind-returning-place.jpg",
    url: "https://slop.jjgo.io",
    internalPage: "aiSlop",
    content: {
      ko: {
        category: "웹사이트",
        description: "AI가 만들고 자동으로 연재하는 만화와 영상 아카이브",
        purpose:
          "AI가 기획부터 제작과 게시까지 이어 가는 창작·자동화 파이프라인을 실제 연재 서비스로 운영합니다.",
        technologies: ["AI 콘텐츠 생성", "자동화 파이프라인", "정적 웹"],
        roles: ["기획", "개발", "운영"],
        update:
          "대표 만화 《바람이 돌아오는 곳》을 연재하며 제작 모델과 출처 정보를 함께 공개하고 있습니다.",
        actionLabel: "프로젝트 소개",
      },
      en: {
        category: "Website",
        description:
          "A comics and video archive created and published automatically by AI.",
        purpose:
          "Runs an AI-led creative and publishing pipeline as a real serialized content service, from planning through production and release.",
        technologies: [
          "AI content generation",
          "Publishing automation",
          "Static web",
        ],
        roles: ["Strategy", "Engineering", "Operations"],
        update:
          "The ongoing comic The Place Where the Wind Returns is published with available model and production provenance.",
        actionLabel: "View project",
      },
    },
  },
] as const;

const collections = [
  {
    id: "roblox",
    index: "01",
    content: {
      ko: {
        title: "Roblox",
        description:
          "게임에서 액세서리와 개발 도구까지, Roblox 안의 경험을 한 컬렉션으로 엮습니다.",
      },
      en: {
        title: "Roblox",
        description:
          "A collection spanning games, accessories, scripts, and development tools inside Roblox.",
      },
    },
  },
  {
    id: "video",
    index: "02",
    content: {
      ko: {
        title: "영상",
        description:
          "아이디어와 제작 과정을 짧고 선명한 영상 언어로 기록합니다.",
        emptyLabel: "영상 컬렉션을 준비하고 있습니다",
      },
      en: {
        title: "Video",
        description:
          "Ideas and production processes captured through concise visual storytelling.",
        emptyLabel: "The video collection is being prepared",
      },
    },
  },
  {
    id: "web",
    index: "03",
    content: {
      ko: {
        title: "웹 서비스·사이트",
        description:
          "생활의 작은 불편부터 운영의 복잡한 흐름까지 실제로 쓰이는 제품으로 만듭니다.",
      },
      en: {
        title: "Web Services & Sites",
        description:
          "Useful products for everyday friction and complex operational workflows.",
      },
    },
  },
  {
    id: "comics",
    index: "04",
    content: {
      ko: {
        title: "만화",
        description:
          "대표 작품은 이곳에서 소개하고, 전체 이야기는 독립된 만화 공간으로 이어집니다.",
      },
      en: {
        title: "Comics",
        description:
          "Featured stories here, with the complete collection continuing in a dedicated comics space.",
      },
    },
  },
  {
    id: "indie",
    index: "05",
    content: {
      ko: {
        title: "독립 게임",
        description:
          "작은 규칙과 강한 분위기로 빠르게 실험하고 완성한 플레이 경험입니다.",
        emptyLabel: "독립 게임 컬렉션을 준비하고 있습니다",
      },
      en: {
        title: "Indie Games",
        description:
          "Playable experiments built quickly around focused mechanics and distinct atmosphere.",
        emptyLabel: "The indie game collection is being prepared",
      },
    },
  },
] as const;

export function worksForLocale(locale: SiteLocale): Work[] {
  return works.map(({ content, ...work }) => ({
    ...work,
    ...content[locale],
    technologies: [...content[locale].technologies],
    roles: [...content[locale].roles],
  }));
}

export function collectionsForLocale(locale: SiteLocale): Collection[] {
  return collections.map(({ content, ...collection }) => ({
    ...collection,
    ...content[locale],
  }));
}
