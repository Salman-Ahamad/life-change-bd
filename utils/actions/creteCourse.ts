import { connectDb } from "@/config";

export default async function createCourse() {
  try {
    connectDb();

    // const course = await Course.create(courseData);

    // console.log("Course created successfully!", course);
  } catch (error) {
    console.log("Create course error: ", error);
  }
}
