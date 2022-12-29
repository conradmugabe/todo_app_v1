import { AddTagProps } from '../core/dto/tag.dto';
import { Tag } from '../core/entities/tag';
import TagsDatabaseService from '../core/services/tagsDatabase.service';

export default class TagsUseCase {
	constructor(private databaseService: TagsDatabaseService) {}

	addTag = async ({ label }: AddTagProps): Promise<Tag> =>
		this.databaseService.addTag({ label });

	getTags = async (): Promise<Tag[]> => this.databaseService.getTags();
}
