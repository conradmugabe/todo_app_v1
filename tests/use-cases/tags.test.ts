import TagsUseCases from '../../src/app/use-cases/tags';
import TagsDatabaseService from '../../src/app/core/services/tagsDatabase.service';
import { Tag } from '../../src/app/core/entities/tag';

describe('TagUseCase tests', () => {
	it('successfully adds tag', async () => {
		// 		const addTag = 'test label';
		// 		const mockId = '1';
		// 		const mockResponse: Tag = { id: mockId, label: addTag };
		// 		// class MockDatabaseService implements TagsDatabaseService {}
		// 		const mockDatabaseService = new MockDatabaseService();
		// 		const tagUseCase = new TagsUseCases(mockDatabaseService);
		// 		const tag = await tagUseCase.addTag({ label: addTag });
		// 		expect(tag.id).toBe(mockId);
		// 		expect(tag.label).toBe(addTag);
		// 		expect(mockDatabaseService.addTag).toHaveBeenCalledTimes(1);
		// 		expect(tag).toEqual(mockResponse);
	});
});
