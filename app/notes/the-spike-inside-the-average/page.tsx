import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteAverageSpike");

export default function Page() {
  return <NotePage locale="ko" page="noteAverageSpike" />;
}
