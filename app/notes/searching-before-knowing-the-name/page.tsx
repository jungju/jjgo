import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteUnknownName");

export default function Page() {
  return <NotePage locale="ko" page="noteUnknownName" />;
}
