import React from 'react';
import { Heading, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import RenderNotesList from './RenderNotesList';
import useNotesUseCases from '../useCases/useNotesUseCases';
import EmptyNotes from './EmptyNotes';

function NotesList() {
	const { useGetNotes } = useNotesUseCases();
	const { data: notes, isLoading, isError } = useGetNotes();

	if (isLoading) return <p>Loading...</p>;

	if (isError) return <p>An error occurred</p>;

	return (
		<>
			<Flex marginY={5}>
				<Heading>Notes</Heading>
				<Button
					as={Link}
					to="/new"
					size="sm"
					marginLeft="auto"
					colorScheme="green"
					leftIcon={<MdAdd size="24" />}
				>
					Create Note
				</Button>
			</Flex>
			{notes?.length === 0 ? (
				<EmptyNotes />
			) : (
				<RenderNotesList notes={notes || []} />
			)}
		</>
	);
}

export default NotesList;
