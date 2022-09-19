import TodoNotFound from '../errors/TodoNotFound';
import InMemoryTodoRepository from './inMemoryTodoRepository';

let repo: InMemoryTodoRepository;

beforeEach(() => {
  repo = new InMemoryTodoRepository();
});

describe('InMemoryTodoRepository', () => {
  it('returns todo list', async () => {
    const result = await repo.getTodoList();

    expect(result.length).toBe(0);
  });

  it('successfully adds to a list', async () => {
    const title = 'test todo';
    const userId = 1;
    const result = await repo.addTodo({ title, userId });

    expect(result.completed).toBe(false);
    expect(result.title).toBe(title);
    expect(result.userId).toBe(userId);
  });

  it('successfully returns a todo given an id', async () => {
    await repo.addTodo({ title: 'test todo 1', userId: 1 });
    await repo.addTodo({ title: 'test todo 2', userId: 2 });

    const result = await repo.getTodoById(1);

    expect(result.completed).toBe(false);
    expect(result.title).toBe('test todo 1');
    expect(result.userId).toBe(1);
    expect(result.id).toBe(1);
  });

  it('successfully updates an existing todo', async () => {
    await repo.addTodo({ title: 'test todo 1', userId: 1 });
    await repo.addTodo({ title: 'test todo 2', userId: 2 });

    const result = await repo.updateTodo({
      completed: true,
      userId: 1,
      id: 1,
      title: 'test todo 3',
    });

    expect(result.completed).toBe(true);
    expect(result.id).toBe(1);
    expect(result.userId).toBe(1);
  });

  it('successfully deletes an existing todo', async () => {
    await repo.addTodo({ title: 'test todo 1', userId: 1 });
    await repo.addTodo({ title: 'test todo 2', userId: 2 });

    const result = await repo.deleteTodo(1);
    const results = await repo.getTodoList();

    expect(result).toBeFalsy();
    expect(results.length).toBe(1);
  });

//   it('raise an error if a deletion on a non existent todo is tried', async () => {
//     await repo.addTodo({ title: 'test todo 1', userId: 1 });
//     await repo.addTodo({ title: 'test todo 2', userId: 2 });

//     const result = await repo.deleteTodo(100);

//     expect(result).toThrow(TodoNotFound);
//     expect(result).toThrow('Todo Not Found');
//   });
});
