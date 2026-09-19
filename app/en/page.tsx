import { HomePage } from "../home/home-page";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Jungju Lee | AI Native Consulting | JJGo",
  description:
    "Becoming AI Native means defining ownership, validating AI against real work, and building the foundation to operate reliably. We shape the changes that fit your organization’s current stage.",
  image: "/og-en.png",
});

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
