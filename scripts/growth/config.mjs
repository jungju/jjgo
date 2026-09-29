import { existsSync, readFileSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { parseEnv } from "node:util";

export class GrowthError extends Error {
  constructor(code) {
    super(code);
    this.name = "GrowthError";
  }
}
export const siteOrigin = "https://jjgo.io";
export function loadConfig(envPath = process.env.JJGO_GROWTH_ENV || ".env") {
  const file = resolve(envPath);
  if (!existsSync(file)) throw new GrowthError("ENV_FILE_MISSING");
  const values = parseEnv(readFileSync(file, "utf8"));
  const local = join(dirname(file), ".env.local");
  if (existsSync(local)) {
    const other = parseEnv(readFileSync(local, "utf8"));
    for (const key of Object.keys(values).filter((k) =>
      k.startsWith("POSTHOG_"),
    )) {
      if (other[key] !== undefined && other[key] !== values[key])
        throw new GrowthError("ENV_CONFLICT_" + key);
    }
  }
  if (
    values.POSTHOG_PROJECT_ID !== "560419" ||
    values.POSTHOG_APP_HOST?.replace(/\/$/, "") !== "https://us.posthog.com"
  ) {
    throw new GrowthError("POSTHOG_DESTINATION_MISMATCH");
  }
  if (!values.POSTHOG_PERSONAL_API_KEY?.startsWith("phx_"))
    throw new GrowthError("POSTHOG_KEY_MISSING");
  const dataDir =
    values.JJGO_GROWTH_DATA_DIR ||
    join(
      process.env.LOCALAPPDATA || join(homedir(), ".local", "share"),
      "JJGo",
      "growth",
    );
  if (!isAbsolute(dataDir)) throw new GrowthError("DATA_DIR_MUST_BE_ABSOLUTE");
  mkdirSync(dataDir, { recursive: true });
  return {
    envPath: file,
    dataDir,
    posthogKey: values.POSTHOG_PERSONAL_API_KEY,
    posthogProject: values.POSTHOG_PROJECT_ID,
    posthogHost: "https://us.posthog.com",
    googleCredentials: values.JJGO_GSC_CREDENTIALS_FILE || null,
    googleSite: values.JJGO_GSC_SITE || "sc-domain:jjgo.io",
    // No implicit exclusion: configure confirmed IDs only. They never enter reports.
    internalIds: JSON.parse(values.JJGO_INTERNAL_DISTINCT_IDS || "[]"),
  };
}

export function dateInZone(now, timeZone) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
export function shiftDate(date, days) {
  const d = new Date(date + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
export function periods(now = new Date()) {
  const today = dateInZone(now, "Asia/Seoul");
  const searchToday = dateInZone(now, "America/Los_Angeles");
  return {
    day: today,
    posthog: [1, 7, 28].map((days) => ({
      days,
      timezone: "Asia/Seoul",
      start: shiftDate(today, -days) + "T00:00:00+09:00",
      end: today + "T00:00:00+09:00",
      previousStart: shiftDate(today, -days * 2) + "T00:00:00+09:00",
    })),
    // Conservative lag plus final data. No promise that a requested date is populated.
    search: {
      timezone: "America/Los_Angeles",
      start: shiftDate(searchToday, -30),
      end: shiftDate(searchToday, -3),
      previousStart: shiftDate(searchToday, -58),
      previousEnd: shiftDate(searchToday, -31),
    },
  };
}

export function safeError(error) {
  return error instanceof GrowthError ? error.message : "UNEXPECTED_ERROR";
}
