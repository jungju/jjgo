import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { RawSourcePage } from "./raw-source-page";

const homeSource = readFileSync(join(process.cwd(), "app/source/home.html"), "utf8");

export const metadata: Metadata = {
  title: { absolute: "JJGo - Useful Systems, Built Clearly" },
  description: "혁신적인 상상에서 완성도 있는 결과로 연결합니다.",
};

export default function Home() {
  return <RawSourcePage source={homeSource} locale="ko" page="home" />;
}
