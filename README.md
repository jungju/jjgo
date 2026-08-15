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

완성된 사이트는 `out/`에 생성됩니다. 홈, 소개, 작품, 컨설팅과 세 개의 컨설팅 상세 경로가 모두 정적 HTML로 출력됩니다.

## 배포

`main` 브랜치에 변경 사항을 올리면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages로 배포합니다. 사용자 도메인 `jjgo.io`는 저장소의 Pages 설정과 AWS Route 53 DNS에서 연결합니다.
