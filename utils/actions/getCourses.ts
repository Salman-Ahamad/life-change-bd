import { connectDb } from "@/config";
import { Course } from "@/models";

// Update the definition of getCourses
export default async function getCourses() {
  try {
    connectDb();

    const courses = await Course.find();

    return courses;
  } catch (error) {
    console.log("Get course error: ", error);
  }
}
