import { IId } from ".";

export type IStatus = "pending" | "complete";
export type IMethod = "bKash" | "Nagad" | "Rocket" | "Google Pay" | "Paytm";

export interface IWithdrawalSchema {
  userId: string;
  amount: number;
  number: string;
  method: IMethod;
  status: IStatus;
}

export interface IWithdrawal extends IWithdrawalSchema, IId {}
