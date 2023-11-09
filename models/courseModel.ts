import { ICourseSchema } from "@/interface";
import { Schema, model, models } from "mongoose";

const courseSchema = new Schema<ICourseSchema>(
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
    assignments: {
      type: Number,
      default: 10,
    },
    price: {
      type: String,
      required: [true, "Please provide a valid price"],
    },
    duration: {
      type: String,
      required: [true, "Please provide a valid duration"],
    },
    meetingId: {
      type: String,
    },
    footerDes: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "enroll",
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

export const Course =
  models?.courses || model<ICourseSchema>("courses", courseSchema);
