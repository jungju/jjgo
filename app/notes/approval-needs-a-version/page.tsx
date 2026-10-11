import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteApprovalVersion");

export default function Page() {
  return <NotePage locale="ko" page="noteApprovalVersion" />;
}
