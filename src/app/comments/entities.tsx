import { z } from "zod";

export const CommentInputSchema = z.object({ comment: z.string().nonempty() });

export type CommentInput = z.infer<typeof CommentInputSchema>;
