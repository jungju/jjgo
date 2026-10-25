import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteHighlightCondition");

export default function Page() {
  return <NotePage locale="ko" page="noteHighlightCondition" />;
}
