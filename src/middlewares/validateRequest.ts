import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { validateAuthReqBody } from './validateAuthReqBody';
import { AuthReqBodyError } from '../errors/authReqBodyError';

export const validateRequest = [
  validateAuthReqBody,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new AuthReqBodyError(errors.array());
    }
    next();
  },
];
