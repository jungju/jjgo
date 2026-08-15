import { ArrowLeft, ArrowRight } from "lucide-react";
import { LanguageToggle, localizedPath, type Locale } from "../language-toggle";

export type ConsultingSlug = "ai-native" | "ax" | "platform-engineering";

export type ConsultingService = {
  slug: ConsultingSlug;
  number: string;
  english: string;
  title: string;
  shortTitle: string;
  summary: string;
  detailTitle: string;
  detailSummary: string;
  image: string;
  keywords: string[];
  proofTitle: string;
  proofBody: string;
  metrics: { value: string; label: string; detail: string }[];
  expertise: { title: string; body: string }[];
  situations: string[];
  outcomes: { title: string; body: string }[];
  process: { period: string; title: string; body: string }[];
};

export const consultingServices: ConsultingService[] = [
  {
    slug: "ai-native",
    number: "01",
    english: "AI NATIVE ORGANIZATION",
    title: "AI Native 조직 만들기",
    shortTitle: "AI Native 조직",
    summary: "AI를 일부 구성원의 도구가 아니라 조직 전체의 일하는 방식과 제품 개발 구조로 정착시킵니다.",
    detailTitle: "문제를 푸는 조직",
    detailSummary: "AI로 문제를 푸는 조직을 만들어갑니다.",
    image: "/a/generated/consulting/ai-native-honeybees-v3.webp",
    keywords: ["조직 구조", "업무 방식", "AI 활용 체계"],
    proofTitle: "개발 경험을 조직의 실행 체계로 바꿉니다.",
    proofBody: "도구 교육에 머물지 않습니다. 제품 개발, 의사결정, 코드 리뷰, 테스트, 지식 공유까지 AI가 실제 업무 흐름에 들어오도록 전략·기술·문화를 하나의 운영 모델로 연결합니다.",
    metrics: [
      { value: "16년", label: "제품 개발 경험", detail: "Daum·Kakao·NCSOFT부터 AI 제품 조직까지" },
      { value: "6단계", label: "경험의 확장", detail: "웹·API·클라우드·DevOps·MLOps·AI Native" },
      { value: "4개 축", label: "전환 설계", detail: "전략·업무·기술·문화의 동시 변화" },
      { value: "1개 팀", label: "파일럿 시작", detail: "작게 검증하고 조직 전체로 확산" },
    ],
    expertise: [
      { title: "AI Operating Model", body: "사람과 AI의 역할, 의사결정 권한, 검토 책임을 정의하고 조직이 반복해서 사용할 운영 원칙을 설계합니다." },
      { title: "AI Workflow Design", body: "기획·개발·리뷰·테스트·문서화에서 효과가 큰 작업을 골라 프롬프트, 에이전트, 도구 체계를 업무 흐름에 연결합니다." },
      { title: "Governance & Quality", body: "보안, 데이터 경계, 결과 검증, 추적 가능성, 휴먼 인 더 루프를 포함해 속도와 안전을 함께 관리합니다." },
      { title: "Adoption & Capability", body: "리더와 실무자의 역량 기준, 코칭, 커뮤니티, 성과 지표를 설계해 일회성 도입이 아닌 조직 학습으로 정착시킵니다." },
    ],
    situations: [
      "구성원마다 AI 활용 수준이 다르고 좋은 사례가 개인의 노하우에 머무는 조직",
      "도구는 도입했지만 의사결정, 검토 책임, 품질 기준이 없어 실제 성과로 이어지지 않는 조직",
      "AI 시대에 맞게 역할, 협업 구조, 제품 개발 프로세스를 다시 설계하려는 조직",
    ],
    outcomes: [
      { title: "AI 운영 모델", body: "조직의 목표와 위험 수준에 맞춘 활용 원칙, 역할과 책임, 승인·검토 체계를 하나의 운영 모델로 정리합니다." },
      { title: "핵심 업무 플레이북", body: "효과가 큰 업무를 선정해 재사용 가능한 프롬프트, 에이전트 흐름, 품질 체크리스트와 측정 지표를 만듭니다." },
      { title: "확산 로드맵", body: "파일럿의 학습을 표준, 교육, 커뮤니티, 리더십 운영으로 연결하는 90일 단위의 실행 계획을 수립합니다." },
    ],
    process: [
      { period: "1–2주", title: "진단", body: "인터뷰와 업무 관찰로 AI 활용 수준, 반복 작업, 품질·보안 제약을 진단합니다." },
      { period: "2주", title: "설계", body: "목표 운영 모델, 우선 적용 업무, 책임 구조와 성공 지표를 정의합니다." },
      { period: "4–6주", title: "파일럿", body: "한 팀의 실제 제품 개발 흐름에서 새로운 방식과 도구 체계를 검증합니다." },
      { period: "90일", title: "확산", body: "검증 결과를 표준, 교육, 커뮤니티와 리더십 운영 리듬으로 확장합니다." },
    ],
  },
  {
    slug: "ax",
    number: "02",
    english: "AI TRANSFORMATION",
    title: "AX",
    shortTitle: "AX",
    summary: "비즈니스와 고객 경험을 AI 관점에서 다시 보고, 실행 가능한 서비스와 업무 변화로 연결합니다.",
    detailTitle: "AI로 바꾸는 비즈니스",
    detailSummary: "가치 있는 기회를 찾아 실제 서비스와 업무 변화로 연결합니다.",
    image: "/a/generated/consulting/ax-dragonfly-v3.webp",
    keywords: ["문제 발굴", "서비스 기획", "PoC와 로드맵"],
    proofTitle: "아이디어를 운영되는 제품으로 연결합니다.",
    proofBody: "기술 가능성만 검토하지 않습니다. 고객 문제, 비즈니스 가치, 데이터와 운영 제약을 함께 보고 가장 효과적인 전환 지점을 찾습니다. 기획에서 PoC, 제품화와 운영까지 직접 경험한 관점으로 실행 가능한 결정을 만듭니다.",
    metrics: [
      { value: "8개+", label: "도메인 경험", detail: "의료·금융·게임·포털·인프라·보안 등" },
      { value: "20개+", label: "제품·플랫폼", detail: "설계부터 개발·배포·운영까지 연결" },
      { value: "3개 관점", label: "기회 평가", detail: "고객 가치·사업 효과·기술 실행 가능성" },
      { value: "1개 PoC", label: "검증 시작점", detail: "핵심 가설부터 작동하는 증거로 확인" },
    ],
    expertise: [
      { title: "Opportunity Portfolio", body: "고객 여정과 업무 흐름에서 AI 기회를 발굴하고 가치, 실현 가능성, 위험도를 기준으로 투자 우선순위를 만듭니다." },
      { title: "Service & Workflow", body: "AI와 사람이 협업하는 사용자 경험, 예외 처리, 운영 프로세스와 책임 구조를 서비스 청사진으로 구체화합니다." },
      { title: "Data & AI Fit", body: "필요 데이터, 모델·에이전트 구성, 품질 기준, 보안·규제 제약을 검토해 아이디어의 현실성을 빠르게 판단합니다." },
      { title: "PoC to Product", body: "데모를 만드는 데서 끝내지 않고 KPI, 비용 구조, 운영 요건, 제품화 백로그와 단계별 투자 근거까지 설계합니다." },
    ],
    situations: [
      "AI 아이디어는 많지만 고객 가치와 사업 효과를 기준으로 우선순위를 정하지 못한 조직",
      "PoC와 데모는 반복했지만 실제 제품, 운영 프로세스, 매출·비용 변화로 이어지지 않는 조직",
      "데이터·보안·규제 제약을 포함한 작은 검증으로 투자와 확산의 근거를 만들고 싶은 조직",
    ],
    outcomes: [
      { title: "AI 기회 포트폴리오", body: "전환 후보를 고객 가치, 사업 효과, 데이터 준비도, 위험과 비용으로 평가해 단기·중기 투자 지도를 만듭니다." },
      { title: "서비스 청사진과 PoC", body: "핵심 사용자 여정, 사람과 AI의 협업, 예외 처리까지 설계하고 작동하는 프로토타입으로 가설을 검증합니다." },
      { title: "비즈니스 케이스", body: "KPI, 기대 효과, 비용 구조, 운영 요건과 제품화 백로그를 묶어 경영진과 실무자가 공유할 로드맵을 만듭니다." },
    ],
    process: [
      { period: "1–2주", title: "발견", body: "고객과 현장 인터뷰, 여정·업무 분석으로 문제, 데이터, 제약 조건을 구조화합니다." },
      { period: "1주", title: "선정", body: "가치·실행 가능성·위험 매트릭스로 가장 근거가 강한 전환 과제를 선택합니다." },
      { period: "4–6주", title: "검증", body: "서비스 프로토타입과 PoC로 사용자 가치, 품질, 운영 비용 가설을 측정합니다." },
      { period: "2주", title: "전환", body: "KPI와 거버넌스, 제품화 백로그, 투자 순서를 포함한 실행 로드맵을 수립합니다." },
    ],
  },
  {
    slug: "platform-engineering",
    number: "03",
    english: "PLATFORM ENGINEERING",
    title: "플랫폼 엔지니어링",
    shortTitle: "플랫폼 엔지니어링",
    summary: "개발자가 인프라의 복잡성보다 제품 가치에 집중할 수 있도록 공통 플랫폼과 운영 기반을 만듭니다.",
    detailTitle: "개발을 가속하는 플랫폼",
    detailSummary: "복잡성을 줄이고 팀이 제품에 집중할 수 있는 기반을 만듭니다.",
    image: "/a/generated/consulting/platform-beaver-dam-v4.webp",
    keywords: ["개발자 플랫폼", "CI/CD", "운영 자동화"],
    proofTitle: "플랫폼을 기술 프로젝트가 아닌 내부 제품으로 만듭니다.",
    proofBody: "DBaaS, KaaS, 클라우드 포털, 의료 AI 플랫폼을 설계하고 운영한 경험을 바탕으로 개발자 경험과 운영 안정성을 함께 봅니다. 인프라를 더 만드는 것이 아니라 제품 팀의 인지 부하와 전달 시간을 줄이는 플랫폼을 설계합니다.",
    metrics: [
      { value: "1만 대+", label: "운영 규모", detail: "자동화·관리 플랫폼이 다룬 서버" },
      { value: "20개+", label: "제품·플랫폼", detail: "설계·개발·배포·운영 전 과정 경험" },
      { value: "6개 영역", label: "엔지니어링 연결", detail: "BE·FE·Cloud·DevOps/SRE·MLOps·Data" },
      { value: "3개 층", label: "플랫폼 설계", detail: "개발자 경험·전달 자동화·신뢰성" },
    ],
    expertise: [
      { title: "Platform as a Product", body: "개발자를 고객으로 정의하고 여정, 페인포인트, 사용 지표를 기반으로 플랫폼 비전과 제품 백로그를 수립합니다." },
      { title: "Reference Architecture", body: "조직의 기술·보안·비용 제약에 맞춰 포털, 서비스 카탈로그, IDP, 관찰 가능성의 경계와 통합 구조를 설계합니다." },
      { title: "Golden Path & Automation", body: "프로젝트 생성부터 빌드, 테스트, 배포, 관찰까지 안전한 기본 경로와 셀프서비스 자동화를 구현합니다." },
      { title: "SRE & Governance", body: "SLO, 오류 예산, 정책 자동화, 비용 가시성, 플랫폼 팀의 지원 모델로 속도와 안정성을 함께 운영합니다." },
    ],
    situations: [
      "팀마다 개발·배포·관찰 방식이 달라 중복 작업과 운영 부담이 계속 커지는 조직",
      "클라우드와 보안, 인프라의 복잡성이 개발자의 인지 부하와 제품 전달 시간을 늘리는 조직",
      "개발자 자율성은 유지하면서 표준화, 비용 효율, 운영 안정성을 함께 높이려는 조직",
    ],
    outcomes: [
      { title: "플랫폼 제품 전략", body: "개발자 여정, 마찰 비용, 조직 목표를 연결해 플랫폼의 고객, 가치 제안, 경계, 우선순위와 성공 지표를 정의합니다." },
      { title: "참조 아키텍처와 골든 패스", body: "포털과 카탈로그, CI/CD, IaC, 관찰 가능성을 연결하고 실제 팀이 사용할 셀프서비스 경로를 구축합니다." },
      { title: "운영·거버넌스 모델", body: "플랫폼 팀의 책임, 제품 팀의 자율성, SLO, 정책 자동화, 지원과 비용 모델을 지속 가능한 운영 구조로 설계합니다." },
    ],
    process: [
      { period: "2–3주", title: "진단", body: "개발자 인터뷰와 전달 흐름 분석으로 대기 시간, 반복 작업, 장애·보안 병목을 측정합니다." },
      { period: "1–2주", title: "우선순위", body: "개발자 가치, 운영 효과, 구현 비용을 기준으로 플랫폼의 첫 제품 영역을 선정합니다." },
      { period: "6–12주", title: "구축", body: "실제 제품 팀과 포털, 템플릿, 파이프라인, 관찰 가능성을 갖춘 골든 패스를 구현합니다." },
      { period: "지속", title: "제품화", body: "사용률, 리드타임, 배포·복구 지표와 피드백을 바탕으로 플랫폼 백로그를 운영합니다." },
    ],
  },
];

export function ForestBackground() {
  return (
    <>
      <picture className="forest2-bg-picture">
        <source media="(max-width: 900px)" srcSet="/a/generated/backgrounds/home-mobile-bg.png" />
        <source media="(max-width: 1120px)" srcSet="/a/generated/backgrounds/home-tablet-bg.png" />
        <img className="forest2-bg-image" src="/a/generated/backgrounds/home-desktop-bg.png" alt="" />
      </picture>
      <div className="forest2-bg-wash" aria-hidden="true" />
      <canvas className="forest2-atmosphere-canvas" data-visual-id="threejs-atmosphere" aria-hidden="true" width="1280" height="720" />
    </>
  );
}

export function Topbar({ locale = "ko", path = "/consulting" }: { locale?: Locale; path?: string }) {
  const labels = locale === "ko"
    ? { home: "홈", works: "작품", consulting: "컨설팅", about: "소개", nav: "JJGo 페이지", homeLabel: "JJGo 홈" }
    : { home: "Home", works: "Works", consulting: "Consulting", about: "About", nav: "JJGo pages", homeLabel: "JJGo home" };

  return (
    <header className="forest2-topbar" data-visual-id="topbar">
      <a className="forest2-brand" aria-label={labels.homeLabel} href={localizedPath(locale, "/")}>
        <img className="forest2-brand-logo" src="/a/logo/jjgo-logo.png" alt="" />
      </a>
      <nav className="forest2-nav" aria-label={labels.nav}>
        <a href={localizedPath(locale, "/")}>{labels.home}</a>
        <a href={localizedPath(locale, "/works")}>{labels.works}</a>
        <a aria-current="page" href={localizedPath(locale, "/consulting")}>{labels.consulting}</a>
        <a href={localizedPath(locale, "/about")}>{labels.about}</a>
        <LanguageToggle locale={locale} path={path} />
      </nav>
    </header>
  );
}

export function ConsultingSubnav({ active, locale = "ko", services = consultingServices }: { active?: ConsultingSlug; locale?: Locale; services?: ConsultingService[] }) {
  return (
    <nav className="forest2-consulting-subnav" aria-label={locale === "ko" ? "컨설팅 분야" : "Consulting areas"}>
      {services.map((service) => (
        <a key={service.slug} aria-current={active === service.slug ? "page" : undefined} href={localizedPath(locale, `/consulting/${service.slug}`)}>
          <span>{service.number}</span>
          {service.shortTitle}
        </a>
      ))}
    </nav>
  );
}

export function OriginalMethodHeadline({ locale = "ko" }: { locale?: Locale }) {
  if (locale === "en") {
    return (
      <h1 aria-label="Keep structure simple and possibility wide">
        <span aria-hidden="true" className="forest2-method-wind-line">
          Keep structure
          <span className="forest2-method-wind-word">
            <span>simple</span><span>fast</span><span>effective</span><span>practical</span><span>resilient</span>
          </span>
        </span>
        <br aria-hidden="true" />
        <span aria-hidden="true" className="forest2-method-wind-line">
          Grow possibility
          <span className="forest2-method-wind-word forest2-method-possibility-word">
            <span>wider</span><span>higher</span><span>bigger</span><span>freer</span><span>newer</span>
          </span>
        </span>
      </h1>
    );
  }

  return (
    <h1 aria-label="구조는 단순하게 가능성은 넓게">
      <span aria-hidden="true" className="forest2-method-wind-line">
        구조는
        <span className="forest2-method-wind-word">
          <span>단순하게</span>
          <span>빠르게</span>
          <span>효과적이게</span>
          <span>실용적이게</span>
          <span>단단하게</span>
        </span>
      </span>
      <br aria-hidden="true" />
      <span aria-hidden="true" className="forest2-method-wind-line">
        가능성은
        <span className="forest2-method-wind-word forest2-method-possibility-word">
          <span>넓게</span>
          <span>높게</span>
          <span>크게</span>
          <span>자유롭게</span>
          <span>새롭게</span>
        </span>
      </span>
    </h1>
  );
}

export function ConsultingDetail({ service, locale = "ko", services = consultingServices }: { service: ConsultingService; locale?: Locale; services?: ConsultingService[] }) {
  const ui = locale === "ko" ? {
    back: "컨설팅 전체 보기", topics: "핵심 주제", contact: "상담 문의", outcomesLink: "결과 보기",
    expertise: "어디까지 함께하는가", outcomes: "무엇을 함께 만드는가", situations: "언제 필요한가",
    process: "어떻게 진행하는가", note: "상황에 따라 범위와 기간을 조정합니다.",
    ctaTitle: <>정답을 제시하기보다<br />함께 실행할 구조를 만듭니다.</>,
    ctaBody: "현재 상황과 해결하고 싶은 문제를 알려주시면 가장 적합한 시작점을 함께 찾겠습니다.", cta: "상담 문의하기",
  } : {
    back: "View all consulting", topics: "Core topics", contact: "Start a conversation", outcomesLink: "See outcomes",
    expertise: "How I can help", outcomes: "What we build together", situations: "When to start",
    process: "How we work", note: "Scope and timeline are adjusted to your context.",
    ctaTitle: <>More than an answer,<br />build a system your team can run.</>,
    ctaBody: "Share your current situation and the problem you want to solve. We’ll identify the strongest place to begin.", cta: "Send an email",
  };

  return (
    <div className="jhub-web-app-root jhub-web-app-root--jjgo2" data-jhub-web-app="jjgo2" data-jhub-web-app-kind="static-content-site" lang={locale}>
      <main className="forest2-site forest2-site--method forest2-site--consulting" data-jhub-web-app="jjgo2" data-web-app-title="JJGo">
        <ForestBackground />
        <Topbar locale={locale} path={`/consulting/${service.slug}`} />
        <div className="forest2-content forest2-route-view">
          <article className={`forest2-method-frame forest2-consulting-detail-frame forest2-consulting-detail-frame--${service.slug}`}>
            <div className="forest2-method-shell">
              <a className="forest2-consulting-back" href={localizedPath(locale, "/consulting")}><ArrowLeft size={17} aria-hidden="true" />{ui.back}</a>
              <ConsultingSubnav active={service.slug} locale={locale} services={services} />

              <header className="forest2-consulting-detail-hero">
                <div className="forest2-consulting-detail-copy">
                  <p>{service.english}</p>
                  <h1>{service.detailTitle}</h1>
                  <span>{service.detailSummary}</span>
                  <ul aria-label={ui.topics}>
                    {service.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                  </ul>
                  <div className="forest2-consulting-hero-actions">
                    <a href="mailto:leejungju.go@gmail.com">{ui.contact}<ArrowRight size={18} aria-hidden="true" /></a>
                    <a href="#outcomes">{ui.outcomesLink}</a>
                  </div>
                </div>
                <figure className="forest2-consulting-detail-visual" aria-hidden="true">
                  <img src={service.image} alt="" width="1200" height="800" />
                </figure>
              </header>

              <section className="forest2-consulting-proof" id="evidence">
                <div className="forest2-consulting-proof-copy">
                  <p>WHY JJGO</p>
                  <h2>{service.proofTitle}</h2>
                  <span>{service.proofBody}</span>
                </div>
                <dl className="forest2-consulting-metrics">
                  {service.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.value}</dt>
                      <dd><strong>{metric.label}</strong><span>{metric.detail}</span></dd>
                    </div>
                  ))}
                </dl>
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
                    <article key={outcome.title}><h3>{outcome.title}</h3><p>{outcome.body}</p></article>
                  ))}
                </div>
              </section>

              <section className="forest2-consulting-detail-section forest2-consulting-situations" id="situations">
                <header>
                  <p>WHEN TO START</p>
                  <h2>{ui.situations}</h2>
                </header>
                <ol>
                  {service.situations.map((situation, index) => (
                    <li key={situation}><span>{String(index + 1).padStart(2, "0")}</span><p>{situation}</p></li>
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
                    <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><em>{step.period}</em><h3>{step.title}</h3><p>{step.body}</p></div></li>
                  ))}
                </ol>
              </section>

              <section className="forest2-method-cta forest2-consulting-cta">
                <p>START A CONVERSATION</p>
                <h2>{ui.ctaTitle}</h2>
                <span>{ui.ctaBody}</span>
                <a href="mailto:leejungju.go@gmail.com">{ui.cta}<ArrowRight size={20} aria-hidden="true" /></a>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
