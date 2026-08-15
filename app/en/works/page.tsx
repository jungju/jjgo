import type { Metadata } from "next";
import { WorksClient } from "../../works/works-client";

export const metadata: Metadata = {
  title: "Works",
  description: "Explore JJGo projects across web services, games, video, Roblox, and comics.",
};

export default function EnglishWorksPage() {
  return <WorksClient locale="en" />;
}
