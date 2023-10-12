import { IPostSchema } from "@/interface/models/IPost";
import { Schema, model, models } from "mongoose";

const postSchema = new Schema<IPostSchema>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: "users",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Post = models.posts || model<IPostSchema>("posts", postSchema);
