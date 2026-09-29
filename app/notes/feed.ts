import { notesNewestFirst } from "./notes-data";
import { absoluteUrl, localizedPagePath } from "../seo";
import { pagePath, type SiteLocale } from "../site-spec";

function xml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function notesFeed(locale: SiteLocale) {
  const feed = absoluteUrl(
    locale === "ko" ? "/notes/feed.xml" : "/en/notes/feed.xml",
  );
  const home = absoluteUrl(localizedPagePath(locale, "/notes"));
  const items = notesNewestFirst
    .filter((note) => !note.sample)
    .map((note) => {
      const content = note[locale];
      const url = absoluteUrl(localizedPagePath(locale, pagePath(note.page)));
      const date = new Date(
        note.date.includes("T") ? note.date : `${note.date}T00:00:00+09:00`,
      ).toUTCString();
      return `<item><title>${xml(content.title)}</title><link>${xml(url)}</link><guid isPermaLink="true">${xml(url)}</guid><description>${xml(content.summary)}</description><pubDate>${date}</pubDate></item>`;
    })
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>JJGo Notes</title><link>${home}</link><description>${locale === "ko" ? "JJGo의 새 글" : "New articles from JJGo"}</description><language>${locale === "ko" ? "ko-KR" : "en"}</language><atom:link href="${feed}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
}
