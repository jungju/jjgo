import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "notePersistentFix");

export default function Page() {
  return <NotePage locale="ko" page="notePersistentFix" />;
}
