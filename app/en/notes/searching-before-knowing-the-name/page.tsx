import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteUnknownName");

export default function Page() {
  return <NotePage locale="en" page="noteUnknownName" />;
}
