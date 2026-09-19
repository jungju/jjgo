import { NotesPage } from "./notes-pages";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  locale: "ko",
  path: "/notes",
  title: "Notes | JJGo",
  description: "AI Native 조직, 제품 개발, 플랫폼 운영에 관한 생각과 기록.",
  image: "/og.png",
});
export default function Page() {
  return <NotesPage locale="ko" />;
}
