import { rest } from 'msw';

export const handlers = [
	rest.get('get-notes', (request, response, context) => {
		return response(
			context.status(200),
			context.json([{ id: '1', title: 'test title', body: '# test body' }])
		);
	}),
];
