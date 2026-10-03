import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteReviewOrder");

export default function Page() {
  return <NotePage locale="ko" page="noteReviewOrder" />;
}
