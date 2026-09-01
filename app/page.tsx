import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "./raw-source-page";
import { pageMetadata } from "./seo";

const homeSource = readFileSync(join(process.cwd(), "app/source/home.html"), "utf8");

export const metadata = pageMetadata({
  locale: "ko",
  path: "/",
  title: "이정주 | AI 제품·AX/RAG·플랫폼 개발 | JJGo",
  description: "AI 제품, 현장 평가와 오케스트레이션 중심의 AX·RAG, AI Native 개발 조직과 클라우드 플랫폼 경험을 소개합니다.",
  image: "/og.png",
});

export default function Home() {
  return <RawSourcePage source={homeSource} locale="ko" page="home" />;
}
