import type { Metadata } from "next";
import { ConsultingDetail, consultingServices } from "../consulting-components";

export const metadata: Metadata = {
  title: "AI Native 조직 만들기",
  description: "AI를 조직의 일하는 방식과 제품 개발 구조로 정착시키는 컨설팅입니다.",
};

export default function AiNativeConsultingPage() {
  return <ConsultingDetail service={consultingServices[0]} />;
}
