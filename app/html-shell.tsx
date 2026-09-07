"use client";

import { usePathname } from "next/navigation";
import { JsonLd, personJsonLd, websiteJsonLd } from "./seo";

export function HtmlShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const language =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";

  return (
    <html lang={language}>
      <body>
        <JsonLd data={[websiteJsonLd(), personJsonLd(language)]} />
        {children}
      </body>
    </html>
  );
}
