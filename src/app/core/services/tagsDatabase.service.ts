import { AddTagProps, EditTagPros } from '../dto/tag.dto';
import { Tag } from '../entities/tag';

export default abstract class TagsDatabaseService {
	abstract addTag({ label }: AddTagProps): Promise<Tag>;

	abstract getTags(): Promise<Tag[]>;

	abstract editTag(data: EditTagPros): Promise<Tag | undefined>;

	abstract deleteTag(tagId: string): Promise<Tag | undefined>;
}
