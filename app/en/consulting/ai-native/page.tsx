import { ConsultingDetail, consultingServiceBySlug } from "../../../consulting/consulting-components";
import { consultingServicesEn } from "../../../consulting/consulting-data-en";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../../seo";

const service = consultingServiceBySlug(consultingServicesEn, "ai-native");
const path = "/consulting/ai-native";

export const metadata = pageMetadata({
  locale: "en",
  path,
  title: "AI-Native Organization Consulting | Jungju Lee | JJGo",
  description: "Embed AI into the operating model, product development workflow, quality controls, and governance of the whole organization with Jungju Lee.",
  image: service.image,
  imageWidth: 1200,
  imageHeight: 800,
});

export default function EnglishAiNativePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({
        locale: "en",
        path,
        name: "AI-Native Organization Consulting",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} services={consultingServicesEn} locale="en" />
    </>
  );
}
