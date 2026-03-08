---
title: "homi: 브라우저 로컬 기반 홈 앱"
date: "2026-03-09"
tags: ["devlog", "svelte", "local-first", "automation"]
category: "development"
summary: "homi는 브라우저 localStorage를 활용하는 정적 웹앱으로, 가볍고 빠른 개인 홈 서비스 실험을 위한 프로젝트다."
cardVideoSrc: "/posts/2026-03-09-repo-homi/homi-hero.png"
cardPoster: "/posts/2026-03-09-repo-homi/homi-hero.png"
bgVideoSrc: "/posts/2026-03-09-repo-homi/homi-hero.png"
bgPoster: "/posts/2026-03-09-repo-homi/homi-hero.png"
---

# homi

`homi`는 브라우저 `localStorage`를 중심으로 동작하는 정적 웹앱 프로젝트다.  
서버 의존도를 낮추고, 빠르게 배포·실험할 수 있는 **로컬 퍼스트(local-first)** 접근을 지향한다.

![homi 메인 비주얼](/posts/2026-03-09-repo-homi/homi-hero.png)

## 핵심 포인트

- 정적 웹앱 구조로 배포/운영 부담이 낮음
- 데이터 저장을 브라우저 `localStorage`에 위임
- Svelte 기반으로 가벼운 UI/상태 관리
- 계약(Contract) 기반 QA/검증 파이프라인 포함

## 프로젝트 철학

`homi`는 복잡한 인프라를 먼저 올리는 대신,  
작게 시작해 빠르게 검증하고 반복 개선하는 흐름에 초점을 둔다.

특히 machine-first 문서 체계를 통해,  
사람 문서와 실행 규칙이 어긋나는 문제를 줄이려는 시도가 인상적이다.

## 링크

- Repository: https://github.com/jungju/homi
