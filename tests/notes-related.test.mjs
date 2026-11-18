import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(
  new URL("../app/notes/related-notes.ts", import.meta.url),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const exports = {};
vm.runInNewContext(compiled, { exports });
const select = exports.getRelatedNotes;
const note = (page, relatedPages = [], sample = false) => ({
  page,
  relatedPages,
  sample,
});
const ids = (items) => Array.from(items, (item) => item.page);

test("related articles follow editorial order and stop at three", () => {
  const current = note("a", ["d", "c", "b", "e"]);
  const candidates = Object.freeze([
    current,
    note("b"),
    note("c"),
    note("d"),
    note("e"),
  ]);
  assert.deepEqual(ids(select(current, candidates)), ["d", "c", "b"]);
  assert.deepEqual(ids(candidates), ["a", "b", "c", "d", "e"]);
});

test("self, unknown, duplicate and provisional articles are not recommended", () => {
  const current = note("a", ["a", "missing", "sample", "b", "b"]);
  assert.deepEqual(
    ids(
      select(current, [
        current,
        note("sample", [], true),
        note("b"),
        note("unrelated"),
      ]),
    ),
    ["b"],
  );
});

test("incoming editorial links provide a way back without unrelated padding", () => {
  const current = note("a", ["b"]);
  assert.deepEqual(
    ids(
      select(current, [
        current,
        note("unrelated"),
        note("c", ["a"]),
        note("b", ["a"]),
      ]),
    ),
    ["b", "c"],
  );
  assert.deepEqual(ids(select(note("orphan"), [note("unrelated")])), []);
});
