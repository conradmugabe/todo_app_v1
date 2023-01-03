import { v4 as uuid } from 'uuid';
import { EditNoteData, NoteData } from '../core/dto/note.dto';
import { AddTagProps, EditTagPros } from '../core/dto/tag.dto';
import { Note } from '../core/entities/note';
import { Tag } from '../core/entities/tag';
import NotesDatabaseService from '../core/services/notesDatabase.service';
import TagsDatabaseService from '../core/services/tagsDatabase.service';

export default class LocalStorageDatabaseService
	implements TagsDatabaseService, NotesDatabaseService
{
	private tagsDatabaseName = 'notes-app:tags';

	private notesDatabaseName = 'notes-app:notes';

	static getItem = <T>({
		key,
	}: LocalStorageDatabaseService.GetItem): T | null => {
		const data = localStorage.getItem(key);
		if (data === null) return data;
		return JSON.parse(data);
	};

	static saveItem = ({ key, value }: LocalStorageDatabaseService.SetItem) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

	getTags = (): Promise<Tag[]> => {
		const tags = LocalStorageDatabaseService.getItem<Tag[]>({
			key: this.tagsDatabaseName,
		});
		if (!tags)
			return new Promise((resolve) => {
				resolve([]);
			});
		Tag.array().parse(tags);
		return new Promise((resolve) => {
			resolve(tags);
		});
	};

	addTag = async ({ label }: AddTagProps): Promise<Tag> => {
		const tag: Tag = { id: uuid(), label };
		const tags = await this.getTags();
		tags.push(tag);
		LocalStorageDatabaseService.saveItem({
			key: this.tagsDatabaseName,
			value: tags,
		});
		return new Promise((resolve) => {
			resolve(tag);
		});
	};

	editTag = async ({ id, ...rest }: EditTagPros): Promise<Tag | undefined> => {
		const tags = await this.getTags();
		const index = tags.findIndex((t) => t.id === id);
		if (index === -1) return undefined;
		tags[index] = { ...tags[index], ...rest };
		LocalStorageDatabaseService.saveItem({
			key: this.tagsDatabaseName,
			value: tags,
		});
		return tags[index];
	};

	deleteTag = async (tagId: string): Promise<Tag | undefined> => {
		const tags = await this.getTags();
		const index = tags.findIndex((t) => t.id === tagId);
		if (index === -1) return undefined;
		const tag = tags[index];
		tags.splice(index, 1);
		LocalStorageDatabaseService.saveItem({
			key: this.tagsDatabaseName,
			value: tags,
		});
		return tag;
	};

	getAllNotes = async (): Promise<Note[]> => {
		const notes = LocalStorageDatabaseService.getItem<Note[]>({
			key: this.notesDatabaseName,
		});
		if (!notes)
			return new Promise((resolve) => {
				resolve([]);
			});
		Note.array().parse(notes);
		return new Promise((resolve) => {
			resolve(notes);
		});
	};

	addNote = async ({ title, body }: NoteData): Promise<Note> => {
		const note: Note = { id: uuid(), title, body };
		const notes = await this.getAllNotes();
		notes.push(note);
		LocalStorageDatabaseService.saveItem({
			key: this.notesDatabaseName,
			value: notes,
		});
		return new Promise((resolve) => {
			resolve(note);
		});
	};

	getNoteById = async (noteId: string): Promise<Note | undefined> => {
		const notes = await this.getAllNotes();
		return notes.find((n) => n.id === noteId);
	};

	editNote = async ({
		id,
		...rest
	}: EditNoteData): Promise<Note | undefined> => {
		const notes = await this.getAllNotes();
		const index = notes.findIndex((n) => n.id === id);
		if (index === -1) return undefined;
		notes[index] = { ...notes[index], ...rest };
		LocalStorageDatabaseService.saveItem({
			key: this.notesDatabaseName,
			value: notes,
		});
		return notes[index];
	};
}

namespace LocalStorageDatabaseService {
	export type GetItem = { key: string };
	export type SetItem = GetItem & { value: unknown };
}
