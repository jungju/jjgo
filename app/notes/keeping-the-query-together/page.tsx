import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteQueryCharacters");

export default function Page() {
  return <NotePage locale="ko" page="noteQueryCharacters" />;
}
