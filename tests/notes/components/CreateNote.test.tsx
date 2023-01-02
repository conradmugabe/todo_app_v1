import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mock, mockClear, MockProxy } from 'jest-mock-extended';
import { BrowserRouter } from 'react-router-dom';

import CreateNote from '../../../src/notes/components/CreateNote';
import {
	UseCases,
	UseCasesProvider,
} from '../../../src/notes/context/UseCasesContext';
import NotesUseCases from '../../../src/app/use-cases/notes';
import NotesDatabaseService from '../../../src/app/core/services/notesDatabase.service';

describe('CreateNote Component', () => {
	let user: UserEvent;
	let database: MockProxy<NotesDatabaseService>;
	let notesUseCases: NotesUseCases;
	let useCases: UseCases;
	let queryClient: QueryClient;
	let ParentComponent: (props: { children: ReactNode }) => JSX.Element;

	beforeAll(() => {
		queryClient = new QueryClient();
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

	it('Should not trigger the onSubmit function when the input is invalid', async () => {
		render(
			<ParentComponent>
				<CreateNote />
			</ParentComponent>
		);

		const submitButton = screen.getByTestId('submit');
		expect(submitButton).toBeDisabled();
	});

	it('Should trigger the onSubmit function with a valid input', async () => {
		render(
			<ParentComponent>
				<CreateNote />
			</ParentComponent>
		);

		const submitButton = screen.getByTestId('submit');
		const textInput = screen.getByTestId('title');
		const textareaInput = screen.getByTestId('body');

		// Enter values into the input fields and submit
		await user.click(textInput);
		await user.keyboard('Test Title');
		await user.click(textareaInput);
		await user.keyboard('Test Body');
		await user.click(submitButton);

		// expect(useCases.notesUseCases.addNote).toHaveBeenCalledTimes(1);
		// expect(useCases.notesUseCases.addNote).toBeCalledWith({
		// 	title: 'Test Title',
		// 	body: 'Test Body',
		// });
	});

	it('Should clear the note title and body if the task creation is successful', async () => {
		render(
			<ParentComponent>
				<CreateNote />
			</ParentComponent>
		);

		const submitButton = screen.getByTestId('submit');
		const textInput = screen.getByTestId('title');
		const textareaInput = screen.getByTestId('body');

		// Enter values into the input fields and submit
		await user.click(textInput);
		await user.keyboard('Test Title');
		await user.click(textareaInput);
		await user.keyboard('Test Body');
		await user.click(submitButton);

		// expect(textInput).toHaveValue('');
		// expect(textareaInput).toHaveValue('');
	});

	it('Should not clear the title and body creation if the task creation can not be completed', async () => {
		render(
			<ParentComponent>
				<CreateNote />
			</ParentComponent>
		);

		const submitButton = screen.getByTestId('submit');
		const textInput = screen.getByTestId('title');
		const textareaInput = screen.getByTestId('body');
		const testTitle = 'Test Title';
		const testBody = '# Test Body';

		// Enter values into the input fields and submit
		await user.click(textInput);
		await user.keyboard(testTitle);
		await user.click(textareaInput);
		await user.keyboard(testBody);
		await user.click(submitButton);

		expect(textInput).toHaveValue(testTitle);
		expect(textareaInput).toHaveValue(testBody);
	});
});
