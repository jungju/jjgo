import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteMathSupport");

export default function Page() {
  return <NotePage locale="ko" page="noteMathSupport" />;
}
