import React from 'react';
import { Heading } from '@chakra-ui/react';
import { NoteData } from '../../app/core/dto/note.dto';
import NoteForm from './NoteForm';
import useNotesUseCases from '../useCases/useNotesUseCases';

function CreateNote() {
	const { useCreateNote } = useNotesUseCases();
	const { isLoading, mutate } = useCreateNote();

	const onSubmit = async ({ title, body }: NoteData): Promise<void> => {
		mutate({ title, body });
	};

	return (
		<>
			<Heading marginY={5}>Create Note</Heading>
			<NoteForm onSubmit={onSubmit} isLoading={isLoading} />
		</>
	);
}

export default CreateNote;
