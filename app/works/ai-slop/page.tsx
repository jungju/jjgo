import { AiSlopPage } from "../../ai-slop/ai-slop-page";
import { JsonLd, PERSON_ID, absoluteUrl, localizedPagePath, pageMetadata } from "../../seo";

const title = "AI Slop | AI 자동 연재 프로젝트 | JJGo";
const description = "AI가 기획부터 이미지 생성과 게시까지 이어 가는 만화·영상 아카이브 AI Slop과 대표 연재 《바람이 돌아오는 곳》을 소개합니다.";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/works/ai-slop",
  title,
  description,
  image: "/a/versions/works/20260720/wind-returning-place.jpg",
  imageWidth: 960,
  imageHeight: 540,
});

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(localizedPagePath("ko", "/works/ai-slop"))}#project`,
        url: absoluteUrl(localizedPagePath("ko", "/works/ai-slop")),
        name: "AI Slop",
        description,
        inLanguage: "ko-KR",
        creator: { "@id": PERSON_ID },
        sameAs: ["https://slop.jjgo.io/", "https://github.com/jungju/slop"],
      }} />
      <AiSlopPage locale="ko" />
    </>
  );
}
