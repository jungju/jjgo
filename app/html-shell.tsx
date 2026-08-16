"use client";

import { usePathname } from "next/navigation";
import { JsonLd, personJsonLd, websiteJsonLd } from "./seo";

export function HtmlShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const language = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";

  return (
    <html lang={language}>
      <body className="jhub-web-app-body--jjgo2 jjgo2-body">
        <JsonLd data={[websiteJsonLd(), personJsonLd(language)]} />
        {children}
      </body>
    </html>
  );
}
