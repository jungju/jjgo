import {
  ArrowRight,
  Briefcase,
  Github,
  Layers,
  Linkedin,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteLayout } from "../site-layout";
import type { SiteLocale } from "../site-spec";
import { aboutCopy } from "./about-data";

const strengthIcons = [Briefcase, Layers, ShieldCheck, Users];

export function AboutPage({ locale }: { locale: SiteLocale }) {
  const text = aboutCopy[locale];

  return (
    <SiteLayout locale={locale} page="about" className="forest2-site--about">
      <article className="page-frame forest2-about-frame forest2-about-profile">
        <div className="page-shell forest2-about-shell">
          <header className="forest2-about-hero" data-visual-id="about-hero">
            <h1>{text.title}</h1>
            <div className="forest2-about-identity">
              {text.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </header>
          <section
            className="forest2-about-section"
            data-visual-id="about-strengths"
          >
            <p className="forest2-about-section-label">{text.strengthsLabel}</p>
            <div className="forest2-about-strength-grid">
              {text.strengths.map((item, index) => {
                const Icon = strengthIcons[index];
                return (
                  <article className="forest2-about-strength" key={item.title}>
                    <span>
                      <Icon size={23} aria-hidden="true" />
                    </span>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </article>
                );
              })}
            </div>
          </section>
          <section
            className="forest2-about-section"
            data-visual-id="about-evidence"
          >
            <p className="forest2-about-section-label">{text.evidenceLabel}</p>
            <dl className="forest2-about-evidence-grid">
              {text.metrics.map((metric) => (
                <div className="forest2-about-evidence" key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
            <p className="forest2-about-evidence-note">{text.metricsNote}</p>
          </section>
          <section
            className="forest2-about-section"
            data-visual-id="about-journey"
          >
            <p className="forest2-about-section-label">{text.journeyLabel}</p>
            <ol className="forest2-about-journey">
              {text.journey.map((step, index) => (
                <li key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                  {index < text.journey.length - 1 && (
                    <ArrowRight size={18} aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
            <p className="forest2-about-companies">{text.companies}</p>
          </section>
          <section className="forest2-about-section forest2-about-credentials">
            <p className="forest2-about-section-label">
              {text.credentials.eyebrow}
            </p>
            <h2>{text.credentials.title}</h2>
            <p>{text.credentials.body}</p>
            <div className="forest2-about-credential-grid">
              {text.credentials.items.map((item) => (
                <article key={item.title}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  {item.body && <p>{item.body}</p>}
                </article>
              ))}
            </div>
            <a
              className="forest2-about-credential-source"
              href="https://www.linkedin.com/in/jungjugo/"
              rel="me noreferrer"
              target="_blank"
            >
              {text.credentials.source}
            </a>
          </section>
          <section className="forest2-about-section forest2-about-verification">
            <p className="forest2-about-section-label">
              {text.verification.eyebrow}
            </p>
            <h2>{text.verification.title}</h2>
            <p>{text.verification.body}</p>
            <div className="forest2-about-verification-links">
              {text.verification.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  rel={
                    link.title === "LinkedIn" || link.title === "GitHub"
                      ? "me noreferrer"
                      : "noreferrer"
                  }
                  target="_blank"
                >
                  <strong>{link.title}</strong>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </section>
          <section className="forest2-about-next">
            <div>
              <p className="forest2-about-next-label">CONTACT</p>
              <h2>{text.contact.title}</h2>
              <p>{text.contact.body}</p>
            </div>
            <div className="forest2-about-actions">
              <a
                className="forest2-about-action forest2-about-action--primary"
                href="mailto:leejungju.go@gmail.com"
              >
                {text.contact.action}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div
              className="forest2-about-contact-links"
              aria-label={text.contact.label}
            >
              <a href="mailto:leejungju.go@gmail.com">
                <Mail size={18} aria-hidden="true" />
                leejungju.go@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jungjugo/"
                target="_blank"
                rel="me noreferrer"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/jungju"
                target="_blank"
                rel="me noreferrer"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
