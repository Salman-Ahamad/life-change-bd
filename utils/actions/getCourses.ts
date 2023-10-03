import { connectDb } from "@/config";
import { Course } from "@/models";

// Update the definition of getCourses
export const getCourses = async () => {
  try {
    connectDb();

    const courses = await Course.find();

    return courses;
  } catch (error) {
    console.log("Get course error: ", error);
  }
};
