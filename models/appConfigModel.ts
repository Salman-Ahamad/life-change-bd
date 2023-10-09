import { IAppConfigSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const AppConfigSchema = new Schema<IAppConfigSchema>(
  {
    baseFee: {
      type: Number,
      default: 0,
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
  models.AppConfig || model<IAppConfigSchema>("AppConfig", AppConfigSchema);
