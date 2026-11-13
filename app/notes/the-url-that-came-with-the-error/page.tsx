import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteErrorUrl");

export default function Page() {
  return <NotePage locale="ko" page="noteErrorUrl" />;
}
