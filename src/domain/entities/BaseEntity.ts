import UID from '../interfaces/UID';

export default class BaseEntity implements UID {
  id: number;

  constructor() {
    this.id = this.generateId();
  }

  generateId = (): number => {
    return Math.floor(Math.random() * 1000000);
  };
}
