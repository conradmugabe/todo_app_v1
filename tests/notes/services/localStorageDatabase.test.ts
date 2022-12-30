import { Note } from '../../../src/app/core/entities/note';
import { Tag } from '../../../src/app/core/entities/tag';
import LocalStorageDatabaseService from '../../../src/app/services/localStorageDatabaseService';

const mockNote: Note = { id: '123', title: 'test title', body: 'test body' };
const mockTag: Tag = { id: '456', label: 'test label' };
const tagsLocalStorageKey = 'notes-app:tags';

describe('LocalStorageDatabase Service Test', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('should load notes from the local storage with key "notes-app:notes"', async () => {
		localStorage.setItem('notes-app:notes', JSON.stringify([mockNote]));

		const database = new LocalStorageDatabaseService();
		const notes = await database.getAllNotes();
		expect(notes).toHaveLength(1);
		expect(notes[0].id).toBe(mockNote.id);
		expect(notes[0].title).toBe(mockNote.title);
		expect(notes[0].body).toBe(mockNote.body);
	});

	it('should persist data to local storage with key "notes-app:notes"', async () => {
		const noteData = { title: 'test title', body: 'test body' };
		const database = new LocalStorageDatabaseService();
		const note = await database.addNote(noteData);

		expect(note.title).toBe('test title');
		expect(note.body).toBe('test body');
	});

	it(`should load tags from local storage with key "${tagsLocalStorageKey}"`, async () => {
		localStorage.setItem(tagsLocalStorageKey, JSON.stringify([mockTag]));
		const database = new LocalStorageDatabaseService();

		const tags = await database.getTags();

		expect(tags).toHaveLength(1);
		expect(tags[0].id).toBe(mockTag.id);
		expect(tags[0].label).toBe(mockTag.label);
	});

	it(`should persist data to local storage with key "${tagsLocalStorageKey}"`, async () => {
		const tagData = { label: 'test label' };
		const database = new LocalStorageDatabaseService();

		const tag = await database.addTag(tagData);

		expect(tag.label).toBe('test label');
	});
});
