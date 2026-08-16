import { WorksClient } from "../../works/works-client";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/works",
  title: "Jungju Lee Portfolio | Web Products, Games & Content | JJGo",
  description: "A curated selection of web products, SaaS, Roblox games, and content designed, built, and operated by Jungju Lee.",
  image: "/og-en.png",
});

export default function EnglishWorksPage() {
  return <WorksClient locale="en" />;
}
