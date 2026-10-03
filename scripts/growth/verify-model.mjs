import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { pathToFileURL } from "node:url";
import { GrowthError, safeError } from "./config.mjs";

export const WRITING_MODEL = "gpt-6.1-sol";
export const WRITING_EFFORT = "medium";

export async function readRuntimeModel(file, threadId) {
  let session, context, timestamp;
  for await (const line of createInterface({
    input: createReadStream(file),
    crlfDelay: Infinity,
  })) {
    // Do not parse or expose message/tool payloads, including image data and secrets.
    if (
      !line.includes('"type":"session_meta"') &&
      !line.includes('"type":"turn_context"')
    )
      continue;
    const record = JSON.parse(line);
    if (record.type === "session_meta") session = record.payload.id;
    if (record.type === "turn_context") {
      context = record.payload;
      timestamp = record.timestamp;
    }
  }
  if (session !== threadId) throw new GrowthError("RUNTIME_THREAD_MISMATCH");
  if (!context?.model || !context.effort)
    throw new GrowthError("RUNTIME_MODEL_NOT_RECORDED");
  return {
    threadId,
    turnId: context.turn_id,
    model: context.model,
    effort: context.effort,
    recordedAt: timestamp,
  };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    const { values } = parseArgs({
      options: {
        model: { type: "string", default: WRITING_MODEL },
        effort: { type: "string", default: WRITING_EFFORT },
      },
    });
    const threadId = process.env.CODEX_THREAD_ID;
    if (!/^[0-9a-f-]{36}$/.test(threadId || ""))
      throw new GrowthError("CURRENT_THREAD_NOT_AVAILABLE");
    const directory = join(
      process.env.CODEX_HOME || join(homedir(), ".codex"),
      "sessions",
    );
    const files = execFileSync("rg", ["--files", directory], {
      encoding: "utf8",
      maxBuffer: 8 * 1024 * 1024,
    })
      .split(/\r?\n/)
      .filter((file) => file.endsWith(threadId + ".jsonl"));
    if (files.length !== 1)
      throw new GrowthError("CURRENT_SESSION_LOG_NOT_UNIQUE");
    const evidence = await readRuntimeModel(files[0], threadId);
    const matches =
      evidence.model === values.model && evidence.effort === values.effort;
    console.log(
      JSON.stringify({
        status: matches ? "VERIFIED" : "MODEL_MISMATCH",
        ...evidence,
      }),
    );
    if (!matches) process.exitCode = 1;
  } catch (error) {
    console.error(safeError(error));
    process.exitCode = 1;
  }
}
