import { RobloxPage } from "../../roblox/roblox-page";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/works/roblox",
  title: "Roblox 게임 포트폴리오 | 이정주 | JJGo",
  description: "이정주가 만든 Roblox 게임 Paper Boat Exploration: Seoul Waterways Adventure와 Bomb Rain의 기획, 플레이 경험과 개발 방향을 소개합니다.",
  image: "/a/generated/roblox/paper-boat-seoul.png",
  imageWidth: 768,
  imageHeight: 432,
});

export default function Page() {
  return <RobloxPage locale="ko" />;
}
