import { HomePage } from "../home/home-page";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Enterprise AI Consulting · RAG Prototypes and Evaluation | JJGo",
  description:
    "Build a RAG proof of concept around a real workflow. Evaluate retrieval and AI answers, then use the results to plan the next stage of development and rollout.",
  image: "/og-en.png",
});

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
