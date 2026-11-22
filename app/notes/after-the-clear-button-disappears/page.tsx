import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteClearFocus");

export default function Page() {
  return <NotePage locale="ko" page="noteClearFocus" />;
}
