import TodoProps from '../domain/interfaces/Todo';
import MockTodoRepository from '../infra/repositories/mockTodoRepository';
import TodoUseCases from './TodoUseCases';

let todoUseCases: TodoUseCases;

beforeEach(() => {
  const repository = new MockTodoRepository();
  todoUseCases = new TodoUseCases(repository);
});

describe('TodoUseCases', () => {
  it('returns todo list', async () => {
    const todo: TodoProps = {
      id: 1,
      userId: 1,
      title: 'test blog',
      completed: false,
    };
    const todos = await todoUseCases.getTodoList();
    expect(todos[0].id).toBe(1);
    expect(todos).toContainEqual(todo);
  });

  it('returns todo by id', async () => {
    const id = 1;
    const todo = await todoUseCases.getTodoById(id);
    expect(todo.id).toBe(id);
    expect(todo.completed).toBe(true);
    expect(todo.title).toBe('test blog');
    expect(todo.userId).toBe(1);
  });

  it('adds todo successfully', async () => {
    const todo = await todoUseCases.addTodo({
      userId: 1,
      title: 'test todo 1',
    });
    expect(todo.userId).toBe(1);
    expect(todo.title).toBe('test todo 1');
  });

  it('deletes a todo by id', async () => {
    const response = await todoUseCases.deleteTodo(1);
    expect(response).toBeFalsy();
  });

  it('updates a todo', async () => {
    const todo: TodoProps = {
      id: 1,
      userId: 1,
      title: 'test blog',
      completed: false,
    };
    const response = await todoUseCases.updateTodo(todo);
    expect(response.id).toBe(todo.id);
    expect(response.userId).toBe(todo.userId);
    expect(response.completed).toBe(todo.completed);
    expect(response.title).toBe(todo.title);
  });
});
