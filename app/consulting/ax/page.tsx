import { ConsultingDetail, consultingServiceBySlug, consultingServices } from "../consulting-components";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../seo";

const service = consultingServiceBySlug(consultingServices, "ax");
const path = "/consulting/ax";

export const metadata = pageMetadata({
  locale: "ko",
  path,
  title: "AX·RAG 컨설팅 | 현장 평가·오케스트레이션 | JJGo",
  description: "현장 업무와 문서를 기준으로 AI·RAG 구성을 평가하고, 모델·검색·에이전트·도구를 운영 흐름으로 오케스트레이션하는 컨설팅입니다.",
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
        name: "AX·RAG 컨설팅",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} />
    </>
  );
}
