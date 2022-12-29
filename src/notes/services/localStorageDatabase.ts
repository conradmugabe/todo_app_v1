import { v4 as uuid } from 'uuid';
import NotesDatabaseService from '../entity/interfaces/database.service';
import { Note, NoteData } from '../entity/Notes';

export default class LocalStorageDatabaseService
	implements NotesDatabaseService
{
	private notes: Note[] = [];

	async getAllNotes(): Promise<Note[]> {
		const data = localStorage.getItem('notes');
		if (data) {
			this.notes = JSON.parse(data);
		}
		return this.notes;
	}

	async addNote({ title, body }: NoteData): Promise<Note> {
		const note: Note = { id: uuid(), title, body };
		const notes = await this.getAllNotes();
		notes.push(note);
		localStorage.setItem('notes', JSON.stringify(notes));
		return note;
	}
}
