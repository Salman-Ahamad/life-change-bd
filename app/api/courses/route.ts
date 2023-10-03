import { connectDb } from "@/config";
import { Course } from "@/models";
import getCourses from "@/utils/actions/getCourses";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  connectDb();

  // Get courses from DB
  const courses = await getCourses();

  if (courses) {
    // Get Current User
    const user = await getCurrentUser();
    if (user) {
      return NextResponse.json(courses);
    } else {
      // This will return after removing certificate and enrolled user
      return NextResponse.json(courses);
    }
  }

  return NextResponse.json({
    message: "Not Found",
  });
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  // const user = await getCurrentUser();

  // // Add new rules for admin access
  // if (!user) {
  //   return NextResponse.json({ message: "Not authorized" });
  // }

  const courseData = await req.json();

  connectDb();
  const newCourse = await Course.create(courseData);

  if (newCourse) {
    return NextResponse.json(newCourse);
  }

  return NextResponse.json({
    message: "Something went wrong",
  });
};

export const PATCH = async (req: NextRequest, res: NextResponse) => {
  try {
    // const user = await getCurrentUser();

    // // Add new rules for admin access
    // if (!user) {
    //   return NextResponse.json({ message: "Not authorized" });
    // }

    connectDb();

    const reqData = await req.json();
    const courseCode = reqData.courseCode;
    const updatedCourseData = reqData.updatedCourseData;

    // Find the course in the database by courseCode and update it
    const updatedCourse = await Course.findOneAndUpdate(
      { courseCode },
      { $set: updatedCourseData },
      { new: true } // Set to true to return the updated document
    );

    if (updatedCourse) {
      return NextResponse.json(updatedCourse);
    } else {
      return NextResponse.json({
        message: "Course not found",
      });
    }
  } catch (error) {
    console.error("Error updating course:", error);
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  const reqData = await req.json();
  const courseCode = reqData.courseCode;

  // const user = await getCurrentUser();

  // // Add new rules for admin access
  // if (!user) {
  //   return NextResponse.json({ message: "Not authorized" });
  // }

  connectDb();
  const deletedCourse = await Course.findOneAndDelete({
    courseCode,
  });

  if (deletedCourse) {
    return NextResponse.json(deletedCourse);
  }

  return NextResponse.json({
    message: "Something went wrong",
  });
};