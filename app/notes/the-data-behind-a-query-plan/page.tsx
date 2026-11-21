import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "notePlanContext");

export default function Page() {
  return <NotePage locale="ko" page="notePlanContext" />;
}
