import type { Metadata } from "next";
import { CoffeeChatPage } from "../../coffee-chat/coffee-chat-page";

export const metadata: Metadata = {
  title: "Coffee Chat",
  description: "Request a conversation to exchange experience, questions, and new possibilities.",
};

export default function EnglishCoffeeChatPage() {
  return <CoffeeChatPage locale="en" />;
}
