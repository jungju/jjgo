import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "../raw-source-page";
import { pageMetadata } from "../seo";

const homeSource = readFileSync(join(process.cwd(), "app/source/home.html"), "utf8");

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Jungju Lee | AI Product & Platform Engineering | JJGo",
  description: "Jungju Lee is a product engineering leader with 16 years of experience across AI productization, AI-native organizations, cloud platforms, and DevOps.",
  image: "/og-en.png",
});

export default function EnglishHome() {
  return <RawSourcePage source={homeSource} locale="en" page="home" />;
}
