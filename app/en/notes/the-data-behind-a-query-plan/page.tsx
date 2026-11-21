import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "notePlanContext");

export default function Page() {
  return <NotePage locale="en" page="notePlanContext" />;
}
