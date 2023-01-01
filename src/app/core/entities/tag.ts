import { z } from 'zod';

export const Tag = z.object({ id: z.string(), label: z.string() });
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type Tag = z.infer<typeof Tag>;
