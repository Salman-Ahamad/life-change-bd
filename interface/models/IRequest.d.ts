import { IId } from ".";

export interface IRequestSchema {
  to: string;
  userId: string;
  consultantId: string;
}

export interface IRequest extends IRequestSchema, IId {}
