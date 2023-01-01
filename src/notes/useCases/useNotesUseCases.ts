import { useMutation, useQuery } from '@tanstack/react-query';
import { useUseCases } from '../context/UseCasesContext';

const useNotesUseCases = () => {
	const { notesUseCases: useCases } = useUseCases();

	const useCreateNote = () => {
		const { isLoading, isError, error, mutate, isSuccess } = useMutation({
			mutationFn: useCases.addNote,
		});
		return { isLoading, isError, error, mutate, isSuccess };
	};

	const useEditNote = () => {
		const { isLoading, isError, error, mutate, isSuccess } = useMutation({
			mutationFn: useCases.editNote,
		});
		return { isLoading, isError, error, mutate, isSuccess };
	};

	const useGetNoteById = (noteId: string) => {
		const { isLoading, isError, error, refetch, data } = useQuery({
			queryKey: ['notes', noteId],
			queryFn: () => useCases.getNoteById(noteId),
		});
		return { isLoading, isError, error, refetch, data };
	};

	const useGetNotes = () => {
		const { isLoading, isError, error, refetch, data } = useQuery({
			queryKey: ['notes'],
			queryFn: useCases.getNotes,
		});
		return { isLoading, isError, error, refetch, data };
	};

	return {
		useCreateNote,
		useGetNoteById,
		useGetNotes,
		useEditNote,
	};
};

export default useNotesUseCases;
