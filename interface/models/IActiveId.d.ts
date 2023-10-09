import { IUser } from ".";

export interface IActiveIdSchema {
  userId: Types.ObjectId | IUser;
}

export interface IActiveId extends IActiveIdSchema {}
