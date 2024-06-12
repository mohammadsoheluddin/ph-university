import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const ValidateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation
      const zodParsedData = await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default ValidateRequest;
