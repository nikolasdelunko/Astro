import { atom } from "nanostores";

export const notes = atom<Note[]>([]);


export function addNote(note: Note) {
  notes.set([...notes.get(), note]);
  console.log("note:", notes.get());
}
