import { ICourse1 } from "@/interface";
import { Schema, model, models } from "mongoose";

const courseSchema = new Schema<ICourse1>(
  {
    title: {
      type: String,
      required: [true, "Please provide a valid course title"],
    },
    code: {
      type: String,
      required: [true, "Please provide a valid code"],
    },
    image: {
      type: String,
      required: [true, "Please provide a valid image"],
    },
    video: {
      type: String,
      required: [true, "Please provide a valid video"],
    },
    slug: {
      type: String,
      required: [true, "Please provide a valid slug"],
    },
    learn: {
      type: [String],
      required: [true, "Please provide a valid learn item"],
    },
    description: {
      type: String,
      required: [true, "Please provide a valid description"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a valid price"],
    },
    duration: {
      type: Number,
      required: [true, "Please provide a valid duration"],
    },
    status: {
      type: String,
      default: "active",
    },
    enrolled: {
      type: [String],
      default: [],
    },
    certificates: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Course = models.course || model("course", courseSchema);
