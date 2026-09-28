---
title: "‘모르는 주소’와 ‘수상한 주소’는 다르다"
summary: "주소핀의 도메인 확인기는 공식 목록에 없는 주소와 공식 주소를 흉내 낸 주소를 다르게 다룬다. AI의 답변도 근거 없음과 틀렸음을 구분해 말해야 하지 않을까."
status: publication-authorized
language: ko
---

# ‘모르는 주소’와 ‘수상한 주소’는 다르다

`kbstar.com`과 `kb5tar.com`을 나란히 놓으면 다른 주소라는 걸 안다. 그런데 문자를 받고 누르기 직전에도 알아챌 수 있을까. 숫자 5가 소문자 s처럼 보이는 순간, 주소는 글자보다 모양으로 읽힌다.

GeekNews에 주소핀의 도메인 판별기를 만든 글이 올라왔다. 공식 사이트 목록을 늘어놓기보다, 이미 손에 들어온 주소가 진짜인지 확인하고 싶다는 데서 출발한다. [원문](https://velog.io/@as123123/%ED%95%9C-%EA%B8%80%EC%9E%90%EB%A7%8C-%EB%B0%94%EA%BE%BC-%EA%B0%80%EC%A7%9C-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%BD%94%EB%93%9C%EB%A1%9C-%EA%B0%80%EB%A0%A4%EB%82%B4%EA%B8%B0-%ED%8E%B8%EC%A7%91-%EA%B1%B0%EB%A6%AC%EC%99%80-%EC%88%AB%EC%9E%90-%EC%B9%98%ED%99%98-%EC%A0%95%EA%B7%9C%ED%99%94)

판별기는 입력된 주소에 직접 접속하지 않는다. 호스트 이름을 정리하고 공개된 공식 도메인 목록과 비교한다. 이름이 비슷하면 유사 주소로 알려주고, 신고된 주소와 맞으면 피싱으로 분류한다. 목록에 없고 비슷한 주소도 찾지 못하면 ‘모름’에 남긴다. [주소핀 확인기](https://jusopin.com/check)

여기서 중요한 건 레벤슈타인 거리보다 결과의 이름이다. 편집 거리는 두 문자열이 몇 글자 차이인지 알려준다. 하지만 그 숫자만으로 가짜 사이트라고 확정할 수는 없다. 비슷하다는 건 한 번 더 살펴볼 이유이지, 판결문은 아니다.

그래서 ‘목록에 없다’와 ‘공식 주소를 흉내 낸 것 같다’를 나눈다. 전자는 가진 목록의 범위에 관한 말이고, 후자는 입력한 주소에서 발견한 신호에 관한 말이다. 둘을 한데 묶어 “위험합니다”라고 하면 모르는 것을 아는 척하게 된다.

AI가 문서를 찾아 답할 때도 비슷한 구분이 유용하다. 예를 들어 제공된 규정 문서에서 어떤 휴가 조건을 찾지 못했다고 하자. 그건 “문서에서 확인하지 못했다”는 뜻이지, “그런 조건은 없다”는 확인과 같지 않다. 반대로 문서에서 서로 다른 조건이 발견됐다면, 그것도 단순히 답을 못 찾은 상태와 다르다.

문장을 그럴듯하게 만드는 일보다 이 상태를 정확히 붙이는 일이 더 중요할 때가 있다. 근거가 없는데 없다고 말하면 사람은 확인을 멈춘다. 근거가 있는데 모른다고만 하면 다시 찾을 일을 늘린다. 둘 다 짧은 답변 하나로 끝나지만, 다음 행동은 달라진다.

물론 도메인 확인과 문서 답변은 같은 문제가 아니다. 주소핀은 등록된 도메인 목록과 문자열을 비교한다. 문서 답변에는 질문의 맥락과 출처의 범위가 따라온다. 가져올 수 있는 건 알고리즘이 아니라, 결과를 몇 가지 상태로 나눠 말하는 방식이다.

‘모릅니다’라는 답에도 어디까지 찾아봤는지가 들어가면 쓸모가 생긴다. “제공된 문서에서는 찾지 못했습니다”라고 하면 자료를 더 줄지, 담당자에게 물을지 결정할 수 있다. “주소 목록에는 없습니다”와 “등록 주소와 매우 비슷합니다”가 다른 행동을 부르는 것처럼.

확신을 조금 낮춘다고 답변이 약해지는 건 아니다. 오히려 확인된 사실과 아직 모르는 부분이 나뉘면, 다음에 무엇을 해야 하는지 보인다. 한 글자 차이도 못 볼 수 있는 사람에게 필요한 건 만능 판정이 아니라, 어디까지 확인했고 어떤 이유로 멈췄는지 알려주는 표시일지 모른다.

주소창을 다시 들여다보게 만드는 건 ‘위험’이라는 큰 경고보다 이런 문장일 수 있다.

“공식 주소와 일치하지 않습니다. 비슷한 주소가 하나 있습니다. 누르기 전에 한 번 더 확인해 주세요.”

그 정도면 일단 손가락을 멈출 시간은 생긴다.

---

## 작성 기록 — 본문에 포함하지 않는 편집 메모

- 상태: 한국어 원고 초안, 배포 승인됨. 샘플 글이 아닌 일반 Notes로 등록.
- 추첨: 2026-09-29 06:01:52 +09:00, Python `secrets` 사용. 경로 후보 2개 중 `news`; GeekNews 최신 첫 페이지 후보 20개 중 9번. 제목: “한 글자만 바꾼 가짜 도메인, 코드로 가려내기 — 편집 거리와 숫자 치환 정규화”. 같은 날 기존 발행 글 없음. 동일 주제의 기존 Notes 없음.
- 출처: [GeekNews 항목](https://news.hada.io/topic?id=34307), [저자의 원문](https://velog.io/@as123123/%ED%95%9C-%EA%B8%80%EC%9E%90%EB%A7%8C-%EB%B0%94%EA%BE%BC-%EA%B0%80%EC%A7%9C-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%BD%94%EB%93%9C%EB%A1%9C-%EA%B0%80%EB%A0%A4%EB%82%B4%EA%B8%B0-%ED%8E%B8%EC%A7%91-%EA%B1%B0%EB%A6%AC%EC%99%80-%EC%88%AB%EC%9E%90-%EC%B9%98%ED%99%98-%EC%A0%95%EA%B7%9C%ED%99%94), [주소핀 확인기](https://jusopin.com/check).
- 확인한 내용: 주소핀 확인기는 입력한 도메인에 접속하지 않고 등록된 공식 도메인 및 신고된 피싱 목록과 비교한다. 공식 주소, 유사 주소, 피싱, 미등록 주소를 다르게 설명한다. 미등록 주소를 곧바로 위험하다고 단정하지 않는다고 서비스 FAQ도 밝힌다. 원문 코드의 구체적 구현은 저자의 설명으로만 귀속하고 독립 검증된 보안 성능처럼 쓰지 않았다.
- 비유의 경계: 주소 문자열 분류와 RAG/문서 질의는 동일한 기술이 아니다. “문서에서 찾지 못함”과 “사실이 아님” 구분은 이 글의 적용 사례다. 휴가 조건은 가정이며 사용자 업무 경험으로 주장하지 않는다.
- 말투: 장면과 구체적인 주소 예시에서 시작하고, 기사에서 걸린 분류 차이를 AI 답변 상태에 연결했다. 특정 원문 문장이나 코드 설명을 길게 옮기지 않았다.
- 사용자 반응 확인 여부: 아이디어를 흥미롭게 읽었다는 감정과 “마음에 걸렸다”는 해석은 이 초안이 제안하는 반응이며 사용자가 직접 확인한 발언은 아님. 예약 실행의 발행 승인을 적용해 공개 글로 사용.
- 후속 확인: 영문 제목·요약·본문, 대표 이미지, 기사 및 원문 링크, 모바일·데스크톱, 실제 배포 페이지.

## 대표 이미지 제작 기록

- 방식: 내장 image_gen 도구로 생성하고 1200×800 WebP로 변환. 최종 자산: `public/a/generated/notes/unknown-or-lookalike.webp`.
- 프롬프트: Create a new original editorial cover image for a Korean technology essay about distinguishing an unknown website address from a suspicious lookalike, and by analogy distinguishing missing evidence from a confirmed false claim. Landscape 3:2, at least 1200x800. Match only the quiet literary-magazine mood, muted deep forest green, warm paper, soft amber light, and tactile photographic collage atmosphere of the reference image; do not reuse its scene or objects. New composition: on a dark wooden desk, two small cream paper address slips with abstract rows of tiny glyph-like marks (no legible text), nearly identical except for one visibly different small tile; a magnifying glass rests nearby, and a hand pauses above rather than selecting either slip. Subtle visual distinction between a verified mark and a question mark can be shown with simple abstract symbols, not words. Calm, thoughtful, restrained, realistic paper texture. No computer UI, no readable text, no logos, no watermark, no alarm-red warning aesthetic.
