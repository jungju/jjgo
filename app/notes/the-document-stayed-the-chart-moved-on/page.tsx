import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteMovingChart");

export default function Page() {
  return <NotePage locale="ko" page="noteMovingChart" />;
}
