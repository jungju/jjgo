import { backup, DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { loadConfig, safeError, GrowthError } from "./config.mjs";
import { openState, acquireLock } from "./state.mjs";

const { values } = parseArgs({ options: { env: { type: "string" } } });
let db, restore, release;
try {
  const config = loadConfig(values.env);
  release = acquireLock(config.dataDir);
  db = openState(config.dataDir);
  const directory = join(config.dataDir, "backups");
  mkdirSync(directory, { recursive: true });
  const path = join(
    directory,
    `growth-${new Date().toISOString().replaceAll(":", "-")}.sqlite3`,
  );
  await backup(db, path);
  restore = new DatabaseSync(path, { readOnly: true });
  if (restore.prepare("PRAGMA quick_check").get().quick_check !== "ok")
    throw new GrowthError("BACKUP_CHECK_FAILED");
  const expected = db.prepare("SELECT count(*) AS count FROM runs").get().count;
  const actual = restore
    .prepare("SELECT count(*) AS count FROM runs")
    .get().count;
  if (expected !== actual) throw new GrowthError("BACKUP_COUNT_MISMATCH");
  console.log(JSON.stringify({ status: "VERIFIED", path, runs: actual }));
} catch (error) {
  console.error(safeError(error));
  process.exitCode = 1;
} finally {
  restore?.close();
  db?.close();
  release?.();
}
