import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteConnectedState");

export default function Page() {
  return <NotePage locale="ko" page="noteConnectedState" />;
}
