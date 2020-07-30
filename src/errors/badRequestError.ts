import CustomError from './customError';

export default class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  statusCode = 400;
  mapErrors() {
    return [{ message: this.message }];
  }
}
