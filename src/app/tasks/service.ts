import { Task, TaskInput } from "./entities";
import { httpService } from "./ext-deps";

// eslint-disable-next-line import/prefer-default-export
export const notesService = httpService<Task, TaskInput>("/todos");
