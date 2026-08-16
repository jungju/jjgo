"use client";

import { useEffect, useState } from "react";
import sourceCards from "../data/works.json";
import { localizedPath, type Locale } from "../language-toggle";
import { SiteHeader } from "../site-header";
import { pagePath } from "../site-spec";

type SourceCard = {
  index: number;
  text: string;
  image: string | null;
};

type CollectionId = "web" | "indie" | "comics" | "roblox" | "video";

type Work = {
  id: number;
  category: string;
  collection: CollectionId;
  title: string;
  description: string;
  purpose: string;
  status: "운영 중" | "개발 중" | "보관";
  image: string;
  technologies: string[];
  roles: string[];
  update: string;
  url?: string;
  actionLabel: string;
};

type Collection = {
  id: CollectionId;
  index: string;
  title: string;
  description: string;
  subcategories: string[];
  image: string;
  emptyLabel?: string;
};

const knownWorksKo: Record<number, Partial<Work>> = {
  0: {
    description: "집 안에 상시 띄워두는 가족용 홈 페이스 서비스",
    purpose: "가족이 자주 확인하는 정보와 기능을 한 화면에 모아 생활 속 디지털 접점을 단순하게 만들었습니다.",
    technologies: ["Web", "JHub", "Responsive UI"],
    roles: ["기획", "제품 설계", "개발", "운영"],
    update: "실사용 환경에 맞춰 정보 구조와 상시 표시 경험을 고도화하고 있습니다.",
    url: "https://homi.jjgo.io",
    actionLabel: "사이트 방문",
  },
  1: {
    description: "게임 대사를 모으고 반복 연습하는 언어 학습 서비스",
    purpose: "좋아하는 게임의 실제 문장을 학습 재료로 바꿔, 수집부터 복습까지 자연스럽게 이어지도록 설계했습니다.",
    technologies: ["Web", "JHub", "Learning UX"],
    roles: ["기획", "UX 설계", "개발", "운영"],
    update: "대사 수집과 반복 학습 흐름을 중심으로 사용 경험을 개선하고 있습니다.",
    url: "https://gamelingo.jjgo.io",
    actionLabel: "사이트 방문",
  },
  2: {
    description: "실전 회의를 준비하는 영어 학습 서비스",
    purpose: "업무에서 바로 써야 하는 표현을 상황별로 준비하고 반복할 수 있도록 학습 과정을 제품화했습니다.",
    technologies: ["Web", "JHub", "Learning UX"],
    roles: ["기획", "콘텐츠 설계", "개발"],
    update: "학습 기록과 실전 활용 사이의 연결을 계속 다듬고 있습니다.",
    url: "https://study.jjgo.io",
    actionLabel: "사이트 방문",
  },
  3: {
    description: "사이트·게임·만화·쇼츠의 제작과 배포를 연결하는 SaaS",
    purpose: "아이디어가 결과물이 되기까지 필요한 주문, 제작, 배포 과정을 하나의 운영 흐름으로 묶었습니다.",
    technologies: ["SaaS", "Automation", "JHub"],
    roles: ["제품 전략", "시스템 설계", "개발", "운영"],
    update: "다양한 제작 유형을 한 파이프라인에서 다루는 기능을 확장하고 있습니다.",
    url: "https://okgo4.jjgo.io",
    actionLabel: "사이트 방문",
  },
  4: {
    description: "웹툰 서가와 리더, 작가 작업실을 한곳에 담은 서비스",
    purpose: "작품을 만들고 보관하고 읽는 경험을 하나의 개인 창작 공간 안에서 이어지게 했습니다.",
    technologies: ["Web", "JHub Records", "Reader UX"],
    roles: ["기획", "콘텐츠 구조", "개발", "운영"],
    update: "대표 만화와 창작 기록을 모으는 독립 허브로 운영하고 있습니다.",
    url: "https://mytoon.jjgo.io",
    actionLabel: "만화 보기",
  },
};

const knownWorksEn: Record<number, Partial<Work>> = {
  0: {
    description: "An always-on home dashboard designed for everyday family use.",
    purpose: "Bring frequently used information and actions into one calm surface, reducing friction in the family’s daily digital routine.",
    technologies: ["Web", "JHub", "Responsive UI"], roles: ["Strategy", "Product design", "Engineering", "Operations"],
    update: "The information architecture and ambient display experience continue to evolve around real household use.",
    url: "https://homi.jjgo.io", actionLabel: "Visit site",
  },
  1: {
    description: "A language-learning service for collecting and repeatedly practicing dialogue from games.",
    purpose: "Turn memorable lines from games into learning material and connect collection, practice, and review in one flow.",
    technologies: ["Web", "JHub", "Learning UX"], roles: ["Strategy", "UX design", "Engineering", "Operations"],
    update: "The dialogue collection and spaced practice experience is being refined continuously.",
    url: "https://gamelingo.jjgo.io", actionLabel: "Visit site",
  },
  2: {
    description: "A practical English-learning product for preparing for real meetings.",
    purpose: "Productize the preparation and repetition of expressions people need to use immediately at work.",
    technologies: ["Web", "JHub", "Learning UX"], roles: ["Strategy", "Content design", "Engineering"],
    update: "The connection between learning history and real-world application continues to improve.",
    url: "https://study.jjgo.io", actionLabel: "Visit site",
  },
  3: {
    description: "A SaaS product connecting the creation and delivery of sites, games, comics, and short-form video.",
    purpose: "Bring ordering, production, and deployment into one operating flow from idea to published result.",
    technologies: ["SaaS", "Automation", "JHub"], roles: ["Product strategy", "System design", "Engineering", "Operations"],
    update: "The production pipeline continues to expand across more types of creative output.",
    url: "https://okgo4.jjgo.io", actionLabel: "Visit site",
  },
  4: {
    description: "A personal space combining a webtoon library, reader, and creator studio.",
    purpose: "Connect creating, keeping, and reading stories inside one independent creative space.",
    technologies: ["Web", "JHub Records", "Reader UX"], roles: ["Strategy", "Content architecture", "Engineering", "Operations"],
    update: "It operates as an independent hub for featured comics and creative records.",
    url: "https://mytoon.jjgo.io", actionLabel: "View comics",
  },
  5: {
    title: "Godot Factory Development Dashboard",
  },
};

const collectionsKo: Collection[] = [
  {
    id: "roblox",
    index: "01",
    title: "Roblox",
    description: "게임에서 액세서리와 개발 도구까지, Roblox 안의 경험을 한 컬렉션으로 엮습니다.",
    subcategories: ["게임", "액세서리", "스크립트", "개발 도구"],
    image: "/a/generated/home-services-card.png",
    emptyLabel: "첫 Roblox 작품을 연결하고 있습니다",
  },
  {
    id: "video",
    index: "02",
    title: "영상",
    description: "아이디어와 제작 과정을 짧고 선명한 영상 언어로 기록합니다.",
    subcategories: ["쇼츠", "소개 영상", "메이킹"],
    image: "/a/versions/works/20260720/one-voice-live.jpg",
    emptyLabel: "영상 컬렉션을 준비하고 있습니다",
  },
  {
    id: "web",
    index: "03",
    title: "웹 서비스·사이트",
    description: "생활의 작은 불편부터 운영의 복잡한 흐름까지 실제로 쓰이는 제품으로 만듭니다.",
    subcategories: ["웹 서비스", "사이트", "앱", "SaaS"],
    image: "/a/versions/works/20260720/okgo4.jpg",
  },
  {
    id: "comics",
    index: "04",
    title: "만화",
    description: "대표 작품은 이곳에서 소개하고, 전체 이야기는 독립된 만화 공간으로 이어집니다.",
    subcategories: ["웹툰", "작가 작업실", "만화 서가"],
    image: "/a/versions/works/20260720/mytoon.jpg",
  },
  {
    id: "indie",
    index: "05",
    title: "독립 게임",
    description: "작은 규칙과 강한 분위기로 빠르게 실험하고 완성한 플레이 경험입니다.",
    subcategories: ["2D 게임", "아케이드", "퍼즐", "프로토타입"],
    image: "/a/generated/services/service-play.png",
  },
];

const collectionsEn: Collection[] = [
  { id: "roblox", index: "01", title: "Roblox", description: "A collection spanning games, accessories, scripts, and development tools inside Roblox.", subcategories: ["Games", "Accessories", "Scripts", "Developer tools"], image: "/a/generated/home-services-card.png", emptyLabel: "The first Roblox work is being connected" },
  { id: "video", index: "02", title: "Video", description: "Ideas and production processes captured through concise visual storytelling.", subcategories: ["Shorts", "Introductions", "Making-of"], image: "/a/versions/works/20260720/one-voice-live.jpg", emptyLabel: "The video collection is being prepared" },
  { id: "web", index: "03", title: "Web Services & Sites", description: "Useful products for everyday friction and complex operational workflows.", subcategories: ["Web services", "Sites", "Apps", "SaaS"], image: "/a/versions/works/20260720/okgo4.jpg" },
  { id: "comics", index: "04", title: "Comics", description: "Featured stories here, with the complete collection continuing in a dedicated comics space.", subcategories: ["Webtoons", "Creator studio", "Library"], image: "/a/versions/works/20260720/mytoon.jpg" },
  { id: "indie", index: "05", title: "Indie Games", description: "Playable experiments built quickly around focused mechanics and distinct atmosphere.", subcategories: ["2D games", "Arcade", "Puzzle", "Prototype"], image: "/a/generated/services/service-play.png" },
];

const worksCopy = {
  ko: {
    nav: { home: "홈", works: "작품", consulting: "컨설팅", about: "소개", label: "JJGo 페이지", homeLabel: "JJGo 홈" },
    heroTitle: <>무엇을 만드는지<br />작품으로 보여드립니다</>, heroBody: "생활을 돕는 웹 서비스부터 작은 게임과 이야기까지, 아이디어를 실제로 쓰고 즐길 수 있는 경험으로 완성합니다.",
    featuredTitle: "지금 이어가는 작업", featuredBody: "현재 집중하는 제품과 최신 작업", collectionsTitle: "만드는 방식으로 나누었습니다", collectionsBody: "관심 있는 컬렉션부터 살펴보세요",
    workCount: "작품", comicsBody: "모든 만화와 창작 기록은 전용 공간에서 이어집니다", comicsAction: "만화 사이트 가기", emptyBody: "완성된 작품과 실제 연결 주소가 준비되면 이 컬렉션에서 가장 먼저 소개합니다.", more: "더 보기",
    close: "작품 상세 닫기", purpose: "제작 목적", build: "기술과 역할", now: "현재 상태와 업데이트", related: "함께 볼 작품", alt: "대표 화면",
    status: { "운영 중": "운영 중", "개발 중": "개발 중", "보관": "보관" },
  },
  en: {
    nav: { home: "Home", works: "Works", consulting: "Consulting", about: "About", label: "JJGo pages", homeLabel: "JJGo home" },
    heroTitle: <>See what I build<br />through the work itself</>, heroBody: "From useful web services to small games and stories, I turn ideas into experiences people can use and enjoy.",
    featuredTitle: "Work in progress", featuredBody: "Current focus and recent work", collectionsTitle: "Organized by how I build", collectionsBody: "Start with the collection that interests you",
    workCount: "works", comicsBody: "The complete comics library and creative archive continue in a dedicated space.", comicsAction: "Visit comics", emptyBody: "Completed work will appear here as soon as its public experience is ready.", more: "Show more",
    close: "Close work details", purpose: "Purpose", build: "Technology & role", now: "Status & updates", related: "Related work", alt: "project preview",
    status: { "운영 중": "Live", "개발 중": "In development", "보관": "Archived" },
  },
} as const;

function imagePath(source: string | null) {
  if (!source || source.includes("/api/jhub/")) return "/a/generated/services/service-play.png";
  try {
    return new URL(source).pathname;
  } catch {
    return source;
  }
}

function collectionFor(category: string, title: string): CollectionId {
  if (["마이툰", "바람이 돌아오는 곳"].includes(title)) return "comics";
  if (category === "게임") return "indie";
  if (["영상", "쇼츠"].includes(category)) return "video";
  if (/roblox|로블록스/i.test(title)) return "roblox";
  return "web";
}

function buildWorks(locale: Locale): Work[] {
  const knownWorks = locale === "ko" ? knownWorksKo : knownWorksEn;
  const categoryEn: Record<string, string> = { "웹사이트": "Website", "앱": "App", "게임": "Game", "만화": "Comics", "영상": "Video", "쇼츠": "Shorts" };

  return (sourceCards as SourceCard[]).map((card) => {
  const lines = card.text.split("\n").map((line) => line.trim()).filter(Boolean);
  const category = lines[0] ?? "작품";
  const title = lines[1] ?? "제목 없음";
  const rawDescription = lines[2] ?? "만드는 과정에서 발견한 가능성을 실제 경험으로 구현한 작업입니다.";
  const englishDescription = /[가-힣]/.test(rawDescription)
    ? "A practical experiment turned into a working digital experience."
    : rawDescription;
  const collection = collectionFor(category, title);
  const isGame = collection === "indie";
  const isComic = collection === "comics";
  const base: Work = {
    id: card.index,
    category: locale === "en" ? (isComic ? "Comics" : categoryEn[category] ?? category) : (isComic ? "만화" : category),
    collection,
    title,
    description: locale === "en" ? englishDescription : rawDescription,
    purpose: locale === "en" ? englishDescription : rawDescription,
    status: /배포 필요|개발 중/.test(card.text) ? "개발 중" : "운영 중",
    image: imagePath(card.image),
    technologies: isGame ? ["Godot", "Web Export", "Game Design"] : ["Web", "Responsive UI", "JHub"],
    roles: locale === "en" ? (isGame ? ["Game design", "Art direction", "Engineering"] : ["Strategy", "UX design", "Engineering"]) : (isGame ? ["게임 기획", "아트 디렉션", "개발"] : ["기획", "UX 설계", "개발"]),
    update: locale === "en" ? (isGame ? "A game experiment completed as a directly playable browser experience." : "The functionality and interface continue to evolve through real usage scenarios.") : (isGame ? "브라우저에서 바로 플레이할 수 있는 형태로 완성한 게임 실험입니다." : "사용 시나리오를 검증하며 기능과 인터페이스를 지속적으로 다듬고 있습니다."),
    actionLabel: locale === "en" ? (isGame ? "Play" : isComic ? "View comics" : "Visit site") : (isGame ? "플레이" : isComic ? "만화 보기" : "사이트 보기"),
  };
  return { ...base, ...knownWorks[card.index] };
  });
}

const worksByLocale = { ko: buildWorks("ko"), en: buildWorks("en") };

function ArrowRight({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function Background() {
  return (
    <>
      <picture className="forest2-bg-picture">
        <source media="(max-width: 900px)" srcSet="/a/generated/backgrounds/home-mobile-bg.png" />
        <source media="(max-width: 1120px)" srcSet="/a/generated/backgrounds/home-tablet-bg.png" />
        <img className="forest2-bg-image" src="/a/generated/backgrounds/home-desktop-bg.png" alt="" />
      </picture>
      <div className="forest2-bg-wash" aria-hidden="true" />
      <canvas className="forest2-atmosphere-canvas" data-visual-id="threejs-atmosphere" aria-hidden="true" width="1280" height="720" />
    </>
  );
}

function WorkStatus({ status, locale }: { status: Work["status"]; locale: Locale }) {
  return <span className={`forest2-works-status forest2-works-status--${status === "운영 중" ? "live" : status === "개발 중" ? "building" : "archive"}`}>{worksCopy[locale].status[status]}</span>;
}

export function WorksClient({ locale = "ko" }: { locale?: Locale }) {
  const [activeCollection, setActiveCollection] = useState<CollectionId>("web");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Work | null>(null);

  const copy = worksCopy[locale];
  const collections = locale === "ko" ? collectionsKo : collectionsEn;
  const works = worksByLocale[locale];
  const featuredWorks = [0, 1, 3].map((id) => works.find((work) => work.id === id)).filter((work): work is Work => Boolean(work));
  const collectionCounts = Object.fromEntries(collections.map((collection) => [collection.id, works.filter((work) => work.collection === collection.id).length])) as Record<CollectionId, number>;
  const active = collections.find((collection) => collection.id === activeCollection) ?? collections[0];
  const collectionWorks = works.filter((work) => work.collection === activeCollection);
  const visibleWorks = showAll ? collectionWorks : collectionWorks.slice(0, 6);
  const relatedWorks = selected ? works.filter((work) => work.collection === selected.collection && work.id !== selected.id).slice(0, 3) : [];

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  function chooseCollection(id: CollectionId) {
    setActiveCollection(id);
    setShowAll(false);
    window.setTimeout(() => document.querySelector("#works-collection-list")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }

  return (
    <div className="jhub-web-app-root jhub-web-app-root--jjgo2" data-jhub-web-app="jjgo2" data-jhub-web-app-kind="static-content-site" lang={locale}>
      <main className="forest2-site forest2-site--home2 forest2-site--works-hub" data-jhub-web-app="jjgo2" data-web-app-title="JJGo">
        <Background />
        <SiteHeader locale={locale} page="works" />
        <div className="forest2-content forest2-route-view">
          <section className="forest2-home2-frame forest2-works-frame">
            <div className="forest2-home2-shell forest2-works-shell">
              <header className="forest2-works-hero" data-visual-id="works-intro">
                <p>WORKS &amp; EXPERIMENTS</p>
                <h1>{copy.heroTitle}</h1>
                <span>{copy.heroBody}</span>
              </header>

              <section className="forest2-works-featured" aria-labelledby="featured-title">
                <header className="forest2-works-section-head">
                  <div>
                    <p>NOW BUILDING</p>
                    <h2 id="featured-title">{copy.featuredTitle}</h2>
                  </div>
                  <span>{copy.featuredBody}</span>
                </header>
                <div className="forest2-works-featured-grid">
                  {featuredWorks.map((work, index) => (
                    <button key={work.id} className={`forest2-works-featured-card${index === 0 ? " forest2-works-featured-card--lead" : ""}`} type="button" onClick={() => setSelected(work)} aria-haspopup="dialog">
                      <div className="forest2-works-featured-media">
                        <img src={work.image} alt={`${work.title} ${copy.alt}`} loading="eager" />
                      </div>
                      <div className="forest2-works-featured-copy">
                        <div className="forest2-works-card-meta"><span>{index === 0 ? "CURRENT FOCUS" : "FEATURED"}</span><WorkStatus status={work.status} locale={locale} /></div>
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
                        <span className="forest2-works-card-action">{work.actionLabel}<ArrowRight /></span>
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              <section className="forest2-works-collections" aria-labelledby="collections-title">
                <header className="forest2-works-section-head">
                  <div>
                    <p>COLLECTIONS</p>
                    <h2 id="collections-title">{copy.collectionsTitle}</h2>
                  </div>
                  <span>{copy.collectionsBody}</span>
                </header>
                <div className="forest2-works-collection-grid">
                  {collections.map((collection) => {
                    const count = collectionCounts[collection.id];
                    if (collection.id === "roblox") {
                      return (
                        <a key={collection.id} className="forest2-works-collection-card forest2-works-collection-card--roblox" href={localizedPath(locale, pagePath("roblox"))}>
                          <img src={collection.image} alt="" loading="lazy" />
                          <span className="forest2-works-collection-shade" />
                          <span className="forest2-works-collection-index">{collection.index}</span>
                          <span className="forest2-works-collection-copy">
                            <span className="forest2-works-collection-count">{locale === "ko" ? "전용 페이지" : "DEDICATED PAGE"}</span>
                            <strong>{collection.title}</strong>
                            <span>{collection.description}</span>
                            <em>{collection.subcategories.join(" · ")}</em>
                          </span>
                        </a>
                      );
                    }
                    return (
                      <button key={collection.id} className={`forest2-works-collection-card forest2-works-collection-card--${collection.id}`} type="button" onClick={() => chooseCollection(collection.id)} aria-pressed={activeCollection === collection.id}>
                        <img src={collection.image} alt="" loading="lazy" />
                        <span className="forest2-works-collection-shade" />
                        <span className="forest2-works-collection-index">{collection.index}</span>
                        <span className="forest2-works-collection-copy">
                          <span className="forest2-works-collection-count">{count > 0 ? `${count} WORKS` : "COMING SOON"}</span>
                          <strong>{collection.title}</strong>
                          <span>{collection.description}</span>
                          <em>{collection.subcategories.join(" · ")}</em>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="forest2-works-list" id="works-collection-list" aria-labelledby="works-list-title">
                <header className="forest2-works-list-head">
                  <div>
                    <p>SELECTED COLLECTION</p>
                    <h2 id="works-list-title">{active.title}</h2>
                    <span>{active.description}</span>
                  </div>
                  <div className="forest2-works-list-summary">
                    <strong>{String(collectionCounts[active.id]).padStart(2, "0")}</strong>
                    <span>{copy.workCount}</span>
                  </div>
                </header>

                {activeCollection === "comics" && (
                  <div className="forest2-works-comics-link">
                    <span>{copy.comicsBody}</span>
                    <a href="https://mytoon.jjgo.io" target="_blank" rel="noreferrer">{copy.comicsAction}<ArrowRight /></a>
                  </div>
                )}

                {visibleWorks.length > 0 ? (
                  <div className="forest2-works-grid" data-visual-id="works-gallery">
                    {visibleWorks.map((work, index) => (
                      <button key={work.id} className="forest2-works-card" type="button" onClick={() => setSelected(work)} aria-haspopup="dialog">
                        <div className="forest2-works-card-media">
                          <img src={work.image} alt={`${work.title} ${copy.alt}`} loading={index < 3 ? "eager" : "lazy"} />
                          <span>{work.category}</span>
                        </div>
                        <div className="forest2-works-card-body">
                          <h3>{work.title}</h3>
                          <p>{work.description}</p>
                          <div><WorkStatus status={work.status} locale={locale} /><span className="forest2-works-card-action">{work.actionLabel}<ArrowRight /></span></div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="forest2-works-empty">
                    <span>{active.index}</span>
                    <h3>{active.emptyLabel}</h3>
                    <p>{copy.emptyBody}</p>
                  </div>
                )}

                {!showAll && collectionWorks.length > 6 && (
                  <button className="forest2-works-more" type="button" onClick={() => setShowAll(true)}>
                    {copy.more} <span>{collectionWorks.length - 6}</span><ArrowRight />
                  </button>
                )}
              </section>
            </div>
          </section>
        </div>
      </main>

      {selected && (
        <div className="forest2-work-preview-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelected(null); }}>
          <section className="forest2-work-preview forest2-work-preview--detail" role="dialog" aria-modal="true" aria-labelledby="work-preview-title">
            <button className="forest2-work-preview-close" aria-label={copy.close} type="button" onClick={() => setSelected(null)}><CloseIcon /></button>
            <div className="forest2-work-preview-media"><img src={selected.image} alt={`${selected.title} ${copy.alt}`} /></div>
            <div className="forest2-work-preview-content">
              <div className="forest2-work-preview-meta"><span>{selected.category}</span><WorkStatus status={selected.status} locale={locale} /></div>
              <h2 id="work-preview-title">{selected.title}</h2>
              <p className="forest2-work-preview-copy">{selected.description}</p>

              <div className="forest2-work-detail-grid">
                <section>
                  <span>WHY</span>
                  <h3>{copy.purpose}</h3>
                  <p>{selected.purpose}</p>
                </section>
                <section>
                  <span>BUILD</span>
                  <h3>{copy.build}</h3>
                  <ul>{selected.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
                  <p>{selected.roles.join(" · ")}</p>
                </section>
                <section className="forest2-work-detail-update">
                  <span>NOW</span>
                  <h3>{copy.now}</h3>
                  <p>{selected.update}</p>
                </section>
              </div>

              {selected.url && <a className="forest2-work-primary-action" href={selected.url} target="_blank" rel="noreferrer">{selected.actionLabel}<ArrowRight /></a>}

              {relatedWorks.length > 0 && (
                <section className="forest2-work-related" aria-labelledby="related-title">
                  <div><span>RELATED WORKS</span><h3 id="related-title">{copy.related}</h3></div>
                  <div>{relatedWorks.map((work) => <button key={work.id} type="button" onClick={() => setSelected(work)}><img src={work.image} alt="" /><span><strong>{work.title}</strong><em>{work.category}</em></span><ArrowRight /></button>)}</div>
                </section>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
