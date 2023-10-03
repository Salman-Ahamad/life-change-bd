import { ICourse } from "@/interface";
import { Schema, model, models } from "mongoose";

const courseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: [true, "Please provide a valid course title"],
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
      type: String,
      required: [true, "Please provide a valid price"],
    },
    duration: {
      type: String,
      required: [true, "Please provide a valid duration"],
    },
    footerDes: {
      type: String,
      default: "",
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

export const Course = models.courses || model<ICourse>("courses", courseSchema);
