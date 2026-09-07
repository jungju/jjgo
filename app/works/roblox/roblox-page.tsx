import { robloxCopy } from "./roblox-data";
import { ArrowRight, Code2, Gamepad2, Shirt, Wrench } from "lucide-react";
import { SiteLayout } from "../../site-layout";
import type { SiteLocale } from "../../site-spec";

const areaIcons = [Gamepad2, Shirt, Code2, Wrench];

export function RobloxPage({ locale = "ko" }: { locale?: SiteLocale }) {
  const text = robloxCopy[locale];

  return (
    <SiteLayout
      locale={locale}
      page="roblox"
      className="forest2-site--method forest2-site--roblox"
    >
      <article className="page-frame forest2-roblox-frame">
        <div className="page-shell forest2-roblox-shell">
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
            <div
              className="forest2-roblox-hero-gallery"
              aria-label={text.gamesTitle}
            >
              {text.games.map((game, index) => (
                <a
                  key={game.title}
                  href={game.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={game.icon} alt="" width="512" height="512" />
                  <span>
                    0{index + 1} · {game.label}
                  </span>
                </a>
              ))}
            </div>
          </header>

          <section
            className="forest2-roblox-section forest2-roblox-games"
            id="games"
          >
            <header>
              <p>{text.gamesEyebrow}</p>
              <h2>{text.gamesTitle}</h2>
              <span>{text.gamesBody}</span>
            </header>
            <div className="forest2-roblox-game-list">
              {text.games.map((game, index) => (
                <article key={game.title}>
                  <div className="forest2-roblox-game-media">
                    <img
                      className="forest2-roblox-game-scene"
                      src={game.image}
                      alt={
                        locale === "ko"
                          ? `${game.label} 게임 화면`
                          : `${game.label} game scene`
                      }
                      width="768"
                      height="432"
                    />
                    <img
                      className="forest2-roblox-game-icon"
                      src={game.icon}
                      alt=""
                      width="512"
                      height="512"
                    />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="forest2-roblox-game-copy">
                    <p>{game.label}</p>
                    <h3>{game.title}</h3>
                    <span>{game.description}</span>
                    <ul>
                      {game.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <a href={game.url} target="_blank" rel="noreferrer">
                      {text.playAction}
                      <ArrowRight size={18} aria-hidden="true" />
                    </a>
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
                    <span>
                      <Icon size={25} aria-hidden="true" />0{index + 1}
                    </span>
                    <h3>{area.title}</h3>
                    <p>{area.body}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            className="forest2-roblox-section forest2-roblox-direction"
            id="direction"
          >
            <header>
              <p>{text.directionEyebrow}</p>
              <h2>{text.directionTitle}</h2>
            </header>
            <ol>
              {text.principles.map((principle) => (
                <li key={principle.index}>
                  <span>{principle.index}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </div>
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
                <a
                  key={game.title}
                  href={game.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {index === 0 ? "Paper Boat" : "Bomb Rain"}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
