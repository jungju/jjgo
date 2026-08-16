import { ArrowRight } from "lucide-react";
import { ConsultingSubnav, ForestBackground, OriginalMethodHeadline, Topbar, consultingServices } from "./consulting-components";
import { consultingPath } from "../site-spec";
import { JsonLd, pageMetadata, serviceJsonLd } from "../seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/consulting",
  title: "AI·AX·플랫폼 엔지니어링 컨설팅 | 이정주 | JJGo",
  description: "16년 경력의 개발 리더 이정주가 AI Native 조직 전환, AX 서비스 제품화, Kubernetes 기반 플랫폼 엔지니어링을 실행 가능한 구조로 연결합니다.",
  image: "/og.png",
});

export default function ConsultingPage() {
  return (
    <>
      <JsonLd data={consultingServices.map((service) => serviceJsonLd({
        locale: "ko",
        path: consultingPath(service.slug),
        name: `${service.shortTitle} 컨설팅`,
        description: service.summary,
      }))} />
      <div className="jhub-web-app-root jhub-web-app-root--jjgo2" data-jhub-web-app="jjgo2" data-jhub-web-app-kind="static-content-site">
        <main className="forest2-site forest2-site--method forest2-site--consulting" data-jhub-web-app="jjgo2" data-web-app-title="JJGo">
          <ForestBackground />
          <Topbar locale="ko" />
          <div className="forest2-content forest2-route-view">
            <article className="forest2-method-frame">
              <div className="forest2-method-shell">
                <header className="forest2-method-hero" data-visual-id="consulting-hero">
                  <p className="forest2-method-eyebrow">CONSULTING</p>
                  <OriginalMethodHeadline locale="ko" />
                  <p className="forest2-method-lead">조직, 비즈니스, 기술 기반을 함께 살펴보고 AI 시대에 필요한 변화를 실제로 실행할 수 있는 구조로 연결합니다.</p>
                </header>

                <section className="forest2-consulting-offers" data-visual-id="consulting-services">
                  <ConsultingSubnav locale="ko" />

                  <div className="forest2-consulting-grid">
                    {consultingServices.map((service) => (
                      <a key={service.slug} href={consultingPath(service.slug)} className="forest2-consulting-card">
                        <div className="forest2-consulting-card-media" aria-hidden="true">
                          <img src={service.image} alt="" width="1200" height="800" loading="lazy" />
                          <div className="forest2-consulting-card-head">
                            <span>{service.number}</span>
                          </div>
                        </div>
                        <p>{service.english}</p>
                        <h3>{service.title}</h3>
                        <span>{service.summary}</span>
                        <ul aria-label={`${service.title} 핵심 주제`}>
                          {service.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                        </ul>
                        <strong>자세히 보기<ArrowRight size={18} aria-hidden="true" /></strong>
                      </a>
                    ))}
                  </div>
                </section>

                <section className="forest2-method-cta forest2-consulting-cta">
                  <p>START A CONVERSATION</p>
                  <h2>어디서부터 시작해야 할지<br />함께 정의할 수 있습니다.</h2>
                  <span>현재 상황과 고민을 기준으로 세 가지 컨설팅 중 가장 적합한 시작점과 범위를 제안합니다.</span>
                  <a href="mailto:leejungju.go@gmail.com">상담 문의하기<ArrowRight size={20} aria-hidden="true" /></a>
                </section>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
