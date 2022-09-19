import CustomError from './CustomError';

export default class NotFoundError extends CustomError {
  item: string;
  reason: string;
  statusCode = 404;

  constructor(item: string) {
    super('Not Found');
    this.item = item;
    this.reason = `${this.item} Not Found`;
  }

  serializeError(): { message: string; field?: string | undefined } {
    return { message: this.reason };
  }
}
