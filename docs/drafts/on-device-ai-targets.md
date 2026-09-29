---
title: "앱에 AI를 넣기 전에, 기기부터 정한다"
summary: "온디바이스 AI는 API 요청을 줄여도 모델 파일, 메모리, 플랫폼 지원을 없애주지는 않는다. 제품에 넣기 전에 확인할 조건을 살펴본다."
status: publication-authorized
language: ko
---

# 앱에 AI를 넣기 전에, 기기부터 정한다

앱에 AI를 넣을 때는 어떤 모델을 쓸지부터 고르고 싶어진다. 그보다 먼저 정해야 할 게 있다. 앱이 어디에서 돌아가야 하는가.

브라우저인지, 휴대전화인지, 데스크톱인지에 따라 붙일 수 있는 런타임과 모델이 달라진다. GeekNews에서 소개한 NobodyWho는 앱과 게임 안에서 LLM을 로컬 실행하는 추론 엔진이다. 프로젝트 README는 Flutter, Python, Godot, Kotlin, Swift, React Native 바인딩을 안내한다.

‘어떤 기기에서나’라는 소개 문구만 보고 배포 범위를 정하면 곤란하다. README에는 웹 내보내기가 없고 Windows ARM64도 아직 지원하지 않는다고 적혀 있다. Godot 바인딩은 iOS 내보내기를 지원하지 않아 iOS 앱에는 다른 바인딩이 필요하다.

메모리도 모델 파일 크기만 보면 안 된다. 프로젝트 문서는 데스크톱에서 모델 파일의 약 1.5배에 해당하는 여유 RAM을, 이미 바쁜 기기라면 2배를 대략적인 기준으로 든다. 모바일은 모델 파일의 약 2배를 안내한다. 어디까지나 프로젝트가 적은 경험칙이지, 특정 앱에서 측정한 성능 결과는 아니다.

모델을 처음 불러올 때의 네트워크도 확인해야 한다. README는 Hugging Face나 URL에서 모델을 내려받고 첫 사용 때 캐시할 수 있다고 설명한다. 추론을 기기 안에서 하더라도 설치 직후 모델 파일이 없다면 내려받을 경로와 실패 안내가 필요하다.

그래서 검토표에는 ‘로컬 실행 가능’만 쓰기 어렵다. 지원할 OS와 앱 프레임워크, 모델 파일 크기와 메모리 여유, 첫 다운로드 방식, 업데이트 시점, 모델을 불러오지 못했을 때의 동작을 같이 적어야 한다.

README만으로는 실제 앱의 응답 속도나 배터리 사용량을 알 수 없다. 어떤 GPU에서 얼마나 빨라지는지도 이 글에서 주장할 수 없다. 그 값은 목표 기기와 실제 모델로 재야 한다.

온디바이스 AI를 고르는 첫 질문은 ‘어떤 모델을 쓸까?’보다 ‘어떤 기기까지 지원해야 할까?’에 가깝다. 그 답이 정해져야 모델 크기와 런타임도 현실적인 선택지가 된다.

## 작성·검토 기록 — 본문에 포함하지 않음

- 상태: 한국어·영어 초안, 정상 Notes 글로 발행 승인됨.
- 선택 경로: `selected-topic` (무작위 추첨 없음). 독자 질문: 앱·게임에 온디바이스 모델을 넣기 전에 지원 플랫폼, 메모리, 모델 배포에서 무엇을 먼저 확인해야 하는가?
- 중복 검사: 기존 Notes 제목과 내용에 온디바이스 추론 엔진의 지원 플랫폼·모델 메모리·최초 다운로드를 다룬 글은 없음. 플랫폼 운영 글은 팀의 배포 경로, RAG 글은 평가·검색 구성에 초점을 둔다.
- 연구 후보: (1) NobodyWho 로컬 추론 엔진 — GeekNews 소개 및 GitHub README를 직접 확인, 선택. (2) 서버 모니터링 분석 가이드 — GeekNews 목록의 요약만 확인; 원문 fetch 제한으로 미선택. (3) LLM Wiki 불량 페이지 판별에 Jev 적용 — 목록 요약만 확인, 원문 읽지 않음; 기존 평가 주제와 가까워 미선택. (4) RAG 인덱스·에이전트 메모리 버전 관리 — 목록 요약만 확인, 원문 fetch 제한; 기존 RAG 평가·운영 주제와 겹칠 수 있어 미선택.
- 선택 근거: 온디바이스 AI는 제품 개발·AI 제품화 독자와 맞고, 프로젝트 README에서 구체적인 플랫폼 제약과 메모리 안내를 확인할 수 있었다. GeekNews 반응 수는 관심 신호일 뿐 검색 수요나 JJGo 독자 수요의 증거로 사용하지 않았다. GSC 반환 자료는 노출 35회·클릭 1회뿐이고 내부 PostHog 방문은 제외되지 않아 제목이나 성과 인과를 주장하지 않는다.
- 직접 확인한 사실 (2026-09-30): NobodyWho GitHub README는 Flutter/Python/Godot/Kotlin/Swift/React Native 바인딩, 웹 내보내기 부재, Windows ARM64 미지원, Godot iOS 내보내기 미지원, 데스크톱·모바일의 대략적인 RAM 경험칙, 원격 모델 첫 다운로드 및 캐시를 설명한다. 이들은 프로젝트 문서의 설명이지 JJGo 앱에서 재현한 호환성·성능 결과가 아니다.
- 출처: [GeekNews 소개](https://news.hada.io/topic?id=34463), [NobodyWho 프로젝트 README](https://github.com/nobodywho-ooo/nobodywho).
- 아직 모르는 것: 특정 JJGo 제품에서의 실제 지연 시간, 메모리, 배터리, 다운로드 크기와 이용자 검색어는 확인하지 않았다. 그런 수치나 성능 비교를 넣지 않았다.
- 다음: 실제 한·영 페이지 레이아웃·출처·표지 메타데이터와 exact-commit Pages 배포를 검증하고, 7일·28일 평가일을 기록.

## 대표 이미지 생성 기록

- 도구: built-in image_gen. 원본을 1200×800 WebP로 최적화.
- 파일: `public/a/generated/notes/on-device-ai-targets.webp`.
- 프롬프트: Create a new original editorial cover for a Korean personal technology article about choosing target devices, memory budgets, and platform support before adding on-device AI to an app. Landscape 3:2. Match only the reference's muted forest green, warm cream paper, amber desk light, and quiet literary magazine feeling; do not reuse its desk scene, magnifying glass, papers, or hand. New scene: a small abstract processor module beside a compact smartphone and a thin laptop on a calm wooden workbench; a few simple memory blocks sit near the chip, with one tiny unobtrusive model-file icon. A faint technical sketch of different device silhouettes on a sheet in the background, no words. Thoughtful editorial still life, tactile, realistic, low-key. No brand names, no logos, no readable text, no watermark, no glowing sci-fi UI, no alarm colors.
