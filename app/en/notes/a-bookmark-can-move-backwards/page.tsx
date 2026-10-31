import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteBackwardBookmark");

export default function Page() {
  return <NotePage locale="en" page="noteBackwardBookmark" />;
}
