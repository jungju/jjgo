import { NotePage, noteMetadata } from "../notes-pages";
export const metadata = noteMetadata("ko", "noteZeroShape");
export default function Page() {
  return <NotePage locale="ko" page="noteZeroShape" />;
}
