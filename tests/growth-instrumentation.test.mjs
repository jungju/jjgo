import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(
  new URL("../instrumentation-client.ts", import.meta.url),
  "utf8",
);
const code = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
function harness({
  hostname = "jjgo.io",
  webdriver = false,
  disabled = false,
  storageError = false,
} = {}) {
  const events = [];
  const listeners = {};
  let now = 0;
  let interval;
  const stored = new Map();
  const posthog = {
    init: () => events.push({ event: "init" }),
    capture: (event, props) => events.push({ event, props }),
    get_session_id: () => "session-1",
  };
  const document = {
    readyState: "complete",
    visibilityState: "visible",
    querySelector: () => ({
      getBoundingClientRect: () => ({ top: 0, height: 1000 }),
    }),
    addEventListener: (name, handler) => {
      listeners[name] = handler;
    },
    removeEventListener: () => {},
  };
  const window = {
    location: {
      hostname,
      pathname: "/notes/example/",
      href: "https://jjgo.io/notes/example/",
      origin: "https://jjgo.io",
    },
    innerHeight: 800,
    addEventListener: () => {},
    setInterval: (fn) => {
      interval = fn;
      return 1;
    },
  };
  vm.runInNewContext(code, {
    exports: {},
    require: () => ({ default: posthog }),
    process: {
      env: {
        NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: "test",
        NODE_ENV: "production",
      },
    },
    window,
    document,
    navigator: { webdriver },
    localStorage: { getItem: () => (disabled ? "1" : null) },
    sessionStorage: {
      getItem: (key) => {
        if (storageError) throw new Error("denied");
        return stored.get(key);
      },
      setItem: (k, v) => stored.set(k, v),
    },
    performance: { now: () => now },
    clearInterval: () => {
      interval = null;
    },
    URL,
  });
  return {
    events,
    document,
    listeners,
    tick(seconds) {
      for (let i = 0; i < seconds; i++) {
        now += 1000;
        interval?.();
      }
    },
    click(path, related = false) {
      listeners.click?.({
        target: {
          closest: () => ({
            href: "https://jjgo.io" + path,
            closest: () => (related ? {} : null),
          }),
        },
      });
    },
  };
}
test("local preview, webdriver and owner opt-out produce no analytics", () => {
  for (const config of [
    { hostname: "localhost" },
    { webdriver: true },
    { disabled: true },
  ])
    assert.deepEqual(harness(config).events, []);
});
test("article engagement requires foreground time; hidden time does not count", () => {
  const h = harness();
  h.tick(15);
  h.document.visibilityState = "hidden";
  h.listeners.visibilitychange();
  h.tick(60);
  assert.equal(h.events.filter((e) => e.event === "article_engaged").length, 0);
  h.document.visibilityState = "visible";
  h.listeners.visibilitychange();
  h.tick(15);
  assert.equal(h.events.filter((e) => e.event === "article_engaged").length, 1);
  h.tick(60);
  assert.equal(h.events.filter((e) => e.event === "article_engaged").length, 1);
});
test("RSS, related and consulting clicks are different from conversions", () => {
  const h = harness();
  h.click("/notes/feed.xml");
  h.click("/notes/another/", true);
  h.click("/consulting/");
  assert.deepEqual(
    h.events.map((e) => e.event),
    ["init", "rss_click", "related_article_click", "consulting_cta_click"],
  );
});
test("storage restrictions do not break article reading", () => {
  const h = harness({ storageError: true });
  assert.doesNotThrow(() => h.tick(40));
  assert.equal(h.events.filter((e) => e.event === "article_engaged").length, 0);
});
