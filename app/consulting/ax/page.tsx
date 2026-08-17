import { ConsultingDetail, consultingServiceBySlug, consultingServices } from "../consulting-components";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../seo";

const service = consultingServiceBySlug(consultingServices, "ax");
const path = "/consulting/ax";

export const metadata = pageMetadata({
  locale: "ko",
  path,
  title: "AX 컨설팅 | AI 평가·오케스트레이션 | JJGo",
  description: "다양한 환경에서 모델·에이전트·도구 구성을 평가해 최적점을 찾고, 실제 서비스 흐름으로 오케스트레이션하는 AX 컨설팅입니다.",
  image: service.image,
  imageWidth: 1200,
  imageHeight: 800,
});

export default function AxConsultingPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({
        locale: "ko",
        path,
        name: "AX(AI Transformation) 컨설팅",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} />
    </>
  );
}
