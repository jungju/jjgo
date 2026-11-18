import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteWikiSource");

export default function Page() {
  return <NotePage locale="ko" page="noteWikiSource" />;
}
