import type { Metadata } from "next";
import "./globals.css";
import { HtmlShell } from "./html-shell";
import { SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "이정주 | AI 제품·플랫폼 엔지니어링 | JJGo",
    template: "%s | JJGo",
  },
  description: "AI 제품화, AI Native 개발 조직, 클라우드 플랫폼과 DevOps를 연결하는 개발 리더 이정주의 공식 사이트입니다.",
  applicationName: "JJGo",
  authors: [{ name: "이정주", url: "/about/" }],
  creator: "이정주",
  publisher: "이정주",
  category: "technology",
  icons: {
    icon: "/a/logo/jjgo-logo.png",
    shortcut: "/a/logo/jjgo-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <HtmlShell>{children}</HtmlShell>
  );
}
