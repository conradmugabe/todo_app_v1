import React from 'react';
import { Container } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CreateNote from './CreateNote';
import NotesList from './NotesList';
import NoteProvider from './NoteProvider';
import Note from './Note';
import EditNote from './EditNote';

function Notes() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<NotesList />} />
				<Route path="/new" element={<CreateNote />} />
				<Route path="/:noteId" element={<NoteProvider />}>
					<Route index element={<Note />} />
					<Route path="edit" element={<EditNote />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Container>
	);
}

export default Notes;
