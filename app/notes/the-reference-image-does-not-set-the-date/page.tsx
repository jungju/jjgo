import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteReferenceDate");

export default function Page() {
  return <NotePage locale="ko" page="noteReferenceDate" />;
}
