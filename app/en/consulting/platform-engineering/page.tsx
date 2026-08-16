import { ConsultingDetail, consultingServiceBySlug } from "../../../consulting/consulting-components";
import { consultingServicesEn } from "../../../consulting/consulting-data-en";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../../seo";

const service = consultingServiceBySlug(consultingServicesEn, "platform-engineering");
const path = "/consulting/platform-engineering";

export const metadata = pageMetadata({
  locale: "en",
  path,
  title: "Platform Engineering Consulting | Kubernetes & IDP | JJGo",
  description: "Design internal developer platforms, CI/CD, observability, and operations with experience spanning 200+ Kubernetes clusters and 1,000+ nodes.",
  image: service.image,
  imageWidth: 1200,
  imageHeight: 800,
});

export default function EnglishPlatformEngineeringPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({
        locale: "en",
        path,
        name: "Platform Engineering Consulting",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} services={consultingServicesEn} locale="en" />
    </>
  );
}
