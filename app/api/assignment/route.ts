import { connectDb } from "@/config";
import { Assignment } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const assignmentData = await req.json();
    // Get Current User
    const user = await getCurrentUser();
    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const max10 = await Assignment.find({
      userId: user.id,
      courseId: assignmentData.courseId,
    });

    if (max10.length >= 10) {
      return ApiResponse(400, "Max task limit 10❗");
    }

    assignmentData.userId = user.id;
    const result = await Assignment.create(assignmentData);

    return ApiResponse(200, "Assignment created successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
