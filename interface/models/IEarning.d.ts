import { IId } from ".";

export interface IEarningSchema {
  userId: string;
  amount: number;
  comments: string;
}

export interface IEarning extends IEarningSchema, IId {}
