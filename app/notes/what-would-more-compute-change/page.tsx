import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteMoreCompute");

export default function Page() {
  return <NotePage locale="ko" page="noteMoreCompute" />;
}
