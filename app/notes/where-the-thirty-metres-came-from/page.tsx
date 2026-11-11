import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteHeightOrigin");

export default function Page() {
  return <NotePage locale="ko" page="noteHeightOrigin" />;
}
