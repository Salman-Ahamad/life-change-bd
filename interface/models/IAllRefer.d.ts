import { Types } from "mongoose";

export interface IAllReferSchema {
  referredId: Types.ObjectId;
  referUser: Types.ObjectId | IUser;
}

export interface IAllRefer extends IAllReferSchema {
  id: string;
}
