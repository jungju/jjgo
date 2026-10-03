import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteWaitingRequests");

export default function Page() {
  return <NotePage locale="ko" page="noteWaitingRequests" />;
}
