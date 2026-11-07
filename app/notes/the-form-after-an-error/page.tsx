import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteFormAfterError");

export default function Page() {
  return <NotePage locale="ko" page="noteFormAfterError" />;
}
