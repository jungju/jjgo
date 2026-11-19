import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteZeroChecks");

export default function Page() {
  return <NotePage locale="ko" page="noteZeroChecks" />;
}
