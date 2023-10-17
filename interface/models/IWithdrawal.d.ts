import { IId } from ".";

export type IStatus = "pending" | "complete";
export type IMethod = "bKash" | "Nagad" | "Rocket";

export interface IWithdrawalSchema {
  userId: string;
  amount: number;
  method: IMethod;
  status: IStatus;
}

export interface IWithdrawal extends IWithdrawalSchema, IId {}
