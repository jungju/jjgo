import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteQuotationRule");

export default function Page() {
  return <NotePage locale="ko" page="noteQuotationRule" />;
}
