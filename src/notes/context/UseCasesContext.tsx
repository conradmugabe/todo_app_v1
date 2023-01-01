import React, { ReactNode } from 'react';
import NotesUseCases from '../../app/use-cases/notes';

export type UseCases = {
	notesUseCases: NotesUseCases;
};

type UseCasesContextProps = UseCases;

type Props = {
	children: ReactNode;
	useCases: UseCases;
};

const UseCasesContext = React.createContext<UseCasesContextProps | undefined>(
	undefined
);

const useUseCases = () => {
	const context = React.useContext(UseCasesContext);
	if (!context) {
		throw Error('useUseCases must be used inside UseCasesContextProvider');
	}
	return context;
};

function UseCasesProvider({ useCases, children }: Props) {
	return (
		<UseCasesContext.Provider value={useCases}>
			{children}
		</UseCasesContext.Provider>
	);
}

export { UseCasesProvider, useUseCases };
