import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import RenderNotesList from '../../../src/notes/components/RenderNotesList';
import { Note } from '../../../src/app/core/entities/note';

describe('RenderNotesList tests', () => {
	it('Should render an empty list without crashing', () => {
		render(<RenderNotesList notes={[]} />);
	});

	it('Should render a list notes on the DOM', () => {
		const notes: Note[] = [
			{ id: '1', title: 'Test Note 1', body: 'Test Body Note 1' },
			{ id: '2', title: 'Test Note 2', body: 'Test Body Note 2' },
		];
		render(
			<BrowserRouter>
				<RenderNotesList notes={notes} />
			</BrowserRouter>
		);
		const allTitles = screen.getAllByText(/Test Note/i);
		const allBodies = screen.getAllByText(/Test Body Note/i);

		expect(allTitles).toHaveLength(2);
		expect(allBodies).toHaveLength(2);
		expect(allTitles[0]).toHaveTextContent(/Test Note 1/i);
		expect(allTitles[1]).toHaveTextContent(/Test Note 2/i);
		expect(allBodies[0]).toHaveTextContent(/Test Body Note 1/i);
		expect(allBodies[1]).toHaveTextContent(/Test Body Note 2/i);
	});
});
