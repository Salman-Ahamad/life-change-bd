import { ISliderScheme } from "@/interface";
import { Schema, model, models } from "mongoose";

const sliderSchema = new Schema<ISliderScheme>(
  {
    imgUrl: {
      type: String,
      required: true,
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
  models?.slider || model<ISliderScheme>("slider", sliderSchema);
