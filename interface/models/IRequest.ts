import { IId } from ".";

export interface IRequestSchema {
  to: string;
  userId: string;
  formId: string;
}

export interface IRequest extends IRequestSchema, IId {}
