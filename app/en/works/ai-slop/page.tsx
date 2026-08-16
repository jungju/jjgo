import { AiSlopPage } from "../../../ai-slop/ai-slop-page";
import { JsonLd, PERSON_ID, absoluteUrl, localizedPagePath, pageMetadata } from "../../../seo";

const title = "AI Slop | Automated AI Publishing Project | JJGo";
const description = "Meet AI Slop, an AI-created and automatically published comics and video archive, and its featured series The Place Where the Wind Returns.";

export const metadata = pageMetadata({
  locale: "en",
  path: "/works/ai-slop",
  title,
  description,
  image: "/a/versions/works/20260720/wind-returning-place.jpg",
  imageWidth: 960,
  imageHeight: 540,
});

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(localizedPagePath("en", "/works/ai-slop"))}#project`,
        url: absoluteUrl(localizedPagePath("en", "/works/ai-slop")),
        name: "AI Slop",
        description,
        inLanguage: "en",
        creator: { "@id": PERSON_ID },
        sameAs: ["https://slop.jjgo.io/", "https://github.com/jungju/slop"],
      }} />
      <AiSlopPage locale="en" />
    </>
  );
}
