import React, { ReactNode, createContext, useContext } from 'react';
import NotesUseCases from '../../app/use-cases/notes';

export type UseCases = {
	notesUseCases: NotesUseCases;
};

type UseCasesContextProps = UseCases;

type Props = {
	children: ReactNode;
	useCases: UseCases;
};

const UseCasesContext = createContext<UseCasesContextProps | undefined>(
	undefined
);

const useUseCases = () => {
	const context = useContext(UseCasesContext);
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
