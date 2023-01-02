import React from 'react';
import { render, screen } from '@testing-library/react';

import EmptyNotes from '../../../src/notes/components/EmptyNotes';

describe('EmptyNotes', () => {
	it('Shows user message of empty notes', () => {
		render(<EmptyNotes />);

		const text = screen.getByText(/No Notes Found/i);
		expect(text).toBeInTheDocument();
		expect(text).toHaveTextContent(/No Notes Found/i);
	});
});
