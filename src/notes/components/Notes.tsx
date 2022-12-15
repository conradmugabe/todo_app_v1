import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import CreateNote from './CreateNote';
import { Note, NoteData } from '../interfaces/Notes';

function Notes() {
	const [notes, setNotes] = useState<Note[]>([]);

	const createNote = (data: NoteData) =>
		new Promise<void>((resolve) => {
			resolve(setNotes([...notes, { ...data, id: uuid() }]));
		});

	return (
		<Container>
			<Routes>
				<Route path="/" element={<CreateNote onSubmit={createNote} />} />
			</Routes>
		</Container>
	);
}

export default Notes;
