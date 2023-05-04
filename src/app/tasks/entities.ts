import { z } from "zod";

export const TaskInputSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
});

export type TaskInput = z.infer<typeof TaskInputSchema>;

export const TaskSchema = z.object({ id: z.string() }).merge(TaskInputSchema);

export type Task = z.infer<typeof TaskSchema>;
