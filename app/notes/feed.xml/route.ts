import { notesFeed } from "../feed";
export const dynamic = "force-static";
export function GET() {
  return new Response(notesFeed("ko"), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
