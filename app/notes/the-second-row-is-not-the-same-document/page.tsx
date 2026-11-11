import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteChangingTarget");

export default function Page() {
  return <NotePage locale="ko" page="noteChangingTarget" />;
}
