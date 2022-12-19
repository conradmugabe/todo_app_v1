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
import { Note } from '../entity/Notes';

type Props = {
	notes: Note[];
};

function NotesList({ notes }: Props) {
	const NotesListHeader = (
		<Flex>
			<Heading>Notes</Heading>
			<Button as={Link} to="/new" marginLeft="auto">
				Create Note
			</Button>
		</Flex>
	);

	if (notes.length > 0)
		return (
			<>
				{NotesListHeader}
				{notes.map(({ id, title, body }) => (
					<Card key={id}>
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
				<Text>no notes found</Text>
			</Grid>
		</>
	);
}

export default NotesList;
