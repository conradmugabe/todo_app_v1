import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Note, NoteData } from '../entity/Notes';
import LocalStorageDatabaseService from '../services/localStorageDatabase';

const localStorageDatabase = new LocalStorageDatabaseService();

const useNotesStore = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		localStorageDatabase.getAllNotes().then((response) => setNotes(response));
	}, []);

	const createNote = async ({ body, title }: NoteData) => {
		setNotes((prev) => [...prev, { body, title, id: uuid() }]);
		navigate('..');
	};

	const getNoteById = async (id: string) => notes.find((n) => n.id === id);

	return {
		notes,
		createNote,
		getNoteById,
	};
};

export default useNotesStore;
