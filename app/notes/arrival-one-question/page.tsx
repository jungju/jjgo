import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteArrival");

export default function Page() {
  return <NotePage locale="ko" page="noteArrival" />;
}
