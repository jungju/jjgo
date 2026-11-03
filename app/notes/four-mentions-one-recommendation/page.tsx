import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteBookMentions");

export default function Page() {
  return <NotePage locale="ko" page="noteBookMentions" />;
}
