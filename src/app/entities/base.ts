import { z } from "zod";

export const HasID = z.object({ id: z.string() });
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type HasID = z.infer<typeof HasID>;
