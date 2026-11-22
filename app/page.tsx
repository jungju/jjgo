import { HomePage } from "./home/home-page";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/",
  title: "기업 AX 컨설팅 · RAG PoC와 품질 평가 | JJGo",
  description:
    "기업의 실제 업무를 골라 RAG PoC를 구축하고 검색과 AI 답변 품질을 평가합니다. 업무 시나리오, 평가 리포트, 운영 전환 계획을 함께 만듭니다.",
  image: "/og.png",
});

export default function Home() {
  return <HomePage locale="ko" />;
}
