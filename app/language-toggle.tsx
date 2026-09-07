import { localizedSitePath, type SiteLocale } from "./site-spec";

export function LanguageToggle({
  locale,
  path,
}: {
  locale: SiteLocale;
  path: string;
}) {
  return (
    <span
      className="forest2-language-toggle"
      aria-label={locale === "ko" ? "언어 선택" : "Choose language"}
    >
      <a
        data-active={locale === "ko" ? "true" : undefined}
        href={localizedSitePath("ko", path)}
        lang="ko"
        hrefLang="ko"
        aria-current={locale === "ko" ? "page" : undefined}
      >
        KO
      </a>
      <span aria-hidden="true">/</span>
      <a
        data-active={locale === "en" ? "true" : undefined}
        href={localizedSitePath("en", path)}
        lang="en"
        hrefLang="en"
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </a>
    </span>
  );
}
