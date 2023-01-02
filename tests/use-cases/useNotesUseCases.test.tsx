import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, act } from '@testing-library/react';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { mock, mockClear, MockProxy } from 'jest-mock-extended';
import userEvent from '@testing-library/user-event';

import NotesDatabaseService from '../../src/app/core/services/notesDatabase.service';
import NotesUseCases from '../../src/app/use-cases/notes';
import {
	UseCases,
	UseCasesProvider,
} from '../../src/notes/context/UseCasesContext';
import useNotesUseCases from '../../src/notes/useCases/useNotesUseCases';
import { BrowserRouter } from 'react-router-dom';

describe('useNotesUseCases', () => {
	let user: UserEvent;
	let database: MockProxy<NotesDatabaseService>;
	let notesUseCases: NotesUseCases;
	let useCases: UseCases;
	let queryClient: QueryClient;
	let ParentComponent: (props: { children: ReactNode }) => JSX.Element;

	beforeAll(() => {
		queryClient = new QueryClient({
			defaultOptions: { queries: { retry: false } },
		});
		user = userEvent.setup();
		database = mock<NotesDatabaseService>();
		notesUseCases = new NotesUseCases(database);
		useCases = { notesUseCases };
		ParentComponent = ({ children }) => (
			<UseCasesProvider useCases={useCases}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>{children}</BrowserRouter>
				</QueryClientProvider>
			</UseCasesProvider>
		);
	});

	afterEach(() => {
		mockClear(database);
	});

	test('creates ', () => {
		const { result } = renderHook(useNotesUseCases, {
			wrapper: ParentComponent,
		});
		database.addNote.mockReturnValue(
			new Promise((resolve) => resolve({ id: '', title: '', body: '' }))
		);

		const { result: res } = renderHook(result.current.useCreateNote, {
			wrapper: ParentComponent,
		});

		// const { mutate } = result.current.useCreateNote();
		act(() => {
			res.current.mutate({ title: 'test title', body: 'test body' });
		});
		// expect(res.current.mutate).toHaveBeenCalledTimes(1);
	});
});
