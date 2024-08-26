import { NextFunction, Request, Response } from "express";

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
};

export default error;
