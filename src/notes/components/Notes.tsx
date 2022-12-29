import React from 'react';
import { Container } from '@chakra-ui/react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import CreateNote from './CreateNote';
import NotesList from './NotesList';
import useNotesStore from '../useCases/useNotesStore';
import NoteProvider from './NoteProvider';
import Note from './Note';
import EditNote from './EditNote';

function Notes() {
	const { createNote, getNoteById, notes } = useNotesStore();
	const navigate = useNavigate();

	const onBack = () =>
		new Promise<void>((resolve) => {
			resolve(navigate('..'));
		});

	return (
		<Container>
			<Routes>
				<Route path="/" element={<NotesList notes={notes} />} />
				<Route
					path="/new"
					element={<CreateNote onBack={onBack} onSubmit={createNote} />}
				/>
				<Route
					path="/:noteId"
					element={<NoteProvider getNoteById={getNoteById} />}
				>
					<Route index element={<Note />} />
					<Route path="edit" element={<EditNote />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Container>
	);
}

export default Notes;
