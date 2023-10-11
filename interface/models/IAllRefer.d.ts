import { Types } from "mongoose";
import { IId } from ".";

export interface IAllReferSchema {
  referredId: Types.ObjectId;
  referUser: Types.ObjectId | IUser;
}

export interface IAllRefer extends IAllReferSchema, IId {
  referUser: IUser;
}
