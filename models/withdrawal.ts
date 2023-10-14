import { IWithdrawalSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const WithdrawalSchema = new Schema<IWithdrawalSchema>(
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
    method: {
      type: String,
      required: [true, "Please provide a method"],
    },
    status: {
      type: String,
      default: "pending",
      required: [true, "Please provide a status"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Withdrawal =
  models.Withdrawal || model<IWithdrawalSchema>("Withdrawal", WithdrawalSchema);
