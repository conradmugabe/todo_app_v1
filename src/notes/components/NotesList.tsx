import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Heading,
	Text,
	Button,
	Flex,
	Grid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FcAnswers } from 'react-icons/fc';
import { MdAdd } from 'react-icons/md';
import { Note } from '../entity/Notes';

type Props = {
	notes: Note[];
};

function NotesList({ notes }: Props) {
	const NotesListHeader = (
		<Flex marginY={5}>
			<Heading>Notes</Heading>
			<Button
				as={Link}
				to="/new"
				marginLeft="auto"
				colorScheme="green"
				leftIcon={<MdAdd size="24" />}
			>
				Create Note
			</Button>
		</Flex>
	);

	if (notes.length > 0)
		return (
			<>
				{NotesListHeader}
				{notes.map(({ id, title, body }) => (
					<Card key={id} as={Link} to={`/${id}`}>
						<CardHeader>
							<Heading size="md">{title}</Heading>
						</CardHeader>
						<CardBody>
							<Text pt="2" fontSize="sm">
								{body}
							</Text>
						</CardBody>
					</Card>
				))}
			</>
		);

	return (
		<>
			{NotesListHeader}
			<Grid placeItems="center" height="90vh">
				<Flex direction="column" alignItems="center">
					<FcAnswers size="120" />
					<Text>No Notes Found</Text>
				</Flex>
			</Grid>
		</>
	);
}

export default NotesList;
