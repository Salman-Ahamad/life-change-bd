import { Types } from "mongoose";
import { IId } from ".";

export type IAssignmentStatus = "pending" | "accept" | "reject";

export interface IAssignmentSchema {
  courseId: Types.ObjectId;
  userId: Types.ObjectId;
  postLink: string;
  status: IAssignmentStatus;
}

export interface IAssignment extends IAssignmentSchema, IId {
  courseId: string;
  userId: string;
}
