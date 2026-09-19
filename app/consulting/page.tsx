import { ConsultingOverview } from "./consulting-overview";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/consulting",
  title: "AI Native 컨설팅 | JJGo",
  description:
    "조직의 일하는 방식부터 AI·RAG 서비스와 플랫폼 운영까지, AI가 실제 성과로 이어지는 구조를 만듭니다.",
  image: "/og.png",
});

export default function ConsultingPage() {
  return <ConsultingOverview locale="ko" />;
}
