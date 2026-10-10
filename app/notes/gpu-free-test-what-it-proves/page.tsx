import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteGpuFreeTest");

export default function Page() {
  return <NotePage locale="ko" page="noteGpuFreeTest" />;
}
