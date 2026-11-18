import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteDistinctFrames");

export default function Page() {
  return <NotePage locale="ko" page="noteDistinctFrames" />;
}
