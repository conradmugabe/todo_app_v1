import React, { useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { Note } from '../entity/Notes';

type Props = {
	getNoteById: (id: string) => Promise<Note | undefined>;
};

function NoteProvider({ getNoteById }: Props) {
	const { noteId } = useParams();
	let note: Note | undefined;

	useEffect(() => {
		getNoteById(noteId || '').then((data) => {
			note = data;
		});
	}, [noteId]);

	return note ? <Outlet context={note} /> : <Navigate to="/" replace />;
}

export default NoteProvider;
