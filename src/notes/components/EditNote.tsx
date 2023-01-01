import React, { useEffect } from 'react';
import { Heading, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import NoteForm from './NoteForm';
import useNotesUseCases from '../useCases/useNotesUseCases';
import { NoteData } from '../../app/core/dto/note.dto';
import useNote from '../context/useNote';

function EditNote() {
	const navigate = useNavigate();
	const { id, title: defaultTitle, body: defaultBody } = useNote();
	const { useEditNote } = useNotesUseCases();
	const { isLoading, mutate, isError, isSuccess } = useEditNote();

	const onSubmit = async ({ title, body }: NoteData): Promise<void> => {
		mutate({ title, body, id });
	};

	const handleBack = () => {
		navigate('..');
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Updated note');
		}
		if (isError) {
			toast.error('Error occurred while updating the note');
		}
	}, [isError, isSuccess]);

	return (
		<>
			<IconButton
				aria-label="back to previous page"
				size="sm"
				borderRadius="full"
				marginY={5}
				icon={<MdArrowBack size="20" />}
				onClick={handleBack}
			/>
			<Heading marginBottom={5}>Edit Note</Heading>
			<NoteForm
				onSubmit={onSubmit}
				isLoading={isLoading}
				title={defaultTitle}
				body={defaultBody}
			/>
		</>
	);
}

export default EditNote;
