import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateNote from '../../../src/notes/components/CreateNote';

describe('CreateNote Component', () => {
	it('Should trigger the onSubmit function with a valid input', async () => {
		const user = userEvent.setup();
		const onSubmit = jest.fn();
		render(<CreateNote onSubmit={onSubmit} />);

		await user.click(screen.getByTestId('title'));
		await user.keyboard('First note');
		await user.click(screen.getByTestId('body'));
		await user.keyboard('# Test Body');
		await user.click(screen.getByTestId('submit'));

		expect(onSubmit).toHaveBeenCalledTimes(1);
	});

	it('Should not trigger the onSubmit function when the input is invalid', async () => {
		const user = userEvent.setup();
		const onSubmit = jest.fn();
		render(<CreateNote onSubmit={onSubmit} />);

		await user.click(screen.getByTestId('submit'));

		expect(onSubmit).toHaveBeenCalledTimes(0);
	});

	it('Should clear the note title and body if the task creation is successful', async () => {
		const user = userEvent.setup();
		const onSubmit = jest.fn();
		render(<CreateNote onSubmit={onSubmit} />);

		await user.click(screen.getByTestId('title'));
		await user.keyboard('First Note');
		await user.click(screen.getByTestId('body'));
		await user.keyboard('# Test Body');
		await user.click(screen.getByTestId('submit'));

		expect(screen.getByTestId('title')).toHaveValue('');
		expect(screen.getByTestId('body')).toHaveValue('');
	});

	it('Should not clear the title and body creation if the task creation can not be completed', async () => {
		const user = userEvent.setup();
		render(
			<CreateNote
				onSubmit={() => new Promise((_resolve, reject) => reject())}
			/>
		);

		await user.click(screen.getByTestId('title'));
		await user.keyboard('First Note');
		await user.click(screen.getByTestId('body'));
		await user.keyboard('# Test Body');
		await user.click(screen.getByTestId('submit'));

		expect(screen.getByTestId('title')).toHaveValue('First Note');
		expect(screen.getByTestId('body')).toHaveValue('# Test Body');
	});
});
