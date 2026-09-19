import { NotePage, noteMetadata } from "../notes-pages";
export const metadata = noteMetadata("ko", "noteWorkflows");
export default function Page() {
  return <NotePage locale="ko" page="noteWorkflows" />;
}
