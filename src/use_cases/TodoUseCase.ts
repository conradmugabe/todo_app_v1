import Todo from '../domain/entities/Todo';
import TodoRepository from './interfaces/TodoRepository';

export const getTodoList = async (repository: TodoRepository) => {
  let todos = await repository.getTodoList();
  return todos;
};

export const getTodoById = async (repository: TodoRepository, id: number) => {
  const todo = await repository.getTodoById(id);
  return todo;
};

export const addTodo = async (repository: TodoRepository, title: string) => {
  let todo = await repository.addTodo(title);
  return todo;
};

export const deleteTodo = async (repository: TodoRepository, id: number) => {
  await repository.deleteTodo(id);
};

export const updateTodo = async (repository: TodoRepository, todo: Todo) => {
  let updatedTodo = await repository.updateTodo(todo);
  return updatedTodo;
};
