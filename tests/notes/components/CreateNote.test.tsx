import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateNote from '../../../src/notes/components/CreateNote';

describe('CreateNote Component', () => {
	it('Should trigger the onSubmit function with a valid input', async () => {
		const user = userEvent.setup();
		render(<CreateNote />);
	});

	it('Should not trigger the onSubmit function when the input is invalid', async () => {
		const user = userEvent.setup();
		render(<CreateNote />);
	});

	it('Should clear the note title if the task creation is successful', async () => {
		const user = userEvent.setup();
		render(<CreateNote />);
	});

	it('Should not clear the task creation if the task creation can not be completed', async () => {
		const user = userEvent.setup();
		render(<CreateNote />);
	});
});
