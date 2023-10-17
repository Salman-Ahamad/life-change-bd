import { IAssignmentSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const AssignmentSchema = new Schema<IAssignmentSchema>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "courses",
      required: [true, "Please provide a valid courseId"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Please provide a valid userId"],
    },
    postLink: {
      type: String,
      required: [true, "Please provide a valid postLink"],
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Assignment =
  models?.Assignment ||
  model<IAssignmentSchema>("Assignment", AssignmentSchema);
