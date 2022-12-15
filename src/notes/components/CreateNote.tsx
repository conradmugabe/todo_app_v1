import React, { useRef } from 'react';
import { Button, Heading, Input, Textarea } from '@chakra-ui/react';
import { NoteData } from '../entity/Notes';

type Props = {
	onSubmit: (data: NoteData) => Promise<void>;
	onBack: () => Promise<void>;
};

function CreateNote({ onSubmit, onBack }: Props) {
	const title = useRef<HTMLInputElement>(null);
	const body = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (title.current?.value && body.current?.value) {
			try {
				await onSubmit({
					title: title.current.value,
					body: body.current.value,
				});
				title.current.value = '';
				body.current.value = '';
			} catch (error) {
				// no-op
			}
		}
	};

	const handleBack = async () => {
		await onBack();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Heading>Create Note</Heading>
			<Input ref={title} data-testid="title" type="text" required />
			<Textarea ref={body} data-testid="body" required />
			<Button data-testid="submit" type="submit">
				Save
			</Button>
			<Button data-testid="back" type="button" onClick={handleBack}>
				Back
			</Button>
		</form>
	);
}

export default CreateNote;
