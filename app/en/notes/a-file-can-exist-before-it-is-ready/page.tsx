import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteFileReady");

export default function Page() {
  return <NotePage locale="en" page="noteFileReady" />;
}
