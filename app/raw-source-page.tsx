import type { Locale } from "./language-toggle";
import { homeExpansionMarkup } from "./home-expansion";
import { siteHeaderMarkup } from "./site-header";
import type { SitePageId } from "./site-spec";

function extractMain(source: string) {
  return source.match(/<main[\s\S]*<\/main>/)?.[0] ?? source;
}

function adaptSearchableIdentity(source: string) {
  const adapted = source
    .replace(/<canvas class="forest2-atmosphere-canvas"[\s\S]*?<\/canvas>/g, "")
    .replaceAll("/a/generated/backgrounds/home-mobile-bg.png", "/a/generated/backgrounds/home-mobile-bg.webp")
    .replaceAll("/a/generated/backgrounds/home-tablet-bg.png", "/a/generated/backgrounds/home-desktop-bg.webp")
    .replaceAll("/a/generated/backgrounds/home-desktop-bg.png", "/a/generated/backgrounds/home-desktop-bg.webp")
    .replaceAll("혁신적인 상상에서", "AI 제품과 플랫폼을")
    .replaceAll("완성도 있는 결과로 연결합니다.", "설계하고 운영합니다.");

  return adapted.replace(
    /<p aria-label="([^"]+)" class="forest2-home-wind-copy">([\s\S]*?)<\/p>/,
    '<h1 aria-label="$1" class="forest2-home-wind-copy">$2</h1>',
  );
}

function adaptAboutProfile(source: string) {
  const evidence = `<dl class="forest2-about-evidence-grid"><div class="forest2-about-evidence"><dt>16년</dt><dd>제품·플랫폼 개발 경험</dd></div><div class="forest2-about-evidence"><dt>약 200개</dt><dd>Kubernetes 클러스터 구축·운영</dd></div><div class="forest2-about-evidence"><dt>1,000개+</dt><dd>Kubernetes 노드 운영 규모</dd></div><div class="forest2-about-evidence"><dt>최대 80%</dt><dd>AI 모델 서비스 반영 리드타임 단축</dd></div></dl><p class="forest2-about-evidence-note">2026년 8월 기준 · 대표 프로젝트와 경력 기록에 기재된 수치입니다.</p>`;
  const verification = `<section class="forest2-about-section forest2-about-verification" data-visual-id="about-verification"><p class="forest2-about-section-label">프로필과 공개 기록</p><h2>외부에서 확인할 수 있는 기록입니다.</h2><p>경력 프로필, 공개 코드와 과거 인터뷰·연구 기록을 연결했습니다.</p><div class="forest2-about-verification-links"><a href="https://www.linkedin.com/in/jungjugo/" rel="me noreferrer" target="_blank"><strong>LinkedIn</strong><span>경력 프로필</span></a><a href="https://github.com/jungju" rel="me noreferrer" target="_blank"><strong>GitHub</strong><span>공개 코드</span></a><a href="https://korea.googleblog.com/2007/11/blog-post_23.html" rel="noreferrer" target="_blank"><strong>Google Korea</strong><span>개발자 인터뷰 · 2007</span></a><a href="https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&amp;control_no=57460ea93e1f8e03ffe0bdc3ef48d419" rel="noreferrer" target="_blank"><strong>RISS</strong><span>석사 학위 논문</span></a></div></section>`;

  return source
    .replaceAll(
      "기술의 경계를 나누기보다, 아이디어가 실제로 운영되는 제품이 될 때까지 연결합니다.",
      "AI 제품과 클라우드 플랫폼을 설계하고, 지속적으로 개발·운영할 조직과 프로세스까지 구축해 왔습니다.",
    )
    .replaceAll(
      "백엔드와 클라우드부터 AI 제품화와 개발 조직 운영까지 경험해 왔습니다.",
      "AI 제품과 개발 조직의 전환을 이끌고 있습니다.",
    )
    .replaceAll("16년의 제품 개발 경험", "16년의 제품·플랫폼 개발 경험")
    .replaceAll(
      "Daum, Kakao, NCSOFT를 거쳐 AI·클라우드 제품과 플랫폼을 만들고 운영했습니다.",
      "Daum·Kakao와 NCSOFT에서 대규모 클라우드 플랫폼을, 이후 AI 제품과 개발 조직을 이끌었습니다.",
    )
    .replace(/<dl class="forest2-about-evidence-grid">[\s\S]*?<\/dl>/, evidence)
    .replaceAll("Daum · Kakao · NCSOFT · Alchera · NeuroXT", "NeuroXT · Alchera · NCSOFT · Kakao · Daum")
    .replace('<section class="forest2-about-next"', `${verification}<section class="forest2-about-next"`)
    .replaceAll('rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"', 'rel="me noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"')
    .replaceAll('rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"', 'rel="me noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"');
}

function adaptConsultingNavigation(source: string) {
  return source
    .replaceAll('href="/method"', 'href="/consulting"')
    .replaceAll(">방법론<", ">컨설팅<")
    .replaceAll("일하는 방법 보기", "컨설팅 보기")
    .replaceAll("방법 보기", "컨설팅 보기")
    .replaceAll("사용자 피드백, XP·애자일, DevOps와 단순한 조직 구조로 제품을 만드는 방식입니다.", "AI Native 조직, AX, 플랫폼 엔지니어링을 통해 실행 가능한 변화를 만듭니다.")
    .replaceAll("사용자 피드백과 XP·애자일을 바탕으로 작게 만들고 검증하며, 개발과 운영을 하나의 흐름으로 연결합니다.", "조직, 비즈니스, 기술 기반을 함께 살펴보고 AI 시대에 필요한 실행 구조를 만듭니다.")
    .replaceAll("피드백과 실험을 반복하며 제품과 조직을 개선하는 방식.", "AI Native 조직, AX, 플랫폼 엔지니어링 컨설팅.");
}

function adaptContactCta(source: string) {
  return source
    .replaceAll("<p class=\"forest2-about-next-label\">NEXT</p>", "<p class=\"forest2-about-next-label\">CONTACT</p>")
    .replaceAll("지나온 경험은, 지금 만드는 방식으로 이어집니다.", "문의와 커피챗, 모두 편하게 연락해 주세요.")
    .replaceAll("결과물과 그 결과를 만드는 방법을 함께 살펴보세요.", "프로젝트 문의, 협업 제안, 가벼운 커피챗 모두 환영합니다.")
    .replaceAll('href="/works">만든 것 보기', 'href="mailto:leejungju.go@gmail.com">메일 보내기')
    .replace(/<a class="forest2-about-action" href="\/consulting">컨설팅 보기[\s\S]*?<\/a>/, "")
    .replaceAll(">이메일</a>", ">leejungju.go@gmail.com</a>");
}

const englishReplacements: [string, string][] = [
  ["안녕하세요. 이정주입니다. AI 제품과 플랫폼을 설계하고 운영합니다.", "Hello. I’m Jungju Lee. I design and operate AI products and platforms."],
  ["안녕하세요.", "Hello."],
  ["이정주입니다.", "I’m Jungju Lee."],
  ["AI 제품과 플랫폼을", "AI products and platforms"],
  ["설계하고 운영합니다.", "designed to work and last."],
  ["웹사이트, 앱, 게임, 만화와 영상 등 지금까지 만든 결과물을 한곳에서 살펴봅니다.", "Explore the websites, apps, games, comics, and videos I have built."],
  ["웹사이트, 앱, 게임, 만화와 영상 등 지금까지 만든 결과물을 유형별로 골라볼 수 있습니다.", "Browse websites, apps, games, comics, and videos by collection."],
  ["웹사이트, 앱, 게임, 만화와 영상으로 만든 결과물.", "Websites, apps, games, comics, and videos."],
  ["조직, 비즈니스, 기술 기반을 함께 살펴보고 AI 시대에 필요한 실행 구조를 만듭니다.", "I connect organization, business, and technology into practical operating systems for the AI era."],
  ["AI Native 조직, AX, 플랫폼 엔지니어링 컨설팅.", "AI-native organization, AX, and platform engineering."],
  ["AI Native 조직, AX, 플랫폼 엔지니어링을 통해 실행 가능한 변화를 만듭니다.", "Turn AI-native organization, AX, and platform engineering into executable change."],
  ["찾아와 주셔서 감사합니다.", "Thank you for stopping by."],
  ["AI 제품과 클라우드 플랫폼을 설계하고, 지속적으로 개발·운영할 조직과 프로세스까지 구축해 왔습니다.", "I design AI products and cloud platforms, along with the organizations and processes that keep them evolving in production."],
  ["AI 제품과 개발 조직의 전환을 이끌고 있습니다.", "I lead the transformation of AI products and engineering organizations."],
  ["제가 해온 일", "WHAT I BRING"],
  ["16년의 제품·플랫폼 개발 경험", "16 years of product and platform engineering"],
  ["Daum·Kakao와 NCSOFT에서 대규모 클라우드 플랫폼을, 이후 AI 제품과 개발 조직을 이끌었습니다.", "I built large-scale cloud platforms at Daum, Kakao, and NCSOFT, then led AI products and engineering organizations."],
  ["경계를 넘는 제품 개발", "Product engineering across boundaries"],
  ["백엔드, 프론트엔드, 클라우드, DevOps/SRE, MLOps와 데이터 영역을 연결합니다.", "I connect backend, frontend, cloud, DevOps/SRE, MLOps, and data into one delivery system."],
  ["운영되는 플랫폼", "Platforms built to operate"],
  ["DBaaS, KaaS, 클라우드 포털과 AI 플랫폼을 배포·운영·확장까지 고려해 설계했습니다.", "I designed DBaaS, KaaS, cloud portals, and AI platforms for deployment, operations, and scale."],
  ["사람과 조직의 실행 방식", "How people and organizations deliver"],
  ["XP·애자일, 코드 리뷰, 테스트, CI/CD와 AI 협업 체계로 속도와 품질을 함께 개선합니다.", "I improve speed and quality through XP, Agile, code review, testing, CI/CD, and AI-assisted collaboration."],
  ["경험을 보여주는 숫자", "EXPERIENCE IN NUMBERS"],
  ["16년", "16 years"],
  ["제품·플랫폼 개발 경험", "of product and platform engineering"],
  ["약 200개", "About 200"],
  ["Kubernetes 클러스터 구축·운영", "Kubernetes clusters built and operated"],
  ["1,000개+", "1,000+"],
  ["Kubernetes 노드 운영 규모", "Kubernetes nodes operated"],
  ["최대 80%", "Up to 80%"],
  ["AI 모델 서비스 반영 리드타임 단축", "shorter AI model service lead time"],
  ["2026년 8월 기준 · 대표 프로젝트와 경력 기록에 기재된 수치입니다.", "As of August 2026 · Figures are drawn from selected project and career records."],
  ["경험의 확장", "HOW THE EXPERIENCE GREW"],
  ["웹 서비스", "Web Services"],
  ["클라우드 플랫폼", "Cloud Platforms"],
  ["AI Native 조직", "AI-Native Organization"],
  ["NeuroXT · Alchera · NCSOFT · Kakao · Daum", "NeuroXT · Alchera · NCSOFT · Kakao · Daum"],
  ["프로필과 공개 기록", "PROFILE & PUBLIC RECORDS"],
  ["외부에서 확인할 수 있는 기록입니다.", "Public records you can review."],
  ["경력 프로필, 공개 코드와 과거 인터뷰·연구 기록을 연결했습니다.", "Links to my career profile, public code, past interview, and research record."],
  ["경력 프로필", "Career profile"],
  ["공개 코드", "Public code"],
  ["개발자 인터뷰 · 2007", "Developer interview · 2007"],
  ["석사 학위 논문", "Master’s thesis"],
  ["지나온 경험은, 지금 만드는 방식으로 이어집니다.", "Past experience shapes how I build today."],
  ["결과물과 그 결과를 만드는 방법을 함께 살펴보세요.", "Explore both the outcomes and the systems behind them."],
  ["문의와 커피챗, 모두 편하게 연락해 주세요.", "Questions or a coffee chat? Feel free to reach out."],
  ["프로젝트 문의, 협업 제안, 가벼운 커피챗 모두 환영합니다.", "Project inquiries, collaboration ideas, and casual coffee chats are all welcome."],
  ["메일 보내기", "Send an email"],
  ["이메일", "Email"],
  ["제품으로 옮기기", "TURN IDEAS INTO PRODUCTS"],
  [">홈<", ">Home<"],
  [">작품<", ">Works<"],
  [">컨설팅<", ">Consulting<"],
  [">소개<", ">About<"],
  ["작품 보기", "Explore works"],
  ["컨설팅 보기", "Explore consulting"],
  ["일하는 방법 보기", "Explore consulting"],
  ["서비스로 스크롤", "Scroll to featured work"],
  ["연락처", "Contact"],
  ["JJGo 홈", "JJGo home"],
  ["JJGo 페이지", "JJGo pages"],
];

function localizeEnglish(source: string) {
  let translated = source;
  for (const [from, to] of englishReplacements) translated = translated.replaceAll(from, to);
  return translated;
}

function localizeInternalLinks(source: string, locale: Locale) {
  if (locale === "ko") return source;
  return source
    .replaceAll('href="/"', 'href="/en/"')
    .replace(/href="\/(works|consulting|about)"/g, 'href="/en/$1"');
}

function replaceTopbar(source: string, locale: Locale, page: SitePageId) {
  return source.replace(
    /<header class="forest2-topbar"[\s\S]*?<\/header>/,
    siteHeaderMarkup({ locale, page }),
  );
}

export function RawSourcePage({ source, locale = "ko", page }: { source: string; locale?: Locale; page: SitePageId }) {
  let html = adaptContactCta(adaptAboutProfile(adaptConsultingNavigation(adaptSearchableIdentity(extractMain(source)))));
  if (locale === "en") html = localizeEnglish(html);
  html = localizeInternalLinks(html, locale);
  html = replaceTopbar(html, locale, page);
  if (page === "home") {
    html = html.replace("</section></div></main>", `</section>${homeExpansionMarkup(locale)}</div></main>`);
  }

  return (
    <div
      className="jhub-web-app-root jhub-web-app-root--jjgo2"
      data-jhub-web-app="jjgo2"
      data-jhub-web-app-kind="static-content-site"
      lang={locale}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
