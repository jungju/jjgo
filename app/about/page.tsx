import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "../raw-source-page";
import { JsonLd, pageMetadata, profilePageJsonLd } from "../seo";

const aboutSource = readFileSync(join(process.cwd(), "app/source/about.html"), "utf8");

export const metadata = pageMetadata({
  locale: "ko",
  path: "/about",
  title: "이정주 소개 | AI 제품·플랫폼 개발 리더 | JJGo",
  description: "이정주의 16년 제품 개발 경력과 AI 제품화, Kubernetes·클라우드 플랫폼, DevOps·MLOps, 개발 조직 리딩 경험을 소개합니다.",
  image: "/og.png",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profilePageJsonLd("ko")} />
      <RawSourcePage source={aboutSource} locale="ko" page="about" />
    </>
  );
}
