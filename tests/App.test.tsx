import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from '../src/App';
import {
	UseCases,
	UseCasesProvider,
} from '../src/notes/context/UseCasesContext';
import LocalStorageDatabaseService from '../src/app/services/localStorageDatabaseService';
import NotesUseCases from '../src/app/use-cases/notes';

const database = new LocalStorageDatabaseService();
const notesUseCases = new NotesUseCases(database);
const useCases: UseCases = { notesUseCases };
const queryClient = new QueryClient();

describe('App tests', () => {
	it('Should render app without crashing', () => {
		render(
			<UseCasesProvider useCases={useCases}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</QueryClientProvider>
			</UseCasesProvider>
		);
	});
});
