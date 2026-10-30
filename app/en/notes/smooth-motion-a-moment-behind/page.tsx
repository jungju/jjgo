import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteSmoothMotion");

export default function Page() {
  return <NotePage locale="en" page="noteSmoothMotion" />;
}
