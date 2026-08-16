import { ForestBackground } from "../consulting/consulting-components";
import type { Locale } from "../language-toggle";
import { SiteHeader } from "../site-header";

const AI_SLOP_URL = "https://slop.jjgo.io";
const GITHUB_URL = "https://github.com/jungju/slop";
const LATEST_EPISODE_URL = `${AI_SLOP_URL}/comics/wind-returning-place/ep-029/`;
const SERIES_URL = `${AI_SLOP_URL}/series/wind-returning-place/`;
const LATEST_COVER = `${AI_SLOP_URL}/media/comics/wind-returning-place/ep-029/page-01.webp`;

const copy = {
  ko: {
    nav: "AI Slop 프로젝트",
    projectLink: "프로젝트",
    processLink: "제작 흐름",
    seriesLink: "대표 연재",
    eyebrow: "AI-NATIVE PUBLISHING PROJECT",
    title: "AI가 만들고,\nAI가 연재합니다.",
    summary: "AI Slop은 만화와 영상을 기획하고 만들고 게시하는 전 과정을 AI와 자동화 파이프라인으로 이어 가는 공개 아카이브입니다.",
    visit: "AI Slop 방문하기",
    github: "GitHub에서 제작 기록 보기",
    coverLabel: "현재 연재 중",
    coverTitle: "바람이 돌아오는 곳 · 29화",
    metrics: [
      { value: "29", label: "공개 회차" },
      { value: "580", label: "만화 페이지" },
      { value: "100%", label: "AI 제작·자동 게시" },
    ],
    projectEyebrow: "PROJECT",
    projectTitle: "콘텐츠 작품이면서, 계속 움직이는 제작 시스템입니다.",
    projectBody: "한 번 만든 데모가 아니라 연재를 지속할 수 있는 구조를 목표로 했습니다. 이야기와 이미지, 독자용 파일, 제작 정보와 웹페이지가 하나의 흐름 안에서 함께 갱신됩니다.",
    projectPoints: [
      { title: "실제 연재", body: "대표 만화의 새 회차를 독자가 바로 읽을 수 있는 공개 웹 경험으로 제공합니다." },
      { title: "자동화된 게시", body: "콘텐츠 데이터와 독자용 이미지를 정적 사이트로 빌드하고 배포 가능한 결과물로 만듭니다." },
      { title: "제작 정보 공개", body: "확인 가능한 AI 모델과 역할, 출처 범위를 작품과 함께 기록합니다." },
    ],
    processEyebrow: "HOW IT RUNS",
    processTitle: "기획에서 공개까지 한 흐름으로 연결합니다.",
    processBody: "각 단계의 결과가 다음 단계의 입력이 되도록 구성해 반복 가능한 연재 과정을 만듭니다.",
    process: [
      { index: "01", title: "기획", body: "시리즈의 방향과 회차별 이야기 구조를 정리합니다." },
      { index: "02", title: "생성", body: "이미지와 문구를 만들고 독자용 콘텐츠 형태로 구성합니다." },
      { index: "03", title: "정리", body: "회차 메타데이터와 제작 모델, 공개 가능한 출처 정보를 함께 기록합니다." },
      { index: "04", title: "게시", body: "웹 아카이브를 빌드해 새 회차와 탐색 경로를 공개합니다." },
    ],
    seriesEyebrow: "FEATURED SERIES",
    seriesTitle: "바람이 돌아오는 곳",
    seriesBody: "서울과 제주 사이, 사진과 바람에 남은 기억을 따라가는 조용한 회복 드라마입니다. 현재 29화까지 공개되어 있습니다.",
    latest: "최신 29화 읽기",
    allEpisodes: "전체 회차 보기",
    principlesEyebrow: "OPEN BY DESIGN",
    principlesTitle: "결과뿐 아니라 만들어진 방식도 함께 보여줍니다.",
    principles: [
      { index: "01", title: "읽는 경험 우선", body: "자동화 결과를 그대로 쌓지 않고 모바일과 데스크톱에서 읽기 편한 웹 경험으로 제공합니다." },
      { index: "02", title: "확인 가능한 정보", body: "정확히 확인되는 모델과 제작 역할만 표시하고, 불명확한 버전은 불명확하다고 밝힙니다." },
      { index: "03", title: "계속 운영되는 구조", body: "새 회차를 가져오고 검증하고 게시하는 과정을 반복 가능한 도구로 유지합니다." },
    ],
    statusEyebrow: "LIVE ARCHIVE",
    statusTitle: "지금 공개된 AI 연재를 확인해 보세요.",
    statusBody: "만화 본문과 전체 회차, AI 모델 정보는 AI Slop에서 볼 수 있습니다.",
  },
  en: {
    nav: "AI Slop project",
    projectLink: "Project",
    processLink: "Publishing flow",
    seriesLink: "Featured series",
    eyebrow: "AI-NATIVE PUBLISHING PROJECT",
    title: "Created by AI,\npublished by AI.",
    summary: "AI Slop is a public archive that connects the planning, creation, and publication of comics and video through AI and an automated production pipeline.",
    visit: "Visit AI Slop",
    github: "View production records on GitHub",
    coverLabel: "Now publishing",
    coverTitle: "The Place Where the Wind Returns · Episode 29",
    metrics: [
      { value: "29", label: "Published episodes" },
      { value: "580", label: "Comic pages" },
      { value: "100%", label: "AI-made and auto-published" },
    ],
    projectEyebrow: "PROJECT",
    projectTitle: "A body of creative work and a publishing system that keeps moving.",
    projectBody: "The goal is not a one-off demo, but a structure that can sustain a series. Story, imagery, reader-ready files, production records, and web pages move forward together in one flow.",
    projectPoints: [
      { title: "A real series", body: "New episodes are released as a public reading experience that people can use immediately." },
      { title: "Automated publishing", body: "Content data and reader-ready imagery are built into a static, deployable archive." },
      { title: "Visible provenance", body: "Known AI models, roles, and source ranges are documented alongside the work." },
    ],
    processEyebrow: "HOW IT RUNS",
    processTitle: "One connected flow from planning to release.",
    processBody: "Each stage produces the input for the next, creating a repeatable serialization process.",
    process: [
      { index: "01", title: "Plan", body: "Shape the direction of the series and the story structure for each episode." },
      { index: "02", title: "Generate", body: "Create imagery and copy, then organize them into reader-ready content." },
      { index: "03", title: "Document", body: "Record episode metadata, production models, and verifiable provenance." },
      { index: "04", title: "Publish", body: "Build the archive and release the new episode with its discovery paths." },
    ],
    seriesEyebrow: "FEATURED SERIES",
    seriesTitle: "The Place Where the Wind Returns",
    seriesBody: "A quiet recovery drama following the memories left in photographs and wind between Seoul and Jeju. Twenty-nine episodes are currently available.",
    latest: "Read episode 29",
    allEpisodes: "Browse all episodes",
    principlesEyebrow: "OPEN BY DESIGN",
    principlesTitle: "The process is presented alongside the finished work.",
    principles: [
      { index: "01", title: "Reading comes first", body: "Automated output is shaped into a comfortable reading experience for mobile and desktop." },
      { index: "02", title: "Verifiable information", body: "Only confirmed models and production roles are named; uncertain versions are explicitly marked as such." },
      { index: "03", title: "Built to keep running", body: "Importing, validating, and publishing new episodes remains a repeatable tool-supported workflow." },
    ],
    statusEyebrow: "LIVE ARCHIVE",
    statusTitle: "Explore the AI-published series now.",
    statusBody: "Read the comic, browse every episode, and inspect the available model information on AI Slop.",
  },
} as const;

export function AiSlopPage({ locale = "ko" }: { locale?: Locale }) {
  const text = copy[locale];

  return (
    <div className="jhub-web-app-root jhub-web-app-root--jjgo2" data-jhub-web-app="jjgo2" data-jhub-web-app-kind="static-content-site" lang={locale}>
      <main className="forest2-site forest2-site--method forest2-site--ai-slop" data-jhub-web-app="jjgo2" data-web-app-title="JJGo AI Slop">
        <ForestBackground />
        <SiteHeader locale={locale} page="aiSlop" />
        <div className="forest2-content forest2-route-view">
          <article className="forest2-roblox-frame">
            <div className="forest2-roblox-shell">
              <nav className="forest2-roblox-subnav" aria-label={text.nav}>
                <a href="#project">{text.projectLink}</a>
                <a href="#process">{text.processLink}</a>
                <a href="#series">{text.seriesLink}</a>
              </nav>

              <header className="forest2-ai-slop-hero">
                <div className="forest2-ai-slop-hero-copy">
                  <p>{text.eyebrow}</p>
                  <h1>{text.title}</h1>
                  <span>{text.summary}</span>
                  <div className="forest2-ai-slop-actions">
                    <a href={AI_SLOP_URL} target="_blank" rel="noreferrer">{text.visit}<span aria-hidden="true">↗</span></a>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer">{text.github}<span aria-hidden="true">↗</span></a>
                  </div>
                </div>
                <a className="forest2-ai-slop-cover" href={LATEST_EPISODE_URL} target="_blank" rel="noreferrer" aria-label={text.latest}>
                  <img src={LATEST_COVER} alt="" width="1080" height="1280" />
                  <span><em>{text.coverLabel}</em><strong>{text.coverTitle}</strong></span>
                </a>
              </header>

              <dl className="forest2-ai-slop-metrics" aria-label={locale === "ko" ? "AI Slop 공개 현황" : "AI Slop publishing status"}>
                {text.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
              </dl>

              <section className="forest2-roblox-section forest2-ai-slop-project" id="project">
                <header>
                  <p>{text.projectEyebrow}</p>
                  <h2>{text.projectTitle}</h2>
                  <span>{text.projectBody}</span>
                </header>
                <div className="forest2-ai-slop-point-grid">
                  {text.projectPoints.map((point, index) => (
                    <article key={point.title}><span>0{index + 1}</span><h3>{point.title}</h3><p>{point.body}</p></article>
                  ))}
                </div>
              </section>

              <section className="forest2-roblox-section" id="process">
                <header>
                  <p>{text.processEyebrow}</p>
                  <h2>{text.processTitle}</h2>
                  <span>{text.processBody}</span>
                </header>
                <div className="forest2-roblox-area-grid forest2-ai-slop-process-grid">
                  {text.process.map((step) => (
                    <article key={step.index}><span>{step.index}</span><h3>{step.title}</h3><p>{step.body}</p></article>
                  ))}
                </div>
              </section>

              <section className="forest2-roblox-section forest2-ai-slop-series" id="series">
                <div className="forest2-ai-slop-series-media">
                  <img src="/a/versions/works/20260720/wind-returning-place.jpg" alt={locale === "ko" ? "바람이 돌아오는 곳 웹사이트 화면" : "The Place Where the Wind Returns website"} width="960" height="540" loading="lazy" />
                </div>
                <div className="forest2-ai-slop-series-copy">
                  <p>{text.seriesEyebrow}</p>
                  <h2>{text.seriesTitle}</h2>
                  <span>{text.seriesBody}</span>
                  <div className="forest2-ai-slop-actions">
                    <a href={LATEST_EPISODE_URL} target="_blank" rel="noreferrer">{text.latest}<span aria-hidden="true">↗</span></a>
                    <a href={SERIES_URL} target="_blank" rel="noreferrer">{text.allEpisodes}<span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </section>

              <section className="forest2-roblox-section forest2-roblox-direction" id="principles">
                <header>
                  <p>{text.principlesEyebrow}</p>
                  <h2>{text.principlesTitle}</h2>
                </header>
                <ol>
                  {text.principles.map((principle) => (
                    <li key={principle.index}><span>{principle.index}</span><div><h3>{principle.title}</h3><p>{principle.body}</p></div></li>
                  ))}
                </ol>
              </section>

              <section className="forest2-roblox-status forest2-ai-slop-status">
                <div>
                  <p>{text.statusEyebrow}</p>
                  <h2>{text.statusTitle}</h2>
                  <span>{text.statusBody}</span>
                </div>
                <div className="forest2-roblox-actions">
                  <a href={AI_SLOP_URL} target="_blank" rel="noreferrer">{text.visit}<span aria-hidden="true">↗</span></a>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
