import NotFoundError from './NotFoundError';

export default class TodoNotFound extends NotFoundError {
  constructor() {
    super('Todo');
  }
}
