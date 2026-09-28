import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteArrival");

export default function Page() {
  return <NotePage locale="en" page="noteArrival" />;
}
