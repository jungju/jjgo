import type { Metadata } from "next";
import "./globals.css";
import { AtmosphereController } from "./atmosphere-controller";

export const metadata: Metadata = {
  title: {
    default: "JJGo - Useful Systems, Built Clearly",
    template: "%s | JJGo",
  },
  description: "혁신적인 상상에서 완성도 있는 결과로 연결하는 이정주의 사이트입니다.",
  icons: {
    icon: "/a/logo/jjgo-logo.png",
    shortcut: "/a/logo/jjgo-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="jhub-web-app-body--jjgo2 jjgo2-body">
        {children}
        <AtmosphereController />
      </body>
    </html>
  );
}
