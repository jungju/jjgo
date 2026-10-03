# JJGo 일일 운영 지침

## 범위와 기준

매일 05:00 Asia/Seoul에 새 Notes 글 한 편을 작성하고 검증·배포한다. 글 작성과 운영 모델은 GPT-6.1 Sol(`gpt-6.1-sol`), 추론 `medium`으로 고정한다. 모델 이름을 프롬프트에 쓰는 것만으로 적용됐다고 보고하지 않는다. 실제 실행 메타데이터로 확인하며 미확인 상태는 그대로 기록한다.

2026-10-03 소유자 지시에 따라 주 3편 한도를 폐지하고 매일 한 편을 발행한다. 한·영 한 쌍을 1편으로 센다. 작업 DB와 `notes-data`의 발행일·공개 URL을 확인해 당일 이미 발행한 글과 미완료 글을 중복 작성하지 않는다. 후보가 기존 글과 겹치면 다른 검증 가능한 주제로 재선정한다. 최신 뉴스에서 적절한 주제를 찾지 못하면 jjgo-blog-writing의 영화 경로에서 미발행 영화를 무작위로 뽑고 사실을 검증해 작성한다. 출처·이미지 생성·검증·배포가 실제로 막히면 구체적인 장애와 미완료 단계를 보고한다. 근거 없는 경험·수치·인용을 만들지 않는다. 공개 문구는 editorial-harness, URL은 site-architecture, 코드는 로컬 Next.js 가이드를 따른다.

## 환경

- 저장소 기준: `C:/Users/jeong/OneDrive/문서/ChatGPT/jjgo-io`.
- 현재 자동 운영 checkout: `C:/Users/jeong/.codex/worktrees/jjgo-growth-ops/jjgo-io`. 기존 주 checkout의 변경과 분리한다. 진행 중 작업이 있으면 동시 수정하지 않는다.
- 비밀 설정 기준: 위 저장소의 `.env`. 관리 키는 공개 변수나 산출물에 포함하지 않는다.
- 운영 데이터 기본: `%LOCALAPPDATA%/JJGo/growth`, Git과 정적 배포 밖.
- Node 22.13 이상, 잠긴 npm 의존성, GitHub 인증, 웹 검색·이미지·브라우저 도구가 필요하다.
- PostHog: 560419 / https://us.posthog.com / 조회 전용 키.
- GSC: sc-domain:jjgo.io, page 정규식으로 HTTPS jjgo.io만 포함한다. 브라우저 로그인은 API 인증을 대신하지 않는다.
- `JJGO_GSC_CREDENTIALS_FILE`: 저장소 밖 Google 인증 JSON의 절대 경로. service_account 또는 authorized_user 형식, webmasters.readonly 범위.
- `JJGO_GSC_SITE`: 기본 sc-domain:jjgo.io.
- `JJGO_INTERNAL_DISTINCT_IDS`: 실제 확인한 내부 distinct ID의 JSON 배열. 없으면 미제외임을 보고하며 Direct 방문을 임의 제외하지 않는다.
- 소유자의 브라우저 수집 제외: jjgo.io에서 localStorage의 `jjgo.analytics.disabled`를 `1`로 설정한다. 이는 해당 브라우저의 이후 방문만 제외하며 과거 방문을 삭제하지 않는다.

## 실행과 상태

예약 작업은 먼저 `node scripts/growth/verify-model.mjs --model gpt-6.1-sol --effort medium`을 실행한다. 현재 CODEX_THREAD_ID의 세션 메타데이터만 읽어 실제 모델과 추론 수준을 확인한다. VERIFIED가 아니면 운영 수정·발행을 시작하지 않고 모델 설정 오류를 알린다. Luna나 다른 추론 수준으로 대체하지 않는다. 수동 유지보수 작업의 모델 사용과 예약 모델 검증을 혼동하지 않는다. 출력 JSON은 그날 실행의 일일 종료 증거 model 항목에 보관한다.

```powershell
node scripts/growth/run.mjs --env 'C:/Users/jeong/OneDrive/문서/ChatGPT/jjgo-io/.env' --mode collect
node scripts/growth/run.mjs --env 'C:/Users/jeong/OneDrive/문서/ChatGPT/jjgo-io/.env' --mode daily
```

collect는 수집기만 시험한다. daily는 자료를 수집하고 RUNNING으로 남는다. 보고서 생성은 일일 업무 완료가 아니다. 출력의 runId를 보관하고 보고서 및 같은 이름의 JSON을 읽는다. API 오류 응답·키·원시 개인 이벤트는 출력하지 않는다.

이전 일일 실행이 미완료면 새 실행을 만들지 않는다. 해당 채팅·프로세스의 실제 상태를 확인한 후 `--mode resume --run-id ID`로 이어간다. 잠금 파일은 시간이 지났다는 이유로 지우지 않는다. 잠금 소유 PID가 종료됐는지 확인한 뒤에만 해당 파일 하나를 복구 대상으로 삼는다.

당일 일일 실행이 SUCCEEDED/NO_CHANGE이면 중복 실행을 건너뛴다. 장애·차단 시 사용 가능한 자료로 독립 작업은 계속하되 실패한 출처를 성공으로 바꾸지 않는다.

## 작업 순서

1. Git 상태·원격 변경·미완료 작업 확인. 기존 사용자의 변경을 배포에 섞지 않는다. 안전한 관리형 worktree를 사용한다.
2. 데이터 수집과 사이트 점검. PostHog는 KST 완료 1/7/28일과 직전 동기간. GSC는 Pacific 기준, 3일 지연 확정 28일과 직전 동기간. 수치의 차이를 불일치 오류로 해석하지 않는다.
3. 최신 GeekNews·공식 문서·원문에서 후보 3~5개 확인. 출처·날짜·독자 질문·기존 글과 차이를 남긴다. 검색량이 없으면 모른다고 기록한다.
4. 매일 새 글 한 편 발행을 우선 작업으로 선택한다. 상태 점검·기존 글 보강·유입 준비는 새 글 작성의 완료 증거가 아니다. 발행을 막는 실제 장애가 있으면 먼저 복구하고 같은 미완료 글을 이어간다.
5. 신규 글은 jjgo-blog-writing의 selected-topic 경로. 표지 1개, 결함 시 재생성 1회 이내. 한·영 문체와 사실 검토를 수행한다.
6. lint/build/unit test/변경 파일 포맷, 한·영 모바일·데스크톱 화면, 링크·이미지·메타 확인.
7. 관련 변경만 커밋·push, 정확한 커밋의 GitHub Pages 배포와 공개 URL 확인. 실패 시 초안/검증 완료/배포 미완료 상태를 구분한다.
8. UTM·채널 소개 초안과 7일/28일 재평가 일정을 남긴다. 게시 권한 없는 외부 채널은 초안까지만 진행한다.

## 작업 증거와 종료

작업 JSON을 운영 데이터 폴더에 작성하고 `--mode record-work --evidence-file 절대경로`로 기록한다.

```json
{
  "id": "stable-work-id",
  "day": "YYYY-MM-DD",
  "kind": "article",
  "slug": "article-slug",
  "stage": "DRAFTED",
  "evidence": {
    "runId": "daily 실행이 반환한 ID",
    "sources": [],
    "hypothesis": "검증할 구체적 가설"
  },
  "reevaluateOn": "YYYY-MM-DD"
}
```

kind는 article/improvement/distribution, 단계는 SELECTED/DRAFTED/VERIFIED/PUSHED/DEPLOYED/BLOCKED다. DEPLOYED에는 실제 commit, deploymentUrl, publicUrl, verifiedAt가 필요하다. 단순 문자열 채우기가 증거 확인을 대신하지 않는다. 같은 id를 갱신하며 새 작업으로 중복 등록하지 않는다.

일일 작업에는 evidence.runId로 해당 실행을 연결한다. 다른 실행이나 과거 배포를 오늘의 완료 증거로 사용할 수 없다. 기존 작업의 ID·종류·slug·실행 연결은 변경하지 않으며 재평가 때도 원래 증거를 유지한다. 완료된 일일 실행은 다시 종료 처리하지 않는다. 일일 종료는 기존 수집 보고서·출처 상태에 결과 증거를 추가해 보존한다.

일일 종료 JSON은 status, research(출처·조사 결과), decision(이유), model(실제 확인 또는 NOT_VERIFIED), workId(성공 시)를 담는다. `--mode finish --run-id ID --evidence-file 절대경로`로 종료한다. SUCCEEDED는 해당 실행에 연결된 신규 글의 배포 증거를 요구한다. NO_CHANGE는 당일 글이 이미 발행돼 중복 실행을 생략할 때만 사용하며 같은 날짜의 글 발행 증거를 연결한다. 후보 부족·기존 주간 한도·점검만 수행한 상태는 글 작성 완료가 아니다. 인증 등 외부 선행 조건은 BLOCKED, 실행 오류는 FAILED다.

## 측정과 유입

초기 기준선은 운영 데이터 폴더의 `research/baseline-2026-09-29.md`에 있다. 작업 선택 전에 초기 집계 범위와 첫 주 우선순위를 참고한다. 이 문서의 개인 운영 지표는 공개 글이나 Git에 복사하지 않는다. 10월 2일 이후 자연 예약 3회, 10월 6일·13일·27일에 각각 7일·14일·28일 관측을 검토하되 실제 실행 이력과 데이터 확정일을 확인한다. 28일 전체 검색 데이터가 아직 확정되지 않았으면 비교 시점을 연기한다.

article_engaged는 활성 전경 30초와 본문 절반 노출을 만족한 세션·글별 이벤트다. 관련 글, 컨설팅, RSS는 클릭을 측정하며 읽기 완료·문의·구독 완료라고 부르지 않는다. share_click은 버튼이 구현·검증되기 전 NOT_INSTRUMENTED다.

외부 소개는 핵심 관찰, 독자가 얻을 내용, 공개 URL을 포함한다. 한국어·영어와 커뮤니티 소개를 각각 작성하되 원문을 그대로 여러 채널에 배포하지 않는다. 초기 외부 게시 상태는 DRAFT_ONLY다. 명시적으로 승인된 계정·채널·빈도만 실제 게시할 수 있다. 내부 링크에는 UTM을 사용하지 않는다.

28일 노출 100회 이상은 CTR 개선 후보를 검토할 임시 기준이며 통계적 유의성을 의미하지 않는다. 7일·28일 절대값과 분모를 함께 보며 인과 효과를 단정하지 않는다. 글별 제목을 매일 바꾸지 않는다. 일요일에는 주간 결과와 다음 후보를 검토한다.

## 비용·알림

일반 작업 목표 20분, 발행 목표 60분. 검색 목표 상한 6회, 원문 심층 확인 5개. API 일시 오류 재시도 2회, 같은 빌드 수리 2회 후 원인을 남긴다. 이 값은 실행 정책이며 플랫폼의 강제 과금 제한이 아니다. 실제 비용을 관측할 수 없으면 미확인으로 보고한다. 상위 모델로 자동 변경하지 않는다.

매일 글 발행 완료는 공개 URL·배포 증거·미확인 사항으로 짧게 알린다. 글을 발행하지 못한 날은 구체적인 이유와 미완료 단계를 알린다. 당일 이미 발행 완료한 글의 중복 실행은 조용히 종료한다.

## 운영 백업과 소개 초안

일요일에는 `node scripts/growth/backup.mjs --env <절대 .env 경로>`로 SQLite 백업을 생성한다. 스크립트는 백업 파일을 다시 열어 quick_check와 실행 행 수를 확인한다. 자동으로 오래된 자료를 삭제하지 않는다. 90일 보존 검토는 별도 작업으로 기록한다.

`node scripts/growth/distribution.mjs --env <절대 .env 경로> --input <JSON 경로>`는 소개 초안과 UTM만 생성한다. 입력은 workId, slug, drafts 배열이며 각 초안은 locale, source, medium, publicUrl, text를 가진다. 실제 게시 API는 호출하지 않는다. 출력은 운영 폴더의 distribution 디렉터리다.
