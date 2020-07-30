import CustomError from './customError';
import { ValidationError } from 'express-validator';

export default class authReqBodyError extends CustomError {
  constructor(public errors: ValidationError[]) {
    super('message(s) will be provided by express validator');
    Object.setPrototypeOf(this, authReqBodyError.prototype);
  }

  statusCode = 422;
  mapErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
}
