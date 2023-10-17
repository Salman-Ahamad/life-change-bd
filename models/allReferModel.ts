import { IAllReferSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const AllReferSchema = new Schema<IAllReferSchema>(
  {
    referredId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    referUser: {
      type: Schema.Types.ObjectId,
      ref: "users",
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
  models?.AllRefer || model<IAllReferSchema>("AllRefer", AllReferSchema);
