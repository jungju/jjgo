import type { Metadata } from "next";
import { CoffeeChatPage } from "./coffee-chat-page";

export const metadata: Metadata = {
  title: "커피챗",
  description: "서로의 경험과 고민을 나누고 새로운 관점과 가능성을 발견하는 커피챗을 신청합니다.",
};

export default function KoreanCoffeeChatPage() {
  return <CoffeeChatPage locale="ko" />;
}
