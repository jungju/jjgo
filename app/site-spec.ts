export const siteLocales = ["ko", "en"] as const;

export type SiteLocale = (typeof siteLocales)[number];
export type SiteNavItem = "home" | "works" | "consulting" | "about";

type LocalizedLabel = Record<SiteLocale, string>;

type SitePageSpec = {
  path: `/${string}` | "/";
  parent: string | null;
  nav: SiteNavItem | null;
  identity: LocalizedLabel | null;
};

export const sitePages = {
  home: { path: "/", parent: null, nav: "home", identity: null },
  works: { path: "/works", parent: null, nav: "works", identity: null },
  roblox: { path: "/works/roblox", parent: "works", nav: "works", identity: { ko: "Roblox", en: "Roblox" } },
  consulting: { path: "/consulting", parent: null, nav: "consulting", identity: { ko: "Consulting", en: "Consulting" } },
  consultingAiNative: { path: "/consulting/ai-native", parent: "consulting", nav: "consulting", identity: null },
  consultingAx: { path: "/consulting/ax", parent: "consulting", nav: "consulting", identity: null },
  consultingPlatformEngineering: { path: "/consulting/platform-engineering", parent: "consulting", nav: "consulting", identity: null },
  about: { path: "/about", parent: null, nav: "about", identity: null },
  coffeeChat: { path: "/coffee-chat", parent: null, nav: null, identity: null },
  method: { path: "/method", parent: null, nav: "consulting", identity: { ko: "Consulting", en: "Consulting" } },
} as const satisfies Record<string, SitePageSpec>;

export type SitePageId = keyof typeof sitePages;

export const primaryNavigation = [
  { id: "home", page: "home", label: { ko: "홈", en: "Home" } },
  { id: "works", page: "works", label: { ko: "작품", en: "Works" } },
  { id: "consulting", page: "consulting", label: { ko: "컨설팅", en: "Consulting" } },
  { id: "about", page: "about", label: { ko: "소개", en: "About" } },
] as const satisfies readonly { id: SiteNavItem; page: SitePageId; label: LocalizedLabel }[];

export const consultingPageBySlug = {
  "ai-native": "consultingAiNative",
  ax: "consultingAx",
  "platform-engineering": "consultingPlatformEngineering",
} as const satisfies Record<string, SitePageId>;

export type ConsultingSlug = keyof typeof consultingPageBySlug;

export function pagePath(page: SitePageId) {
  return sitePages[page].path;
}

export function consultingPath(slug: ConsultingSlug) {
  return pagePath(consultingPageBySlug[slug]);
}

export function localizedSitePath(locale: SiteLocale, path: string) {
  if (locale === "ko") return path;
  return path === "/" ? "/en/" : `/en${path}`;
}

export function pageForPath(path: string): SitePageId | null {
  const entry = Object.entries(sitePages).find(([, page]) => page.path === path);
  return (entry?.[0] as SitePageId | undefined) ?? null;
}

export function staticHtmlRoutes() {
  return siteLocales.flatMap((locale) =>
    (Object.keys(sitePages) as SitePageId[]).map((page) => {
      const localized = localizedSitePath(locale, pagePath(page));
      return localized === "/" ? "index.html" : `${localized.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
    }),
  );
}
