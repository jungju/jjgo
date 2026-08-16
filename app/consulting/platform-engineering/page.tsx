import type { Metadata } from "next";
import { ConsultingDetail, consultingServiceBySlug, consultingServices } from "../consulting-components";

const service = consultingServiceBySlug(consultingServices, "platform-engineering");

export const metadata: Metadata = {
  title: "플랫폼 엔지니어링 컨설팅",
  description: "제품 개발을 가속하는 내부 개발자 플랫폼과 운영 기반을 설계합니다.",
};

export default function PlatformEngineeringConsultingPage() {
  return <ConsultingDetail service={service} />;
}
