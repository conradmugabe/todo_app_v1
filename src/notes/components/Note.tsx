import React from 'react';
import { ButtonGroup, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdArrowBack } from 'react-icons/md';
// import ReactMarkdown from 'react-markdown';
import useNote from '../context/useNote';

function Note() {
	const { noteId } = useParams();
	const navigate = useNavigate();
	const { title, body } = useNote();
	return (
		<>
			<Flex marginY={5}>
				<IconButton
					aria-label="back to previous page"
					size="sm"
					borderRadius="full"
					icon={<MdArrowBack size="20" />}
					onClick={() => {
						navigate('..');
					}}
				/>
				<ButtonGroup marginLeft="auto">
					<IconButton
						aria-label="edit note"
						size="sm"
						as={Link}
						to={`/${noteId}/edit`}
						borderRadius="full"
						colorScheme="green"
						icon={<MdEdit size="20" />}
					/>
					<IconButton
						aria-label="delete note"
						size="sm"
						borderRadius="full"
						colorScheme="red"
						icon={<MdDeleteForever size="20" />}
					/>
				</ButtonGroup>
			</Flex>
			<Heading>{title}</Heading>
			<Text marginTop={5}>{body}</Text>
			{/* <ReactMarkdown children={body} /> */}
		</>
	);
}

export default Note;
