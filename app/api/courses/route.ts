import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { Course } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

import { NextRequest } from "next/server";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      const courses = await Course.find();
      return ApiResponse(200, "Courses Get successfully 👌", courses);
      // TODO: Handle this to show public data
      // return ApiResponse(404, "User not found❗");
    }

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

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.admin) {
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
    const { courseId, ...updatedData } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Course.updateOne({ _id: courseId }, updatedData, {
      new: true,
    });

    return ApiResponse(200, "Course update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const courseId = await req.json();

    const result = await Course.findOneAndDelete({ _id: courseId });

    return ApiResponse(200, "Course Deleted successfully 🧹", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
