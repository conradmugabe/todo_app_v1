import { AddTagProps } from '../core/dto/tag.dto';
import { Tag } from '../core/entities/tag';
import TagsDatabaseService from '../core/services/tagsDatabase.service';

export default class LocalStorageDatabaseService
	implements TagsDatabaseService
{
	private notesDatabaseName = 'notes-app:tags';

	static getItem = <T>({
		key,
	}: LocalStorageDatabaseService.GetItem): T | null => {
		const data = localStorage.getItem(key);
		if (data === null) return data;
		return JSON.parse(data);
	};

	static saveItem = ({ key, value }: LocalStorageDatabaseService.SetItem) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

	getTags = (): Promise<Tag[]> => {
		const tags = LocalStorageDatabaseService.getItem<Tag[]>({
			key: this.notesDatabaseName,
		});
		if (!tags)
			return new Promise((resolve) => {
				resolve([]);
			});
		Tag.array().parse(tags);
		return new Promise((resolve) => {
			resolve(tags);
		});
	};

	addTag = async ({ label }: AddTagProps): Promise<Tag> => {
		const tag: Tag = { id: crypto.randomUUID(), label };
		const tags = await this.getTags();
		tags.push(tag);
		LocalStorageDatabaseService.saveItem({
			key: this.notesDatabaseName,
			value: tags,
		});
		return new Promise((resolve) => {
			resolve(tag);
		});
	};
}

namespace LocalStorageDatabaseService {
	export type GetItem = { key: string };
	export type SetItem = GetItem & { value: unknown };
}
