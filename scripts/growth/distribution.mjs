import { parseArgs } from "node:util";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { loadConfig, GrowthError, safeError } from "./config.mjs";
import { openState, acquireLock } from "./state.mjs";

export function campaignUrl(publicUrl, source, medium, slug) {
  const url = new URL(publicUrl);
  if (
    url.origin !== "https://jjgo.io" ||
    !/^\/(en\/)?notes\/[a-z0-9-]+\/$/.test(url.pathname)
  )
    throw new GrowthError("PUBLISHED_ARTICLE_URL_REQUIRED");
  for (const value of [source, medium, slug])
    if (!/^[a-z0-9-]+$/.test(value))
      throw new GrowthError("INVALID_CAMPAIGN_NAME");
  url.search = "";
  url.hash = "";
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "notes-" + slug);
  return url.href;
}

export function prepareDistribution(config, input, db) {
  if (
    !input.workId ||
    !input.slug ||
    !Array.isArray(input.drafts) ||
    input.drafts.length < 1
  )
    throw new GrowthError("DISTRIBUTION_INPUT_REQUIRED");
  const dir = join(config.dataDir, "distribution");
  mkdirSync(dir, { recursive: true });
  const files = [];
  for (const draft of input.drafts) {
    if (!["ko", "en"].includes(draft.locale) || !draft.text)
      throw new GrowthError("DRAFT_LOCALE_AND_TEXT_REQUIRED");
    const url = campaignUrl(
      draft.publicUrl,
      draft.source,
      draft.medium,
      input.slug,
    );
    const id = `${input.slug}-${draft.source}-${draft.locale}`;
    const existing = db
      .prepare("SELECT status FROM distribution WHERE id=?")
      .get(id);
    if (existing && existing.status !== "DRAFT_ONLY")
      throw new GrowthError("DISTRIBUTION_ALREADY_SENT");
    const payload = {
      ...draft,
      url,
      preparedAt: new Date().toISOString(),
      status: "DRAFT_ONLY",
    };
    db.prepare(
      "INSERT INTO distribution VALUES(?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET payload=excluded.payload",
    ).run(
      id,
      input.workId,
      draft.source,
      "DRAFT_ONLY",
      JSON.stringify(payload),
    );
    const path = join(dir, id + ".md");
    writeFileSync(
      path,
      `# ${input.slug} / ${draft.source} / ${draft.locale}\n\n상태: DRAFT_ONLY — 실제 게시하지 않음\n\n${draft.text}\n\n${url}\n`,
    );
    files.push(path);
  }
  return files;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const { values } = parseArgs({
    options: { env: { type: "string" }, input: { type: "string" } },
  });
  let db, release;
  try {
    const config = loadConfig(values.env);
    release = acquireLock(config.dataDir);
    db = openState(config.dataDir);
    const input = JSON.parse(readFileSync(values.input, "utf8"));
    console.log(
      JSON.stringify({
        status: "DRAFT_ONLY",
        files: prepareDistribution(config, input, db),
      }),
    );
  } catch (error) {
    console.error(safeError(error));
    process.exitCode = 1;
  } finally {
    db?.close();
    release?.();
  }
}
