import { HomePage } from "../home/home-page";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Jungju Lee | AI Products, AX/RAG & Platforms | JJGo",
  description:
    "AI products, AX and RAG grounded in real-work evaluation and orchestration, AI-native organizations, and cloud platform engineering.",
  image: "/og-en.png",
});

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
