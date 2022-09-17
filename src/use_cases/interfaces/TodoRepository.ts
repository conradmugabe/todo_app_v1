import TodoProps from '../../domain/interfaces/Todo';

export interface TodoRepository {
  getTodoList(): Promise<TodoProps[]>;
  getTodoById(id: number): Promise<TodoProps>;
  addTodo(props: TodoRepository.AddTodoRequest): Promise<TodoProps>;
  deleteTodo(id: number): Promise<void>;
  updateTodo(todo: TodoProps): Promise<TodoProps>;
}

export namespace TodoRepository {
  export type AddTodoRequest = Pick<TodoProps, 'title' | 'userId'>;
}
