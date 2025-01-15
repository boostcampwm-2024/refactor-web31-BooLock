import {
  BadRequestError,
  CustomError,
  ForbiddenError,
  UnauthorizedError,
} from '../utils/customError';
import { NextFunction, Request, Response } from 'express';

import { NotFound } from '@aws-sdk/client-s3';
import { errorStatus } from '../utils/constants';

// eslint-disable-next-line no-unused-vars
export const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const handler = errorHandlers[err.constructor.name] || errorHandlers['DefaultError'];
  console.error(err);

  handler(err as any, res);
};

const errorHandlers: { [key: string]: (err: any, res: Response) => void } = {
  DefaultError: (err: Error, res: Response) => {
    res
      .status(errorStatus.HTTP_500_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal Server Error', error: err.message });
  },
  CustomError: (err: CustomError, res: Response) => {
    res.status(err.statusCode).json({ message: err.message });
  },
  NotFoundError: (err: NotFound, res: Response) => {
    res.status(errorStatus.HTTP_404_NOT_FOUND).json({ message: err.message });
  },
  BadRequestError: (err: BadRequestError, res: Response) => {
    res.status(errorStatus.HTTP_400_BAD_REQUEST).json({ message: err.message });
  },
  UnauthorizedError: (err: UnauthorizedError, res: Response) => {
    res.status(errorStatus.HTTP_401_UNAUTHORIZED).json({ message: err.message });
  },
  ForbiddenError: (err: ForbiddenError, res: Response) => {
    res.status(errorStatus.HTTP_403_FORBIDDEN).json({ message: err.message });
  },
};
