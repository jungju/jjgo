import { DatabaseSync } from "node:sqlite";
import {
  mkdirSync,
  writeFileSync,
  readFileSync,
  unlinkSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { GrowthError } from "./config.mjs";

export function openState(dataDir) {
  mkdirSync(dataDir, { recursive: true });
  const db = new DatabaseSync(join(dataDir, "growth.sqlite3"));
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS runs (id TEXT PRIMARY KEY, day TEXT NOT NULL, mode TEXT NOT NULL, status TEXT NOT NULL, started_at TEXT NOT NULL, ended_at TEXT, evidence TEXT NOT NULL DEFAULT '{}');
    CREATE TABLE IF NOT EXISTS snapshots (run_id TEXT NOT NULL, source TEXT NOT NULL, payload TEXT NOT NULL, PRIMARY KEY(run_id,source));
    CREATE TABLE IF NOT EXISTS work (id TEXT PRIMARY KEY, day TEXT NOT NULL, kind TEXT NOT NULL, slug TEXT, stage TEXT NOT NULL, evidence TEXT NOT NULL, reevaluate_on TEXT);
    CREATE TABLE IF NOT EXISTS distribution (id TEXT PRIMARY KEY, work_id TEXT NOT NULL, channel TEXT NOT NULL, status TEXT NOT NULL, payload TEXT NOT NULL);
  `);
  return db;
}
export function acquireLock(dataDir) {
  mkdirSync(dataDir, { recursive: true });
  const path = join(dataDir, "run.lock");
  const owner = {
    pid: process.pid,
    id: randomUUID(),
    startedAt: new Date().toISOString(),
  };
  try {
    writeFileSync(path, JSON.stringify(owner), { flag: "wx" });
  } catch (error) {
    if (error.code === "EEXIST")
      throw new GrowthError("RUN_LOCKED_VERIFY_OWNER_BEFORE_RECOVERY");
    throw error;
  }
  return () => {
    if (
      existsSync(path) &&
      JSON.parse(readFileSync(path, "utf8")).id === owner.id
    )
      unlinkSync(path);
  };
}
export function startRun(db, day, mode) {
  if (
    mode === "daily" &&
    db
      .prepare(
        "SELECT id FROM runs WHERE day=? AND mode='daily' AND status IN ('SUCCEEDED','NO_CHANGE')",
      )
      .get(day)
  )
    return null;
  if (
    mode === "daily" &&
    db
      .prepare(
        "SELECT id FROM runs WHERE mode='daily' AND status IN ('RUNNING','BLOCKED','FAILED') ORDER BY started_at LIMIT 1",
      )
      .get()
  )
    throw new GrowthError("DAILY_INCOMPLETE_RESUME_REQUIRED");
  const id = randomUUID();
  db.prepare(
    "INSERT INTO runs(id,day,mode,status,started_at) VALUES(?,?,?,?,?)",
  ).run(id, day, mode, "RUNNING", new Date().toISOString());
  return id;
}
export function snapshot(db, id, value) {
  db.prepare("INSERT OR REPLACE INTO snapshots VALUES(?,?,?)").run(
    id,
    value.source,
    JSON.stringify(value),
  );
}
export function finishRun(db, id, status, evidence) {
  if (!["SUCCEEDED", "NO_CHANGE", "BLOCKED", "FAILED"].includes(status))
    throw new GrowthError("INVALID_RUN_STATUS");
  const existing = db.prepare("SELECT evidence FROM runs WHERE id=?").get(id);
  if (!existing) throw new GrowthError("RUN_NOT_FOUND");
  db.prepare("UPDATE runs SET status=?, ended_at=?, evidence=? WHERE id=?").run(
    status,
    new Date().toISOString(),
    JSON.stringify({ ...JSON.parse(existing.evidence), ...evidence }),
    id,
  );
}
export function finishDailyRun(db, id, evidence) {
  const run = db
    .prepare("SELECT * FROM runs WHERE id=? AND mode='daily'")
    .get(id);
  if (!run) throw new GrowthError("DAILY_RUN_NOT_FOUND");
  if (["SUCCEEDED", "NO_CHANGE"].includes(run.status))
    throw new GrowthError("DAILY_RUN_ALREADY_FINISHED");
  if (!evidence.research || !evidence.decision || !evidence.model)
    throw new GrowthError("RESEARCH_DECISION_MODEL_REQUIRED");
  if (evidence.status === "SUCCEEDED") {
    const work = db
      .prepare("SELECT * FROM work WHERE id=? AND stage='DEPLOYED'")
      .get(evidence.workId || "");
    if (!work) throw new GrowthError("DEPLOYED_WORK_REQUIRED");
    if (JSON.parse(work.evidence).runId !== id)
      throw new GrowthError("WORK_RUN_MISMATCH");
  }
  finishRun(db, id, evidence.status, evidence);
}
export function recordWork(db, work) {
  if (
    !work.id ||
    !work.day ||
    !["article", "improvement", "distribution"].includes(work.kind) ||
    ![
      "SELECTED",
      "DRAFTED",
      "VERIFIED",
      "PUSHED",
      "DEPLOYED",
      "BLOCKED",
    ].includes(work.stage)
  )
    throw new GrowthError("INVALID_WORK");
  const existing = db.prepare("SELECT * FROM work WHERE id=?").get(work.id);
  if (
    existing &&
    (existing.kind !== work.kind ||
      existing.slug !== (work.slug || null) ||
      existing.day !== work.day)
  )
    throw new GrowthError("WORK_IDENTITY_MISMATCH");
  if (existing?.stage === "DEPLOYED" && work.stage !== "DEPLOYED")
    throw new GrowthError("DEPLOYED_WORK_CANNOT_REGRESS");
  const previousRunId = existing
    ? JSON.parse(existing.evidence).runId
    : undefined;
  if (
    existing &&
    (previousRunId || existing.stage === "DEPLOYED") &&
    previousRunId !== work.evidence?.runId
  )
    throw new GrowthError("WORK_RUN_IMMUTABLE");
  if (
    work.evidence?.runId &&
    work.evidence.runId !== previousRunId &&
    !db
      .prepare(
        "SELECT id FROM runs WHERE id=? AND mode='daily' AND status NOT IN ('SUCCEEDED','NO_CHANGE')",
      )
      .get(work.evidence.runId)
  )
    throw new GrowthError("ACTIVE_WORK_RUN_REQUIRED");
  if (
    work.stage === "DEPLOYED" &&
    (!work.evidence?.commit ||
      !work.evidence?.deploymentUrl ||
      !work.evidence?.publicUrl ||
      !work.evidence?.verifiedAt)
  )
    throw new GrowthError("DEPLOYMENT_EVIDENCE_REQUIRED");
  db.prepare(
    "INSERT INTO work VALUES(?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET stage=excluded.stage,evidence=excluded.evidence,reevaluate_on=excluded.reevaluate_on",
  ).run(
    work.id,
    work.day,
    work.kind,
    work.slug || null,
    work.stage,
    JSON.stringify(work.evidence || {}),
    work.reevaluateOn || null,
  );
}
