import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "notePlacementHallway");

export default function Page() {
  return <NotePage locale="ko" page="notePlacementHallway" />;
}
