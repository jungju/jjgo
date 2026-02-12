# Content Structure

`content/`는 글/사진/영상 원본을 관리하는 저장소다.

## 구조

```text
content/
  posts/
    drafts/
    published/
  photos/
    original/
    optimized/
    thumbnails/
  videos/
    original/
    encoded/
    thumbnails/
  meta/
    tags/
    categories/
    series/
```

## 사용 원칙

- `posts/drafts`: 작성 중인 글
- `posts/published`: 게시 완료 글
- `photos/original`: 원본 사진
- `photos/optimized`: 웹 노출용 최적화 사진
- `videos/original`: 원본 영상
- `videos/encoded`: 스트리밍/서비스용 인코딩 영상
- `thumbnails`: 목록/카드에 쓰는 썸네일
- `meta/*`: 태그/카테고리/시리즈 정의 파일

## 메타 파일

- `content/meta/tags/index.json`
- `content/meta/categories/index.json`
- `content/meta/series/index.json`

각 파일은 `id`, `name`, `description`(선택), `color`(tags 선택) 형식으로 관리한다.

## 권장 추가 규칙

- 큰 파일은 Git LFS 적용을 검토한다.
- 게시된 콘텐츠 삭제 대신 `archived` 폴더를 추가해 보관한다.

## 동기화

- `make content`: `content/posts/published/*.md`를 `src/lib/data/stories.generated.ts`로 배포한다.
- 동기화 시 `category`, `series`, `tags`가 메타 파일과 연계되어 `generatedMeta`로 함께 생성된다.
