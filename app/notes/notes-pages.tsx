import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "../site-layout";
import {
  localizedSitePath,
  pagePath,
  type SiteLocale,
  type SitePageId,
} from "../site-spec";
import {
  absoluteUrl,
  localizedPagePath,
  pageMetadata,
  JsonLd,
  PERSON_ID,
} from "../seo";
import { notes, notesNewestFirst } from "./notes-data";

const copy = {
  ko: {
    eyebrow: "IDEAS · PRACTICE · LEARNING",
    title: "만들고 운영하며 남기는 생각.",
    lead: "AI Native 조직, 제품 개발, 플랫폼 운영에 관한 메모를 모읍니다. 일하는 방식과 기술을 연결하는 질문에서 출발합니다.",
    sample: "샘플 글",
    notice: "샘플로 작성한 글에는 별도 표시가 있습니다.",
    read: "글 읽기",
    back: "Notes 목록",
    more: "다른 글도 읽어보세요",
    sampleNotice: "블로그 구성을 소개하기 위한 샘플 글입니다.",
  },
  en: {
    eyebrow: "IDEAS · PRACTICE · LEARNING",
    title: "Notes from building and operating.",
    lead: "Thoughts on AI Native organizations, product development, and platform operations. Starting with questions that connect technology to how we work.",
    sample: "Sample",
    notice: "Sample articles are marked separately.",
    read: "Read note",
    back: "All notes",
    more: "Keep reading",
    sampleNotice: "A sample article prepared to introduce this blog.",
  },
};

function formatNoteDate(date: string, locale: SiteLocale) {
  const hasTime = date.includes("T");
  return (
    new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
      timeZone: "Asia/Seoul",
      ...(hasTime
        ? { hour: "numeric" as const, minute: "2-digit" as const, hour12: true }
        : {}),
    })
      .formatToParts(new Date(hasTime ? date : date + "T00:00:00+09:00"))
      .map((part) =>
        locale === "ko" && part.type === "dayPeriod"
          ? part.value.replace("AM", "오전").replace("PM", "오후")
          : part.value,
      )
      .join("") + (hasTime ? " KST" : "")
  );
}

export function noteByPage(page: SitePageId) {
  const note = notes.find((item) => item.page === page);
  if (!note) throw new Error("Missing note: " + page);
  return note;
}

export function noteMetadata(locale: SiteLocale, page: SitePageId) {
  const note = noteByPage(page);
  const content = note[locale];
  return pageMetadata({
    locale,
    path: pagePath(page),
    title: content.title + " | Notes · JJGo",
    description: content.summary,
    image: note.image,
    imageWidth: 1200,
    imageHeight: 800,
  });
}

export function NotesPage({ locale }: { locale: SiteLocale }) {
  const text = copy[locale];
  return (
    <SiteLayout locale={locale} page="notes" className="forest2-site--notes">
      <div className="notes-shell">
        <header className="notes-hero">
          <p className="notes-eyebrow">{text.eyebrow}</p>
          <h1>
            Notes<span>{text.title}</span>
          </h1>
          <p className="notes-lead">{text.lead}</p>
          <p className="notes-notice">{text.notice}</p>
        </header>
        <div className="notes-list">
          {notesNewestFirst.map((note) => (
            <article className="notes-card" key={note.page}>
              <a
                className="notes-card-image"
                href={localizedSitePath(locale, pagePath(note.page))}
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={note.image}
                  alt=""
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </a>
              <div>
                <div className="notes-meta">
                  <span>{note.category}</span>
                  <time dateTime={note.date}>
                    {formatNoteDate(note.date, locale)}
                  </time>
                  {note.sample && (
                    <span className="notes-sample">{text.sample}</span>
                  )}
                </div>
                <h2>
                  <a href={localizedSitePath(locale, pagePath(note.page))}>
                    {note[locale].title}
                    <ArrowRight size={22} aria-hidden="true" />
                  </a>
                </h2>
                <p>{note[locale].summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}

export function NotePage({
  locale,
  page,
}: {
  locale: SiteLocale;
  page: SitePageId;
}) {
  const note = noteByPage(page);
  const content = note[locale];
  const text = copy[locale];
  return (
    <SiteLayout
      locale={locale}
      page={page}
      className="forest2-site--notes"
      identity={{ label: "Notes", href: pagePath("notes") }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: content.title,
          description: content.summary,
          datePublished: note.date,
          inLanguage: locale,
          mainEntityOfPage: absoluteUrl(
            localizedPagePath(locale, pagePath(page)),
          ),
          author: {
            "@type": "Person",
            "@id": PERSON_ID,
            name: locale === "ko" ? "이정주" : "Jungju Lee",
          },
          image: absoluteUrl(note.image),
        }}
      />
      <article className="notes-shell notes-article">
        <a
          className="notes-back"
          href={localizedSitePath(locale, pagePath("notes"))}
        >
          <ArrowLeft size={17} aria-hidden="true" />
          {text.back}
        </a>
        <header className="notes-article-header">
          <div className="notes-meta">
            <span>{note.category}</span>
            <time dateTime={note.date}>
              {formatNoteDate(note.date, locale)}
            </time>
            {note.sample && <span className="notes-sample">{text.sample}</span>}
          </div>
          <h1>{content.title}</h1>
          <p className="notes-lead">{content.summary}</p>
          {note.sample && <p className="notes-notice">{text.sampleNotice}</p>}
        </header>
        <figure className="notes-cover">
          <img
            src={note.image}
            alt={note.imageAlt[locale]}
            width={1200}
            height={800}
          />
        </figure>
        <div className="notes-prose">
          {content.sections.map((section) => (
            <section key={section.title}>
              {section.title && <h2>{section.title}</h2>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
        <aside className="notes-related" aria-label={text.more}>
          <h2>{text.more}</h2>
          {notesNewestFirst
            .filter((item) => item.page !== page)
            .map((item) => (
              <a
                key={item.page}
                href={localizedSitePath(locale, pagePath(item.page))}
              >
                {item[locale].title}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ))}
        </aside>
      </article>
    </SiteLayout>
  );
}
