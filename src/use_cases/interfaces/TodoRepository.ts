import Todo from '../../domain/entities/Todo';
import TodoProps from '../../domain/interfaces/Todo';

export interface TodoRepository {
  getTodoList(): Promise<Todo[]>;
  getTodoById(id: number): Promise<Todo>;
  addTodo(props: TodoRepository.AddTodoRequest): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
  updateTodo(todo: Todo): Promise<Todo>;
}

export namespace TodoRepository {
  export type AddTodoRequest = Pick<TodoProps, 'title' | 'userId'>;
}
