import { TodoRepository } from '../../use_cases/interfaces/TodoRepository';
import TodoProps from '../../domain/interfaces/Todo';
import Todo from '../../domain/entities/Todo';
import TodoNotFound from '../errors/TodoNotFound';

export default class InMemoryTodoRepository implements TodoRepository {
  private initialTodos: TodoProps[];

  constructor(initialTodos: TodoProps[] = []) {
    this.initialTodos = initialTodos;
  }

  getTodoList(): Promise<TodoProps[]> {
    return new Promise((resolve) => resolve(this.initialTodos));
  }

  getTodoById(id: number): Promise<TodoProps> {
    const { todo } = this.findTodoById(id);
    return new Promise((resolve) => resolve(todo));
  }

  addTodo(props: TodoRepository.AddTodoRequest): Promise<TodoProps> {
    const id = this.initialTodos.length + 1;
    const completed = false;
    const todo = new Todo({ ...props, id, completed }).toObject();
    this.initialTodos.push(todo);
    return new Promise((resolve) => resolve(todo));
  }

  deleteTodo(id: number): Promise<void> {
    const { todo } = this.findTodoById(id);
    this.initialTodos.splice(todo.id, 1);
    return new Promise((resolve) => resolve());
  }

  updateTodo(props: TodoProps): Promise<TodoProps> {
    const { index } = this.findTodoById(props.id);
    this.initialTodos[index] = props;
    return new Promise((resolve) => resolve(props));
  }

  private findIndexOfTodo = (id: number): number => {
    return this.initialTodos.findIndex((todo) => todo.id === id);
  };

  private findTodoById = (id: number) => {
    const index = this.findIndexOfTodo(id);
    if (index < 0) {
      throw new TodoNotFound();
    }

    return { todo: this.initialTodos[index], index } as const;
  };
}
