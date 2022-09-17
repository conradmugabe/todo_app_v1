import Todo from '../../domain/entities/Todo';
import { TodoRepository } from '../../use_cases/interfaces/TodoRepository';

export default class InMemoryTodoRepository implements TodoRepository {
  getTodoList(): Promise<Todo[]> {
    const todoList: Todo[] = [];

    todoList.push(new Todo(1, 'todo 1'));
    todoList.push(new Todo(1, 'todo 2'));
    todoList.push(new Todo(2, 'todo 3'));
    todoList.push(new Todo(2, 'todo 4'));

    return new Promise((resolve) => resolve(todoList));
  }

  getTodoById(id: number): Promise<Todo> {
    const todo = new Todo(1, 'todo 1', true);
    return new Promise((resolve) => resolve(todo));
  }

  addTodo(props: TodoRepository.AddTodoRequest): Promise<Todo> {
    const { userId, title } = props;
    const todo = new Todo(userId, title);
    return new Promise((resolve) => resolve(todo));
  }

  deleteTodo(id: number): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  updateTodo(todo: Todo): Promise<Todo> {
    return new Promise((resolve) => resolve(todo));
  }
}
