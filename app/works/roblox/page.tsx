import type { Metadata } from "next";
import { RobloxPage } from "../../roblox/roblox-page";

export const metadata: Metadata = {
  title: "Roblox",
  description: "서울 수로 종이배 탐험과 Bomb Rain 생존 게임을 소개하는 JJGo 작품의 Roblox 전용 페이지입니다.",
};

export default function Page() {
  return <RobloxPage locale="ko" />;
}
