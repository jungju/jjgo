import { ConsultingDetail, consultingServiceBySlug } from "../../../consulting/consulting-components";
import { consultingServicesEn } from "../../../consulting/consulting-data-en";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../../seo";

const service = consultingServiceBySlug(consultingServicesEn, "ax");
const path = "/consulting/ax";

export const metadata = pageMetadata({
  locale: "en",
  path,
  title: "AX & RAG Consulting | Evaluation & Orchestration | JJGo",
  description: "Evaluate AI and RAG configurations against real workflows and documents, then orchestrate models, retrieval, agents, and tools into an operational service flow.",
  image: service.image,
  imageWidth: 1200,
  imageHeight: 800,
});

export default function EnglishAxPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({
        locale: "en",
        path,
        name: "AX & RAG Consulting",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} services={consultingServicesEn} locale="en" />
    </>
  );
}
