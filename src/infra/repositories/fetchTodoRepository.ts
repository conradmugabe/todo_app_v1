import Todo from '../../domain/entities/Todo';
import TodoProps from '../../domain/interfaces/Todo';
import { TodoRepository } from '../../use_cases/interfaces/TodoRepository';

export default class FetchTodoRepository implements TodoRepository {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  async getTodoList(): Promise<Todo[]> {
    const response = await fetch(this.baseUrl);
    const data: TodoProps[] = await response.json();
    const todos = data.map(
      (todo) => new Todo(todo.userId, todo.title, todo.completed)
    );
    return todos;
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
