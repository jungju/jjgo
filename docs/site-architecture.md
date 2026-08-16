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
3. 모든 공개 페이지는 `Home · Works · Consulting · About` 전역 메뉴를 같은 순서로 사용한다.
4. 하위 페이지의 활성 전역 메뉴는 부모 페이지와 같아야 한다.
5. 한국어 기본 경로와 `/en` 영어 경로는 같은 페이지 manifest에서 파생한다.
6. 전용 페이지 이름은 JJGo 로고 옆에 표시한다. 상세 서비스 이름처럼 콘텐츠에서 오는 이름은 해당 콘텐츠의 slug 기반 조회 결과를 사용한다.

## 변경 절차

1. 새 페이지나 계층 변경을 먼저 `app/site-spec.ts`에 반영한다.
2. App Router의 얇은 route 파일을 추가하거나 이동한다.
3. 페이지 링크는 문자열 경로 대신 `pagePath`, `consultingPath`, `localizedSitePath`를 사용한다.
4. `npm test`를 실행한다. manifest와 산출물, 부모 계층, 전역 메뉴가 어긋나면 테스트가 실패해야 한다.

구조 정책을 바꿀 때는 이 문서와 manifest를 함께 변경한다. 실제 동작의 최종 기준은 타입과 테스트가 적용되는 `app/site-spec.ts`다.
