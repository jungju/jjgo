---
title: "jgo: OpenAI 호환 자동화 게이트웨이"
date: "2026-02-13"
tags: ["devlog", "backend", "automation", "ops"]
category: "development"
summary: "jgo는 OpenAI 호환 API로 요청을 받아 codex CLI 실행까지 연결하는 24/7 상주형 Go 자동화 서버다."
---

# jgo

`jgo`는 **OpenAI 호환 API 서버** 형태로 상주하면서, 들어온 작업 지시를 `codex exec`로 실행해 실제 자동화 결과를 반환하는 프로젝트다.

핵심은 단순하다.

- 외부 클라이언트는 `/v1/chat/completions`로 요청
- 서버는 지시를 해석하고(옵션: 프롬프트 최적화)
- `codex`를 1회 실행해 실제 작업 수행
- 결과를 OpenAI 호환 응답 포맷으로 반환

즉, “챗 API 인터페이스 + 실제 CLI 자동화 실행기”를 하나로 묶은 구조다.

## 왜 이 프로젝트가 실전적인가

`jgo`는 데모용 래퍼가 아니라, **실제 운영 자동화 루프**를 염두에 둔 설계가 들어가 있다.

- 상주형 서버(Resident mode)로 24/7 운영 가능
- `run_id`와 `X-JGO-Run-ID`로 요청/로그 추적 가능
- `local` 실행 기본 + 필요 시 `ssh` 전환
- `gh`, `aws`, `kubectl`, `git` 같은 실무 CLI를 바로 활용
- Kubernetes 배포를 고려한 이미지/환경변수/검증 스크립트 제공

## 아키텍처 요약

- API Layer: `GET /v1/models`, `POST /v1/chat/completions`, `GET /healthz`
- Orchestrator Layer: 메시지에서 유효한 user instruction 추출, 실행 프롬프트 확정
- Prompt Layer(옵션): upstream OpenAI-compatible endpoint 호출, 실행 친화적 instruction 재구성
- Execution Layer: `codex login status` 확인 후 `codex exec --full-auto --skip-git-repo-check` 실행 (`local`/`ssh`)
- Observability Layer: 요청 단위 `run_id`, 응답 헤더 `X-JGO-Run-ID`, exec 로그 추적

## 운영 관점에서 좋은 포인트

- **API 모드 + CLI 모드 동시 제공**: 서비스형 운영과 단발성 실행 모두 대응
- **환경변수 전략 명확**: OpenAI/OpenWebUI/LiteLLM fallback 매핑 포함
- **Kubernetes 친화성**: 컨테이너 이미지/헬스체크/포트포워드 스모크 테스트 흐름 제공
- **검증 자동화**: `make smoke-test`, `make codex-auth-test`, `make deploy-check`

## 사용 예시(대표 시나리오)

- 특정 GitHub 레포 문서 수정 → 커밋/푸시
- 배포 매니페스트 점검 및 Kubernetes 변경 자동화
- 다수 레포 점검/정리 같은 반복 작업 자동 실행

## 기술 스택

- Language: Go
- Runtime shape: Resident API server + CLI
- Interface: OpenAI-compatible API
- Execution engine: Codex CLI
- Toolchain integration: GitHub/AWS/Kubernetes CLI

## 링크

- Repository: https://github.com/jungju/jgo
- 문서 기준점: `SPEC/SPEC.md` (FROZEN baseline)

## 한 줄 총평

`jgo`는 “LLM API처럼 호출하지만, 결과는 실제 운영 자동화로 귀결되는” 실무형 게이트웨이다.  
특히 **CLI 중심 자동화를 API 제품 형태로 승격**했다는 점에서 구조적 완성도가 높다.
