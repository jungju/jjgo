import { ArrowLeft, Coffee, MessagesSquare, Sprout } from "lucide-react";
import { ForestBackground, Topbar } from "../consulting/consulting-components";
import { localizedPath, type Locale } from "../language-toggle";
import { CoffeeChatContact } from "./coffee-chat-form";

const pageCopy = {
  ko: {
    eyebrow: "COFFEE CHAT",
    title: <>나누고, 얻고,<br />함께 넓혀갑니다.</>,
    lead: "서로의 경험과 고민을 나누며 새로운 관점과 가능성을 발견하는 대화를 기다립니다.",
    back: "소개로 돌아가기",
    fitLabel: "이런 이야기를 환영합니다",
    fitTitle: "정답보다 경험과 질문을 가져와 주세요.",
    topics: [
      { title: "제품과 기술", body: "제품 개발, AI, 플랫폼, 클라우드와 운영에 관한 실제 경험" },
      { title: "사람과 조직", body: "일하는 방식, 협업, 성장과 커리어에 관한 고민" },
      { title: "만들고 나누기", body: "사이드 프로젝트, 창작, 커뮤니티와 새로운 실험" },
    ],
    guideTitle: "대화는 이렇게 이어집니다",
    guide: ["신청 내용을 읽고 이메일로 답합니다.", "대화 방식과 가능한 시간을 함께 조율합니다.", "서로에게 도움이 될 질문과 경험을 준비합니다."],
    formLabel: "EMAIL",
    formTitle: "이메일로 편하게 연락해 주세요.",
    formLead: "아래 주소로 간단한 정보와 가능한 시간대를 보내주시면 확인 후 답장드리겠습니다.",
  },
  en: {
    eyebrow: "COFFEE CHAT",
    title: <>Share, learn,<br />and widen the view.</>,
    lead: "I welcome conversations where we exchange real experience, questions, and new possibilities.",
    back: "Back to About",
    fitLabel: "CONVERSATIONS I WELCOME",
    fitTitle: "Bring a question or an experience, not a perfect answer.",
    topics: [
      { title: "Products and technology", body: "Hands-on experience across product engineering, AI, platforms, cloud, and operations" },
      { title: "People and organizations", body: "Ways of working, collaboration, growth, and career questions" },
      { title: "Making and sharing", body: "Side projects, creative work, communities, and new experiments" },
    ],
    guideTitle: "What happens next",
    guide: ["I read your request and reply by email.", "We coordinate a format and possible time together.", "We each bring a useful question or experience to the conversation."],
    formLabel: "EMAIL",
    formTitle: "Send me a short email.",
    formLead: "Share a few details and your available times at the address below, and I will get back to you.",
  },
} as const;

export function CoffeeChatPage({ locale }: { locale: Locale }) {
  const t = pageCopy[locale];

  return (
    <div className="jhub-web-app-root jhub-web-app-root--jjgo2" data-jhub-web-app="jjgo2" data-jhub-web-app-kind="static-content-site" lang={locale}>
      <main className="forest2-site forest2-site--coffee-chat" data-jhub-web-app="jjgo2" data-web-app-title="JJGo">
        <ForestBackground />
        <Topbar locale={locale} page="coffeeChat" />
        <div className="forest2-content forest2-route-view">
          <article className="forest2-coffee-frame">
            <div className="forest2-coffee-shell">
              <a className="forest2-coffee-back" href={localizedPath(locale, "/about")}><ArrowLeft size={17} aria-hidden="true" />{t.back}</a>

              <header className="forest2-coffee-hero">
                <p>{t.eyebrow}</p>
                <h1>{t.title}</h1>
                <span>{t.lead}</span>
              </header>

              <div className="forest2-coffee-layout">
                <aside className="forest2-coffee-context" aria-label={t.fitLabel}>
                  <p>{t.fitLabel}</p>
                  <h2>{t.fitTitle}</h2>
                  <div className="forest2-coffee-topics">
                    {t.topics.map((topic, index) => {
                      const Icon = index === 0 ? Coffee : index === 1 ? MessagesSquare : Sprout;
                      return (
                        <article key={topic.title}>
                          <Icon size={21} aria-hidden="true" />
                          <div><h3>{topic.title}</h3><p>{topic.body}</p></div>
                        </article>
                      );
                    })}
                  </div>
                  <section className="forest2-coffee-guide">
                    <h3>{t.guideTitle}</h3>
                    <ol>{t.guide.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
                  </section>
                </aside>

                <section className="forest2-coffee-form-card">
                  <header>
                    <p>{t.formLabel}</p>
                    <h2>{t.formTitle}</h2>
                    <span>{t.formLead}</span>
                  </header>
                  <CoffeeChatContact locale={locale} />
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
