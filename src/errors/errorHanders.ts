import { ValidationError } from 'class-validator';
import {
  ErrorRequestHandler,
  ParamsDictionary,
} from 'express-serve-static-core';
import HttpError from '../errors/HttpError';

export const validationErrorHandler: ErrorRequestHandler<
  ParamsDictionary,
  unknown,
  {}
> = (errors, req, res, next) => {
  if (
    !Array.isArray(errors) ||
    !errors.every(e => e instanceof ValidationError)
  ) {
    return next(errors);
  }

  return res.status(400).json({ errors });
};

const errorLogger: ErrorRequestHandler<ParamsDictionary, unknown, {}> = (
  error,
  req,
  res,
  next,
) => {
  console.error(error);
  return next(error);
};

export const errorHandler: ErrorRequestHandler<
  ParamsDictionary,
  ErrorDto,
  {}
> = ({ name, message, statusCode }: HttpError, req, res, next) => {
  return res.status(statusCode || 500).json({ name, message, statusCode });
};

interface ErrorDto {
  statusCode?: number;
  name: string;
  message: string;
}

export default [validationErrorHandler, errorLogger, errorHandler];
