import { Types } from "mongoose";
import { IId, IUser } from ".";

export interface IActiveIdSchema {
  userId: Types.ObjectId | IUser;
}

export interface IActiveId extends IActiveIdSchema, IId {}
