import { NotePage, noteMetadata } from "../notes-pages";
export const metadata = noteMetadata("ko", "notePlatform");
export default function Page() {
  return <NotePage locale="ko" page="notePlatform" />;
}
