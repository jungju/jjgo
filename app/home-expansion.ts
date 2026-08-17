import { localizedPath, type Locale } from "./language-toggle";

const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`;
const externalArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`;

const copy = {
  ko: {
    capabilityEyebrow: "WHAT I DO",
    capabilityTitle: "AI가 작동하는 제품과 조직,\n그 기반을 함께 만듭니다.",
    capabilityBody: "아이디어를 데모에 머물게 하지 않습니다. AI를 제품과 업무에 연결하고, 팀이 반복해서 만들 수 있는 방식과 안정적으로 운영할 플랫폼까지 하나의 흐름으로 설계합니다.",
    capabilities: [
      {
        number: "01",
        eyebrow: "AI TRANSFORMATION",
        title: "AX",
        body: "실제 업무를 평가 기준으로 바꾸고, 모델·에이전트·도구의 최적 조합을 찾아 서비스 흐름으로 연결합니다.",
        strengths: ["평가 체계", "구성 최적화", "오케스트레이션"],
        image: "/a/generated/consulting/ax-human-orchestration-v5.webp",
        alt: "사람과 AI가 하나의 흐름으로 협업하는 AX 이미지",
        href: "/consulting/ax",
        action: "AX 강점 더 보기",
      },
      {
        number: "02",
        eyebrow: "AI NATIVE ORGANIZATION",
        title: "AI Native",
        body: "AI를 개인의 도구가 아닌 조직의 일하는 방식으로 정착시켜, 기획부터 개발·검증·학습까지 더 빠르게 순환하게 합니다.",
        strengths: ["운영 모델", "업무 흐름", "품질·거버넌스"],
        image: "/a/generated/consulting/ai-native-honeybees-v3.webp",
        alt: "유기적으로 협업하는 AI Native 조직 이미지",
        href: "/consulting/ai-native",
        action: "AI Native 강점 더 보기",
      },
      {
        number: "03",
        eyebrow: "PLATFORM ENGINEERING",
        title: "Platform",
        body: "제품 팀이 인프라의 복잡성보다 고객 가치에 집중하도록 셀프서비스 기반과 안전한 기본 경로를 만듭니다.",
        strengths: ["Platform as a Product", "Golden Path", "DevOps·SRE"],
        image: "/a/generated/consulting/platform-beaver-dam-v4.webp",
        alt: "안정적인 흐름을 만드는 플랫폼 엔지니어링 이미지",
        href: "/consulting/platform-engineering",
        action: "Platform 강점 더 보기",
      },
    ],
    worksEyebrow: "SELECTED WORK",
    worksTitle: "생각을 실제로 움직이는\n제품으로 만들었습니다.",
    worksBody: "AI 자동화에서 서비스 주문과 배포까지, 직접 기획하고 만들고 운영한 주요 작품입니다.",
    works: [
      {
        eyebrow: "AI CONTENT PIPELINE",
        title: "AI Slop",
        body: "AI가 이야기와 장면을 기획하고, 이미지 생성과 게시까지 이어 가는 자동 연재 실험입니다. 만화와 영상을 꾸준히 만드는 하나의 콘텐츠 파이프라인으로 운영합니다.",
        image: "/a/versions/works/20260720/wind-returning-place.jpg",
        alt: "AI Slop 대표 연재 바람이 돌아오는 곳",
        internalAction: "프로젝트 소개",
        internalHref: "/works/ai-slop",
        externalAction: "Slop 바로가기",
        externalHref: "https://slop.jjgo.io/",
      },
      {
        eyebrow: "PRODUCT SHOWROOM SAAS",
        title: "OKGo",
        body: "사이트, 게임, 만화, 쇼츠, 키오스크와 알림 서비스를 한곳에서 고르고 주문할 수 있는 쇼룸형 SaaS입니다. 아이디어가 실제 배포와 운영으로 이어지는 과정을 제품으로 담았습니다.",
        image: "/a/versions/works/20260720/okgo4.jpg",
        alt: "OKGo 서비스 쇼룸 화면",
        internalAction: null,
        internalHref: null,
        externalAction: "OKGo 바로가기",
        externalHref: "https://okgo4.jjgo.io/",
      },
    ],
    robloxEyebrow: "BUILDING IN ROBLOX",
    robloxTitle: "플레이를 만들고,\n다음 제작을 더 빠르게 만듭니다.",
    robloxBody: "서울 수로를 여행하는 종이배 탐험과 폭탄 비에서 살아남는 경쟁 게임을 만들었습니다. 작은 플레이를 빠르게 검증하고, Lua 스크립트와 제작 도구를 재사용 가능한 기반으로 쌓습니다.",
    robloxTags: ["게임 기획", "Lua 스크립팅", "제작 도구", "출시와 운영"],
    robloxAction: "Roblox 게임 만들기 보기",
    robloxImageAltOne: "Roblox 종이배 서울 수로 탐험 게임 화면",
    robloxImageAltTwo: "Roblox Bomb Rain 게임 화면",
    allWorks: "모든 작품 둘러보기",
  },
  en: {
    capabilityEyebrow: "WHAT I DO",
    capabilityTitle: "I build AI-powered products,\norganizations, and foundations.",
    capabilityBody: "Ideas should move beyond demos. I connect AI to products and real work, shape repeatable ways for teams to deliver, and build the platforms that keep everything reliable in production.",
    capabilities: [
      {
        number: "01",
        eyebrow: "AI TRANSFORMATION",
        title: "AX",
        body: "Turn real work into evaluation criteria, find the right combination of models, agents, and tools, and orchestrate them into a service.",
        strengths: ["Evaluation systems", "Configuration search", "Orchestration"],
        image: "/a/generated/consulting/ax-human-orchestration-v5.webp",
        alt: "A person and AI working together in one orchestrated flow",
        href: "/consulting/ax",
        action: "Explore AX strengths",
      },
      {
        number: "02",
        eyebrow: "AI NATIVE ORGANIZATION",
        title: "AI Native",
        body: "Make AI part of how the organization works so planning, building, validation, and learning can move in a faster loop.",
        strengths: ["Operating model", "Workflows", "Quality & governance"],
        image: "/a/generated/consulting/ai-native-honeybees-v3.webp",
        alt: "An organically coordinated AI-native organization",
        href: "/consulting/ai-native",
        action: "Explore AI Native strengths",
      },
      {
        number: "03",
        eyebrow: "PLATFORM ENGINEERING",
        title: "Platform",
        body: "Create self-service foundations and safe golden paths so product teams can focus on customer value instead of infrastructure complexity.",
        strengths: ["Platform as a Product", "Golden Path", "DevOps & SRE"],
        image: "/a/generated/consulting/platform-beaver-dam-v4.webp",
        alt: "Platform engineering creating a stable, dependable flow",
        href: "/consulting/platform-engineering",
        action: "Explore Platform strengths",
      },
    ],
    worksEyebrow: "SELECTED WORK",
    worksTitle: "Ideas turned into\nproducts that move.",
    worksBody: "Selected products I have designed, built, and operated—from AI automation to service ordering and delivery.",
    works: [
      {
        eyebrow: "AI CONTENT PIPELINE",
        title: "AI Slop",
        body: "An automated publishing experiment in which AI plans stories and scenes, creates imagery, and carries the work through publication as an ongoing comics and video pipeline.",
        image: "/a/versions/works/20260720/wind-returning-place.jpg",
        alt: "The Place Where the Wind Returns, a featured AI Slop series",
        internalAction: "Project story",
        internalHref: "/works/ai-slop",
        externalAction: "Visit Slop",
        externalHref: "https://slop.jjgo.io/",
      },
      {
        eyebrow: "PRODUCT SHOWROOM SAAS",
        title: "OKGo",
        body: "A showroom SaaS for browsing and ordering sites, games, comics, shorts, kiosks, and notification services—turning an idea into a path through delivery and operation.",
        image: "/a/versions/works/20260720/okgo4.jpg",
        alt: "The OKGo service showroom",
        internalAction: null,
        internalHref: null,
        externalAction: "Visit OKGo",
        externalHref: "https://okgo4.jjgo.io/",
      },
    ],
    robloxEyebrow: "BUILDING IN ROBLOX",
    robloxTitle: "Build the play, then make\nthe next build faster.",
    robloxBody: "I created a relaxing paper-boat journey through Seoul and a competitive survival game beneath a rain of bombs. Each focused playtest becomes reusable Lua systems and better creation tools.",
    robloxTags: ["Game design", "Lua scripting", "Creation tools", "Launch & operations"],
    robloxAction: "Explore Roblox game making",
    robloxImageAltOne: "Paper Boat Exploration through Seoul waterways on Roblox",
    robloxImageAltTwo: "Bomb Rain survival game on Roblox",
    allWorks: "Explore all works",
  },
} as const;

function capabilityCards(locale: Locale) {
  return copy[locale].capabilities.map((capability) => `
    <a class="forest2-home-capability-card" href="${localizedPath(locale, capability.href)}">
      <span class="forest2-home-capability-number">${capability.number}</span>
      <div class="forest2-home-capability-media"><img src="${capability.image}" alt="${capability.alt}" width="960" height="640" loading="lazy" decoding="async"></div>
      <div class="forest2-home-capability-copy">
        <p>${capability.eyebrow}</p>
        <h3>${capability.title}</h3>
        <span>${capability.body}</span>
        <ul>${capability.strengths.map((strength) => `<li>${strength}</li>`).join("")}</ul>
        <strong>${capability.action}${arrow}</strong>
      </div>
    </a>`).join("");
}

function workCards(locale: Locale) {
  return copy[locale].works.map((work, index) => `
    <article class="forest2-home-work-card forest2-home-work-card--${index === 0 ? "slop" : "okgo"}">
      <div class="forest2-home-work-media"><img src="${work.image}" alt="${work.alt}" width="960" height="540" loading="lazy" decoding="async"></div>
      <div class="forest2-home-work-copy">
        <p>${work.eyebrow}</p>
        <h3>${work.title}</h3>
        <span>${work.body}</span>
        <div class="forest2-home-work-actions">
          ${work.internalHref && work.internalAction ? `<a href="${localizedPath(locale, work.internalHref)}">${work.internalAction}${arrow}</a>` : ""}
          <a href="${work.externalHref}" target="_blank" rel="noreferrer">${work.externalAction}${externalArrow}</a>
        </div>
      </div>
    </article>`).join("");
}

export function homeExpansionMarkup(locale: Locale) {
  const text = copy[locale];

  return `
    <section class="forest2-home-expansion" aria-labelledby="home-capabilities-title">
      <div class="forest2-home-expansion-shell">
        <section class="forest2-home-expansion-section forest2-home-capabilities" id="home-capabilities">
          <header class="forest2-home-expansion-head">
            <div><p>${text.capabilityEyebrow}</p><h2 id="home-capabilities-title">${text.capabilityTitle}</h2></div>
            <span>${text.capabilityBody}</span>
          </header>
          <div class="forest2-home-capability-grid">${capabilityCards(locale)}</div>
        </section>

        <section class="forest2-home-expansion-section forest2-home-selected" aria-labelledby="home-selected-title">
          <header class="forest2-home-expansion-head">
            <div><p>${text.worksEyebrow}</p><h2 id="home-selected-title">${text.worksTitle}</h2></div>
            <span>${text.worksBody}</span>
          </header>
          <div class="forest2-home-work-grid">${workCards(locale)}</div>
        </section>

        <section class="forest2-home-expansion-section forest2-home-roblox" aria-labelledby="home-roblox-title">
          <div class="forest2-home-roblox-copy">
            <p>${text.robloxEyebrow}</p>
            <h2 id="home-roblox-title">${text.robloxTitle}</h2>
            <span>${text.robloxBody}</span>
            <ul>${text.robloxTags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
            <a href="${localizedPath(locale, "/works/roblox")}">${text.robloxAction}${arrow}</a>
          </div>
          <div class="forest2-home-roblox-gallery">
            <figure><img src="/a/generated/roblox/paper-boat-seoul.png" alt="${text.robloxImageAltOne}" width="768" height="432" loading="lazy" decoding="async"><figcaption>Paper Boat Exploration</figcaption></figure>
            <figure><img src="/a/generated/roblox/bomb-rain.png" alt="${text.robloxImageAltTwo}" width="768" height="432" loading="lazy" decoding="async"><figcaption>Bomb Rain</figcaption></figure>
          </div>
        </section>

        <div class="forest2-home-all-works"><a href="${localizedPath(locale, "/works")}">${text.allWorks}${arrow}</a></div>
      </div>
    </section>`;
}
