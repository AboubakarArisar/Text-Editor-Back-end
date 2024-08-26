import mongoose, { Document, Schema } from "mongoose";

interface DocumentInterface extends Document {
  title: string;
  content: string;
  permissions: {
    edit: boolean;
    view: boolean;
  };
}

const DocumentSchema: Schema = new Schema({
  title: { type: String },
  content: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  sharedWith: [{ type: Schema.Types.ObjectId, ref: "User" }],
  permissions: {
    edit: { type: Boolean, default: false },
    view: { type: Boolean, default: true },
  },
});

const DocumentModel = mongoose.model<DocumentInterface>(
  "Document",
  DocumentSchema
);

export default DocumentModel;
