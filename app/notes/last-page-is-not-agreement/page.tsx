import { NotePage, noteMetadata } from "../notes-pages";
export const metadata = noteMetadata("ko", "noteLastPage");
export default function Page() {
  return <NotePage locale="ko" page="noteLastPage" />;
}
