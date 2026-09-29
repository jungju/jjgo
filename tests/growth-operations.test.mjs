import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadConfig, periods, safeError } from "../scripts/growth/config.mjs";
import { requestJson } from "../scripts/growth/http.mjs";
import {
  eventFilter,
  collectPosthog,
} from "../scripts/growth/collect-posthog.mjs";
import {
  collectSearchConsole,
  searchRows,
} from "../scripts/growth/collect-search-console.mjs";
import {
  openState,
  acquireLock,
  startRun,
  finishRun,
  recordWork,
} from "../scripts/growth/state.mjs";
import { inspectHtml } from "../scripts/growth/check-site.mjs";

function temporary(t, beforeCleanup = () => {}) {
  const dir = mkdtempSync(join(tmpdir(), "jjgo-growth-"));
  t.after(() => {
    beforeCleanup();
    rmSync(dir, { recursive: true, force: true });
  });
  return dir;
}
test("KST midnight excludes current partial day, GSC uses Pacific dates", () => {
  const p = periods(new Date("2026-09-28T15:00:00Z"));
  assert.equal(p.day, "2026-09-29");
  assert.equal(p.posthog[0].start, "2026-09-28T00:00:00+09:00");
  assert.equal(p.search.end, "2026-09-25");
  assert.equal(p.search.start, "2026-08-29");
});
test("conflicting private env values fail without printing secrets", (t) => {
  const dir = temporary(t);
  const env = join(dir, ".env");
  writeFileSync(
    env,
    "POSTHOG_PROJECT_ID=560419\nPOSTHOG_APP_HOST=https://us.posthog.com\nPOSTHOG_PERSONAL_API_KEY=phx_secret\n",
  );
  writeFileSync(
    join(dir, ".env.local"),
    "POSTHOG_PERSONAL_API_KEY=phx_different\n",
  );
  assert.throws(() => loadConfig(env), /ENV_CONFLICT_POSTHOG_PERSONAL_API_KEY/);
  assert.equal(safeError(new Error("phx_secret")), "UNEXPECTED_ERROR");
});
test("requests retry transient failures, never leak response body", async () => {
  let calls = 0;
  const result = await requestJson(
    "https://example.test",
    {},
    {
      sleepImpl: async () => {},
      fetchImpl: async () =>
        ++calls < 3
          ? new Response("private-token", { status: 503 })
          : Response.json({ ok: true }),
    },
  );
  assert.equal(calls, 3);
  assert.equal(result.ok, true);
  await assert.rejects(
    () =>
      requestJson(
        "https://example.test",
        {},
        {
          fetchImpl: async () => new Response("private-token", { status: 401 }),
        },
      ),
    /^GrowthError: HTTP_401$/,
  );
});
test("PostHog scopes the host and time without guessing internal users", async () => {
  const filter = eventFilter(
    { internalIds: [] },
    "2026-09-01T00:00:00+09:00",
    "2026-09-02T00:00:00+09:00",
  );
  assert.match(filter, /properties\.\$host = 'jjgo.io'/);
  assert.match(filter, /timestamp </);
  assert.doesNotMatch(filter, /NOT IN/);
  const result = await collectPosthog(
    {
      internalIds: [],
      posthogHost: "https://us.posthog.com",
      posthogProject: "560419",
      posthogKey: "never-print",
    },
    periods().posthog,
    async () => {
      throw new Error("secret");
    },
  );
  assert.equal(result.status, "UNAVAILABLE");
  assert.deepEqual(result.windows, []);
  assert.doesNotMatch(JSON.stringify(result), /secret|never-print/);
});
test("GSC missing configuration is not zero traffic", async () => {
  const result = await collectSearchConsole(
    { googleCredentials: null, googleSite: "sc-domain:jjgo.io" },
    periods().search,
  );
  assert.equal(result.status, "UNAVAILABLE");
  assert.equal(result.reason, "GSC_CREDENTIALS_NOT_CONFIGURED");
  assert.equal(result.groups, undefined);
});
test("GSC paginates with final data and excludes subdomains", async () => {
  const calls = [];
  const result = await searchRows(
    "sc-domain:jjgo.io",
    "secret",
    { start: "2026-09-01", end: "2026-09-28" },
    ["query"],
    async (url, options) => {
      const body = JSON.parse(options.body);
      calls.push(body);
      return {
        rows:
          body.startRow === 0
            ? Array(25000).fill({ keys: ["example"], clicks: 1 })
            : [],
      };
    },
  );
  assert.equal(result.rows.length, 25000);
  assert.equal(result.capped, false);
  assert.equal(calls[1].startRow, 25000);
  assert.equal(calls[0].dataState, "final");
  assert.equal(
    calls[0].dimensionFilterGroups[0].filters[0].expression,
    "^https://jjgo\\.io/",
  );
});
test("partial provider failure preserves completed windows without claiming success", async () => {
  let calls = 0;
  const result = await collectPosthog(
    {
      internalIds: [],
      posthogHost: "https://us.posthog.com",
      posthogProject: "560419",
      posthogKey: "secret",
    },
    periods().posthog,
    async () => {
      if (++calls > 2) throw new Error("failed");
      return { results: [[4, 2, 2]] };
    },
  );
  assert.equal(result.status, "PARTIAL");
  assert.equal(result.windows.length, 1);
});
test("lock never expires on age; owner controls release", (t) => {
  const dir = temporary(t);
  const release = acquireLock(dir);
  assert.throws(() => acquireLock(dir), /RUN_LOCKED/);
  const lock = JSON.parse(readFileSync(join(dir, "run.lock"), "utf8"));
  assert.equal(lock.pid, process.pid);
  release();
  const next = acquireLock(dir);
  next();
});
test("daily completion deduplicates and unfinished daily requires explicit resume", (t) => {
  let db;
  db = openState(temporary(t, () => db?.close()));
  const id = startRun(db, "2026-09-29", "daily");
  assert.ok(id);
  assert.throws(() => startRun(db, "2026-09-29", "daily"), /INCOMPLETE_RESUME/);
  finishRun(db, id, "NO_CHANGE", { reason: "test" });
  assert.equal(startRun(db, "2026-09-29", "daily"), null);
  assert.ok(startRun(db, "2026-09-29", "collect"));
});
test("deployed work requires exact commit, workflow, URL and verification time", (t) => {
  let db;
  db = openState(temporary(t, () => db?.close()));
  const work = {
    id: "test",
    day: "2026-09-29",
    kind: "article",
    slug: "example",
    stage: "DEPLOYED",
  };
  assert.throws(() => recordWork(db, work), /DEPLOYMENT_EVIDENCE_REQUIRED/);
  recordWork(db, {
    ...work,
    evidence: {
      commit: "abc",
      deploymentUrl: "https://github.com/run",
      publicUrl: "https://jjgo.io/notes/example/",
      verifiedAt: new Date().toISOString(),
    },
  });
  assert.equal(db.prepare("SELECT stage FROM work").get().stage, "DEPLOYED");
});
test("HTML audit detects missing metadata and wrong canonical without executing script", () => {
  const page = inspectHtml(
    '<html><title>Example</title><link rel="canonical" href="https://other.test/"><a href="/notes/">Notes</a></html>',
    "https://jjgo.io/",
  );
  assert.ok(page.issues.includes("CANONICAL_ORIGIN_MISMATCH"));
  assert.ok(page.issues.includes("DESCRIPTION_MISSING"));
  assert.deepEqual(page.links, ["https://jjgo.io/notes/"]);
});
