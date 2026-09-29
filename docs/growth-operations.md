# JJGo 일일 운영 지침

## 범위와 기준

매일 05:00 Asia/Seoul에 상태·방문·검색·동향을 확인하고 근거 있는 작업 하나를 실행한다. 기본 모델은 gpt-6-luna, medium이다. 모델 이름을 프롬프트에 쓰는 것만으로 적용됐다고 보고하지 않는다. 실제 실행 메타데이터로 확인하며 미확인 상태는 그대로 기록한다.

신규 글은 한국 시간 월요일~일요일 주 3편 이내, 한·영 한 쌍을 1편으로 센다. 작업 DB뿐 아니라 `notes-data`에 등록된 기존 공개 글의 발행일도 함께 확인해 구축 이전 발행을 누락하지 않는다. 좋은 주제가 없으면 기존 글·링크·검색·RSS를 개선하거나 NO_CHANGE로 끝낸다. 근거 없이 글을 늘리거나 경험·수치·인용을 만들지 않는다. 공개 문구는 editorial-harness, URL은 site-architecture, 코드는 로컬 Next.js 가이드를 따른다.

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
4. 장애/정확성 → 검색 노출 글 보강 → 신규 글 → 내부 연결/유입 준비 순으로 선택한다. 기존 관련 글의 업데이트가 더 적합한지 판단한다.
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
  "evidence": { "sources": [], "hypothesis": "검증할 구체적 가설" },
  "reevaluateOn": "YYYY-MM-DD"
}
```

kind는 article/improvement/distribution, 단계는 SELECTED/DRAFTED/VERIFIED/PUSHED/DEPLOYED/BLOCKED다. DEPLOYED에는 실제 commit, deploymentUrl, publicUrl, verifiedAt가 필요하다. 단순 문자열 채우기가 증거 확인을 대신하지 않는다. 같은 id를 갱신하며 새 작업으로 중복 등록하지 않는다.

일일 종료 JSON은 status, research(출처·조사 결과), decision(이유), model(실제 확인 또는 NOT_VERIFIED), workId(성공 시)를 담는다. `--mode finish --run-id ID --evidence-file 절대경로`로 종료한다. SUCCEEDED는 배포 증거가 있는 작업을 요구한다. 작업 불필요는 NO_CHANGE, 인증 등 외부 선행 조건은 BLOCKED, 실행 오류는 FAILED다.

## 측정과 유입

article_engaged는 활성 전경 30초와 본문 절반 노출을 만족한 세션·글별 이벤트다. 관련 글, 컨설팅, RSS는 클릭을 측정하며 읽기 완료·문의·구독 완료라고 부르지 않는다. share_click은 버튼이 구현·검증되기 전 NOT_INSTRUMENTED다.

외부 소개는 핵심 관찰, 독자가 얻을 내용, 공개 URL을 포함한다. 한국어·영어와 커뮤니티 소개를 각각 작성하되 원문을 그대로 여러 채널에 배포하지 않는다. 초기 외부 게시 상태는 DRAFT_ONLY다. 명시적으로 승인된 계정·채널·빈도만 실제 게시할 수 있다. 내부 링크에는 UTM을 사용하지 않는다.

28일 노출 100회 이상은 CTR 개선 후보를 검토할 임시 기준이며 통계적 유의성을 의미하지 않는다. 7일·28일 절대값과 분모를 함께 보며 인과 효과를 단정하지 않는다. 글별 제목을 매일 바꾸지 않는다. 일요일에는 주간 결과와 다음 후보를 검토한다.

## 비용·알림

일반 작업 목표 20분, 발행 목표 60분. 검색 목표 상한 6회, 원문 심층 확인 5개. API 일시 오류 재시도 2회, 같은 빌드 수리 2회 후 원인을 남긴다. 이 값은 실행 정책이며 플랫폼의 강제 과금 제한이 아니다. 실제 비용을 관측할 수 없으면 미확인으로 보고한다. 상위 모델로 자동 변경하지 않는다.

발행·개선 완료, 장애, 인증 만료, 사용자 조치가 필요한 경우만 결과를 알린다. 완료 URL·배포 증거·미확인 사항을 짧게 보고한다. 데이터가 변하지 않은 점검은 조용히 종료한다.

## 운영 백업과 소개 초안

일요일에는 `node scripts/growth/backup.mjs --env <절대 .env 경로>`로 SQLite 백업을 생성한다. 스크립트는 백업 파일을 다시 열어 quick_check와 실행 행 수를 확인한다. 자동으로 오래된 자료를 삭제하지 않는다. 90일 보존 검토는 별도 작업으로 기록한다.

`node scripts/growth/distribution.mjs --env <절대 .env 경로> --input <JSON 경로>`는 소개 초안과 UTM만 생성한다. 입력은 workId, slug, drafts 배열이며 각 초안은 locale, source, medium, publicUrl, text를 가진다. 실제 게시 API는 호출하지 않는다. 출력은 운영 폴더의 distribution 디렉터리다.
