import { CustomError } from './customError';

export class ResourceNotFoundError extends CustomError {
  constructor(ResourceType: string) {
    super(`${ResourceType} not found`);
    Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
  }
  statusCode = 404;
  mapErrors() {
    return [{ message: this.message }];
  }
}
