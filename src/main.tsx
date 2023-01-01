import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { UseCases, UseCasesProvider } from './notes/context/UseCasesContext';
import LocalStorageDatabaseService from './app/services/localStorageDatabaseService';
import NotesUseCases from './app/use-cases/notes';

const database = new LocalStorageDatabaseService();
const notesUseCases = new NotesUseCases(database);
const queryClient = new QueryClient();

const useCases: UseCases = { notesUseCases };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UseCasesProvider useCases={useCases}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<ChakraProvider>
						<App />
					</ChakraProvider>
				</BrowserRouter>
			</QueryClientProvider>
		</UseCasesProvider>
	</React.StrictMode>
);
