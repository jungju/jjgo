export const siteLocales = ["ko", "en"] as const;

export type SiteLocale = (typeof siteLocales)[number];
export type SiteNavItem = "home" | "works" | "consulting" | "notes" | "about";

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
  roblox: {
    path: "/works/roblox",
    parent: "works",
    nav: "works",
    identity: { ko: "Roblox", en: "Roblox" },
  },
  aiSlop: {
    path: "/works/ai-slop",
    parent: "works",
    nav: "works",
    identity: { ko: "AI Slop", en: "AI Slop" },
  },
  consulting: {
    path: "/consulting",
    parent: null,
    nav: "consulting",
    identity: { ko: "Consulting", en: "Consulting" },
  },
  consultingAiNative: {
    path: "/consulting/ai-native",
    parent: "consulting",
    nav: "consulting",
    identity: null,
  },
  consultingAx: {
    path: "/consulting/ax",
    parent: "consulting",
    nav: "consulting",
    identity: null,
  },
  consultingPlatformEngineering: {
    path: "/consulting/platform-engineering",
    parent: "consulting",
    nav: "consulting",
    identity: null,
  },
  notes: {
    path: "/notes",
    parent: null,
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteCloneContract: {
    path: "/notes/the-copied-date-came-back-as-text",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteSharedWindow: {
    path: "/notes/whose-computer-is-that-window-on",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteHighlightCondition: {
    path: "/notes/the-condition-outside-the-highlight",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  notePhotoSelection: {
    path: "/notes/finding-a-photo-and-hanging-it",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteJoinRevenue: {
    path: "/notes/revenue-grew-after-the-join",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteCopiedRandom: {
    path: "/notes/copying-numbers-not-yet-drawn",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteMovingChart: {
    path: "/notes/the-document-stayed-the-chart-moved-on",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteSixthClick: {
    path: "/notes/the-sixth-click-in-the-diagram",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteIntermediateOverflow: {
    path: "/notes/the-answer-fits-but-the-product-overflows",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteMathSupport: {
    path: "/notes/even-a-mathematics-company-needs-support",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteMoreCompute: {
    path: "/notes/what-would-more-compute-change",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  notePersistentFix: {
    path: "/notes/before-a-fix-becomes-a-rule",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteReferenceDate: {
    path: "/notes/the-reference-image-does-not-set-the-date",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  notePlacementHallway: {
    path: "/notes/the-placement-plan-has-no-hallway",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  notePueEnergy: {
    path: "/notes/pue-and-the-energy-bill",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteUnknownName: {
    path: "/notes/searching-before-knowing-the-name",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteApprovalVersion: {
    path: "/notes/approval-needs-a-version",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteGpuFreeTest: {
    path: "/notes/gpu-free-test-what-it-proves",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteLastPage: {
    path: "/notes/last-page-is-not-agreement",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteZeroShape: {
    path: "/notes/zero-shape-same-character",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  notePrivateMemory: {
    path: "/notes/shared-server-private-memory",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteSameFrame: {
    path: "/notes/same-frame-different-moment",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteMissingField: {
    path: "/notes/missing-field-is-not-deletion",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteConnectedState: {
    path: "/notes/connected-is-not-caught-up",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteSingleFileOwnership: {
    path: "/notes/single-file-database-ownership",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteWaitingRequests: {
    path: "/notes/idle-cpu-waiting-requests",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteReviewOrder: {
    path: "/notes/review-order-is-not-exemption",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteArrival: {
    path: "/notes/arrival-one-question",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteLookalike: {
    path: "/notes/unknown-or-lookalike",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteOnDeviceAi: {
    path: "/notes/on-device-ai-targets",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteWorkflows: {
    path: "/notes/ai-native-starts-with-work",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteEternalSunshine: {
    path: "/notes/eternal-sunshine-memory",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  noteEvaluation: {
    path: "/notes/evaluate-before-you-scale",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  notePlatform: {
    path: "/notes/platform-as-a-path",
    parent: "notes",
    nav: "notes",
    identity: { ko: "Notes", en: "Notes" },
  },
  about: { path: "/about", parent: null, nav: "about", identity: null },
  method: {
    path: "/method",
    parent: null,
    nav: "consulting",
    identity: { ko: "Consulting", en: "Consulting" },
  },
} as const satisfies Record<string, SitePageSpec>;

export type SitePageId = keyof typeof sitePages;

export const primaryNavigation = [
  { id: "home", page: "home", label: { ko: "홈", en: "Home" } },
  { id: "works", page: "works", label: { ko: "작품", en: "Works" } },
  {
    id: "consulting",
    page: "consulting",
    label: { ko: "컨설팅", en: "Consulting" },
  },
  { id: "notes", page: "notes", label: { ko: "Notes", en: "Notes" } },
  { id: "about", page: "about", label: { ko: "소개", en: "About" } },
] as const satisfies readonly {
  id: SiteNavItem;
  page: SitePageId;
  label: LocalizedLabel;
}[];

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

export function staticHtmlRoutes() {
  return siteLocales.flatMap((locale) =>
    (Object.keys(sitePages) as SitePageId[]).map((page) => {
      const localized = localizedSitePath(locale, pagePath(page));
      return localized === "/"
        ? "index.html"
        : `${localized.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
    }),
  );
}
