import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

import NoteForm from '../../../src/notes/components/NoteForm';

describe('NotesForm', () => {
	let user: UserEvent;

	beforeEach(() => {
		user = userEvent.setup();
	});

	it('starts with an empty value if not parsed', () => {
		const onSubmit = jest.fn();
		render(
			<BrowserRouter>
				<NoteForm onSubmit={onSubmit} isLoading={false} />
			</BrowserRouter>
		);

		const textInput = screen.getByTestId('title');
		const textareaInput = screen.getByTestId('body');

		expect(textInput).toHaveValue('');
		expect(textareaInput).toHaveValue('');
	});

	it('starts with default props if default props parsed', () => {
		const onSubmit = jest.fn();
		render(
			<BrowserRouter>
				<NoteForm
					onSubmit={onSubmit}
					isLoading={false}
					title={'Test Title'}
					body={'# Test Body'}
				/>
			</BrowserRouter>
		);

		const textInput = screen.getByTestId('title');
		const textareaInput = screen.getByTestId('body');

		expect(textInput).toHaveValue('Test Title');
		expect(textareaInput).toHaveValue('# Test Body');
	});

	it('does not save if the fields are empty', async () => {
		const onSubmit = jest.fn();
		render(
			<BrowserRouter>
				<NoteForm onSubmit={onSubmit} isLoading={false} />
			</BrowserRouter>
		);

		const submitButton = screen.getByTestId('submit');
		await user.click(submitButton);
		expect(submitButton).toBeDisabled();
		expect(onSubmit).toHaveBeenCalledTimes(0);
	});

	it('does not submit if the body and title have been changed', async () => {
		const onSubmit = jest.fn();
		render(
			<BrowserRouter>
				<NoteForm
					onSubmit={onSubmit}
					isLoading={false}
					title={'Test Title'}
					body={'# Test Body'}
				/>
			</BrowserRouter>
		);

		const submitButton = screen.getByTestId('submit');
		await user.click(submitButton);
		expect(submitButton).toBeDisabled();
		expect(onSubmit).toHaveBeenCalledTimes(0);
	});

	it('allows submission when the user submits the correct fields', async () => {
		const onSubmit = jest.fn();
		render(
			<BrowserRouter>
				<NoteForm onSubmit={onSubmit} isLoading={false} />
			</BrowserRouter>
		);
		const textInput = screen.getByTestId('title');
		const textareaInput = screen.getByTestId('body');
		const submitButton = screen.getByTestId('submit');

		// User Inputs Values into the fields
		await user.click(textInput);
		await user.keyboard('Test Title');
		await user.click(textareaInput);
		await user.keyboard('Test Body');
		expect(submitButton).not.toBeDisabled();

		// User submits values
		await user.click(submitButton);
		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});
