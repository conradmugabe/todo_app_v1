import React from 'react';
import {
	Card,
	CardBody,
	CardHeader,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Note } from '../../app/core/entities/note';

type Props = {
	notes: Note[];
};

function RenderNotesList({ notes }: Props) {
	return (
		<SimpleGrid columns={2} gap={5}>
			{notes.map(({ id, title, body }) => (
				<Card key={id} as={Link} to={`/${id}`}>
					<CardHeader>
						<Heading size="md">{title}</Heading>
					</CardHeader>
					<CardBody>
						<Text fontSize="sm" noOfLines={3}>
							{body}
						</Text>
					</CardBody>
				</Card>
			))}
		</SimpleGrid>
	);
}

export default RenderNotesList;
