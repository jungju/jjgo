import { ConsultingOverview } from "../../consulting/consulting-overview";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/consulting",
  title: "AI Native Consulting | JJGo",
  description:
    "Connect how teams work, AI and RAG services, and platform operations so AI delivers practical outcomes.",
  image: "/og-en.png",
});

export default function ConsultingPage() {
  return <ConsultingOverview locale="en" />;
}
