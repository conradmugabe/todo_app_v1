import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('App tests', () => {
	it('Should should display input value after click', async () => {
		const user = userEvent.setup();
		render(<App />);

		const title = screen.getByRole('textbox');
		const createButton = screen.getByRole('button');

		let sampleText = 'First item';
		await user.click(title);
		await user.keyboard(sampleText);
		await user.click(createButton);

		expect(screen.getByText(sampleText)).toBeInTheDocument();
		// expect(screen.getByRole('listitem')).toHaveLength(1);
		expect(title).toHaveValue('');

		sampleText = 'Second item';
		await user.click(title);
		await user.keyboard(sampleText);
		await user.click(createButton);

		expect(screen.getByText(sampleText)).toBeInTheDocument();
		// expect(screen.getByRole('listitem')).toHaveLength(2);
	});

	it('Should not add empty item description to the list', async () => {
		const user = userEvent.setup();
		render(<App />);

		const createButton = screen.getByRole('button');

		await user.click(createButton);

		// expect(screen.getByRole('listitem')).toHaveLength(0);
	});
});
