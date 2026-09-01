import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "../raw-source-page";
import { pageMetadata } from "../seo";

const homeSource = readFileSync(join(process.cwd(), "app/source/home.html"), "utf8");

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Jungju Lee | AI Products, AX/RAG & Platforms | JJGo",
  description: "AI products, AX and RAG grounded in real-work evaluation and orchestration, AI-native organizations, and cloud platform engineering.",
  image: "/og-en.png",
});

export default function EnglishHome() {
  return <RawSourcePage source={homeSource} locale="en" page="home" />;
}
