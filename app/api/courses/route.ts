import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { Course } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (user.role === UserRole.admin) {
      const courses = await Course.find();
      return ApiResponse(200, "Courses Get successfully 👌", courses);
    } else {
      // This will return after removing certificate and enrolled user
      const courses = await Course.find().select({
        enrolled: 0,
        certificates: 0,
      });
      return ApiResponse(200, "Courses Get successfully 👌", courses);
    }
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const courseData = await req.json();
    // Get Current User
    const user = await getCurrentUser();

    if (user.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Course.create(courseData);

    return ApiResponse(200, "Course created successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
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
