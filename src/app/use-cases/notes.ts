import { EditNoteData, NoteData } from '../core/dto/note.dto';
import { Note } from '../core/entities/note';
import NotesDatabaseService from '../core/services/notesDatabase.service';

export default class NotesUseCases {
	constructor(private databaseService: NotesDatabaseService) {}

	addNote = async ({ title, body }: NoteData): Promise<Note> =>
		this.databaseService.addNote({ title, body });

	getNotes = async (): Promise<Note[]> => this.databaseService.getAllNotes();

	getNoteById = async (noteId: string): Promise<Note> => {
		const note = await this.databaseService.getNoteById(noteId);
		if (!note) throw new Error('Note Not Found');
		return note;
	};

	editNote = async ({ title, body, id }: EditNoteData): Promise<Note> => {
		const note = await this.databaseService.editNote({ id, title, body });
		if (!note) throw new Error('Something went wrong. Could not update note');
		return note;
	};
}
