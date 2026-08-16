import { ArrowRight, Code2, Gamepad2, Shirt, Wrench } from "lucide-react";
import { ForestBackground } from "../consulting/consulting-components";
import type { Locale } from "../language-toggle";
import { SiteHeader } from "../site-header";

const copy = {
  ko: {
    eyebrow: "ROBLOX",
    title: "서로 다른 두 게임,\nRoblox에서 만나는 플레이",
    summary: "서울의 수로를 따라 종이배를 띄우는 편안한 탐험과, 쏟아지는 폭탄 사이에서 끝까지 살아남는 생존 경쟁을 만들었습니다.",
    nav: "Roblox 페이지",
    gamesLink: "게임",
    areasLink: "만드는 영역",
    directionLink: "제작 방향",
    gamesEyebrow: "PLAY NOW",
    gamesTitle: "지금 Roblox에서 플레이할 수 있습니다",
    gamesBody: "공식 Roblox 페이지에 등록된 실제 게임 화면과 설명입니다.",
    playAction: "Roblox에서 플레이",
    games: [
      {
        title: "Paper Boat Exploration: Seoul Waterways Adventure",
        label: "종이배 서울 수로 탐험",
        description: "나만의 종이배를 띄우고 서울의 반짝이는 수로를 끝까지 탐험합니다. 바위와 개구리를 피하고, 하류로 갈수록 빨라지는 물살을 따라 좌우로 방향을 조절하세요. 직접 배를 운전하거나 강변을 달리고, 풍경 감상 모드에서 다리와 물고기, 새를 바라볼 수도 있습니다.",
        features: ["PC · 모바일 · 게임패드 지원", "전투와 순위 경쟁 없는 편안한 경험", "운전 · 함께 걷기 · 풍경 감상"],
        image: "/a/generated/roblox/paper-boat-seoul.png",
        icon: "/a/generated/roblox/paper-boat-seoul-icon.png",
        url: "https://www.roblox.com/ko/games/101526777002639/unnamed",
      },
      {
        title: "Bomb Rain 💣 You Won’t Last",
        label: "폭탄 비에서 끝까지 살아남기",
        description: "폭탄은 점점 더 빠르게 떨어지고 압박은 계속 커집니다. 그림자를 보고 낙하음을 들으며 끊임없이 움직이고, 공중 추가 점프로 마지막 한순간을 확보하세요. 최대 12명이 한 경기에 들어가며 마지막까지 단 한 명만 살아남습니다.",
        features: ["최대 12인의 생존 경쟁", "그림자 · 소리 · 공중 추가 점프 활용", "국가별 누적 점수를 기록하는 Hall of Nations"],
        image: "/a/generated/roblox/bomb-rain.png",
        icon: "/a/generated/roblox/bomb-rain-icon.png",
        url: "https://www.roblox.com/ko/games/138101004117090/Bomb-Rain-You-Won-t-Last",
      },
    ],
    areasEyebrow: "WHAT I BUILD",
    areasTitle: "Roblox 안에서 만드는 네 가지 영역",
    areasBody: "콘텐츠와 도구가 서로를 강화하도록 함께 설계합니다.",
    areas: [
      { title: "게임", body: "작은 규칙과 반복 플레이를 중심으로 빠르게 검증하는 Roblox 게임 경험입니다." },
      { title: "액세서리", body: "캐릭터와 세계의 분위기를 확장하는 아바타 아이템과 시각 자산입니다." },
      { title: "스크립트", body: "반복되는 게임 로직을 안정적으로 재사용할 수 있는 Lua 모듈과 시스템입니다." },
      { title: "개발 도구", body: "제작, 테스트, 배포의 번거로움을 줄여 콘텐츠에 집중하게 하는 도구입니다." },
    ],
    directionEyebrow: "BUILDING PRINCIPLES",
    directionTitle: "작게 플레이하고, 빠르게 배우고, 다시 확장합니다.",
    principles: [
      { index: "01", title: "플레이 우선", body: "아이디어보다 실제 플레이 감각을 먼저 확인합니다." },
      { index: "02", title: "재사용 가능한 구조", body: "한 작품의 코드가 다음 작품의 출발점이 되도록 만듭니다." },
      { index: "03", title: "운영까지 연결", body: "출시 이후의 관찰과 개선을 제작 과정에 포함합니다." },
    ],
    statusEyebrow: "CHOOSE YOUR PLAY",
    statusTitle: "오늘은 물살을 탈까요, 폭탄을 피할까요?",
    statusBody: "두 게임 모두 Roblox에서 바로 플레이할 수 있습니다.",
  },
  en: {
    eyebrow: "ROBLOX",
    title: "Two different games,\none Roblox playground",
    summary: "A calm paper-boat journey through Seoul’s waterways and a relentless survival match beneath a rain of bombs.",
    nav: "Roblox page",
    gamesLink: "Games",
    areasLink: "What I build",
    directionLink: "How I build",
    gamesEyebrow: "PLAY NOW",
    gamesTitle: "Playable now on Roblox",
    gamesBody: "Real game imagery and descriptions from the official Roblox experience pages.",
    playAction: "Play on Roblox",
    games: [
      {
        title: "Paper Boat Exploration: Seoul Waterways Adventure",
        label: "Explore Seoul by paper boat",
        description: "Launch your own paper boat and explore Seoul’s sparkling waterways to the end. Avoid rocks and frogs, steer through a current that accelerates downstream, drive the boat or run alongside it, and enjoy bridges, fish, and birds in the relaxing landscape-viewing mode.",
        features: ["PC, mobile, and gamepad support", "A relaxing, combat-free experience", "Drive · walk together · enjoy the scenery"],
        image: "/a/generated/roblox/paper-boat-seoul.png",
        icon: "/a/generated/roblox/paper-boat-seoul-icon.png",
        url: "https://www.roblox.com/ko/games/101526777002639/unnamed",
      },
      {
        title: "Bomb Rain 💣 You Won’t Last",
        label: "Outlast the bomb rain",
        description: "The bombs fall faster and the pressure keeps rising. Watch the shadows, listen for falling bombs, keep moving, and use your extra midair jump to steal one more second. Up to 12 players enter each match, but only one can stand at the end.",
        features: ["Survival matches for up to 12 players", "Shadows, sound, and an extra midair jump", "All-time country scores in the Hall of Nations"],
        image: "/a/generated/roblox/bomb-rain.png",
        icon: "/a/generated/roblox/bomb-rain-icon.png",
        url: "https://www.roblox.com/ko/games/138101004117090/Bomb-Rain-You-Won-t-Last",
      },
    ],
    areasEyebrow: "WHAT I BUILD",
    areasTitle: "Four connected areas inside Roblox",
    areasBody: "Content and tools are designed to make each other stronger.",
    areas: [
      { title: "Games", body: "Roblox experiences validated quickly around focused mechanics and repeat play." },
      { title: "Accessories", body: "Avatar items and visual assets that extend the character and atmosphere of a world." },
      { title: "Scripts", body: "Reusable Lua modules and systems for dependable game logic." },
      { title: "Developer tools", body: "Tools that reduce friction in creation, testing, and delivery." },
    ],
    directionEyebrow: "BUILDING PRINCIPLES",
    directionTitle: "Play small, learn quickly, then expand.",
    principles: [
      { index: "01", title: "Play first", body: "Validate the feel of play before investing deeply in the idea." },
      { index: "02", title: "Reusable foundations", body: "Let the code from one experience become the start of the next." },
      { index: "03", title: "Built to operate", body: "Include observation and iteration after launch in the creation process." },
    ],
    statusEyebrow: "CHOOSE YOUR PLAY",
    statusTitle: "Ride the current or dodge the bombs?",
    statusBody: "Both games are available to play on Roblox now.",
  },
} as const;

const areaIcons = [Gamepad2, Shirt, Code2, Wrench];

export function RobloxPage({ locale = "ko" }: { locale?: Locale }) {
  const text = copy[locale];

  return (
    <div className="jhub-web-app-root jhub-web-app-root--jjgo2" data-jhub-web-app="jjgo2" data-jhub-web-app-kind="static-content-site" lang={locale}>
      <main className="forest2-site forest2-site--method forest2-site--roblox" data-jhub-web-app="jjgo2" data-web-app-title="JJGo Roblox">
        <ForestBackground />
        <SiteHeader locale={locale} page="roblox" />
        <div className="forest2-content forest2-route-view">
          <article className="forest2-roblox-frame">
            <div className="forest2-roblox-shell">
              <nav className="forest2-roblox-subnav" aria-label={text.nav}>
                <a href="#games">{text.gamesLink}</a>
                <a href="#areas">{text.areasLink}</a>
                <a href="#direction">{text.directionLink}</a>
              </nav>

              <header className="forest2-roblox-hero">
                <div>
                  <p>{text.eyebrow}</p>
                  <h1>{text.title}</h1>
                  <span>{text.summary}</span>
                </div>
                <div className="forest2-roblox-hero-gallery" aria-label={text.gamesTitle}>
                  {text.games.map((game, index) => (
                    <a key={game.title} href={game.url} target="_blank" rel="noreferrer">
                      <img src={game.icon} alt="" width="512" height="512" />
                      <span>0{index + 1} · {game.label}</span>
                    </a>
                  ))}
                </div>
              </header>

              <section className="forest2-roblox-section forest2-roblox-games" id="games">
                <header>
                  <p>{text.gamesEyebrow}</p>
                  <h2>{text.gamesTitle}</h2>
                  <span>{text.gamesBody}</span>
                </header>
                <div className="forest2-roblox-game-list">
                  {text.games.map((game, index) => (
                    <article key={game.title}>
                      <div className="forest2-roblox-game-media">
                        <img className="forest2-roblox-game-scene" src={game.image} alt={locale === "ko" ? `${game.label} 게임 화면` : `${game.label} game scene`} width="768" height="432" />
                        <img className="forest2-roblox-game-icon" src={game.icon} alt="" width="512" height="512" />
                        <span>0{index + 1}</span>
                      </div>
                      <div className="forest2-roblox-game-copy">
                        <p>{game.label}</p>
                        <h3>{game.title}</h3>
                        <span>{game.description}</span>
                        <ul>
                          {game.features.map((feature) => <li key={feature}>{feature}</li>)}
                        </ul>
                        <a href={game.url} target="_blank" rel="noreferrer">{text.playAction}<ArrowRight size={18} aria-hidden="true" /></a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="forest2-roblox-section" id="areas">
                <header>
                  <p>{text.areasEyebrow}</p>
                  <h2>{text.areasTitle}</h2>
                  <span>{text.areasBody}</span>
                </header>
                <div className="forest2-roblox-area-grid">
                  {text.areas.map((area, index) => {
                    const Icon = areaIcons[index];
                    return (
                      <article key={area.title}>
                        <span><Icon size={25} aria-hidden="true" />0{index + 1}</span>
                        <h3>{area.title}</h3>
                        <p>{area.body}</p>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section className="forest2-roblox-section forest2-roblox-direction" id="direction">
                <header>
                  <p>{text.directionEyebrow}</p>
                  <h2>{text.directionTitle}</h2>
                </header>
                <ol>
                  {text.principles.map((principle) => (
                    <li key={principle.index}>
                      <span>{principle.index}</span>
                      <div><h3>{principle.title}</h3><p>{principle.body}</p></div>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="forest2-roblox-status" id="status">
                <div>
                  <p>{text.statusEyebrow}</p>
                  <h2>{text.statusTitle}</h2>
                  <span>{text.statusBody}</span>
                </div>
                <div className="forest2-roblox-actions">
                  {text.games.map((game, index) => (
                    <a key={game.title} href={game.url} target="_blank" rel="noreferrer">
                      {index === 0 ? "Paper Boat" : "Bomb Rain"}<ArrowRight size={18} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
