import { ArrowRight } from "lucide-react";
import { ConsultingSubnav } from "./consulting-components";
import { DevelopmentStages } from "./development-stages";
import { consultingServices } from "./consulting-data";
import { consultingServicesEn } from "./consulting-data-en";
import { SiteLayout } from "../site-layout";
import {
  consultingPath,
  localizedSitePath,
  type SiteLocale,
} from "../site-spec";
import { JsonLd, serviceJsonLd } from "../seo";

const copy = {
  ko: {
    title: "AI Native 조직·AX/RAG·\n플랫폼 엔지니어링 컨설팅",
    consulting: "컨설팅",
    topics: "핵심 주제",
    more: "자세히 보기",
    cta: "상담 문의하기",
    lead: "현장 업무에서 출발해 평가 기준을 세우고, 조직·비즈니스·기술을 실행 가능한 운영 흐름으로 연결합니다.",
    ctaTitle: "현재 단계에 맞는 시작점을 함께 정합니다.",
    ctaBody:
      "목표와 제약을 기준으로 필요한 컨설팅 범위와 우선순위를 제안합니다.",
  },
  en: {
    title: "AI-Native Organization & AX/RAG\nPlatform Engineering Consulting",
    consulting: "Consulting",
    topics: "core topics",
    more: "Learn more",
    cta: "Send an email",
    lead: "Start with real work, define how outcomes will be evaluated, and connect organization, business, and technology into an operating flow.",
    ctaTitle: "Choose a starting point that fits the current stage.",
    ctaBody:
      "Based on your goals and constraints, I’ll propose a practical scope and priorities.",
  },
};

export function ConsultingOverview({ locale }: { locale: SiteLocale }) {
  const services = locale === "ko" ? consultingServices : consultingServicesEn;
  const text = copy[locale];
  return (
    <>
      <JsonLd
        data={services.map((service) =>
          serviceJsonLd({
            locale,
            path: consultingPath(service.slug),
            name: `${service.shortTitle} ${text.consulting}`,
            description: service.summary,
          }),
        )}
      />
      <SiteLayout
        locale={locale}
        page="consulting"
        className="forest2-site--method forest2-site--consulting"
      >
        <article className="page-frame forest2-method-frame">
          <div className="page-shell forest2-method-shell">
            <header
              className="forest2-method-hero"
              data-visual-id="consulting-hero"
            >
              <p className="forest2-method-eyebrow">CONSULTING</p>
              <h1>{text.title}</h1>
              <p className="forest2-method-lead">{text.lead}</p>
            </header>

            <section
              className="forest2-consulting-offers"
              data-visual-id="consulting-services"
            >
              <ConsultingSubnav locale={locale} services={services} />
              <div className="forest2-consulting-grid">
                {services.map((service) => (
                  <a
                    key={service.slug}
                    href={localizedSitePath(
                      locale,
                      consultingPath(service.slug),
                    )}
                    className="forest2-consulting-card"
                  >
                    <div
                      className="forest2-consulting-card-media"
                      aria-hidden="true"
                    >
                      <img
                        src={service.image}
                        alt=""
                        width="1200"
                        height="800"
                        loading="lazy"
                      />
                      <div className="forest2-consulting-card-head">
                        <span>{service.number}</span>
                      </div>
                    </div>
                    <p>{service.english}</p>
                    <h3>{service.title}</h3>
                    <span>{service.summary}</span>
                    <ul aria-label={`${service.title} ${text.topics}`}>
                      {service.keywords.map((keyword) => (
                        <li key={keyword}>{keyword}</li>
                      ))}
                    </ul>
                    <strong>
                      {text.more}
                      <ArrowRight size={18} aria-hidden="true" />
                    </strong>
                  </a>
                ))}
              </div>
            </section>

            <DevelopmentStages locale={locale} />

            <section className="forest2-method-cta forest2-consulting-cta">
              <p>START A CONVERSATION</p>
              <h2>{text.ctaTitle}</h2>
              <span>{text.ctaBody}</span>
              <a href="mailto:leejungju.go@gmail.com">
                {text.cta}
                <ArrowRight size={20} aria-hidden="true" />
              </a>
            </section>
          </div>
        </article>
      </SiteLayout>
    </>
  );
}
