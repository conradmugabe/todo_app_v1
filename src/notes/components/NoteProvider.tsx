import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import useNotesUseCases from '../useCases/useNotesUseCases';

function NoteProvider() {
	const { noteId } = useParams();
	const { useGetNoteById } = useNotesUseCases();
	const { isLoading, data: note } = useGetNoteById(noteId || '');

	if (isLoading) return <p>Loading...</p>;

	return note ? <Outlet context={note} /> : <Navigate to="/" replace />;
}

export default NoteProvider;
