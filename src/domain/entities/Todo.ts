import BaseEntity from './BaseEntity';

export default class Todo extends BaseEntity {
  userId: number;
  title: string;
  completed: boolean;

  constructor(userId: number, title: string, completed = false) {
    super();
    this.userId = userId;
    this.title = title;
    this.completed = completed;
  }
}
