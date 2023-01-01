import { Note } from '../entities/note';
import { EditNoteData, NoteData } from '../dto/note.dto';

export default abstract class NotesDatabaseService {
	abstract getAllNotes(): Promise<Note[]>;

	abstract addNote(data: NoteData): Promise<Note>;

	abstract getNoteById(noteId: string): Promise<Note | undefined>;

	abstract editNote(data: EditNoteData): Promise<Note | undefined>;
}
