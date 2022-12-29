import React from 'react';
import { Heading } from '@chakra-ui/react';
// import ReactMarkdown from 'react-markdown';
import useNote from '../context/useNote';

function Note() {
	const { title } = useNote();
	return (
		<>
			<Heading>{title}</Heading>
			{/* <ReactMarkdown children={body} /> */}
		</>
	);
}

export default Note;
