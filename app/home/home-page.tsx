import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "../site-layout";
import { localizedSitePath, pagePath, type SiteLocale } from "../site-spec";
import { homeCopy } from "./home-data";

export function HomePage({ locale }: { locale: SiteLocale }) {
  const text = homeCopy[locale];
  const korean = locale === "ko";

  return (
    <SiteLayout locale={locale} page="home" className="forest2-site--home">
      <header className="home-hero" data-visual-id="hero">
        <p>{korean ? "안녕하세요. 이정주입니다." : "Hello. I’m Jungju Lee."}</p>
        <h1>
          {korean
            ? "AI 제품과 플랫폼을\n설계하고 운영합니다."
            : "AI products and platforms,\ndesigned to work and last."}
        </h1>
        <a href="#home-capabilities">
          {korean ? "하는 일 살펴보기" : "Explore what I do"}
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </header>
      <section
        className="forest2-home-expansion"
        aria-labelledby="home-capabilities-title"
      >
        <div className="forest2-home-expansion-shell">
          <section
            className="forest2-home-expansion-section forest2-home-capabilities"
            id="home-capabilities"
          >
            <header className="forest2-home-expansion-head">
              <div>
                <p>{text.capabilityEyebrow}</p>
                <h2 id="home-capabilities-title">{text.capabilityTitle}</h2>
              </div>
              <span>{text.capabilityBody}</span>
            </header>
            <div className="forest2-home-capability-grid">
              {text.capabilities.map((item) => (
                <a
                  key={item.number}
                  className="forest2-home-capability-card"
                  href={localizedSitePath(locale, item.href)}
                >
                  <span className="forest2-home-capability-number">
                    {item.number}
                  </span>
                  <div className="forest2-home-capability-media">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width="960"
                      height="640"
                      loading="lazy"
                    />
                  </div>
                  <div className="forest2-home-capability-copy">
                    <p>{item.eyebrow}</p>
                    <h3>{item.title}</h3>
                    <span>{item.body}</span>
                    <ul>
                      {item.strengths.map((strength) => (
                        <li key={strength}>{strength}</li>
                      ))}
                    </ul>
                    <strong>
                      {item.action}
                      <ArrowRight size={18} aria-hidden="true" />
                    </strong>
                  </div>
                </a>
              ))}
            </div>
          </section>
          <section
            className="forest2-home-expansion-section forest2-home-selected"
            aria-labelledby="home-selected-title"
          >
            <header className="forest2-home-expansion-head">
              <div>
                <p>{text.worksEyebrow}</p>
                <h2 id="home-selected-title">{text.worksTitle}</h2>
              </div>
              <span>{text.worksBody}</span>
            </header>
            <div className="forest2-home-work-grid">
              {text.works.map((work) => (
                <article key={work.title} className="forest2-home-work-card">
                  <div className="forest2-home-work-media">
                    <img
                      src={work.image}
                      alt={work.alt}
                      width="960"
                      height="540"
                      loading="lazy"
                    />
                  </div>
                  <div className="forest2-home-work-copy">
                    <p>{work.eyebrow}</p>
                    <h3>{work.title}</h3>
                    <span>{work.body}</span>
                    <div className="forest2-home-work-actions">
                      {work.internalHref && (
                        <a href={localizedSitePath(locale, work.internalHref)}>
                          {work.internalAction}
                          <ArrowRight size={18} aria-hidden="true" />
                        </a>
                      )}
                      <a
                        href={work.externalHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {work.externalAction}
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section
            className="forest2-home-expansion-section forest2-home-roblox"
            aria-labelledby="home-roblox-title"
          >
            <div className="forest2-home-roblox-copy">
              <p>{text.robloxEyebrow}</p>
              <h2 id="home-roblox-title">{text.robloxTitle}</h2>
              <span>{text.robloxBody}</span>
              <ul>
                {text.robloxTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={localizedSitePath(locale, pagePath("roblox"))}>
                {text.robloxAction}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="forest2-home-roblox-gallery">
              <figure>
                <img
                  src="/a/generated/roblox/paper-boat-seoul.png"
                  alt={text.robloxImageAltOne}
                  width="768"
                  height="432"
                  loading="lazy"
                />
                <figcaption>Paper Boat Exploration</figcaption>
              </figure>
              <figure>
                <img
                  src="/a/generated/roblox/bomb-rain.png"
                  alt={text.robloxImageAltTwo}
                  width="768"
                  height="432"
                  loading="lazy"
                />
                <figcaption>Bomb Rain</figcaption>
              </figure>
            </div>
          </section>
          <div className="forest2-home-all-works">
            <a href={localizedSitePath(locale, pagePath("works"))}>
              {text.allWorks}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
