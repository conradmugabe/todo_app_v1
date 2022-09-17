import TodoProps from '../interfaces/Todo';

export default class Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;

  constructor(props: TodoProps) {
    this.id = props.id;
    this.userId = props.userId;
    this.title = props.title;
    this.completed = props.completed;
  }
}
