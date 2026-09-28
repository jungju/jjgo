import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteLookalike");

export default function Page() {
  return <NotePage locale="ko" page="noteLookalike" />;
}
