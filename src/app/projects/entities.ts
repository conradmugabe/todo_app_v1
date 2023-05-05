import { z } from "zod";

export const ProjectInputSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
});

export type ProjectInput = z.infer<typeof ProjectInputSchema>;

export const ProjectSchema = z
  .object({
    id: z.string().nonempty(),
  })
  .merge(ProjectInputSchema);

export type Project = z.infer<typeof ProjectSchema>;
