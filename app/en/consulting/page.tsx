import { ConsultingOverview } from "../../consulting/consulting-overview";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/consulting",
  title: "AI-Native, AX/RAG & Platform Engineering Consulting | JJGo",
  description:
    "Consulting for AI-native organizations, AX and RAG grounded in real-work evaluation and orchestration, and Kubernetes platform engineering.",
  image: "/og-en.png",
});

export default function ConsultingPage() {
  return <ConsultingOverview locale="en" />;
}
