import { WorksClient } from "./works-client";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/works",
  title: "이정주 포트폴리오 | 웹 서비스·게임·콘텐츠 | JJGo",
  description: "이정주가 직접 기획하고 설계·개발·운영한 웹 서비스, SaaS, Roblox 게임과 콘텐츠 프로젝트를 선별해 소개합니다.",
  image: "/og.png",
});

export default function WorksPage() {
  return <WorksClient locale="ko" />;
}
