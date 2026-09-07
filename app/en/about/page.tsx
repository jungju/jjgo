import { AboutPage } from "../../about/about-page";
import { JsonLd, pageMetadata, profilePageJsonLd } from "../../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/about",
  title: "About Jungju Lee | AI Product & Platform Leader | JJGo",
  description:
    "Explore Jungju Lee's 16-year career spanning AI productization, Kubernetes and cloud platforms, DevOps, MLOps, and engineering leadership.",
  image: "/og-en.png",
});

export default function EnglishAboutPage() {
  return (
    <>
      <JsonLd data={profilePageJsonLd("en")} />
      <AboutPage locale="en" />
    </>
  );
}
