import { connectDb } from "@/config";
import { ICourse } from "@/interface";
import { Course } from "@/models/courseModel";

const courseData: ICourse = {
  courseName: "",
  courseCode: "",
  courseImage: "",
  courseSlug: "",
  courseDescription: ``,
  coursePrice: 100,
  courseDuration: 30,
  courseStatus: "active",
  enrolled: [],
  certificates: [],
};

export default async function createCourse() {
  try {
    connectDb();

    // const course = await Course.create(courseData);

    // console.log("Course created successfully!", course);
  } catch (error) {
    console.log("Create course error: ", error);
  }
}
