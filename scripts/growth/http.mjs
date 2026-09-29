import { setTimeout as sleep } from "node:timers/promises";
import { GrowthError } from "./config.mjs";

export async function requestJson(
  url,
  options = {},
  { fetchImpl = fetch, sleepImpl = sleep } = {},
) {
  for (let attempt = 0; attempt < 3; attempt++) {
    let response;
    try {
      response = await fetchImpl(url, {
        ...options,
        redirect: "error",
        signal: AbortSignal.timeout(30000),
      });
    } catch {
      if (attempt < 2) {
        await sleepImpl(500 * (attempt + 1));
        continue;
      }
      throw new GrowthError("NETWORK_ERROR");
    }
    if ((response.status === 429 || response.status >= 500) && attempt < 2) {
      await sleepImpl(1000 * (attempt + 1));
      continue;
    }
    if (!response.ok) throw new GrowthError("HTTP_" + response.status);
    try {
      return await response.json();
    } catch {
      throw new GrowthError("INVALID_JSON");
    }
  }
}
