import { NotePage, noteMetadata } from "../../../notes/notes-pages";

export const metadata = noteMetadata("en", "noteSoftWrapCopy");

export default function Page() {
  return <NotePage locale="en" page="noteSoftWrapCopy" />;
}
