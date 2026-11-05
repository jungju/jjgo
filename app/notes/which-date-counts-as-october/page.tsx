import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteOctoberDate");

export default function Page() {
  return <NotePage locale="ko" page="noteOctoberDate" />;
}
