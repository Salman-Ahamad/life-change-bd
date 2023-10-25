import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { UserRole } from "@/lib";
import { Course } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async (req: Request, { params }: ISlugParams) => {
  try {
    const { slug } = params;
    // Get Current User
    const user = await getCurrentUser();
    if (!user) {
      // This will return course details after removing certificate and enrolled user

      // AMIR: Change this
      const courses = await Course.findOne({ slug }).select({
        enrolled: 0,
        certificates: 0,
        meetingId: 0,
        status: 0,
      });
      return ApiResponse(200, "Courses Get successfully 👌", courses);

      // return ApiResponse(404, "User not found❗");
    }

    if (user.role === UserRole.admin || user.role === UserRole.teacher) {
      const courses = await Course.findOne({ slug });
      return ApiResponse(200, "Courses Get successfully 👌", courses);
    } else {
      // This will return after removing certificate and enrolled user
      const courses = await Course.findOne({ slug }).select({
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
    return ApiResponse(404, "Course slut not found ❌");
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const courseId = params.slug;
    const updatedData = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (
      user.role !== UserRole.controller &&
      user.role !== UserRole.consultant &&
      user.role !== UserRole.teacher &&
      user.role !== UserRole.admin
    ) {
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

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  try {
    return ApiResponse(200, "Course slut not found ❌");
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
