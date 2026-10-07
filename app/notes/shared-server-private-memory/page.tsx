import { NotePage, noteMetadata } from "../notes-pages";
export const metadata = noteMetadata("ko", "notePrivateMemory");
export default function Page() {
  return <NotePage locale="ko" page="notePrivateMemory" />;
}
