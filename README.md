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

완성된 사이트는 `out/`에 생성됩니다. 홈, 소개, 작품과 하위 Roblox·AI Slop 페이지, 컨설팅과 세 개의 상세 페이지가 한국어·영어 정적 HTML로 출력됩니다. `/method`는 기존 링크를 위한 호환 경로입니다.

## 검증

```bash
npm test
npm run lint
npm run format:check
```

`npm test`는 빌드 후 콘텐츠·SEO·언어·내부 링크·이미지·CSS 변수·미사용 리소스·작품 데이터 회귀 테스트를 실행합니다. 이미 빌드했다면 `npm run test:unit`으로 테스트만 실행할 수 있습니다. 코드 포맷은 `npm run format`으로 맞춥니다. 포매터는 고정한 버전의 Prettier를 npx로 실행합니다.

실제 Chrome 검증은 정적 사이트를 실행한 상태에서 Playwright CLI로 진행합니다. 첫 실행 시 CLI를 내려받으며 Chrome이 설치되어 있어야 합니다.

```bash
npm start -- --listen 4173
```

다른 터미널에서 실행합니다.

```bash
npx --yes --package @playwright/cli@0.1.19 playwright-cli -s=jjgo-qa open http://127.0.0.1:4173/ --browser chrome
npx --yes --package @playwright/cli@0.1.19 playwright-cli -s=jjgo-qa run-code --filename tests/browser-smoke.txt
npx --yes --package @playwright/cli@0.1.19 playwright-cli -s=jjgo-qa close
```

20개 경로를 5개 화면 폭에서 점검하고 필터, 빈 상태, 모달의 키보드·포커스·닫기, 언어 전환, 앵커, 이미지 및 콘솔 오류를 확인합니다. 스크린샷은 `output/playwright/`에 저장됩니다.

## 웹 분석

PostHog로 페이지 조회, 페이지 이탈, 링크·버튼 상호작용을 수집합니다. 세션 녹화는 비활성화되어 있습니다.

로컬에서는 `.env.example`을 `.env.local`로 복사하고 PostHog 프로젝트 토큰을 입력합니다. 배포 환경에서는 GitHub 저장소의 Actions variables에 다음 값을 등록합니다.

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`: PostHog 프로젝트 토큰
- `NEXT_PUBLIC_POSTHOG_HOST`: PostHog 수집 호스트. 미국 리전은 `https://us.i.posthog.com`, 유럽 리전은 `https://eu.i.posthog.com`

토큰이 없으면 분석 기능만 비활성화되고 사이트 빌드와 실행은 정상적으로 동작합니다.

## 사이트 구조

URL 계층과 공통 메뉴의 SSOT는 `app/site-spec.ts`입니다. 구조 원칙과 변경 절차는 [`docs/site-architecture.md`](docs/site-architecture.md)를 따릅니다.

## 배포

`main` 브랜치에 변경 사항을 올리면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages로 배포합니다. 사용자 도메인 `jjgo.io`는 저장소의 Pages 설정과 AWS Route 53 DNS에서 연결합니다.
