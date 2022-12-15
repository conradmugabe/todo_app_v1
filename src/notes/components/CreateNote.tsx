import React, { useRef } from 'react';
import { Button, Heading, Input, Textarea } from '@chakra-ui/react';
import { NoteData } from '../interfaces/Notes';

type Props = {
	onSubmit: (data: NoteData) => Promise<void>;
};

function CreateNote({ onSubmit }: Props) {
	const title = useRef<HTMLInputElement>(null);
	const body = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (title.current?.value && body.current?.value) {
			try {
				await onSubmit({
					title: title.current.value,
					body: title.current.value,
				});
				title.current.value = '';
				body.current.value = '';
			} catch (error) {
				// no-op
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Heading>Create Note</Heading>
			<Input ref={title} data-testid="title" type="text" required />
			<Textarea ref={body} data-testid="body" required />
			<Button data-testid="submit" type="submit">
				Save
			</Button>
			<Button data-testid="back" type="button">
				Back
			</Button>
		</form>
	);
}

export default CreateNote;
