import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "./raw-source-page";
import { pageMetadata } from "./seo";

const homeSource = readFileSync(join(process.cwd(), "app/source/home.html"), "utf8");

export const metadata = pageMetadata({
  locale: "ko",
  path: "/",
  title: "이정주 | AI 제품·플랫폼 개발 리더 | JJGo",
  description: "16년 경력의 개발 리더 이정주가 AI 제품화, AI Native 개발 조직, 클라우드 플랫폼과 DevOps 경험을 실제 제품과 실행 구조로 연결합니다.",
  image: "/og.png",
});

export default function Home() {
  return <RawSourcePage source={homeSource} locale="ko" page="home" />;
}
