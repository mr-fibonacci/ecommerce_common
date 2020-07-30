import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/customError';

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.mapErrors() });
  }
  res.status(400).send({ errors: [{ message: 'server did an oopsie...' }] });
};
