import { z } from 'zod';
import { HasId } from './note.dto';

export const AddTagProps = z.object({ label: z.string() });
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type AddTagProps = z.infer<typeof AddTagProps>;

export const EditTagPros = AddTagProps.merge(HasId);
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export type EditTagPros = z.infer<typeof EditTagPros>;
