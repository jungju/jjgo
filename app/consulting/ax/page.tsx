import type { Metadata } from "next";
import { ConsultingDetail, consultingServices } from "../consulting-components";

export const metadata: Metadata = {
  title: "AX 컨설팅",
  description: "비즈니스와 서비스를 AI 중심으로 전환하는 컨설팅입니다.",
};

export default function AxConsultingPage() {
  return <ConsultingDetail service={consultingServices[1]} />;
}
