import assert from "node:assert/strict";
import test from "node:test";
import {
  collectionsForLocale,
  worksForLocale,
} from "../app/works/works-data.ts";

test("both languages describe the same projects and destinations", () => {
  const identity = (work) => [
    work.id,
    work.collection,
    work.status,
    work.image,
    work.url,
    work.internalPage,
  ];
  const korean = worksForLocale("ko");
  const english = worksForLocale("en");
  assert.equal(new Set(korean.map((work) => work.id)).size, korean.length);
  assert.deepEqual(korean.map(identity), english.map(identity));
  for (const work of [...korean, ...english]) {
    assert.ok(work.title && work.description && work.purpose && work.update);
    assert.ok(work.technologies.length && work.roles.length);
  }
});

test("archived projects remain readable without an expired external link", () => {
  for (const locale of ["ko", "en"]) {
    const archived = worksForLocale(locale).filter(
      (work) => work.status === "archive",
    );
    assert.equal(archived.length, 3);
    for (const work of archived) assert.equal(work.url, undefined, work.title);
  }
});

test("empty collections explain their state in both languages", () => {
  for (const locale of ["ko", "en"]) {
    const works = worksForLocale(locale);
    const collections = collectionsForLocale(locale);
    for (const work of works)
      assert.ok(
        collections.some((collection) => collection.id === work.collection),
      );
    for (const collection of collections) {
      if (
        collection.id !== "roblox" &&
        !works.some((work) => work.collection === collection.id)
      ) {
        assert.ok(collection.emptyLabel?.trim(), `${locale}: ${collection.id}`);
      }
    }
  }
});
