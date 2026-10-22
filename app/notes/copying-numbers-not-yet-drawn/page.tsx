import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteCopiedRandom");

export default function Page() {
  return <NotePage locale="ko" page="noteCopiedRandom" />;
}
