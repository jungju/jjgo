import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "../../raw-source-page";
import { JsonLd, pageMetadata, profilePageJsonLd } from "../../seo";

const aboutSource = readFileSync(join(process.cwd(), "app/source/about.html"), "utf8");

export const metadata = pageMetadata({
  locale: "en",
  path: "/about",
  title: "About Jungju Lee | AI Product & Platform Leader | JJGo",
  description: "Explore Jungju Lee's 16-year career spanning AI productization, Kubernetes and cloud platforms, DevOps, MLOps, and engineering leadership.",
  image: "/og-en.png",
});

export default function EnglishAboutPage() {
  return (
    <>
      <JsonLd data={profilePageJsonLd("en")} />
      <RawSourcePage source={aboutSource} locale="en" page="about" />
    </>
  );
}
