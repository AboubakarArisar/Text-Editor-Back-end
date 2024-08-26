import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
interface IRequest extends Request {
  user: any;
}

const authenticate: RequestHandler = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const secretKey = process.env.SECRET_KEY || "yourkey";
    const decoded = verify(token, secretKey);
    (req as unknown as IRequest).user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};

export default authenticate;
