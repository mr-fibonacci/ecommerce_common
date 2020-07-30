import CustomError from './customError';

export default class NotAuthorizedError extends CustomError {
  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  statusCode = 401;
  mapErrors() {
    return [{ message: this.message }];
  }
}
