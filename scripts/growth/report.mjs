import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export function writeReport(config, runId, windows, snapshots, db) {
  const ph = snapshots.find((s) => s.source === "posthog");
  const gsc = snapshots.find((s) => s.source === "search_console");
  const site = snapshots.find((s) => s.source === "site");
  const incomplete = db
    .prepare(
      "SELECT id,day,kind,slug,stage,reevaluate_on FROM work WHERE stage!='DEPLOYED' ORDER BY day",
    )
    .all();
  const due = db
    .prepare(
      "SELECT id,day,kind,slug,reevaluate_on FROM work WHERE reevaluate_on<=? AND stage='DEPLOYED'",
    )
    .all(windows.day);
  const lines = [
    `# JJGo 운영 자료 — ${windows.day}`,
    "",
    `실행 ID: ${runId}`,
    "",
    "이 보고서는 수집·HTTP 점검 결과입니다. 동향 조사·편집·배포 완료를 뜻하지 않습니다.",
    "",
    "| 출처 | 상태 | 사유 |",
    "|---|---|---|",
    ...snapshots.map(
      (s) =>
        `| ${s.source} | ${s.status} | ${s.reason || s.issues?.join(", ") || ""} |`,
    ),
    "",
    `PostHog 필터: jjgo.io만 포함 / ${ph?.exclusion || "미확인"}. 기준: KST 완료 일자, 시작 포함·종료 제외.`,
    "",
    "| 기간 | 조회 | 방문자 | 세션 | 직전 기간 조회 |",
    "|---|---:|---:|---:|---:|",
    ...(ph?.windows || []).map(
      (w) =>
        `| ${w.days}일 | ${w.current.views} | ${w.current.visitors} | ${w.current.sessions} | ${w.previous.views} |`,
    ),
    "",
    `GSC: ${gsc?.range.start}~${gsc?.range.end}, America/Los_Angeles, final, jjgo.io HTTPS 페이지만. 데이터 없음을 방문 0이나 순위 없음으로 해석하지 않습니다.`,
    "",
    `사이트 점검: ${site?.pages.length || 0}/${site?.sitemapCount || "?"} 페이지. 화면 검증 별도.`,
    "",
    "## 미완료 작업",
    "",
    ...incomplete.map(
      (w) => `- ${w.id}: ${w.kind} / ${w.stage} / ${w.slug || ""}`,
    ),
    "",
    "## 재평가 대상",
    "",
    ...due.map((w) => `- ${w.id}: ${w.slug || w.kind} / ${w.reevaluate_on}`),
    "",
    "## 다음 단계",
    "",
    "- 최신 동향과 원문 확인, 중복 주제 검사, 작업 선택 근거를 실행 기록에 추가합니다.",
    "- 신규 글·개선·유입 초안과 실제 게시를 구분합니다. GSC 미연결이면 검색어 최적화는 미실행입니다.",
    "- 배포 완료 증거 없이 작업·일일 실행을 완료 처리하지 않습니다.",
    "",
  ];
  const dir = join(config.dataDir, "reports");
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${windows.day}-${runId}.md`);
  writeFileSync(path, lines.join("\n"));
  const summary = {
    runId,
    day: windows.day,
    sources: snapshots.map((s) => ({
      source: s.source,
      status: s.status,
      reason: s.reason,
    })),
    posthog: ph,
    searchConsole: gsc,
    site,
    incomplete,
    due,
  };
  writeFileSync(
    join(dir, `${windows.day}-${runId}.json`),
    JSON.stringify(summary, null, 2),
  );
  return path;
}
