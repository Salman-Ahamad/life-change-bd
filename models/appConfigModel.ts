import { IAppConfigSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const AppConfigSchema = new Schema<IAppConfigSchema>(
  {
    for: {
      type: String,
      default: "admin",
      unique: true,
    },
    baseFee: {
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
      },
      default: {
        whatsApp: "",
        meeting: "",
        help: "",
      },
    },
    whatsAppMessage: {
      type: String,
      default: "",
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
