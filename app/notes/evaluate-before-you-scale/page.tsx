import { NotePage, noteMetadata } from "../notes-pages";
export const metadata = noteMetadata("ko", "noteEvaluation");
export default function Page() {
  return <NotePage locale="ko" page="noteEvaluation" />;
}
