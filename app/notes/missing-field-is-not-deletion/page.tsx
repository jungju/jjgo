import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteMissingField");

export default function Page() {
  return <NotePage locale="ko" page="noteMissingField" />;
}
