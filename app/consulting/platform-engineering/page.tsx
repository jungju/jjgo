import { ConsultingDetail, consultingServiceBySlug, consultingServices } from "../consulting-components";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../seo";

const service = consultingServiceBySlug(consultingServices, "platform-engineering");
const path = "/consulting/platform-engineering";

export const metadata = pageMetadata({
  locale: "ko",
  path,
  title: "플랫폼 엔지니어링 컨설팅 | Kubernetes·IDP | JJGo",
  description: "200개 이상 Kubernetes 클러스터와 1,000개 이상 노드 운영 경험을 바탕으로 내부 개발자 플랫폼, CI/CD, 관찰 가능성과 운영 기반을 설계합니다.",
  image: service.image,
  imageWidth: 1200,
  imageHeight: 800,
});

export default function PlatformEngineeringConsultingPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({
        locale: "ko",
        path,
        name: "플랫폼 엔지니어링 컨설팅",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} />
    </>
  );
}
