import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { localizedSitePath, pagePath, primaryNavigation, siteLocales, sitePages, staticHtmlRoutes } from "../app/site-spec.ts";

const projectRoot = new URL("../", import.meta.url);
const outputRoot = new URL("../out/", import.meta.url);

const routes = staticHtmlRoutes();

test("keeps the site hierarchy internally consistent", () => {
  const paths = Object.values(sitePages).map((page) => page.path);
  assert.equal(new Set(paths).size, paths.length, "page paths must be unique");
  assert.equal(sitePages.roblox.parent, "works");
  assert.match(sitePages.roblox.path, /^\/works\//);

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

test("exports matching Korean and English navigation", async () => {
  const [koreanHome, englishHome, englishConsulting, koreanRoblox] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("en/index.html", outputRoot), "utf8"),
    readFile(new URL("en/consulting/ai-native/index.html", outputRoot), "utf8"),
    readFile(new URL("works/roblox/index.html", outputRoot), "utf8"),
  ]);

  assert.match(koreanHome, /href="\/en\/"/);
  assert.match(englishHome, /href="\/"/);
  assert.match(englishHome, /From bold ideas/);
  assert.match(englishConsulting, /An organization built to solve problems/);
  assert.match(englishConsulting, /href="\/consulting\/ai-native"/);
  assert.match(englishConsulting, /forest2-brand-section[^>]*>Consulting · AI-Native Organization/);
  assert.match(koreanRoblox, /forest2-brand-section[^>]*>Roblox/);
  assert.match(koreanRoblox, /forest2-brand-section[^>]*href="\/works\/roblox"/);
  assert.match(koreanRoblox, /aria-current="page" href="\/works"/);
  assert.match(koreanRoblox, /101526777002639\/unnamed/);
  assert.match(koreanRoblox, /138101004117090\/Bomb-Rain-You-Won-t-Last/);
  assert.match(koreanRoblox, /Paper Boat Exploration: Seoul Waterways Adventure/);
  assert.match(koreanRoblox, /Bomb Rain/);
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
