import { ConsultingDetail, consultingServiceBySlug, consultingServices } from "../consulting-components";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../seo";

const service = consultingServiceBySlug(consultingServices, "ax");
const path = "/consulting/ax";

export const metadata = pageMetadata({
  locale: "ko",
  path,
  title: "AX 컨설팅 | AI 서비스 기획·제품화 | JJGo",
  description: "AI 기회 발굴과 서비스 설계, PoC, 제품화·운영 로드맵을 연결해 비즈니스와 고객 경험의 변화를 실행하는 이정주의 AX 컨설팅입니다.",
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
