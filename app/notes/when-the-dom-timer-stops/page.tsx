import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteDomTimer");

export default function Page() {
  return <NotePage locale="ko" page="noteDomTimer" />;
}
