import { NotePage, noteMetadata } from "../../../notes/notes-pages";
export const metadata = noteMetadata("en", "noteSameFrame");
export default function Page() {
  return <NotePage locale="en" page="noteSameFrame" />;
}
