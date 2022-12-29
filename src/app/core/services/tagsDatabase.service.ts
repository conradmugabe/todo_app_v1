import { AddTagProps } from '../dto/tag.dto';
import { Tag } from '../entities/tag';

export default abstract class TagsDatabaseService {
	abstract addTag({ label }: AddTagProps): Promise<Tag>;

	abstract getTags(): Promise<Tag[]>;
}
