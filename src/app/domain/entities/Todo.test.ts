import TodoProps from '../interfaces/Todo';
import Todo from './Todo';

describe('TodoEntity', () => {
  it('Constructs a class', () => {
    const todoProps: TodoProps = {
      id: 1,
      userId: 1,
      title: 'test todo 1',
      completed: false,
    };

    const todo = new Todo(todoProps);
    expect(todo.id).toBe(1);
    expect(todo.userId).toBe(1);
    expect(todo.title).toBe('test todo 1');
    expect(todo.completed).toBe(false);
  });

  it('Returns a todo object', () => {
    const todoProps: TodoProps = {
      id: 1,
      userId: 1,
      title: 'test todo 1',
      completed: false,
    };

    const todo = new Todo(todoProps);
    const todoObject = todo.toObject();
    expect(todoObject.id).toBe(1);
    expect(todoObject.userId).toBe(1);
    expect(todoObject.title).toBe('test todo 1');
    expect(todoObject.completed).toBe(false);
  });
});
