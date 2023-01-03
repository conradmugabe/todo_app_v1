import { AddTagProps, EditTagPros } from '../core/dto/tag.dto';
import { Tag } from '../core/entities/tag';
import TagsDatabaseService from '../core/services/tagsDatabase.service';

export default class TagsUseCases {
	constructor(private databaseService: TagsDatabaseService) {}

	addTag = async ({ label }: AddTagProps): Promise<Tag> =>
		this.databaseService.addTag({ label });

	getTags = async (): Promise<Tag[]> => this.databaseService.getTags();

	editTag = async ({ id, label }: EditTagPros): Promise<Tag> => {
		const tag = await this.databaseService.editTag({ id, label });
		if (!tag) throw new Error('Tag Not Found');
		return tag;
	};

	deleteTag = async (tagId: string): Promise<void> => {
		const tag = await this.databaseService.deleteTag(tagId);
		if (!tag) throw new Error('Could not delete. Something went wrong');
	};
}
