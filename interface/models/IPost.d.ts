import { Types } from "mongoose";

export interface IPostSchema {
  author: Types.ObjectId;
  imageUrl?: string;
  text?: string;
  likes?: Types.ObjectId[];
}
