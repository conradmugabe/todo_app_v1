import { z } from 'zod';

export const NoteData = z.object({ title: z.string(), body: z.string() });
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type NoteData = z.infer<typeof NoteData>;
