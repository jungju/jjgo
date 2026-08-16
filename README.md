# JJGo

`jjgo.io`에 배포하는 이정주의 개인 사이트입니다. Next.js의 정적 내보내기를 사용하며, 실행 서버나 데이터베이스 없이 GitHub Pages에서 동작합니다.

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm install
npm run dev
```

## 정적 빌드

```bash
npm run build
```

완성된 사이트는 `out/`에 생성됩니다. 홈, 소개, 작품과 그 하위 Roblox 전용 페이지, 컨설팅과 세 개의 컨설팅 상세 경로가 한국어·영어 정적 HTML로 출력됩니다.

## 사이트 구조

URL 계층과 공통 메뉴의 SSOT는 `app/site-spec.ts`입니다. 구조 원칙과 변경 절차는 [`docs/site-architecture.md`](docs/site-architecture.md)를 따릅니다.

## 배포

`main` 브랜치에 변경 사항을 올리면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages로 배포합니다. 사용자 도메인 `jjgo.io`는 저장소의 Pages 설정과 AWS Route 53 DNS에서 연결합니다.
