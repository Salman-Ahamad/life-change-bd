import { IRequestSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const sliderSchema = new Schema<IRequestSchema>(
  {
    to: {
      type: String,
      required: true,
    },
    formId: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Slider =
  models?.slider || model<IRequestSchema>("slider", sliderSchema);
