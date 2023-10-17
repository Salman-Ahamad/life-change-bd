import { Types } from "mongoose";

export interface IPostSchema {
  author: Types.ObjectId;
  imageUrl?: string;
  text?: string;
  likes?: Types.ObjectId[];
}

export interface IPostWithAuthor extends IPostSchema {
  author: {
    firstName?: string;
    lastName?: string;
    image?: string;
    id?: string;
  };
  createdAt?: Types.Date;
  updatedAt?: Types.Date;
}
