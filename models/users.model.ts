import mongoose, { Document, Schema } from "mongoose";

interface IUsers extends Document {
  email: string;
  password: string;
  name: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
});

const User = mongoose.model<IUsers>("User", UserSchema);
export default User;
