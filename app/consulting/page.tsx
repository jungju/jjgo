import { ConsultingOverview } from "./consulting-overview";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/consulting",
  title: "기업 AX 컨설팅 · RAG PoC와 평가 리포트 | JJGo",
  description:
    "업무 시나리오와 평가셋, RAG PoC와 평가 리포트, 운영 전환 계획을 함께 만듭니다. 가상 샘플 문서를 사용한 RAG 평가 데모를 볼 수 있습니다.",
  image: "/og.png",
});

export default function ConsultingPage() {
  return <ConsultingOverview locale="ko" />;
}
