import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "../raw-source-page";

const aboutSource = readFileSync(join(process.cwd(), "app/source/about.html"), "utf8");

export const metadata: Metadata = {
  title: "소개",
  description: "이정주의 제품 개발 경험과 일하는 방식을 소개합니다.",
};

export default function AboutPage() {
  return <RawSourcePage source={aboutSource} locale="ko" path="/about" />;
}
