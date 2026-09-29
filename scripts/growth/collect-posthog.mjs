import { GrowthError, safeError } from "./config.mjs";
import { requestJson } from "./http.mjs";

const quote = (value) =>
  "'" + String(value).replaceAll("\\", "\\\\").replaceAll("'", "\\'") + "'";
const sqlTime = (value) => `parseDateTimeBestEffort(${quote(value)})`;
export function eventFilter(config, start, end) {
  if (
    !Array.isArray(config.internalIds) ||
    config.internalIds.some((x) => typeof x !== "string")
  )
    throw new GrowthError("INVALID_INTERNAL_IDS");
  return (
    `properties.$host = 'jjgo.io' AND timestamp >= ${sqlTime(start)} AND timestamp < ${sqlTime(end)}` +
    (config.internalIds.length
      ? ` AND distinct_id NOT IN (${config.internalIds.map(quote).join(",")})`
      : "")
  );
}
export async function collectPosthog(config, windows, request = requestJson) {
  const query = async (sql) => {
    const data = await request(
      `${config.posthogHost}/api/projects/${config.posthogProject}/query/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.posthogKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: { kind: "HogQLQuery", query: sql } }),
      },
    );
    if (data.error || !Array.isArray(data.results))
      throw new GrowthError("POSTHOG_QUERY_INCOMPLETE");
    return data;
  };
  const result = {
    source: "posthog",
    collectedAt: new Date().toISOString(),
    status: "OK",
    exclusion: config.internalIds.length
      ? "configured_internal_ids"
      : "internal_visits_not_excluded",
    windows: [],
    pages: [],
    sources: [],
    actions: [],
  };
  try {
    for (const window of windows) {
      const rows = [];
      for (const [start, end] of [
        [window.start, window.end],
        [window.previousStart, window.start],
      ]) {
        const data = await query(
          `SELECT count() AS views, uniq(distinct_id) AS visitors, uniqIf(properties.$session_id, isNotNull(properties.$session_id)) AS sessions FROM events WHERE event = '$pageview' AND ${eventFilter(config, start, end)}`,
        );
        if (!data.results[0] || data.results[0].length !== 3)
          throw new GrowthError("POSTHOG_TOTALS_INVALID");
        rows.push({
          views: Number(data.results[0][0]),
          visitors: Number(data.results[0][1]),
          sessions: Number(data.results[0][2]),
        });
      }
      result.windows.push({ ...window, current: rows[0], previous: rows[1] });
    }
    const last = windows.at(-1);
    const filter = eventFilter(config, last.start, last.end);
    for (const [field, expression] of [
      ["pages", "properties.$pathname"],
      ["sources", "properties.$referring_domain"],
    ]) {
      const rows = await query(
        `SELECT ${expression} AS dimension, count() AS views, uniq(distinct_id) AS visitors FROM events WHERE event = '$pageview' AND ${filter} GROUP BY dimension ORDER BY views DESC, dimension ASC LIMIT 1001`,
      );
      result[field] = rows.results
        .slice(0, 1000)
        .map(([dimension, views, visitors]) => ({
          dimension,
          views,
          visitors,
        }));
      if (rows.results.length > 1000 || rows.hasMore) result.status = "PARTIAL";
    }
    const actions = await query(
      `SELECT event, count(), uniq(properties.$session_id) FROM events WHERE event IN ('article_engaged','related_article_click','consulting_cta_click','share_click','rss_click') AND ${filter} GROUP BY event`,
    );
    result.actions = actions.results.map(([event, count, sessions]) => ({
      event,
      count,
      sessions,
    }));
    result.actionCoverage =
      "Only observed events are listed; absent events require instrumentation verification, not zero-conversion claims.";
  } catch (error) {
    result.status = result.windows.length ? "PARTIAL" : "UNAVAILABLE";
    result.reason = safeError(error);
  }
  return result;
}
