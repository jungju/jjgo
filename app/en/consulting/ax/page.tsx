import { ConsultingDetail, consultingServiceBySlug } from "../../../consulting/consulting-components";
import { consultingServicesEn } from "../../../consulting/consulting-data-en";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../../seo";

const service = consultingServiceBySlug(consultingServicesEn, "ax");
const path = "/consulting/ax";

export const metadata = pageMetadata({
  locale: "en",
  path,
  title: "AI Transformation Consulting | Evaluation & Orchestration | JJGo",
  description: "Evaluate models, agents, and tool configurations across environments, then orchestrate the best fit into a reliable service flow.",
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
        name: "AI Transformation (AX) Consulting",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} services={consultingServicesEn} locale="en" />
    </>
  );
}
