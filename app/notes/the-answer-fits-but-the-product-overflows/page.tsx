import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteIntermediateOverflow");

export default function Page() {
  return <NotePage locale="ko" page="noteIntermediateOverflow" />;
}
