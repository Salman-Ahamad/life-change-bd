import { IAllReferSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const AllReferSchema = new Schema<IAllReferSchema>(
  {
    referredUserId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    referUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AllRefer =
  models.AllRefer || model<IAllReferSchema>("AllRefer", AllReferSchema);
