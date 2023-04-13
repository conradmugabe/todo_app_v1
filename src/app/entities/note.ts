import { z } from "zod";
import { HasID } from "@entities/base";

const Note = z.object({ title: z.string(), body: z.string() }).merge(HasID);
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type Note = z.infer<typeof Note>;
