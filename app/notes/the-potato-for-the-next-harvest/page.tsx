import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteMartianHarvest");

export default function Page() {
  return <NotePage locale="ko" page="noteMartianHarvest" />;
}
