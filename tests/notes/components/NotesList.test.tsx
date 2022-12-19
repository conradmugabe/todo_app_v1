import React from 'react';
import { render, screen } from '@testing-library/react';
import NotesList from '../../../src/notes/components/NotesList';
import { BrowserRouter } from 'react-router-dom';

describe('tests NoteList component', () => {
	it('should render a message to saying no notes available', () => {
		render(
			<BrowserRouter>
				<NotesList notes={[]} />
			</BrowserRouter>
		);

		expect(screen.getByText(/no notes/i)).toBeInTheDocument();
	});

	it('should render a list with all Notes', () => {
		render(
			<BrowserRouter>
				<NotesList
					notes={[{ id: '1', title: 'Test Note', body: 'Test Body' }]}
				/>
			</BrowserRouter>
		);

		expect(screen.getByText(/Test Note/i)).toBeInTheDocument();
	});
});
