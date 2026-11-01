import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteTvWayBack");

export default function Page() {
  return <NotePage locale="ko" page="noteTvWayBack" />;
}
