import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
	it('Should render hello world text', () => {
		render(<App />);
		expect(screen.getByText(/World/i)).toBeInTheDocument();
	});
});
