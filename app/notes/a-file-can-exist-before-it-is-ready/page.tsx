import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteFileReady");

export default function Page() {
  return <NotePage locale="ko" page="noteFileReady" />;
}
