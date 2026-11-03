import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteBookMentions");

export default function Page() {
  return <NotePage locale="en" page="noteBookMentions" />;
}
