import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "notePhotoSelection");

export default function Page() {
  return <NotePage locale="ko" page="notePhotoSelection" />;
}
