import { Note } from '../entities/note';
import { NoteData } from '../dto/note.dto';

export default abstract class NotesDatabaseService {
	abstract getAllNotes(): Promise<Note[]>;

	abstract addNote(data: NoteData): Promise<Note>;
}
