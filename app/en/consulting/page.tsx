import { ConsultingOverview } from "../../consulting/consulting-overview";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/consulting",
  title: "Enterprise AI Consulting · RAG Evaluation Demo | JJGo",
  description:
    "Build a RAG prototype, evaluate evidence and answers, and plan a rollout. See an evaluation report demo based on fictional sample documents.",
  image: "/og-en.png",
});

export default function ConsultingPage() {
  return <ConsultingOverview locale="en" />;
}
