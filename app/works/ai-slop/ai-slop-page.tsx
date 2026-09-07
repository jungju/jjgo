import { aiSlopCopy } from "./ai-slop-data";
import { SiteLayout } from "../../site-layout";
import type { SiteLocale } from "../../site-spec";

const AI_SLOP_URL = "https://slop.jjgo.io";
const GITHUB_URL = "https://github.com/jungju/slop";
const LATEST_EPISODE_URL = `${AI_SLOP_URL}/comics/wind-returning-place/ep-029/`;
const SERIES_URL = `${AI_SLOP_URL}/series/wind-returning-place/`;
const LATEST_COVER = `${AI_SLOP_URL}/media/comics/wind-returning-place/ep-029/page-01.webp`;

export function AiSlopPage({ locale = "ko" }: { locale?: SiteLocale }) {
  const text = aiSlopCopy[locale];

  return (
    <SiteLayout
      locale={locale}
      page="aiSlop"
      className="forest2-site--method forest2-site--ai-slop"
    >
      <article className="page-frame forest2-roblox-frame">
        <div className="page-shell forest2-roblox-shell">
          <nav className="forest2-roblox-subnav" aria-label={text.nav}>
            <a href="#project">{text.projectLink}</a>
            <a href="#process">{text.processLink}</a>
            <a href="#series">{text.seriesLink}</a>
          </nav>

          <header className="forest2-ai-slop-hero">
            <div className="forest2-ai-slop-hero-copy">
              <p>{text.eyebrow}</p>
              <h1>{text.title}</h1>
              <span>{text.summary}</span>
              <div className="forest2-ai-slop-actions">
                <a href={AI_SLOP_URL} target="_blank" rel="noreferrer">
                  {text.visit}
                  <span aria-hidden="true">↗</span>
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  {text.github}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <a
              className="forest2-ai-slop-cover"
              href={LATEST_EPISODE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={text.latest}
            >
              <img src={LATEST_COVER} alt="" width="1080" height="1280" />
              <span>
                <em>{text.coverLabel}</em>
                <strong>{text.coverTitle}</strong>
              </span>
            </a>
          </header>

          <dl
            className="forest2-ai-slop-metrics"
            aria-label={
              locale === "ko"
                ? "AI Slop 공개 현황"
                : "AI Slop publishing status"
            }
          >
            {text.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>

          <section
            className="forest2-roblox-section forest2-ai-slop-project"
            id="project"
          >
            <header>
              <p>{text.projectEyebrow}</p>
              <h2>{text.projectTitle}</h2>
              <span>{text.projectBody}</span>
            </header>
            <div className="forest2-ai-slop-point-grid">
              {text.projectPoints.map((point, index) => (
                <article key={point.title}>
                  <span>0{index + 1}</span>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="forest2-roblox-section" id="process">
            <header>
              <p>{text.processEyebrow}</p>
              <h2>{text.processTitle}</h2>
              <span>{text.processBody}</span>
            </header>
            <div className="forest2-roblox-area-grid forest2-ai-slop-process-grid">
              {text.process.map((step) => (
                <article key={step.index}>
                  <span>{step.index}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="forest2-roblox-section forest2-ai-slop-series"
            id="series"
          >
            <div className="forest2-ai-slop-series-media">
              <img
                src="/a/versions/works/20260720/wind-returning-place.jpg"
                alt={
                  locale === "ko"
                    ? "바람이 돌아오는 곳 웹사이트 화면"
                    : "The Place Where the Wind Returns website"
                }
                width="960"
                height="540"
                loading="lazy"
              />
            </div>
            <div className="forest2-ai-slop-series-copy">
              <p>{text.seriesEyebrow}</p>
              <h2>{text.seriesTitle}</h2>
              <span>{text.seriesBody}</span>
              <div className="forest2-ai-slop-actions">
                <a href={LATEST_EPISODE_URL} target="_blank" rel="noreferrer">
                  {text.latest}
                  <span aria-hidden="true">↗</span>
                </a>
                <a href={SERIES_URL} target="_blank" rel="noreferrer">
                  {text.allEpisodes}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          <section
            className="forest2-roblox-section forest2-roblox-direction"
            id="principles"
          >
            <header>
              <p>{text.principlesEyebrow}</p>
              <h2>{text.principlesTitle}</h2>
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

          <section className="forest2-roblox-status forest2-ai-slop-status">
            <div>
              <p>{text.statusEyebrow}</p>
              <h2>{text.statusTitle}</h2>
              <span>{text.statusBody}</span>
            </div>
            <div className="forest2-roblox-actions">
              <a href={AI_SLOP_URL} target="_blank" rel="noreferrer">
                {text.visit}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
