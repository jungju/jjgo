import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { SiteLayout } from "../site-layout";
import { localizedSitePath, pagePath, type SiteLocale } from "../site-spec";
import { homeCopy } from "./home-data";

export function HomePage({ locale }: { locale: SiteLocale }) {
  const text = homeCopy[locale];
  const contactHref = `mailto:leejungju.go@gmail.com?subject=${encodeURIComponent(text.consultingSubject)}`;

  return (
    <SiteLayout locale={locale} page="home" className="forest2-site--home">
      <header className="home-hero" data-visual-id="hero">
        <p className="home-hero-eyebrow">{text.heroIntro}</p>
        <h1>{text.heroTitle}</h1>
        <p className="home-hero-summary">{text.heroBody}</p>
        <div className="home-hero-actions">
          <a className="home-contact-link" href={contactHref}>
            <Mail size={18} aria-hidden="true" />
            {text.contactAction}
          </a>
          <a className="home-outcomes-link" href="#home-capabilities">
            {text.heroAction}
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </header>
      <div className="forest2-home-expansion">
        <div className="forest2-home-expansion-shell">
          <section
            id="home-capabilities"
            aria-labelledby="home-capabilities-title"
          >
            <header className="forest2-home-expansion-head">
              <h2 id="home-capabilities-title">{text.capabilityTitle}</h2>
              <p>{text.capabilityBody}</p>
            </header>
            <div className="forest2-home-capability-grid">
              {text.capabilities.map((item) => (
                <article
                  key={item.title}
                  className="forest2-home-capability-card"
                >
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
          <section
            className="forest2-home-consulting-cta"
            aria-labelledby="home-consulting-title"
          >
            <div>
              <h2 id="home-consulting-title">{text.consultingTitle}</h2>
              <p>{text.consultingBody}</p>
            </div>
            <div className="home-consulting-actions">
              <a className="home-contact-link" href={contactHref}>
                <Mail size={18} aria-hidden="true" />
                {text.contactAction}
              </a>
              <a
                className="home-outcomes-link"
                href={localizedSitePath(locale, pagePath("consulting"))}
              >
                {text.consultingAction}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
