import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteSoftWrapCopy");

export default function Page() {
  return <NotePage locale="ko" page="noteSoftWrapCopy" />;
}
