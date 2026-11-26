import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteFirstExport");

export default function Page() {
  return <NotePage locale="ko" page="noteFirstExport" />;
}
