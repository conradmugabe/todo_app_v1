import { Note, NoteData } from '../Notes';

export default abstract class NotesDatabaseService {
	abstract getAllNotes(): Promise<Note[]>;

	abstract addNote(data: NoteData): Promise<Note>;
}
