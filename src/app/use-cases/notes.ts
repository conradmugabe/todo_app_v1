import { NoteData } from '../core/dto/note.dto';
import { Note } from '../core/entities/note';
import NotesDatabaseService from '../core/services/notesDatabase.service';

export default class NotesUseCases {
	constructor(private databaseService: NotesDatabaseService) {}

	addNote = async ({ title, body }: NoteData): Promise<Note> =>
		this.databaseService.addNote({ title, body });

	getNotes = async (): Promise<Note[]> => this.databaseService.getAllNotes();
}
