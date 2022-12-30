import { z } from 'zod';

export const Note = z.object({
	id: z.string(),
	title: z.string(),
	body: z.string(),
});
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type Note = z.infer<typeof Note>;
