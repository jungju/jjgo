import type { Metadata } from "next";
import { WorksClient } from "./works-client";

export const metadata: Metadata = {
  title: "작품",
  description: "Roblox, 독립 게임, 영상, 웹 서비스와 만화를 컬렉션으로 살펴봅니다.",
};

export default function WorksPage() {
  return <WorksClient />;
}
