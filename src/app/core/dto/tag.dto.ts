import { z } from 'zod';

export const AddTagProps = z.object({ label: z.string() });
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type AddTagProps = z.infer<typeof AddTagProps>;
