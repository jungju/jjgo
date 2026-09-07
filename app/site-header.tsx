import { LanguageToggle } from "./language-toggle";
import {
  pagePath,
  primaryNavigation,
  sitePages,
  localizedSitePath,
  type SiteLocale,
  type SitePageId,
} from "./site-spec";

export type SiteIdentity = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  locale: SiteLocale;
  page: SitePageId;
  identity?: SiteIdentity;
};

export function SiteHeader({ locale, page, identity }: SiteHeaderProps) {
  const spec = sitePages[page];
  const section =
    identity ??
    (spec.identity ? { label: spec.identity[locale], href: spec.path } : null);
  const labels =
    locale === "ko"
      ? { nav: "JJGo 페이지", homeLabel: "JJGo 홈" }
      : { nav: "JJGo pages", homeLabel: "JJGo home" };
  return (
    <header className="forest2-topbar" data-visual-id="topbar">
      <div className="forest2-brand-lockup">
        <a
          className="forest2-brand"
          aria-label={labels.homeLabel}
          href={localizedSitePath(locale, "/")}
        >
          <img
            className="forest2-brand-logo"
            src="/a/logo/jjgo-logo.png"
            alt=""
          />
        </a>
        {section && (
          <a
            className="forest2-brand-section"
            href={localizedSitePath(locale, section.href)}
          >
            {section.label}
          </a>
        )}
      </div>
      <nav className="forest2-nav" aria-label={labels.nav}>
        {primaryNavigation.map((item) => (
          <a
            key={item.id}
            aria-current={spec.nav === item.id ? "page" : undefined}
            href={localizedSitePath(locale, pagePath(item.page))}
          >
            {item.label[locale]}
          </a>
        ))}
      </nav>
      <LanguageToggle locale={locale} path={spec.path} />
    </header>
  );
}
