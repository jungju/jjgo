import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteSharedWindow");

export default function Page() {
  return <NotePage locale="ko" page="noteSharedWindow" />;
}
