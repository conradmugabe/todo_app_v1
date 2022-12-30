import { Note } from '../../../src/app/core/entities/note';
import LocalStorageDatabaseService from '../../../src/notes/services/localStorageDatabase';

const mockData: Note = { id: '123', title: 'test title', body: 'test body' };

describe('LocalStorageDatabase Service Test', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('should load notes from the local storage with key "notes"', async () => {
		localStorage.setItem('notes', JSON.stringify([mockData]));

		const database = new LocalStorageDatabaseService();
		const notes = await database.getAllNotes();
		expect(notes).toHaveLength(1);
		expect(notes[0].id).toBe(mockData.id);
		expect(notes[0].title).toBe(mockData.title);
		expect(notes[0].body).toBe(mockData.body);
	});

	it('should persist data to local storage with key "notes"', async () => {
		const noteData = { title: 'test title', body: 'test body' };
		const database = new LocalStorageDatabaseService();
		const note = await database.addNote(noteData);

		expect(note.title).toBe('test title');
		expect(note.body).toBe('test body');
	});
});
