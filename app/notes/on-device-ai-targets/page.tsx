import { NotePage, noteMetadata } from "../notes-pages";

export const metadata = noteMetadata("ko", "noteOnDeviceAi");

export default function Page() {
  return <NotePage locale="ko" page="noteOnDeviceAi" />;
}
