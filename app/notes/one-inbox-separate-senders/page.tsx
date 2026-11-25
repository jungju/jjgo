import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteReplyAccount");

export default function Page() {
  return <NotePage locale="ko" page="noteReplyAccount" />;
}
