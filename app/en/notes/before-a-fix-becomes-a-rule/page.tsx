import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "notePersistentFix");

export default function Page() {
  return <NotePage locale="en" page="notePersistentFix" />;
}
