import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Note, NoteData } from '../entity/Notes';

const useNotesStore = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const navigate = useNavigate();

	const createNote = ({ body, title }: NoteData) =>
		new Promise<void>((resolve) => {
			resolve(setNotes((prev) => [...prev, { body, title, id: uuid() }]));
			navigate('..');
		});

	return {
		notes,
		createNote,
	};
};

export default useNotesStore;
