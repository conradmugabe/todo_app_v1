import React from 'react';
import { Heading } from '@chakra-ui/react';
import { NoteData } from '../entity/Notes';
import NoteForm from './NoteForm';

type Props = {
	onSubmit: (data: NoteData) => Promise<void>;
	onBack: () => Promise<void>;
};

function CreateNote({ onSubmit, onBack }: Props) {
	return (
		<>
			<Heading marginY={5}>Create Note</Heading>
			<NoteForm onSubmit={onSubmit} onBack={onBack} />
		</>
	);
}

export default CreateNote;
