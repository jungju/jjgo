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

- 실제 커밋의 Pages 배포와 공개 피드 확인.
- Google API 장기 인증과 실제 검색 지표 조회.
- gpt-6-luna/medium 실제 실행 및 기존 예약 05:00 전환.
- 수동·자연 예약 각 3회, 14/28일 성과 검토. 미래 실행을 현재 완료로 표시하지 않음.
- 외부 채널은 DRAFT_ONLY. 게시된 것처럼 보고하지 않음.

## 후속 확인

- 1차 배포 커밋: `63e2e0d299fa68b5b5f80299aa580eb4c6dd867b`.
- [Pages 실행 36505602115](https://github.com/jungju/jjgo/actions/runs/36505602115): success.
- 공개 `/notes/feed.xml`, `/en/notes/feed.xml`: HTTP 200, 각 공개 글 3개. 공개 Notes 한·영/390·1440 브라우저 확인 통과.
- 모델 시험 1: 기존 예약 대상 채팅의 실제 turn_context에서 model=gpt-6-luna, effort=medium 확인. turn ID `01a0eaab-294c-7252-9218-cca71b3e94ac`, 읽기 전용 collect 완료. PostHog OK / site 26개 OK / GSC 인증 미설정. 모델 자신은 정확한 변형을 확인하지 못한다고 보고했지만 호출자 측 세션 기록으로 검증함.
- 기존 예약 ID `jjgo`를 `JJGo 매일 성장 운영`, 매일 05:00으로 갱신. 기존 대상 채팅 유지. 호스트 시간대 Korea Standard Time 확인. 자연 예약 실행의 모델 적용 여부는 다음 실행에서 다시 검증해야 함.
- 기존 공개 글 unknown-or-lookalike의 LinkedIn 한·영, GeekNews 소개 초안과 UTM을 운영 폴더에 생성. 세 건 모두 DRAFT_ONLY, 실제 게시 없음.
