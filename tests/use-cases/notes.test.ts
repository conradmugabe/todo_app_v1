import { mock, mockClear, MockProxy } from 'jest-mock-extended';

import { EditNoteData } from '../../src/app/core/dto/note.dto';
import NotesDatabaseService from '../../src/app/core/services/notesDatabase.service';
import NotesUseCases from '../../src/app/use-cases/notes';

describe('NotesUseCases', () => {
	let database: MockProxy<NotesDatabaseService>;
	let useCases: NotesUseCases;

	beforeAll(() => {
		database = mock<NotesDatabaseService>();
		useCases = new NotesUseCases(database);
	});

	afterEach(() => {
		mockClear(database);
	});

	it('should initialize', () => {
		expect(useCases.constructor.name).toBe('NotesUseCases');
	});
});

describe('NotesUseCases addNote', () => {
	let database: MockProxy<NotesDatabaseService>;
	let useCases: NotesUseCases;

	beforeAll(() => {
		database = mock<NotesDatabaseService>();
		useCases = new NotesUseCases(database);
	});

	afterEach(() => {
		mockClear(database);
	});

	it('successfully add note', async () => {
		const noteData = { title: 'test title', body: 'test body' };
		useCases.addNote(noteData);

		expect(database.addNote).toBeCalledTimes(1);
		expect(database.addNote).toBeCalledWith(noteData);
	});
});

describe('NotesUseCases getNotes', () => {
	let database: MockProxy<NotesDatabaseService>;
	let useCases: NotesUseCases;

	beforeAll(() => {
		database = mock<NotesDatabaseService>();
		useCases = new NotesUseCases(database);
	});

	afterEach(() => {
		mockClear(database);
	});

	it('should fetch all notes', async () => {
		await useCases.getNotes();

		expect(database.getAllNotes).toBeCalledTimes(1);
		expect(database.getAllNotes).toBeCalledWith();
	});
});

describe('NotesUseCases getNoteById', () => {
	let database: MockProxy<NotesDatabaseService>;
	let useCases: NotesUseCases;

	beforeAll(() => {
		database = mock<NotesDatabaseService>();
		useCases = new NotesUseCases(database);
	});

	afterEach(() => {
		mockClear(database);
	});

	it('should return note if note with id found', async () => {
		const id = '123';
		const returnedValue = { id, title: 'test title', body: 'test body' };
		database.getNoteById.mockImplementation(
			() => new Promise((resolve) => resolve(returnedValue))
		);
		const note = await useCases.getNoteById(id);

		expect(note.id).toBe(id);
		expect(note).toEqual(returnedValue);
		expect(database.getNoteById).toBeCalledTimes(1);
		expect(database.getNoteById).toBeCalledWith(id);
	});

	it('should throw error if note with id not found', async () => {
		try {
			await useCases.getNoteById('123');
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error('Note Not Found'));
		}
	});
});

describe('NotesUseCases editNote', () => {
	let database: MockProxy<NotesDatabaseService>;
	let useCases: NotesUseCases;
	let updatedNoteData: EditNoteData;

	beforeAll(() => {
		database = mock<NotesDatabaseService>();
		useCases = new NotesUseCases(database);
		updatedNoteData = {
			id: '123',
			title: 'test title',
			body: 'test body',
		};
	});

	afterEach(() => {
		mockClear(database);
	});

	it('should edit an existing note if note found', async () => {
		database.editNote.mockImplementation(
			() => new Promise((resolve) => resolve(updatedNoteData))
		);

		const note = await useCases.editNote(updatedNoteData);

		expect(note.id).toBe(updatedNoteData.id);
		expect(note).toEqual(updatedNoteData);
		expect(database.editNote).toBeCalledTimes(1);
		expect(database.editNote).toBeCalledWith(updatedNoteData);
	});

	it('should throw an error if note with id not found', async () => {
		try {
			await useCases.editNote(updatedNoteData);
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(
				Error('Something went wrong. Could not update note')
			);
		}
	});
});
