import Todo from '../../domain/entities/Todo';
import TodoProps from '../../domain/interfaces/Todo';
import { TodoRepository } from '../../use_cases/interfaces/TodoRepository';

export default class FetchTodoRepository implements TodoRepository {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  async getTodoList(): Promise<TodoProps[]> {
    const response = await fetch(this.baseUrl);
    const data: TodoProps[] = await response.json();
    const todos = data.map((todo) => new Todo(todo).toObject());
    return todos;
  }

  getTodoById = async (id: number): Promise<TodoProps> => {
    const response = await fetch(this.baseUrl + id);
    const data: TodoProps = await response.json();
    const todo = new Todo(data).toObject();
    return todo;
  };

  addTodo = async (
    props: TodoRepository.AddTodoRequest
  ): Promise<TodoProps> => {
    const { userId, title } = props;
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify({ userId, title }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const data: TodoProps = await response.json();
    const todo = new Todo(data).toObject();
    return todo;
  };

  deleteTodo = async (id: number): Promise<void> => {
    const response = await fetch(this.baseUrl + id, {
      method: 'DELETE',
    });
    const data: void = await response.json();
    return data;
  };

  updateTodo = async (todo: Todo): Promise<TodoProps> => {
    const response = await fetch(this.baseUrl + todo.id, {
      method: 'PUT',
      body: JSON.stringify({ ...todo }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const data: TodoProps = await response.json();
    const updatedTodo = new Todo(data).toObject();
    return updatedTodo;
  };
}
