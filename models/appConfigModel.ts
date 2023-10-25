import { IAppConfigSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const AppConfigSchema = new Schema<IAppConfigSchema>(
  {
    for: {
      type: String,
      default: "admin",
      unique: true,
    },
    mainBalance: {
      type: Number,
      default: 500000,
    },
    totalPendingFee: {
      type: Number,
      default: 0,
    },
    totalWithdraw: {
      type: Number,
      default: 0,
    },
    baseFee: {
      type: Number,
      default: 0,
    },
    withdrawalFee: {
      type: Number,
      default: 0,
    },
    sliderImage: {
      type: [String],
      default: [],
    },
    support: {
      type: {
        whatsApp: String,
        meeting: String,
        help: String,
        welcomeClass: String,
      },
      default: {
        whatsApp: "",
        meeting: "",
        help: "",
        welcomeClass: "",
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AppConfig =
  models?.AppConfig || model<IAppConfigSchema>("AppConfig", AppConfigSchema);
