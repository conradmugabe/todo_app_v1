import { z } from "zod";

export const TaskInputSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
});

export type TaskInput = z.infer<typeof TaskInputSchema>;

export const TaskSchema = z.object({ id: z.string() }).merge(TaskInputSchema);

export type Task = z.infer<typeof TaskSchema>;

export const TaskColumnInputSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  colorScheme: z.string().nonempty(),
});

export type TaskColumnInput = z.infer<typeof TaskColumnInputSchema>;
