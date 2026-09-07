import { ArrowLeft, ArrowRight } from "lucide-react";
import { localizedSitePath, type SiteLocale } from "../site-spec";
import { SiteLayout } from "../site-layout";
import { consultingServices, type ConsultingService } from "./consulting-data";
import {
  consultingPageBySlug,
  consultingPath,
  type ConsultingSlug,
} from "../site-spec";

export function ConsultingSubnav({
  active,
  locale = "ko",
  services = consultingServices,
}: {
  active?: ConsultingSlug;
  locale?: SiteLocale;
  services?: ConsultingService[];
}) {
  return (
    <nav
      className="forest2-consulting-subnav"
      aria-label={locale === "ko" ? "컨설팅 분야" : "Consulting areas"}
    >
      {services.map((service) => (
        <a
          key={service.slug}
          aria-current={active === service.slug ? "page" : undefined}
          href={localizedSitePath(locale, consultingPath(service.slug))}
        >
          <span>{service.number}</span>
          {service.shortTitle}
        </a>
      ))}
    </nav>
  );
}

export function ConsultingDetail({
  service,
  locale = "ko",
  services = consultingServices,
}: {
  service: ConsultingService;
  locale?: SiteLocale;
  services?: ConsultingService[];
}) {
  const ui =
    locale === "ko"
      ? {
          back: "컨설팅 전체 보기",
          topics: "핵심 주제",
          contact: "상담 문의",
          outcomesLink: "결과 보기",
          expertise: "어디까지 함께하는가",
          outcomes: "무엇을 함께 만드는가",
          situations: "언제 필요한가",
          process: "어떻게 진행하는가",
          note: "상황에 따라 범위와 기간을 조정합니다.",
          ctaTitle: (
            <>
              정답을 제시하기보다
              <br />
              함께 실행할 구조를 만듭니다.
            </>
          ),
          ctaBody:
            "현재 상황과 해결하고 싶은 문제를 알려주시면 가장 적합한 시작점을 함께 찾겠습니다.",
          cta: "상담 문의하기",
        }
      : {
          back: "View all consulting",
          topics: "Core topics",
          contact: "Start a conversation",
          outcomesLink: "See outcomes",
          expertise: "How I can help",
          outcomes: "What we build together",
          situations: "When to start",
          process: "How we work",
          note: "Scope and timeline are adjusted to your context.",
          ctaTitle: (
            <>
              More than an answer,
              <br />
              build a system your team can run.
            </>
          ),
          ctaBody:
            "Share your current situation and the problem you want to solve. We’ll identify the strongest place to begin.",
          cta: "Send an email",
        };

  return (
    <SiteLayout
      locale={locale}
      page={consultingPageBySlug[service.slug]}
      className="forest2-site--method forest2-site--consulting"
      identity={{
        label: `Consulting · ${service.shortTitle}`,
        href: consultingPath(service.slug),
      }}
    >
      <article
        className={`page-frame forest2-method-frame forest2-consulting-detail-frame forest2-consulting-detail-frame--${service.slug}`}
      >
        <div className="page-shell forest2-method-shell">
          <a
            className="forest2-consulting-back"
            href={localizedSitePath(locale, "/consulting")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            {ui.back}
          </a>
          <ConsultingSubnav
            active={service.slug}
            locale={locale}
            services={services}
          />

          <header className="forest2-consulting-detail-hero">
            <div className="forest2-consulting-detail-copy">
              <p>{service.english}</p>
              <h1>{service.detailTitle}</h1>
              <span>{service.detailSummary}</span>
              <ul aria-label={ui.topics}>
                {service.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
              <div className="forest2-consulting-hero-actions">
                <a href="mailto:leejungju.go@gmail.com">
                  {ui.contact}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#outcomes">{ui.outcomesLink}</a>
              </div>
            </div>
            <figure
              className="forest2-consulting-detail-visual"
              aria-hidden="true"
            >
              <img src={service.image} alt="" width="1200" height="800" />
            </figure>
          </header>

          <section className="forest2-consulting-proof" id="evidence">
            <div className="forest2-consulting-proof-copy">
              <p>WHY JJGO</p>
              <h2>{service.proofTitle}</h2>
              <span>{service.proofBody}</span>
            </div>
            <div>
              <dl className="forest2-consulting-metrics">
                {service.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.value}</dt>
                    <dd>
                      <strong>{metric.label}</strong>
                      <span>{metric.detail}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="forest2-consulting-metric-note">
                {service.metricsNote}
              </p>
            </div>
          </section>

          <section className="forest2-consulting-detail-section" id="expertise">
            <header>
              <p>EXPERTISE</p>
              <h2>{ui.expertise}</h2>
            </header>
            <div className="forest2-consulting-expertise">
              {service.expertise.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="forest2-consulting-detail-section" id="outcomes">
            <header>
              <p>WHAT YOU GET</p>
              <h2>{ui.outcomes}</h2>
            </header>
            <div className="forest2-consulting-outcomes">
              {service.outcomes.map((outcome) => (
                <article key={outcome.title}>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="forest2-consulting-detail-section forest2-consulting-situations"
            id="situations"
          >
            <header>
              <p>WHEN TO START</p>
              <h2>{ui.situations}</h2>
            </header>
            <ol>
              {service.situations.map((situation, index) => (
                <li key={situation}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{situation}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="forest2-consulting-detail-section" id="process">
            <header>
              <p>PROCESS</p>
              <h2>{ui.process}</h2>
              <span className="forest2-consulting-process-note">{ui.note}</span>
            </header>
            <ol className="forest2-consulting-process">
              {service.process.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <em>{step.period}</em>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="forest2-method-cta forest2-consulting-cta">
            <p>START A CONVERSATION</p>
            <h2>{ui.ctaTitle}</h2>
            <span>{ui.ctaBody}</span>
            <a href="mailto:leejungju.go@gmail.com">
              {ui.cta}
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
