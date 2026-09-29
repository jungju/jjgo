# JJGo 운영 구축 검증 기록

2026-09-29, 구현 진행 중. 전체 목표 완료 기록이 아니다.

## 구현 및 검증

- 격리 작업: `codex/jjgo-growth-ops`, 기존 주 작업 트리의 변경을 보존.
- PostHog 실제 API: 1/7/28일 및 직전 기간, 페이지·referrer·관측 이벤트 집계 성공.
- 첫 수집 실행: `85921fba-ed72-495a-b929-608186efd1a7`. PostHog OK, 공개 사이트 HTTP·메타 점검 OK, GSC API UNAVAILABLE(인증 미구성).
- Search Console 브라우저: sc-domain:jjgo.io 인증 소유자, sitemap.xml 성공, 최근 읽기 2026-09-22·발견 페이지 22개 확인. 도메인 속성의 다른 서브도메인 수치를 본 사이트 지표로 사용하지 않음.
- Cloud 프로젝트: `jjgo-growth-ops`, 표시 이름 `JJGo Growth Operations`, API 활성화 절차 진행.
- 운영 SQLite 백업: 별도 파일을 다시 열어 quick_check=ok 및 실행 행 수 일치 검증.
- 새 운영 스킬과 기존 글쓰기 selected-topic 확장: 스킬 형식 검사 통과.
- 정적 빌드 및 타입 검사, lint, 47개 테스트 통과. 추적 테스트는 모의 SDK/DOM 행동 검증이며 실제 방문자 이벤트 검증과 구분.
- RSS: 한·영 XML을 XML 파서로 읽음, 각각 공개 글 3개. 샘플을 제외.
- Playwright: 한·영 Notes 목록, 390/1440 폭, RSS 링크·언어·가로 넘침·페이지 오류 확인. 한국어 모바일·영어 데스크톱 캡처 직접 확인.

## 공개 문구 검토

- 바꾼 페이지/언어: 한·영 Notes RSS 링크, 피드의 짧은 설명, RSS 자동 발견 제목.
- 전달 사실: 공개 Notes를 RSS로 구독할 수 있음. 실제 생성된 피드로 확인.
- 문체 근거: `docs/editorial-harness.md`, 기능을 직접 설명하는 짧은 문장. 새 개인적 경험·성과·견해는 없음.
- 상태: 기존 공개 글만 피드에 포함. 기존 sample 상태 유지.
- 사용자 본인 말투 확인: 미확인. 새 에세이 작성 아님.

## 아직 필요한 증거

- Google API 장기 인증과 실제 검색 지표 조회.
- 자연 예약 3회, 14/28일 성과 검토. 미래 실행을 현재 완료로 표시하지 않음.
- 실제 사용자 행동 이벤트 수집과 내부 운영자 제외 확인. 모의 SDK 시험을 실사용 증거로 대체하지 않음.
- 외부 채널은 DRAFT_ONLY. 게시된 것처럼 보고하지 않음.

## 후속 확인

- 1차 배포 커밋: `63e2e0d299fa68b5b5f80299aa580eb4c6dd867b`.
- [Pages 실행 36505602115](https://github.com/jungju/jjgo/actions/runs/36505602115): success.
- 공개 `/notes/feed.xml`, `/en/notes/feed.xml`: HTTP 200, 각 공개 글 3개. 공개 Notes 한·영/390·1440 브라우저 확인 통과.
- 모델 시험 1: 기존 예약 대상 채팅의 실제 turn_context에서 model=gpt-6-luna, effort=medium 확인. turn ID `01a0eaab-294c-7252-9218-cca71b3e94ac`, 읽기 전용 collect 완료. PostHog OK / site 26개 OK / GSC 인증 미설정. 모델 자신은 정확한 변형을 확인하지 못한다고 보고했지만 호출자 측 세션 기록으로 검증함.
- 기존 예약 ID `jjgo`를 `JJGo 매일 성장 운영`, 매일 05:00으로 갱신. 기존 대상 채팅 유지. 호스트 시간대 Korea Standard Time 확인. 자연 예약 실행의 모델 적용 여부는 다음 실행에서 다시 검증해야 함.
- 기존 공개 글 unknown-or-lookalike의 LinkedIn 한·영, GeekNews 소개 초안과 UTM을 운영 폴더에 생성. 세 건 모두 DRAFT_ONLY, 실제 게시 없음.
- RSS 발견 태그의 Next.js metadata 병합 문제를 발견하고 공통 페이지 metadata에서 생성하도록 수정. `03d7ee233144a59ecc5141db063e98ab4a0d451d`의 [Pages 실행 36506222805](https://github.com/jungju/jjgo/actions/runs/36506222805) 성공, 실제 공개 HTML에서 한·영 피드 link 태그 확인.
- 실제 모델 검증기 포함 `ab92a209d4adbaa484a9ae5dd121f3c467ec519d`의 [Pages 실행 36506833817](https://github.com/jungju/jjgo/actions/runs/36506833817) 성공. 전체 단위·정적 검사 50개 통과.
- 모델 시험 2: 기존 글의 확인되지 않은 영어 1인칭 표현을 지적, 한·영 편집 초안을 작성. 현재 원문 재열기가 실패해 원문 대조 미검증으로 정정. 미발행, 사이트 미적용.
- 모델 시험 3: 제공된 출처 요약·직접 확인한 Google 공식 문서·실제 코드로 한·영 짧은 글 초안 작성. 시간대 설정과 제품 일반 규칙, 전체 방문과 검색 클릭을 혼동한 표현을 검토·수정함. 미발행이며 표지·화면·발행 검증은 미실행.
- 실제 모델 검증 스크립트를 예약 대상에서 실행: exit 0, VERIFIED, gpt-6-luna/medium, turn `01a0eab4-f9f3-79c1-9a4c-353deed91b0a`. 스크립트는 현재 CODEX_THREAD_ID에 해당하는 메타데이터만 읽음.
- 전체 포맷 검사는 Windows Git 체크아웃의 CRLF 때문에 기존 84개 파일에서 실패했다. `--end-of-line auto`로 원인을 확인한 뒤 기존 파일을 일괄 수정하지 않고 포맷 명령에 해당 옵션과 운영 스크립트 경로를 명시했다. 전체 검사 통과.
- 실제 최신 GeekNews 첫 페이지와 NobodyWho·BrowserSkill·Atlas 원문을 읽고 다음 주제 후보 3개를 비공개 운영 폴더에 기록. 검색량과 실제 구동 성능은 미확인.

## 현재 연결 승인 대기

Google Cloud 프로젝트와 Search Console API 활성화는 완료. 서비스 계정 `jjgo-search-reader@jjgo-growth-ops.iam.gserviceaccount.com` 생성 폼을 준비했으며, 계정·JSON 키·도메인 속성의 제한된 조회 권한 생성은 사용자 확인 대기 중이다. 브라우저 도구가 장기 인증정보·민감 데이터 접근 권한 생성 시점의 확인을 요구하므로 이 항목을 우회하지 않는다.
