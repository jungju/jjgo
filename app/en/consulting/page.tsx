import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ConsultingSubnav, ForestBackground, OriginalMethodHeadline, Topbar } from "../../consulting/consulting-components";
import { consultingServicesEn } from "../../consulting/consulting-data-en";

export const metadata: Metadata = {
  title: "Consulting",
  description: "AI-native organization, AI transformation, and platform engineering for executable change.",
};

export default function EnglishConsultingPage() {
  return (
    <div className="jhub-web-app-root jhub-web-app-root--jjgo2" data-jhub-web-app="jjgo2" data-jhub-web-app-kind="static-content-site" lang="en">
      <main className="forest2-site forest2-site--method forest2-site--consulting" data-jhub-web-app="jjgo2" data-web-app-title="JJGo">
        <ForestBackground />
        <Topbar locale="en" />
        <div className="forest2-content forest2-route-view">
          <article className="forest2-method-frame">
            <div className="forest2-method-shell">
              <header className="forest2-method-hero" data-visual-id="consulting-hero">
                <p className="forest2-method-eyebrow">CONSULTING</p>
                <OriginalMethodHeadline locale="en" />
                <p className="forest2-method-lead">Connect organization, business, and technology into practical systems that can deliver meaningful change in the AI era.</p>
              </header>

              <section className="forest2-consulting-offers" data-visual-id="consulting-services">
                <ConsultingSubnav locale="en" services={consultingServicesEn} />
                <div className="forest2-consulting-grid">
                  {consultingServicesEn.map((service) => (
                    <a key={service.slug} href={`/en/consulting/${service.slug}`} className="forest2-consulting-card">
                      <div className="forest2-consulting-card-media" aria-hidden="true">
                        <img src={service.image} alt="" width="1200" height="800" loading="lazy" />
                        <div className="forest2-consulting-card-head"><span>{service.number}</span></div>
                      </div>
                      <p>{service.english}</p>
                      <h3>{service.title}</h3>
                      <span>{service.summary}</span>
                      <ul aria-label={`${service.title} core topics`}>
                        {service.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                      </ul>
                      <strong>Learn more<ArrowRight size={18} aria-hidden="true" /></strong>
                    </a>
                  ))}
                </div>
              </section>

              <section className="forest2-method-cta forest2-consulting-cta">
                <p>START A CONVERSATION</p>
                <h2>Start where change matters most.</h2>
                <span>Share your current situation and I’ll recommend the strongest starting point across the three areas.</span>
                <a href="mailto:leejungju.go@gmail.com">Send an email<ArrowRight size={20} aria-hidden="true" /></a>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
