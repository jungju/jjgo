import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "../../raw-source-page";

const aboutSource = readFileSync(join(process.cwd(), "app/source/about.html"), "utf8");

export const metadata: Metadata = {
  title: "About",
  description: "Jungju Lee’s experience across product engineering, AI, cloud platforms, and engineering organizations.",
};

export default function EnglishAboutPage() {
  return <RawSourcePage source={aboutSource} locale="en" path="/about" />;
}
