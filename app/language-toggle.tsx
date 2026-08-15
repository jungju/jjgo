export type Locale = "ko" | "en";

export function localizedPath(locale: Locale, path: string) {
  if (locale === "ko") return path;
  return path === "/" ? "/en/" : `/en${path}`;
}

export function LanguageToggle({ locale, path }: { locale: Locale; path: string }) {
  return (
    <span className="forest2-language-toggle" aria-label={locale === "ko" ? "언어 선택" : "Choose language"}>
      <a data-active={locale === "ko" ? "true" : undefined} href={localizedPath("ko", path)} lang="ko">KO</a>
      <span aria-hidden="true">/</span>
      <a data-active={locale === "en" ? "true" : undefined} href={localizedPath("en", path)} lang="en">EN</a>
    </span>
  );
}

export function languageToggleMarkup(locale: Locale, path: string) {
  const label = locale === "ko" ? "언어 선택" : "Choose language";
  const koActive = locale === "ko" ? ' data-active="true"' : "";
  const enActive = locale === "en" ? ' data-active="true"' : "";
  return `<span class="forest2-language-toggle" aria-label="${label}"><a${koActive} href="${localizedPath("ko", path)}" lang="ko">KO</a><span aria-hidden="true">/</span><a${enActive} href="${localizedPath("en", path)}" lang="en">EN</a></span>`;
}
