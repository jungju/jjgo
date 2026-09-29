import { parseArgs } from "node:util";
import { readFileSync } from "node:fs";
import { loadConfig, periods, safeError, GrowthError } from "./config.mjs";
import {
  acquireLock,
  openState,
  startRun,
  snapshot,
  finishRun,
  finishDailyRun,
  recordWork,
} from "./state.mjs";
import { collectPosthog } from "./collect-posthog.mjs";
import { collectSearchConsole } from "./collect-search-console.mjs";
import { checkSite } from "./check-site.mjs";
import { writeReport } from "./report.mjs";

const { values } = parseArgs({
  options: {
    env: { type: "string" },
    mode: { type: "string", default: "collect" },
    "evidence-file": { type: "string" },
    "run-id": { type: "string" },
  },
});
let release, db, runId;
try {
  const config = loadConfig(values.env);
  release = acquireLock(config.dataDir);
  db = openState(config.dataDir);
  if (values.mode === "record-work") {
    if (!values["evidence-file"])
      throw new GrowthError("EVIDENCE_FILE_REQUIRED");
    recordWork(db, JSON.parse(readFileSync(values["evidence-file"], "utf8")));
    console.log(JSON.stringify({ status: "WORK_RECORDED" }));
  } else if (values.mode === "finish") {
    if (!values["evidence-file"] || !values["run-id"])
      throw new GrowthError("RUN_AND_EVIDENCE_REQUIRED");
    const evidence = JSON.parse(readFileSync(values["evidence-file"], "utf8"));
    finishDailyRun(db, values["run-id"], evidence);
    console.log(
      JSON.stringify({ status: evidence.status, runId: values["run-id"] }),
    );
  } else {
    if (!["collect", "daily", "resume"].includes(values.mode))
      throw new GrowthError("INVALID_MODE");
    const windows = periods();
    if (values.mode === "resume") {
      const prior = db
        .prepare(
          "SELECT * FROM runs WHERE id=? AND mode='daily' AND status IN ('RUNNING','BLOCKED','FAILED')",
        )
        .get(values["run-id"] || "");
      if (!prior) throw new GrowthError("RESUMABLE_RUN_REQUIRED");
      runId = prior.id;
    } else {
      runId = startRun(db, windows.day, values.mode);
    }
    if (!runId) {
      console.log(
        JSON.stringify({
          status: "NO_CHANGE",
          reason: "DAILY_ALREADY_COMPLETED",
        }),
      );
    } else {
      const snapshots = await Promise.all([
        collectPosthog(config, windows.posthog),
        collectSearchConsole(config, windows.search),
        checkSite(),
      ]);
      for (const data of snapshots) snapshot(db, runId, data);
      const report = writeReport(config, runId, windows, snapshots, db);
      const evidence = {
        report,
        stage: "COLLECTED",
        model: "NOT_OBSERVED_BY_COLLECTOR",
        sources: snapshots.map((s) => ({
          source: s.source,
          status: s.status,
          reason: s.reason,
        })),
      };
      if (values.mode === "collect")
        finishRun(
          db,
          runId,
          snapshots.every((s) => s.status === "OK") ? "SUCCEEDED" : "BLOCKED",
          evidence,
        );
      else
        db.prepare("UPDATE runs SET evidence=? WHERE id=?").run(
          JSON.stringify(evidence),
          runId,
        );
      console.log(JSON.stringify({ runId, ...evidence }, null, 2));
    }
  }
} catch (error) {
  if (db && runId) finishRun(db, runId, "FAILED", { reason: safeError(error) });
  console.error(safeError(error));
  process.exitCode = 1;
} finally {
  db?.close();
  release?.();
}
