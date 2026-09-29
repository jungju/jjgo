import { siteOrigin } from "./config.mjs";

const decode = (text) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
export function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [
      m[1].toLowerCase(),
      decode(m[2]),
    ]),
  );
}
export function inspectHtml(html, url) {
  const tags = [...html.matchAll(/<(?:link|meta|img|a)\b[^>]*>/gi)].map(
    (m) => ({
      tag: m[0].match(/^<(\w+)/)[1].toLowerCase(),
      ...attributes(m[0]),
    }),
  );
  const canonical = tags.find((t) => t.rel === "canonical")?.href;
  const description = tags.find((t) => t.name === "description")?.content;
  const alternates = tags
    .filter((t) => t.rel === "alternate" && t.hreflang)
    .map((t) => ({ lang: t.hreflang, href: t.href }));
  const image = tags.find((t) => t.property === "og:image")?.content;
  const issues = [];
  if (!/<title>[^<]+<\/title>/i.test(html)) issues.push("TITLE_MISSING");
  if (!description) issues.push("DESCRIPTION_MISSING");
  if (!canonical) issues.push("CANONICAL_MISSING");
  else if (new URL(canonical, url).origin !== siteOrigin)
    issues.push("CANONICAL_ORIGIN_MISMATCH");
  for (const language of ["ko-KR", "en", "x-default"])
    if (!alternates.some((a) => a.lang === language))
      issues.push("ALTERNATE_MISSING_" + language);
  if (!image) issues.push("OG_IMAGE_MISSING");
  const links = tags
    .filter((t) => t.tag === "a" && t.href?.startsWith("/"))
    .map((t) => new URL(t.href, siteOrigin).href.split("#")[0]);
  const images = tags
    .filter((t) => t.tag === "img" && t.src?.startsWith("/"))
    .map((t) => new URL(t.src, siteOrigin).href);
  return {
    url,
    title: decode(html.match(/<title>([^<]+)<\/title>/i)?.[1] || ""),
    canonical,
    description,
    alternates,
    image,
    issues,
    links,
    images,
  };
}
export async function checkSite({ fetchImpl = fetch, maxPages = 60 } = {}) {
  const result = {
    source: "site",
    collectedAt: new Date().toISOString(),
    status: "OK",
    pages: [],
    resources: [],
    issues: [],
  };
  const get = async (url) => {
    // Bound resource fetching to the public website, with no credentials or JS execution.
    if (new URL(url).origin !== siteOrigin) throw new Error("ORIGIN_MISMATCH");
    const response = await fetchImpl(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (response.url && new URL(response.url).origin !== siteOrigin)
      throw new Error("REDIRECT_ORIGIN_MISMATCH");
    return response;
  };
  try {
    const robots = await get(siteOrigin + "/robots.txt");
    if (!robots.ok) result.issues.push("ROBOTS_HTTP_" + robots.status);
    else if (!(await robots.text()).includes(siteOrigin + "/sitemap.xml"))
      result.issues.push("ROBOTS_SITEMAP_MISSING");
    const sitemap = await get(siteOrigin + "/sitemap.xml");
    if (!sitemap.ok) throw new Error("SITEMAP_UNAVAILABLE");
    const xml = await sitemap.text();
    const urls = [
      ...new Set(
        [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1])),
      ),
    ];
    if (!urls.length) throw new Error("SITEMAP_EMPTY");
    result.sitemapCount = urls.length;
    const resources = new Set();
    for (const url of urls.slice(0, maxPages)) {
      try {
        const response = await get(url);
        if (!response.ok) {
          result.pages.push({ url, issues: ["HTTP_" + response.status] });
          continue;
        }
        const page = inspectHtml(await response.text(), url);
        for (const link of [
          ...page.links,
          ...page.images,
          ...page.alternates.map((a) => a.href),
          page.image,
        ].filter(Boolean)) {
          if (new URL(link, siteOrigin).origin === siteOrigin)
            resources.add(new URL(link, siteOrigin).href);
        }
        result.pages.push(page);
      } catch {
        result.pages.push({ url, issues: ["PAGE_FETCH_FAILED"] });
      }
    }
    const sampled = urls.length > maxPages;
    if (sampled) result.issues.push("PAGE_CHECK_LIMIT_REACHED");
    const checked = new Set(result.pages.map((p) => p.url));
    const pending = [...resources].filter((r) => !checked.has(r));
    for (const url of pending.slice(0, 200)) {
      try {
        const response = await get(url);
        result.resources.push({ url, status: response.status });
        await response.body?.cancel();
      } catch {
        result.resources.push({ url, status: null });
      }
    }
    if (pending.length > 200)
      result.issues.push("RESOURCE_CHECK_LIMIT_REACHED");
    if (
      result.issues.length ||
      result.pages.some((p) => p.issues.length) ||
      result.resources.some((r) => r.status !== 200)
    )
      result.status = "PARTIAL";
    result.coverage =
      "HTTP and HTML checks only; mobile rendering and external source links require browser review.";
  } catch {
    result.status = "UNAVAILABLE";
    result.issues.push("SITE_CHECK_FAILED");
  }
  return result;
}
