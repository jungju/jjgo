import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteSmoothMotion");

export default function Page() {
  return <NotePage locale="ko" page="noteSmoothMotion" />;
}
