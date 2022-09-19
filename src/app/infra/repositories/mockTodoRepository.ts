import TodoProps from '../../domain/interfaces/Todo';
import { TodoRepository } from '../../use_cases/interfaces/TodoRepository';

export default class MockTodoRepository implements TodoRepository {
  getTodoList(): Promise<TodoProps[]> {
    const todos: TodoProps[] = [
      {
        id: 1,
        userId: 1,
        title: 'test blog',
        completed: false,
      },
      {
        id: 2,
        userId: 1,
        title: 'test blog 1',
        completed: true,
      },
      {
        id: 3,
        userId: 1,
        title: 'test blog 2',
        completed: false,
      },
      {
        id: 4,
        userId: 1,
        title: 'test blog 3',
        completed: true,
      },
    ];
    return new Promise((resolve) => resolve(todos));
  }

  getTodoById(id: number): Promise<TodoProps> {
    const todo: TodoProps = {
      id,
      userId: 1,
      title: 'test blog',
      completed: true,
    };
    return new Promise((resolve) => resolve(todo));
  }

  addTodo(props: TodoRepository.AddTodoRequest): Promise<TodoProps> {
    const { userId, title } = props;
    const todo: TodoProps = {
      id: 1,
      userId,
      title,
      completed: false,
    };

    return new Promise((resolve) => resolve(todo));
  }

  deleteTodo(id: number): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  updateTodo(todo: TodoProps): Promise<TodoProps> {
    return new Promise((resolve) => resolve(todo));
  }
}
