import { NextFunction, Request, Response } from "express";

const catchAsyncError = (
  fn: Function,
  error: (err: Error, req: Request, res: Response, next: NextFunction) => void
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsyncError;
