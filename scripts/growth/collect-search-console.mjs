import { existsSync, readFileSync } from "node:fs";
import { isAbsolute } from "node:path";
import { GoogleAuth } from "google-auth-library";
import { GrowthError, safeError } from "./config.mjs";
import { requestJson } from "./http.mjs";

export async function searchRows(
  site,
  token,
  range,
  dimensions,
  request = requestJson,
) {
  const rows = [];
  let capped = false;
  for (let startRow = 0; startRow < 50000; startRow += 25000) {
    const data = await request(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: range.start,
          endDate: range.end,
          dimensions,
          type: "web",
          dataState: "final",
          rowLimit: 25000,
          startRow,
          dimensionFilterGroups: [
            {
              filters: [
                {
                  dimension: "page",
                  operator: "includingRegex",
                  expression: "^https://jjgo\\.io/",
                },
              ],
            },
          ],
        }),
      },
    );
    if (data.rows !== undefined && !Array.isArray(data.rows))
      throw new GrowthError("GSC_ROWS_INVALID");
    const page = data.rows || [];
    rows.push(...page);
    if (page.length < 25000) break;
    if (startRow === 25000) capped = true;
  }
  return { rows, capped };
}
export async function collectSearchConsole(
  config,
  range,
  { request = requestJson, getToken } = {},
) {
  const result = {
    source: "search_console",
    collectedAt: new Date().toISOString(),
    status: "UNAVAILABLE",
    range,
    site: config.googleSite,
  };
  if (!config.googleCredentials)
    return { ...result, reason: "GSC_CREDENTIALS_NOT_CONFIGURED" };
  if (!["sc-domain:jjgo.io", "https://jjgo.io/"].includes(config.googleSite))
    return { ...result, reason: "GSC_SITE_MISMATCH" };
  try {
    if (!getToken) {
      if (
        !isAbsolute(config.googleCredentials) ||
        !existsSync(config.googleCredentials)
      )
        throw new GrowthError("GSC_CREDENTIAL_FILE_MISSING");
      const credentials = JSON.parse(
        readFileSync(config.googleCredentials, "utf8"),
      );
      if (!["authorized_user", "service_account"].includes(credentials.type))
        throw new GrowthError("GSC_CREDENTIAL_TYPE_UNSUPPORTED");
      // Only Google-issued credential types; never use arbitrary external-account URLs.
      if (
        credentials.token_uri &&
        credentials.token_uri !== "https://oauth2.googleapis.com/token"
      )
        throw new GrowthError("GSC_TOKEN_DESTINATION_MISMATCH");
      const auth = new GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
      });
      getToken = () => auth.getAccessToken();
    }
    const token = await getToken();
    if (!token) throw new GrowthError("GSC_TOKEN_MISSING");
    result.groups = [];
    for (const [period, start, end] of [
      ["current", range.start, range.end],
      ["previous", range.previousStart, range.previousEnd],
    ]) {
      for (const dimensions of [
        ["date"],
        ["page"],
        ["query"],
        ["country"],
        ["device"],
      ]) {
        const data = await searchRows(
          config.googleSite,
          token,
          { start, end },
          dimensions,
          request,
        );
        result.groups.push({ period, dimensions, start, end, ...data });
      }
    }
    result.status = result.groups.some((g) => g.capped) ? "PARTIAL" : "OK";
    result.coverage =
      "API-returned finalized rows; query anonymization and provider limits mean this is not an exhaustive search log.";
    result.noRows = result.groups.every((g) => g.rows.length === 0);
  } catch (error) {
    result.status = result.groups?.length ? "PARTIAL" : "UNAVAILABLE";
    result.reason = safeError(error);
  }
  return result;
}
