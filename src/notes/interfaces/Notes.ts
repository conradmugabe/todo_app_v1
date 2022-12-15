export type NoteData = {
	title: string;
	body: string;
};

export type Note = {
	id: string;
} & NoteData;
