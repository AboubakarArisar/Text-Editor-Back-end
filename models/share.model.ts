import mongoose, { Document, Schema } from "mongoose";

interface ShareInterface extends Document {
  permission: string;
}

const ShareSchema: Schema = new Schema({
  documentId: { type: Schema.Types.ObjectId, ref: "Document" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  permission: { type: String, enum: ["edit", "view"], default: "view" },
});

const Share = mongoose.model<ShareInterface>("Share", ShareSchema);

export default Share;
