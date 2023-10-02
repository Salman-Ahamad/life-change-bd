import { ICourse } from "@/interface";
import { Schema, model, models } from "mongoose";

const courseSchema = new Schema<ICourse>({
  courseName: {
    type: String,
    required: [true, "Please provide a valid course name"],
  },
  courseCode: { type: String, required: [true, "Please provide a valid code"] },
  courseImage: {
    type: String,
    required: [true, "Please provide a valid image"],
  },
  courseSlug: { type: String, required: [true, "Please provide a valid slug"] },
  courseDescription: {
    type: String,
    required: [true, "Please provide a valid"],
  },
  coursePrice: {
    type: Number,
    required: [true, "Please provide a valid price"],
  },
  courseDuration: {
    type: Number,
    required: [true, "Please provide a valid duration"],
  },
  courseStatus: {
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
});

export const Course = models.course || model("course", courseSchema);
