import { ConsultingDetail, consultingServiceBySlug, consultingServices } from "../consulting-components";
import { JsonLd, pageMetadata, serviceJsonLd } from "../../seo";

const service = consultingServiceBySlug(consultingServices, "ai-native");
const path = "/consulting/ai-native";

export const metadata = pageMetadata({
  locale: "ko",
  path,
  title: "AI Native 조직 컨설팅 | 개발 프로세스·운영 모델 | JJGo",
  description: "AI를 개인의 도구에 머물게 하지 않고 조직 운영 모델, 제품 개발 프로세스, 품질·거버넌스 체계로 정착시키는 이정주의 컨설팅입니다.",
  image: service.image,
  imageWidth: 1200,
  imageHeight: 800,
});

export default function AiNativeConsultingPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({
        locale: "ko",
        path,
        name: "AI Native 조직 컨설팅",
        description: service.summary,
      })} />
      <ConsultingDetail service={service} />
    </>
  );
}
