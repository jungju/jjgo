import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteEmojiLength");

export default function Page() {
  return <NotePage locale="ko" page="noteEmojiLength" />;
}
