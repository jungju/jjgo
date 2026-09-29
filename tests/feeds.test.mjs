import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const out = new URL("../out/", import.meta.url);
for (const [prefix, language] of [
  ["", "ko-KR"],
  ["en/", "en"],
]) {
  test(`${language} RSS is discoverable and links to exported articles`, async () => {
    const html = await readFile(
      new URL(prefix + "notes/index.html", out),
      "utf8",
    );
    const discovery = [...html.matchAll(/<link\b[^>]*>/g)].filter(([tag]) =>
      tag.includes("application/rss+xml"),
    );
    assert.equal(
      discovery.length,
      2,
      "both localized feeds must survive page metadata merging",
    );
    const feed = await readFile(
      new URL(prefix + "notes/feed.xml", out),
      "utf8",
    );
    assert.ok(feed.startsWith("<?xml"));
    assert.ok(feed.includes(`<language>${language}</language>`));
    const items = [...feed.matchAll(/<item>(.*?)<\/item>/g)];
    assert.ok(items.length > 0);
    for (const [, item] of items) {
      const link = item.match(/<link>([^<]+)<\/link>/)?.[1];
      assert.ok(link);
      const url = new URL(link);
      assert.equal(url.origin, "https://jjgo.io");
      assert.ok(url.pathname.startsWith("/" + prefix + "notes/"));
      await access(new URL(url.pathname.slice(1) + "index.html", out));
      assert.ok(
        !Number.isNaN(
          Date.parse(item.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1]),
        ),
      );
    }
    for (const sample of [
      "ai-native-starts-with-work",
      "evaluate-before-you-scale",
      "platform-as-a-path",
    ])
      assert.ok(
        !feed.includes("/notes/" + sample + "/"),
        "provisional samples must not be syndicated",
      );
  });
}
