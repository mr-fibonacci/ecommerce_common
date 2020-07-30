import { CustomError } from './customError';
import { ValidationError } from 'express-validator';

export class AuthReqBodyError extends CustomError {
  constructor(public errors: ValidationError[]) {
    super('message(s) will be provided by express validator');
    Object.setPrototypeOf(this, AuthReqBodyError.prototype);
  }

  statusCode = 422;
  mapErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
}
