import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { localizedSitePath, pagePath, primaryNavigation, siteLocales, sitePages, staticHtmlRoutes } from "../app/site-spec.ts";

const projectRoot = new URL("../", import.meta.url);
const outputRoot = new URL("../out/", import.meta.url);
const siteOrigin = "https://jjgo.io";

const routes = staticHtmlRoutes();
const canonicalPageIds = Object.keys(sitePages).filter((page) => page !== "method");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function trailingSlash(path) {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

function publicUrl(locale, path) {
  return new URL(trailingSlash(localizedSitePath(locale, path)), siteOrigin).toString();
}

function outputRoute(locale, path) {
  const localized = localizedSitePath(locale, path);
  return localized === "/" ? "index.html" : `${localized.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
}

function elementTags(html, name) {
  return html.match(new RegExp(`<${escapeRegExp(name)}\\b[^>]*>`, "gi")) ?? [];
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${escapeRegExp(name)}=(["'])(.*?)\\1`, "i"));
  return match?.[2] ?? null;
}

function matchingTags(html, name, expectedAttributes) {
  return elementTags(html, name).filter((tag) =>
    Object.entries(expectedAttributes).every(([key, value]) => attribute(tag, key) === value),
  );
}

function singleTagAttribute(html, name, expectedAttributes, resultAttribute, route) {
  const tags = matchingTags(html, name, expectedAttributes);
  assert.equal(tags.length, 1, `${route}: expected one ${name} tag matching ${JSON.stringify(expectedAttributes)}`);
  const value = attribute(tags[0], resultAttribute);
  assert.ok(value, `${route}: ${name} tag must have ${resultAttribute}`);
  return value;
}

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseJsonLd(html, route) {
  const scripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length > 0, `${route}: expected JSON-LD`);
  return scripts.map((match, index) => {
    assert.doesNotThrow(() => JSON.parse(match[1]), `${route}: JSON-LD script ${index + 1} must parse`);
    return JSON.parse(match[1]);
  });
}

function jsonLdNodes(values) {
  return values.flatMap((value) => {
    if (Array.isArray(value)) return jsonLdNodes(value);
    if (value && typeof value === "object") {
      return [value, ...jsonLdNodes(Array.isArray(value["@graph"]) ? value["@graph"] : [])];
    }
    return [];
  });
}

async function builtJavaScript() {
  const staticRoot = new URL("_next/static/", outputRoot);
  const files = (await readdir(staticRoot, { recursive: true }))
    .map((file) => file.replaceAll("\\", "/"))
    .filter((file) => file.endsWith(".js"));
  return (await Promise.all(files.map((file) => readFile(new URL(file, staticRoot), "utf8")))).join("\n");
}

test("keeps the site hierarchy internally consistent", () => {
  const paths = Object.values(sitePages).map((page) => page.path);
  assert.equal(new Set(paths).size, paths.length, "page paths must be unique");
  assert.equal(sitePages.roblox.parent, "works");
  assert.match(sitePages.roblox.path, /^\/works\//);
  assert.equal(sitePages.aiSlop.parent, "works");
  assert.match(sitePages.aiSlop.path, /^\/works\//);

  for (const [id, page] of Object.entries(sitePages)) {
    if (!page.parent) continue;
    const parent = sitePages[page.parent];
    assert.ok(page.path.startsWith(`${parent.path}/`), `${id} must stay below ${page.parent}`);
    assert.equal(page.nav, parent.nav, `${id} must keep its parent's global navigation state`);
  }

  assert.deepEqual(primaryNavigation.map((item) => item.id), ["home", "works", "consulting", "about"]);
});

test("exports every public route as static HTML", async () => {
  const exportedIndexFiles = (await readdir(outputRoot, { recursive: true }))
    .map((file) => file.replaceAll("\\", "/"))
    .filter((file) => file === "index.html" || file.endsWith("/index.html"))
    .filter((file) => file !== "404/index.html" && file !== "_not-found/index.html")
    .sort();
  assert.deepEqual(exportedIndexFiles, [...routes].sort(), "every exported route must be declared in the site manifest");

  for (const route of routes) {
    const file = new URL(route, outputRoot);
    await access(file);
    const html = await readFile(file, "utf8");
    assert.match(html, /<!DOCTYPE html>/i, route);
    assert.match(html, /<title>.*JJGo.*<\/title>/i, route);
    assert.doesNotMatch(html, /localhost:3000|_vinext/i, route);
  }
});

test("publishes canonical, language, Open Graph, and Twitter metadata", async () => {
  for (const pageId of canonicalPageIds) {
    const path = pagePath(pageId);
    for (const locale of siteLocales) {
      const route = outputRoute(locale, path);
      const html = await readFile(new URL(route, outputRoot), "utf8");
      const expectedCanonical = publicUrl(locale, path);
      const expectedAuthorPath = trailingSlash(localizedSitePath(locale, "/about"));
      const expectedLanguages = {
        "ko-KR": publicUrl("ko", path),
        en: publicUrl("en", path),
        "x-default": publicUrl("ko", path),
      };

      assert.equal(
        singleTagAttribute(html, "link", { rel: "canonical" }, "href", route),
        expectedCanonical,
        `${route}: canonical URL`,
      );
      assert.equal(singleTagAttribute(html, "link", { rel: "author" }, "href", route), expectedAuthorPath, `${route}: localized author page`);
      assert.equal(singleTagAttribute(html, "meta", { name: "author" }, "content", route), locale === "ko" ? "이정주" : "Jungju Lee", `${route}: localized author name`);

      for (const [language, expectedUrl] of Object.entries(expectedLanguages)) {
        assert.equal(
          singleTagAttribute(html, "link", { rel: "alternate", hrefLang: language }, "href", route),
          expectedUrl,
          `${route}: ${language} alternate`,
        );
      }

      const ogTitle = singleTagAttribute(html, "meta", { property: "og:title" }, "content", route);
      const ogDescription = singleTagAttribute(html, "meta", { property: "og:description" }, "content", route);
      assert.ok(ogTitle.length > 0, `${route}: Open Graph title`);
      assert.ok(ogDescription.length > 0, `${route}: Open Graph description`);
      assert.equal(singleTagAttribute(html, "meta", { property: "og:url" }, "content", route), expectedCanonical, `${route}: Open Graph URL`);
      assert.equal(singleTagAttribute(html, "meta", { property: "og:site_name" }, "content", route), "JJGo", `${route}: Open Graph site name`);
      assert.equal(singleTagAttribute(html, "meta", { property: "og:type" }, "content", route), "website", `${route}: Open Graph type`);
      assert.match(singleTagAttribute(html, "meta", { property: "og:image" }, "content", route), /^https:\/\/jjgo\.io\//, `${route}: absolute Open Graph image`);

      assert.equal(singleTagAttribute(html, "meta", { name: "twitter:card" }, "content", route), "summary_large_image", `${route}: Twitter card`);
      assert.ok(singleTagAttribute(html, "meta", { name: "twitter:title" }, "content", route).length > 0, `${route}: Twitter title`);
      assert.ok(singleTagAttribute(html, "meta", { name: "twitter:description" }, "content", route).length > 0, `${route}: Twitter description`);
      assert.match(singleTagAttribute(html, "meta", { name: "twitter:image" }, "content", route), /^https:\/\/jjgo\.io\//, `${route}: absolute Twitter image`);
    }
  }
});

test("emits parseable identity and service JSON-LD", async () => {
  for (const locale of siteLocales) {
    const homeRoute = outputRoute(locale, "/");
    const home = await readFile(new URL(homeRoute, outputRoot), "utf8");
    const homeNodes = jsonLdNodes(parseJsonLd(home, homeRoute));
    assert.ok(homeNodes.some((node) => node["@type"] === "WebSite"), `${homeRoute}: WebSite JSON-LD`);
    const person = homeNodes.find((node) => node["@type"] === "Person");
    assert.ok(person, `${homeRoute}: Person JSON-LD`);
    assert.equal(person.name, locale === "ko" ? "이정주" : "Jungju Lee", `${homeRoute}: localized Person name`);

    const aboutRoute = outputRoute(locale, "/about");
    const about = await readFile(new URL(aboutRoute, outputRoot), "utf8");
    const aboutNodes = jsonLdNodes(parseJsonLd(about, aboutRoute));
    assert.ok(aboutNodes.some((node) => node["@type"] === "ProfilePage"), `${aboutRoute}: ProfilePage JSON-LD`);

    for (const path of ["/consulting/ai-native", "/consulting/ax", "/consulting/platform-engineering"]) {
      const route = outputRoute(locale, path);
      const html = await readFile(new URL(route, outputRoot), "utf8");
      const service = jsonLdNodes(parseJsonLd(html, route)).find((node) => node["@type"] === "Service");
      assert.ok(service, `${route}: Service JSON-LD`);
      assert.equal(service.url, publicUrl(locale, path), `${route}: Service URL`);
      assert.equal(service.provider?.["@id"], `${siteOrigin}/#jungju-lee`, `${route}: Person provider`);
    }
  }
});

test("publishes crawl directives and a localized canonical sitemap", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", outputRoot), "utf8"),
    readFile(new URL("sitemap.xml", outputRoot), "utf8"),
  ]);

  assert.match(robots, /^User-Agent:\s*\*$/im);
  assert.match(robots, /^Allow:\s*\/$/im);
  assert.match(robots, /^Sitemap:\s*https:\/\/jjgo\.io\/sitemap\.xml$/im);
  assert.doesNotMatch(robots, /Disallow:\s*\//i);

  const expectedUrls = canonicalPageIds
    .flatMap((pageId) => siteLocales.map((locale) => publicUrl(locale, pagePath(pageId))))
    .sort();
  const actualUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).sort();
  assert.deepEqual(actualUrls, expectedUrls, "sitemap must contain each canonical locale URL exactly once");
  assert.doesNotMatch(sitemap, /https:\/\/jjgo\.io\/(?:en\/)?method\//, "compatibility routes must stay out of the sitemap");

  const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
  assert.equal(urlBlocks.length, expectedUrls.length);
  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    assert.ok(loc, "sitemap URL block must have loc");
    const canonicalPath = loc.replace(/^https:\/\/jjgo\.io(?:\/en)?/, "").replace(/\/$/, "") || "/";
    const path = canonicalPath === "/" ? "/" : canonicalPath;
    const expectedLanguages = {
      "ko-KR": publicUrl("ko", path),
      en: publicUrl("en", path),
      "x-default": publicUrl("ko", path),
    };
    for (const [language, expectedUrl] of Object.entries(expectedLanguages)) {
      const links = matchingTags(block, "xhtml:link", { rel: "alternate", hreflang: language });
      assert.equal(links.length, 1, `${loc}: one ${language} sitemap alternate`);
      assert.equal(attribute(links[0], "href"), expectedUrl, `${loc}: ${language} sitemap alternate URL`);
    }
  }
});

test("keeps legacy method routes out of the index", async () => {
  for (const locale of siteLocales) {
    const route = outputRoute(locale, "/method");
    const html = await readFile(new URL(route, outputRoot), "utf8");
    assert.equal(
      singleTagAttribute(html, "link", { rel: "canonical" }, "href", route),
      publicUrl(locale, "/consulting"),
      `${route}: legacy canonical`,
    );
    const robots = singleTagAttribute(html, "meta", { name: "robots" }, "content", route);
    assert.match(robots, /(?:^|,\s*)noindex(?:,|$)/i, `${route}: noindex`);
    assert.match(robots, /(?:^|,\s*)follow(?:,|$)/i, `${route}: follow links`);
  }
});

test("gives each public page one semantic primary heading", async () => {
  for (const route of routes) {
    const html = await readFile(new URL(route, outputRoot), "utf8");
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${route}: exactly one h1`);
  }
});

test("declares the correct document language for each locale", async () => {
  for (const locale of siteLocales) {
    const localeRoutes = routes.filter((route) => locale === "ko" ? !route.startsWith("en/") : route.startsWith("en/"));
    for (const route of localeRoutes) {
      const html = await readFile(new URL(route, outputRoot), "utf8");
      assert.match(html, new RegExp(`<html\\s+lang=["']${locale}["']`, "i"), `${route}: document language`);
    }
  }
});

test("exports matching Korean and English navigation", async () => {
  const [koreanHome, englishHome, englishConsulting, koreanRoblox, koreanAiSlop, englishAiSlop] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("en/index.html", outputRoot), "utf8"),
    readFile(new URL("en/consulting/ai-native/index.html", outputRoot), "utf8"),
    readFile(new URL("works/roblox/index.html", outputRoot), "utf8"),
    readFile(new URL("works/ai-slop/index.html", outputRoot), "utf8"),
    readFile(new URL("en/works/ai-slop/index.html", outputRoot), "utf8"),
  ]);

  assert.match(koreanHome, /href="\/en\/"/);
  assert.match(englishHome, /href="\/"/);
  assert.match(englishHome, /AI products and platforms/);
  assert.match(englishHome, /designed to work and last\./);
  assert.match(englishConsulting, /AI-Native Organization Transformation/);
  assert.match(englishConsulting, /href="\/consulting\/ai-native"/);
  assert.match(englishConsulting, /forest2-brand-section[^>]*>Consulting · AI-Native Organization/);
  assert.match(koreanRoblox, /forest2-brand-section[^>]*>Roblox/);
  assert.match(koreanRoblox, /forest2-brand-section[^>]*href="\/works\/roblox"/);
  assert.match(koreanRoblox, /aria-current="page" href="\/works"/);
  assert.match(koreanRoblox, /101526777002639\/unnamed/);
  assert.match(koreanRoblox, /138101004117090\/Bomb-Rain-You-Won-t-Last/);
  assert.match(koreanRoblox, /Paper Boat Exploration: Seoul Waterways Adventure/);
  assert.match(koreanRoblox, /Bomb Rain/);
  assert.match(koreanAiSlop, /AI가 만들고,[\s\S]*AI가 연재합니다/);
  assert.match(koreanAiSlop, /href="https:\/\/slop\.jjgo\.io"/);
  assert.match(koreanAiSlop, /바람이 돌아오는 곳/);
  assert.match(englishAiSlop, /Created by AI,[\s\S]*published by AI/);
  assert.match(englishAiSlop, /The Place Where the Wind Returns/);
});

test("keeps the home hero focused without the legacy summary cards", async () => {
  const [koreanHome, englishHome] = await Promise.all([
    readFile(new URL(outputRoute("ko", "/"), outputRoot), "utf8"),
    readFile(new URL(outputRoute("en", "/"), outputRoot), "utf8"),
  ]);

  for (const home of [koreanHome, englishHome]) {
    assert.doesNotMatch(home, /class="forest2-(?:home-card|tablet-feature-card|mobile-feature-card|connect-card)"/);
    assert.match(home, /id="home-capabilities"/);
    assert.match(home, /href="#home-capabilities"/);
    assert.match(home, /class="forest2-home-expansion"/);
  }
});

test("keeps inquiries and coffee chats in the About contact area", async () => {
  const [koreanAbout, englishAbout] = await Promise.all([
    readFile(new URL("about/index.html", outputRoot), "utf8"),
    readFile(new URL("en/about/index.html", outputRoot), "utf8"),
  ]);

  assert.match(koreanAbout, /문의와 커피챗, 모두 편하게 연락해 주세요/);
  assert.match(koreanAbout, /href="mailto:leejungju\.go@gmail\.com">메일 보내기/);
  assert.match(koreanAbout, />leejungju\.go@gmail\.com<\/a>/);
  assert.doesNotMatch(koreanAbout, /\/coffee-chat|커피챗 신청하기/);
  assert.match(englishAbout, /Questions or a coffee chat\? Feel free to reach out/);
  assert.match(englishAbout, /href="mailto:leejungju\.go@gmail\.com">Send an email/);
  assert.doesNotMatch(englishAbout, /\/coffee-chat|Request a coffee chat/);
});

test("does not publish the removed company name", async () => {
  const published = await Promise.all(routes.map((route) => readFile(new URL(route, outputRoot), "utf8")));
  published.push(await builtJavaScript());
  assert.doesNotMatch(published.join("\n"), /\bN3N\b/i);
});

test("renders the manifest navigation on every public page", async () => {
  for (const locale of siteLocales) {
    const expectedLinks = primaryNavigation.map((item) => localizedSitePath(locale, pagePath(item.page)));
    const localeRoutes = routes.filter((route) => locale === "ko" ? !route.startsWith("en/") : route.startsWith("en/"));

    for (const route of localeRoutes) {
      const html = await readFile(new URL(route, outputRoot), "utf8");
      for (const href of expectedLinks) {
        assert.match(html, new RegExp(`href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `${route}: ${href}`);
      }
    }
  }
});

test("places the language switcher at the far-right end of every header", async () => {
  for (const route of routes) {
    const html = await readFile(new URL(route, outputRoot), "utf8");
    const header = html.match(/<header class="forest2-topbar"[\s\S]*?<\/header>/)?.[0] ?? "";
    const navigation = header.match(/<nav class="forest2-nav"[\s\S]*?<\/nav>/)?.[0] ?? "";

    assert.match(header, /<\/nav><span class="forest2-language-toggle"[\s\S]*?<\/span><\/header>$/, route);
    assert.doesNotMatch(navigation, /forest2-language-toggle/, route);
  }
});

test("uses only source-backed platform scale claims", async () => {
  const htmlByRoute = await Promise.all(routes.map(async (route) => [route, await readFile(new URL(route, outputRoot), "utf8")]));
  for (const [route, html] of htmlByRoute) {
    const text = visibleText(html);
    assert.doesNotMatch(text, /1만\s*대?\+?|10K\+?/i, `${route}: unsupported 10K-server claim`);
    assert.doesNotMatch(text, /20\s*개\+|20\+\s*(?:products|platforms)/i, `${route}: unsupported 20+ product/platform claim`);
  }

  const [koreanPlatform, englishPlatform] = await Promise.all([
    readFile(new URL(outputRoute("ko", "/consulting/platform-engineering"), outputRoot), "utf8"),
    readFile(new URL(outputRoute("en", "/consulting/platform-engineering"), outputRoot), "utf8"),
  ]);
  const koreanText = visibleText(koreanPlatform);
  const englishText = visibleText(englishPlatform);

  assert.match(koreanText, /약\s*200개[\s\S]{0,80}Kubernetes[\s\S]{0,40}클러스터/i, "Korean platform page: about 200 Kubernetes clusters");
  assert.match(koreanText, /1,000(?:개)?\+[\s\S]{0,80}(?:Kubernetes[\s\S]{0,20})?노드/i, "Korean platform page: 1,000+ nodes");
  assert.match(koreanText, /15(?:개)?\+[\s\S]{0,80}클라우드\s*서비스/i, "Korean platform page: 15+ cloud services");

  assert.match(englishText, /About\s+200[\s\S]{0,80}Kubernetes\s+clusters/i, "English platform page: about 200 Kubernetes clusters");
  assert.match(englishText, /1,000\+[\s\S]{0,80}(?:Kubernetes\s+)?nodes/i, "English platform page: 1,000+ nodes");
  assert.match(englishText, /15\+[\s\S]{0,80}cloud\s+services/i, "English platform page: 15+ cloud services");
});

test("uses a meaningful AI-native outcome instead of the small team-size claim", async () => {
  const [koreanPage, englishPage] = await Promise.all([
    readFile(new URL(outputRoute("ko", "/consulting/ai-native"), outputRoot), "utf8"),
    readFile(new URL(outputRoute("en", "/consulting/ai-native"), outputRoot), "utf8"),
  ]);
  const koreanText = visibleText(koreanPage);
  const englishText = visibleText(englishPage);

  assert.doesNotMatch(koreanText, /최대\s*10명|개발팀\s*리드/);
  assert.doesNotMatch(englishText, /Up to 10|Team leadership/i);
  assert.match(koreanText, /80%[\s\S]{0,80}AI 환경 준비 시간 단축/);
  assert.match(englishText, /80%[\s\S]{0,80}AI environment setup/i);
});

test("ships a curated Works set without archived or internal-only targets", async () => {
  const [koreanWorks, englishWorks, javascript] = await Promise.all([
    readFile(new URL(outputRoute("ko", "/works"), outputRoot), "utf8"),
    readFile(new URL(outputRoute("en", "/works"), outputRoot), "utf8"),
    builtJavaScript(),
  ]);
  const builtWorks = `${koreanWorks}\n${englishWorks}\n${javascript}`;

  for (const archivedUrl of [
    "https://homi.jjgo.io",
    "https://gamelingo.jjgo.io",
    "https://study.jjgo.io",
  ]) {
    assert.doesNotMatch(builtWorks, new RegExp(escapeRegExp(archivedUrl), "i"), `archived target must not ship: ${archivedUrl}`);
  }

  assert.doesNotMatch(builtWorks, /\/api\/jhub\/entities\//i, "static portfolio must not ship server-only preview URLs");
  assert.doesNotMatch(builtWorks, /scripts\/deploy-vdvd-games\.sh|html5-exports\/|output\/github-pages\//i, "internal deployment instructions must not ship");
  assert.doesNotMatch(builtWorks, /A practical experiment turned into a working digital experience\./i, "generic generated descriptions must not ship");

  for (const [route, html] of [["works/index.html", koreanWorks], ["en/works/index.html", englishWorks]]) {
    assert.match(html, /href="https:\/\/okgo4\.jjgo\.io\/?"/, `${route}: verified SaaS project link`);
    assert.match(html, /href="https:\/\/mytoon\.jjgo\.io\/?"/, `${route}: verified comics project link`);
    assert.match(html, /href="https:\/\/slop\.jjgo\.io\/?"/, `${route}: verified AI Slop project link`);
    assert.match(html, /href="\/(?:en\/)?works\/ai-slop\/?"/, `${route}: AI Slop project page link`);
    assert.match(html, /href="\/(?:en\/)?works\/roblox\/?"/, `${route}: curated Roblox collection link`);
  }
});

test("uses a serverless static-export configuration", async () => {
  const [config, packageJson, workflow] = await Promise.all([
    readFile(new URL("next.config.ts", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
    readFile(new URL(".github/workflows/pages.yml", projectRoot), "utf8"),
  ]);

  assert.match(config, /output:\s*["']export["']/);
  assert.match(config, /trailingSlash:\s*true/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|drizzle|cloudflare/i);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /path:\s*out/);
});

test("configures PostHog web analytics for static deployment", async () => {
  const [instrumentation, packageJson, workflow] = await Promise.all([
    readFile(new URL("instrumentation-client.ts", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
    readFile(new URL(".github/workflows/pages.yml", projectRoot), "utf8"),
  ]);

  assert.match(packageJson, /"posthog-js"/);
  assert.match(instrumentation, /posthog\.init\(/);
  assert.match(instrumentation, /capture_pageview:\s*["']history_change["']/);
  assert.match(instrumentation, /disable_session_recording:\s*true/);
  assert.match(workflow, /NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN:\s*\$\{\{\s*vars\.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN\s*\}\}/);
});

test("ships static assets without server infrastructure", async () => {
  await Promise.all([
    access(new URL("a/logo/jjgo-logo.png", outputRoot)),
    access(new URL("a/generated/threejs-summer-leaf.png", outputRoot)),
    access(new URL("a/generated/roblox/paper-boat-seoul.png", outputRoot)),
    access(new URL("a/generated/roblox/paper-boat-seoul-icon.png", outputRoot)),
    access(new URL("a/generated/roblox/bomb-rain.png", outputRoot)),
    access(new URL("a/generated/roblox/bomb-rain-icon.png", outputRoot)),
    access(new URL(".nojekyll", outputRoot)),
  ]);

  await assert.rejects(access(new URL("worker/index.ts", projectRoot)));
  await assert.rejects(access(new URL(".openai/hosting.json", projectRoot)));
  await assert.rejects(access(new URL("vite.config.ts", projectRoot)));
});
