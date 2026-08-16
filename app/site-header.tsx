import { LanguageToggle, languageToggleMarkup, localizedPath, type Locale } from "./language-toggle";
import { pagePath, primaryNavigation, sitePages, type SiteNavItem, type SitePageId } from "./site-spec";

export type { SiteNavItem } from "./site-spec";

export type SiteIdentity = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  locale?: Locale;
  page?: SitePageId;
  path?: string;
  current?: SiteNavItem | null;
  identity?: SiteIdentity | null;
};

function headerLabels(locale: Locale) {
  return locale === "ko"
    ? { nav: "JJGo 페이지", homeLabel: "JJGo 홈" }
    : { nav: "JJGo pages", homeLabel: "JJGo home" };
}

function resolvedHeader({ locale = "ko", page, path, current, identity }: SiteHeaderProps) {
  const spec = page ? sitePages[page] : null;
  const resolvedIdentity = identity === undefined && spec?.identity
    ? { label: spec.identity[locale], href: spec.path }
    : identity ?? null;
  return {
    path: path ?? (page ? pagePath(page) : "/"),
    current: current === undefined ? spec?.nav ?? null : current,
    identity: resolvedIdentity,
  };
}

function navigationItems(locale: Locale) {
  return primaryNavigation.map((item) => ({
    id: item.id,
    label: item.label[locale],
    href: pagePath(item.page),
  }));
}

export function SiteHeader(props: SiteHeaderProps) {
  const locale = props.locale ?? "ko";
  const { path, current, identity } = resolvedHeader(props);
  const labels = headerLabels(locale);
  const navItems = navigationItems(locale);

  return (
    <header className="forest2-topbar" data-visual-id="topbar">
      <div className="forest2-brand-lockup">
        <a className="forest2-brand" aria-label={labels.homeLabel} href={localizedPath(locale, "/")}>
          <img className="forest2-brand-logo" src="/a/logo/jjgo-logo.png" alt="" />
        </a>
        {identity && (
          <a className="forest2-brand-section" href={localizedPath(locale, identity.href)}>
            {identity.label}
          </a>
        )}
      </div>
      <nav className="forest2-nav" aria-label={labels.nav}>
        {navItems.map((item) => (
          <a key={item.id} aria-current={current === item.id ? "page" : undefined} href={localizedPath(locale, item.href)}>
            {item.label}
          </a>
        ))}
        <LanguageToggle locale={locale} path={path} />
      </nav>
    </header>
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function siteHeaderMarkup(props: SiteHeaderProps) {
  const locale = props.locale ?? "ko";
  const { path, current, identity } = resolvedHeader(props);
  const labels = headerLabels(locale);
  const navItems = navigationItems(locale);
  const identityMarkup = identity
    ? `<a class="forest2-brand-section" href="${localizedPath(locale, identity.href)}">${escapeHtml(identity.label)}</a>`
    : "";
  const navMarkup = navItems.map((item) => {
    const ariaCurrent = current === item.id ? ' aria-current="page"' : "";
    return `<a${ariaCurrent} href="${localizedPath(locale, item.href)}">${item.label}</a>`;
  }).join("");

  return `<header class="forest2-topbar" data-visual-id="topbar"><div class="forest2-brand-lockup"><a class="forest2-brand" aria-label="${labels.homeLabel}" href="${localizedPath(locale, "/")}"><img class="forest2-brand-logo" src="/a/logo/jjgo-logo.png" alt=""></a>${identityMarkup}</div><nav class="forest2-nav" aria-label="${labels.nav}">${navMarkup}${languageToggleMarkup(locale, path)}</nav></header>`;
}
