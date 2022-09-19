import TodoProps from '../domain/interfaces/Todo';
import { TodoRepository } from './interfaces/TodoRepository';

export default class TodoUseCases {
  private repository: TodoRepository;

  constructor(repository: TodoRepository) {
    this.repository = repository;
  }
  getTodoList = async () => {
    let todos = await this.repository.getTodoList();
    return todos;
  };

  getTodoById = async (id: number) => {
    const todo = await this.repository.getTodoById(id);
    return todo;
  };

  addTodo = async (props: TodoRepository.AddTodoRequest) => {
    let todo = await this.repository.addTodo(props);
    return todo;
  };

  deleteTodo = async (id: number) => {
    await this.repository.deleteTodo(id);
  };

  updateTodo = async (todo: TodoProps) => {
    let updatedTodo = await this.repository.updateTodo(todo);
    return updatedTodo;
  };
}
