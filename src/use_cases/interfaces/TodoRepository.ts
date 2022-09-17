import Todo from '../../domain/entities/Todo';

export default interface TodoRepository {
  getTodoList(): Promise<Todo[]>;
  getTodoById(id: number): Promise<Todo>;
  addTodo(title: string): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
  updateTodo(todo: Todo): Promise<Todo>;
}
