import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteCopiedRandom");

export default function Page() {
  return <NotePage locale="en" page="noteCopiedRandom" />;
}
