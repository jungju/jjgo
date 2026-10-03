import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteWaitingRequests");

export default function Page() {
  return <NotePage locale="en" page="noteWaitingRequests" />;
}
