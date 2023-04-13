import { Note } from "@entities/note";

export default abstract class NotesService {
  abstract addNote(props: NotesService.AddNoteRequest): Promise<Note>;

  abstract editNote(
    props: NotesService.EditNoteRequest
  ): Promise<Note | undefined>;

  abstract getNote(
    props: NotesService.GetNoteRequest
  ): Promise<Note | undefined>;

  abstract getNotes(): Promise<Note[]>;
}

namespace NotesService {
  export type AddNoteRequest = Omit<Note, "id">;
  export type EditNoteRequest = Note;
  export type GetNoteRequest = Pick<Note, "id">;
}
