import React, { useRef, FormEvent } from 'react';
import { Button, ButtonGroup, Flex, Input, Textarea } from '@chakra-ui/react';
import { MdSave } from 'react-icons/md';
import { NoteData } from '../entity/Notes';

type Props = {
	onSubmit: (data: NoteData) => Promise<void>;
	onBack: () => Promise<void>;
};

function NoteForm({ onSubmit, onBack }: Props) {
	const title = useRef<HTMLInputElement>(null);
	const body = useRef<HTMLTextAreaElement>(null);

	const handleBack = async () => {
		await onBack();
	};

	const handleSubmit = async (e: FormEvent) => {
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

	return (
		<form onSubmit={handleSubmit}>
			<Flex direction="column" gap={4} height="auto">
				<Input ref={title} data-testid="title" type="text" required />
				<Textarea ref={body} data-testid="body" required />
				<ButtonGroup>
					<Button
						data-testid="submit"
						type="submit"
						colorScheme="green"
						leftIcon={<MdSave />}
					>
						Save
					</Button>
					<Button data-testid="back" type="button" onClick={handleBack}>
						Back
					</Button>
				</ButtonGroup>
			</Flex>
		</form>
	);
}

export default NoteForm;
