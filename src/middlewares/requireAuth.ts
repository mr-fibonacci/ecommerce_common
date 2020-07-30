import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import NotAuthorizedError from '../errors/notAuthorizedError';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    jwt.verify(req.session?.jwt, process.env.JWT_KEY!);
  } catch (err) {
    throw new NotAuthorizedError();
  }
  next();
};
