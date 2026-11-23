import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteFileFingerprint");

export default function Page() {
  return <NotePage locale="ko" page="noteFileFingerprint" />;
}
