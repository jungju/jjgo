import { ConsultingOverview } from "./consulting-overview";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/consulting",
  title: "AI Native·AX/RAG·플랫폼 엔지니어링 컨설팅 | JJGo",
  description:
    "AI Native 조직 전환, 현장 평가와 오케스트레이션 중심의 AX·RAG, Kubernetes 기반 플랫폼 엔지니어링을 다룹니다.",
  image: "/og.png",
});

export default function ConsultingPage() {
  return <ConsultingOverview locale="ko" />;
}
