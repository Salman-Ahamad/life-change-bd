import { connectDb } from "@/config";
import { Course } from "@/models";
import { ApiResponse } from "@/utils";
import { NextRequest } from "next/server";

connectDb();

export const PATCH = async (req: NextRequest) => {
  try {
    const updatedData = await req.json();

    // Get Current User
    //   const user = await getCurrentUser();

    const result = await Course.updateMany({}, updatedData, {
      new: true,
    });

    return ApiResponse(200, "Course update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
