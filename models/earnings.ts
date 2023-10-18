import { IEarningSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const EarningSchema = new Schema<IEarningSchema>(
  {
    userId: {
      type: String,
      ref: "users",
      required: [true, "Please provide a user id"],
    },
    amount: {
      type: Number,
      required: [true, "Please provide a amount"],
    },
    comments: {
      type: String,
      required: [true, "Please provide a comment"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Earning =
  models?.Earning || model<IEarningSchema>("Earning", EarningSchema);
