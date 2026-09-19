# JJGo 사이트 구조 계약

## 기준

사이트의 URL 계층, 상단 전역 메뉴, 현재 메뉴 상태와 전용 페이지 이름은 `app/site-spec.ts`를 유일한 구조 기준(SSOT)으로 사용한다.

- `sitePages`: 공개 페이지의 기본 경로, 부모 페이지, 활성 전역 메뉴, 전용 이름
- `primaryNavigation`: 모든 페이지가 공유하는 전역 메뉴와 순서
- `consultingPageBySlug`: 컨설팅 콘텐츠 slug와 페이지 구조의 대응
- `staticHtmlRoutes()`: 한국어와 영어 정적 산출물 목록

페이지의 상세 문구, 이미지, 외부 URL은 구조 manifest에 넣지 않는다. 이는 각 콘텐츠 모듈이 관리한다.

## 고정된 규칙

1. `Roblox`는 `Works`의 하위 페이지이며 경로는 `/works/roblox`다.
2. 컨설팅 상세 페이지는 `Consulting` 하위에 있고 `/consulting/{slug}` 형식을 사용한다.
3. 모든 공개 페이지는 `Home · Works · Consulting · Notes · About` 전역 메뉴를 같은 순서로 사용한다.
4. 하위 페이지의 활성 전역 메뉴는 부모 페이지와 같아야 한다.
5. 한국어 기본 경로와 `/en` 영어 경로는 같은 페이지 manifest에서 파생한다.
6. 전용 페이지 이름은 JJGo 로고 옆에 표시한다. 상세 서비스 이름처럼 콘텐츠에서 오는 이름은 해당 콘텐츠의 slug 기반 조회 결과를 사용한다.

Notes는 /notes 목록과 /notes/{slug} 글 상세 페이지로 구성한다. 글 경로는 sitePages에 등록하고, 한국어·영어 본문은 app/notes/notes-data.ts에서 관리한다. 샘플 글은 목록과 본문에 샘플임을 표시한다.

## 변경 절차

1. 새 페이지나 계층 변경을 먼저 `app/site-spec.ts`에 반영한다.
2. App Router의 얇은 route 파일을 추가하거나 이동한다.
3. 페이지 링크는 문자열 경로 대신 `pagePath`, `consultingPath`, `localizedSitePath`를 사용한다.
4. `npm test`를 실행한다. manifest와 산출물, 부모 계층, 전역 메뉴가 어긋나면 테스트가 실패해야 한다.

구조 정책을 바꿀 때는 이 문서와 manifest를 함께 변경한다. 실제 동작의 최종 기준은 타입과 테스트가 적용되는 `app/site-spec.ts`다.

## 구현 구조

- `app/site-layout.tsx`: 배경, 본문 바로가기, 헤더와 본문 영역. 모든 주요 화면에서 같은 레이아웃을 사용한다.
- `app/site-header.tsx`, `app/language-toggle.tsx`: manifest에서 메뉴·현재 위치·언어 링크를 결정한다.
- `app/home`, `app/about`: 언어별 콘텐츠 데이터와 일반 React 화면. HTML 원본이나 정규식 치환을 사용하지 않는다.
- `app/consulting`: 서비스 콘텐츠, 단계별 개발 설명, 공통 목록·상세 화면. 영어 목록도 같은 화면 구현을 사용한다.
- `app/works`: 작품·컬렉션 데이터, 필터 상태와 상세 대화상자. 프로젝트별 고정 정보는 한 번만 정의하고 번역 문구를 별도로 둔다. Roblox·AI Slop 콘텐츠도 실제 URL 아래에 둔다.
- `app/en`: 같은 화면 컴포넌트에 영어 locale과 메타데이터를 전달하는 route 파일만 둔다.
- `app/styles`: 공통 스타일과 홈·작품·컨설팅·소개·프로젝트 스타일. `app/globals.css` 한 곳에서 순서대로 불러온다. 기존 `forest2-` 이름은 유지한다.
- `public`: 현재 화면과 메타데이터에서 참조하는 배포 리소스만 둔다. 과거 캡처·시안은 Git 이력으로 보관한다.

사이트는 빌드 시 콘텐츠를 읽는 정적 사이트다. 별도 Go template, API, Handler, Service, Repository 또는 데이터베이스 계층을 두지 않는다. 필터와 대화상자만 브라우저 상태를 사용하며 분석 초기화 실패는 콘텐츠 렌더링을 막지 않는다.

## 스타일과 상태

공통 색상·폰트·간격은 `styles/base.css`의 CSS 변수로 관리한다. 페이지 여백은 `page-frame`, 본문 폭은 `page-shell`을 사용한다. 페이지별 규칙은 해당 스타일 파일에서 수정하고 마지막에 임시 덮어쓰기를 추가하지 않는다.

작품 상세는 기본 `dialog`를 사용한다. Escape, 닫기 버튼, 배경 클릭, 배경 스크롤 잠금, Tab 순환과 원래 버튼으로의 포커스 복귀를 지원한다. 필터 결과가 없으면 각 언어의 빈 상태를 보여준다. 콘텐츠는 미리 생성되므로 데이터 로딩을 가장하는 스피너나 API 재시도 계층은 필요하지 않다.
