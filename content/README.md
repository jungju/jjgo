# Content Structure

`content/`는 글/사진/영상 원본을 관리하는 저장소다.

## 구조

```text
content/
  posts/
    YYYY-MM-DD-title/
      index.md
      <photos|videos|assets...>
    draft-YYYY-MM-DD-title/
      index.md
      <photos|videos|assets...>
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
```

## 사용 원칙

- `posts/<post-folder>/index.md`: 발행 글 본문
- `posts/draft-<post-folder>/index.md`: 작성 중인 글 본문
- 글에 포함되는 이미지/영상/첨부 파일은 해당 글 폴더 안에 함께 저장
- `photos/original`: 원본 사진
- `photos/optimized`: 웹 노출용 최적화 사진
- `videos/original`: 원본 영상
- `videos/encoded`: 스트리밍/서비스용 인코딩 영상
- `thumbnails`: 목록/카드에 쓰는 썸네일
- `meta/*`: 태그/카테고리 정의 파일

## 메타 파일

- `content/meta/tags/index.json`
- `content/meta/categories/index.json`

각 파일은 `id`, `name`, `description`(선택), `color`(tags 선택) 형식으로 관리한다.

## 권장 추가 규칙

- 큰 파일은 Git LFS 적용을 검토한다.
- 게시된 콘텐츠 삭제 대신 `archived` 폴더를 추가해 보관한다.

## 동기화

- `make content`: `content/posts/*/index.md`를 `src/lib/data/stories.generated.ts`로 배포한다.
- 폴더명이 `draft-`로 시작하는 글은 목록 생성에서 제외된다.
- 동기화 시 `category`, `tags`가 메타 파일과 연계되어 `generatedMeta`로 함께 생성된다.
