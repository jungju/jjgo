import { NotePage, noteMetadata } from "../notes-pages";
export const metadata = noteMetadata("ko", "noteSameFrame");
export default function Page() {
  return <NotePage locale="ko" page="noteSameFrame" />;
}
