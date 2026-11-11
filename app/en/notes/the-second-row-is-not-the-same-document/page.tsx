import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteChangingTarget");

export default function Page() {
  return <NotePage locale="en" page="noteChangingTarget" />;
}
