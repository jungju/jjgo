import type { Metadata } from "next";
import { localizedSitePath, type SiteLocale } from "./site-spec";

export const SITE_URL = "https://jjgo.io";
export const PERSON_ID = `${SITE_URL}/#jungju-lee`;

type PageMetadataOptions = {
  locale: SiteLocale;
  path: string;
  title: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  canonicalPath?: string;
  noIndex?: boolean;
};

function trailingSlash(path: string) {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

export function localizedPagePath(locale: SiteLocale, path: string) {
  return trailingSlash(localizedSitePath(locale, path));
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
  imageWidth = 1200,
  imageHeight = 630,
  canonicalPath = path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = localizedPagePath(locale, canonicalPath);
  const korean = localizedPagePath("ko", canonicalPath);
  const english = localizedPagePath("en", canonicalPath);
  const socialImage = image
    ? [{ url: absoluteUrl(image), width: imageWidth, height: imageHeight, alt: title }]
    : undefined;

  return {
    title: { absolute: title },
    description,
    authors: [{ name: locale === "ko" ? "이정주" : "Jungju Lee", url: localizedPagePath(locale, "/about") }],
    creator: locale === "ko" ? "이정주" : "Jungju Lee",
    publisher: locale === "ko" ? "이정주" : "Jungju Lee",
    alternates: {
      canonical,
      languages: {
        "ko-KR": korean,
        en: english,
        "x-default": korean,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "JJGo",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? ["en_US"] : ["ko_KR"],
      type: "website",
      images: socialImage,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [absoluteUrl(image)] : undefined,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function personJsonLd(locale: SiteLocale) {
  const korean = locale === "ko";
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: korean ? "이정주" : "Jungju Lee",
    alternateName: korean ? ["Jungju Lee", "JJGo"] : ["이정주", "JJGo"],
    url: absoluteUrl(localizedPagePath(locale, "/about")),
    jobTitle: korean ? "AI 제품·플랫폼 개발 리더" : "AI Product and Platform Engineering Leader",
    description: korean
      ? "AI 제품화, 클라우드 플랫폼, DevOps·MLOps와 AI Native 개발 조직을 연결하는 16년 경력의 개발 리더"
      : "A product engineering leader with 16 years of experience across AI productization, cloud platforms, DevOps, MLOps, and AI-native engineering organizations.",
    alumniOf: { "@type": "CollegeOrUniversity", name: korean ? "대전대학교" : "Daejeon University" },
    knowsAbout: [
      "AI productization",
      "AI-native organization",
      "Platform engineering",
      "Cloud computing",
      "Kubernetes",
      "DevOps",
      "SRE",
      "MLOps",
    ],
    sameAs: [
      "https://www.linkedin.com/in/jungjugo/",
      "https://github.com/jungju",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "JJGo",
    alternateName: "Jungju Lee",
    inLanguage: ["ko-KR", "en"],
    publisher: { "@id": PERSON_ID },
  };
}

export function profilePageJsonLd(locale: SiteLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(localizedPagePath(locale, "/about"))}#profile`,
    url: absoluteUrl(localizedPagePath(locale, "/about")),
    name: locale === "ko" ? "이정주 소개" : "About Jungju Lee",
    inLanguage: locale === "ko" ? "ko-KR" : "en",
    dateModified: "2026-08-16",
    mainEntity: { "@id": PERSON_ID },
  };
}

export function serviceJsonLd({
  locale,
  path,
  name,
  description,
}: {
  locale: SiteLocale;
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(localizedPagePath(locale, path))}#service`,
    url: absoluteUrl(localizedPagePath(locale, path)),
    name,
    description,
    inLanguage: locale === "ko" ? "ko-KR" : "en",
    areaServed: { "@type": "Country", name: "South Korea" },
    provider: { "@id": PERSON_ID },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
