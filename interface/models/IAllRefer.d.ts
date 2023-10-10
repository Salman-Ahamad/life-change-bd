import { Types } from "mongoose";

export interface IAllReferSchema {
  referredUserId: Types.ObjectId;
  referUser: Types.ObjectId | IUser;
}

export interface IAllRefer extends IAllReferSchema {
  id: string;
}
