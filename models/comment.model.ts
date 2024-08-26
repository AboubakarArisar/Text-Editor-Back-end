import mongoose, { Document, Schema } from "mongoose";
import DocumentModel from "./document.model";

interface CommentInterface extends Document {
  text: string;
  createdAt: Date;
}

const CommentSchema: Schema = new Schema({
  documentId: { type: Schema.Types.ObjectId, ref: "Document" },
  text: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model<CommentInterface>("Comment", CommentSchema);

export default Comment;
