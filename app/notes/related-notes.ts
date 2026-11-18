import type { Note } from "./notes-data";

// Editorial links lead; a link from another article is also a useful way back.
// Never pad the list with unrelated recent posts just to fill three slots.
export function getRelatedNotes(note: Note, candidates: Note[]): Note[] {
  const available = new Map(
    candidates
      .filter((candidate) => candidate.page !== note.page && !candidate.sample)
      .map((candidate) => [candidate.page, candidate]),
  );
  const pages = [
    ...(note.relatedPages ?? []),
    ...candidates
      .filter((candidate) => candidate.relatedPages?.includes(note.page))
      .map((candidate) => candidate.page),
  ];
  return [...new Set(pages)]
    .map((page) => available.get(page))
    .filter((candidate): candidate is Note => candidate !== undefined)
    .slice(0, 3);
}
