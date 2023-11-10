import { IId } from ".";

export interface IRequestSchema {
  to: string;
  userId: string;
  seniorId: string;
}

export interface IRequest extends IRequestSchema, IId {}
