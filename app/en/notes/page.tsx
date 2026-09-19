import { NotesPage } from "../../notes/notes-pages";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/notes",
  title: "Notes | JJGo",
  description:
    "Thoughts on AI Native organizations, product development, and platform operations.",
  image: "/og-en.png",
});
export default function Page() {
  return <NotesPage locale="en" />;
}
