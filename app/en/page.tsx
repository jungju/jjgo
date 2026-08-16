import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "../raw-source-page";

const homeSource = readFileSync(join(process.cwd(), "app/source/home.html"), "utf8");

export const metadata: Metadata = {
  title: { absolute: "JJGo - Useful Systems, Built Clearly" },
  description: "Jungju Lee turns bold ideas into polished products, platforms, and operating systems.",
};

export default function EnglishHome() {
  return <RawSourcePage source={homeSource} locale="en" page="home" />;
}
