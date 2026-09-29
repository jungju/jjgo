import { notesFeed } from "../../../notes/feed";
export const dynamic = "force-static";
export function GET() {
  return new Response(notesFeed("en"), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
