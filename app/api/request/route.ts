import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { Request } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const courseData = await req.json();
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.consultant) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Request.create(courseData);

    return ApiResponse(200, "Course created successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
