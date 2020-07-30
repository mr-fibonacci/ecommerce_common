import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import validateAuthReqBody from './validateAuthReqBody';
import authReqBodyError from '../errors/authReqBodyError';

export default [
  validateAuthReqBody,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new authReqBodyError(errors.array());
    }
    next();
  },
];
