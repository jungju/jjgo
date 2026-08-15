import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const outputRoot = new URL("../out/", import.meta.url);

const routes = [
  "index.html",
  "about/index.html",
  "works/index.html",
  "method/index.html",
  "consulting/index.html",
  "consulting/ai-native/index.html",
  "consulting/ax/index.html",
  "consulting/platform-engineering/index.html",
  "en/index.html",
  "en/about/index.html",
  "en/works/index.html",
  "en/method/index.html",
  "en/consulting/index.html",
  "en/consulting/ai-native/index.html",
  "en/consulting/ax/index.html",
  "en/consulting/platform-engineering/index.html",
];

test("exports every public route as static HTML", async () => {
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
  const [koreanHome, englishHome, englishConsulting] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("en/index.html", outputRoot), "utf8"),
    readFile(new URL("en/consulting/ai-native/index.html", outputRoot), "utf8"),
  ]);

  assert.match(koreanHome, /href="\/en\/"/);
  assert.match(englishHome, /href="\/"/);
  assert.match(englishHome, /From bold ideas/);
  assert.match(englishConsulting, /An organization built to solve problems/);
  assert.match(englishConsulting, /href="\/consulting\/ai-native"/);
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
    access(new URL(".nojekyll", outputRoot)),
  ]);

  await assert.rejects(access(new URL("worker/index.ts", projectRoot)));
  await assert.rejects(access(new URL(".openai/hosting.json", projectRoot)));
  await assert.rejects(access(new URL("vite.config.ts", projectRoot)));
});
