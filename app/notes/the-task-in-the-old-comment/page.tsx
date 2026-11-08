import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteOldCommentTask");

export default function Page() {
  return <NotePage locale="ko" page="noteOldCommentTask" />;
}
