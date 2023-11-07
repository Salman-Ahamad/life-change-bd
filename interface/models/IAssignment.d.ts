import { Types } from "mongoose";
import { ICourse, IId, IUser } from ".";

export type IAssignmentStatus = "pending" | "accept" | "reject";

export interface IAssignmentSchema {
  courseId: Types.ObjectId;
  userId: Types.ObjectId;
  assignment: number;
  postLink: string;
  status: IAssignmentStatus;
}

export interface IAssignment extends IAssignmentSchema, IId {
  courseId: ICourse;
  userId: IUser;
}
