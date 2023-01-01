import React, { FormEvent, useState } from 'react';
import { Button, ButtonGroup, Flex, Input, Textarea } from '@chakra-ui/react';
import { MdSave } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { NoteData } from '../../app/core/dto/note.dto';

type Props = {
	onSubmit: (data: NoteData) => Promise<void>;
	isLoading: boolean;
	title?: string;
	body?: string;
};

const defaultProps = {
	body: '',
	title: '',
};

function NoteForm({ onSubmit, isLoading, title, body }: Props): JSX.Element {
	const [values, setValues] = useState({ body, title });
	const navigate = useNavigate();

	const handleBack = async () => {
		navigate('..');
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (values.title && values.body) {
			await onSubmit({
				title: values.title,
				body: values.body,
			});
			handleBack();
		}
	};

	const hasNotChange = title === values.title && body === values.body;

	return (
		<form onSubmit={handleSubmit}>
			<Flex direction="column" gap={4} height="auto">
				<Input
					data-testid="title"
					type="text"
					required
					value={values.title}
					onChange={(e) =>
						setValues((prev) => ({ ...prev, title: e.target.value }))
					}
				/>
				<Textarea
					data-testid="body"
					required
					value={values.body}
					onChange={(e) =>
						setValues((prev) => ({ ...prev, body: e.target.value }))
					}
				/>
				<ButtonGroup>
					<Button
						data-testid="submit"
						type="submit"
						colorScheme="green"
						size="sm"
						leftIcon={<MdSave />}
						isLoading={isLoading}
						isDisabled={hasNotChange}
					>
						Save
					</Button>
					<Button
						size="sm"
						data-testid="back"
						type="button"
						onClick={handleBack}
						isDisabled={isLoading}
					>
						Back
					</Button>
				</ButtonGroup>
			</Flex>
		</form>
	);
}

NoteForm.defaultProps = defaultProps;

export default NoteForm;
