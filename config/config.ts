import * as dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT || 3000;
export const SECRET_KEY = process.env.SECRET_KEY || " ";
export const SALT_ROUNDS = 10;
export const JWT_EXPIRATION = "1d";
