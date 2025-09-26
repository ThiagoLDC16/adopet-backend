import { NextFunction, Request, Response } from 'express';
import { logger } from '../config/logger';
import { AppError } from '../errors/app-error';
import * as z from 'zod';

export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  const isDev = process.env.NODE_ENV !== 'production';

  if (error instanceof z.ZodError) {
    return res.status(400).json({
      code: 'VALIDATION_ERROR',
      errors: error.issues.reduce(
        (obj, { path, message }) => ({
          ...obj,
          [path.join('.')]: message,
        }),
        {}
      ),
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      code: error.messageCode,
      data: error.data,
    });
  }

  logger.error(
    {
      error,
      url: req.originalUrl,
      method: req.method,
      body: req.body,
    },
    'Erro inesperado'
  );

  res.status(500).json({
    code: 'INTERNAL_ERROR',
    ...(isDev && { stack: error.stack }),
  });
}
