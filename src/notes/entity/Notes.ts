export type NoteData = {
	title: string;
	body: string;
};

export type Note = {
	id: string;
} & NoteData;

// This is a concept I want to checkout later (CLEAN ARCHITECTURE)

// type SerializeNote = Note;

// export class NoteEntity {
// 	private readonly _id: string;

// 	private _title: string;

// 	private _body: string;

// 	constructor({ title, body }: NoteData) {
// 		this._id = uuid();
// 		this._title = title;
// 		this._body = body;
// 	}

// 	get id() {
// 		return this._id;
// 	}

// 	get title() {
// 		return this._title;
// 	}

// 	get body() {
// 		return this._body;
// 	}

// 	static serialize(note: NoteEntity): SerializeNote {
// 		return { id: note.id, title: note.title, body: note.body };
// 	}
// }
