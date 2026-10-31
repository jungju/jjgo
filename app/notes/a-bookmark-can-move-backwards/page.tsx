import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteBackwardBookmark");

export default function Page() {
  return <NotePage locale="ko" page="noteBackwardBookmark" />;
}
