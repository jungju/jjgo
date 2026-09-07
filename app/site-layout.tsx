import type { ReactNode } from "react";
import { SiteHeader, type SiteIdentity } from "./site-header";
import type { SiteLocale, SitePageId } from "./site-spec";

export function SiteLayout({
  children,
  locale,
  page,
  className,
  identity,
}: {
  children: ReactNode;
  locale: SiteLocale;
  page: SitePageId;
  className: string;
  identity?: SiteIdentity;
}) {
  return (
    <main className={`forest2-site ${className}`} lang={locale}>
      <a className="skip-link" href="#main-content">
        {locale === "ko" ? "본문으로 이동" : "Skip to content"}
      </a>
      <picture className="forest2-bg-picture">
        <source
          media="(max-width: 900px)"
          srcSet="/a/generated/backgrounds/home-mobile-bg.webp"
        />
        <img
          className="forest2-bg-image"
          src="/a/generated/backgrounds/home-desktop-bg.webp"
          alt=""
        />
      </picture>
      <div className="forest2-bg-wash" aria-hidden="true" />
      <SiteHeader locale={locale} page={page} identity={identity} />
      <div className="forest2-content" id="main-content" tabIndex={-1}>
        {children}
      </div>
    </main>
  );
}
