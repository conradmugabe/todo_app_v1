import React from 'react';
import { Heading, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import RenderNotesList from './RenderNotesList';
import useNotesUseCases from '../useCases/useNotesUseCases';
import EmptyNotes from './EmptyNotes';

function NotesList() {
	const { useGetNotes } = useNotesUseCases();
	const { data: notes, isError } = useGetNotes();

	if (notes)
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

	if (isError) return <p>An error occurred</p>;

	return <p>Loading...</p>;
}

export default NotesList;
