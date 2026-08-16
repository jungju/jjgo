import type { MetadataRoute } from "next";
import { absoluteUrl, localizedPagePath } from "./seo";
import { pagePath, sitePages, type SitePageId } from "./site-spec";

export const dynamic = "force-static";

const canonicalPages = (Object.keys(sitePages) as SitePageId[]).filter((page) => page !== "method");

export default function sitemap(): MetadataRoute.Sitemap {
  return canonicalPages.flatMap((page) => {
    const path = pagePath(page);
    const korean = absoluteUrl(localizedPagePath("ko", path));
    const english = absoluteUrl(localizedPagePath("en", path));
    const alternates = { languages: { "ko-KR": korean, en: english, "x-default": korean } };

    return [
      { url: korean, alternates },
      { url: english, alternates },
    ];
  });
}
