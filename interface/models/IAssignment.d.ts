import { Types } from "mongoose";
import { IId } from ".";

export type IAssignmentStatus = "pending" | "accept" | "reject";

export interface IAssignmentSchema {
  courseId: Types.ObjectId;
  userId: string;
  postLink: string;
  status: IAssignmentStatus;
}

export interface IAssignment extends IAssignmentSchema, IId {
  courseId: string;
}
