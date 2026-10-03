import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteSingleFileOwnership");

export default function Page() {
  return <NotePage locale="ko" page="noteSingleFileOwnership" />;
}
