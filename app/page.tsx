import { HomePage } from "./home/home-page";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/",
  title: "이정주 | AI Native 컨설팅 · 조직·제품·운영 | JJGo",
  description:
    "AI Native 전환은 역할과 책임을 정하고, 실제 업무에서 AI를 검증하며, 안정적으로 운영할 기반을 갖추는 일입니다. 조직의 현재 단계에 맞춰 필요한 변화를 함께 만듭니다.",
  image: "/og.png",
});

export default function Home() {
  return <HomePage locale="ko" />;
}
