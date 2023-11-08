import { connectDb } from "@/config";
import { Assignment } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async ({ nextUrl }: NextRequest) => {
  try {
    const id = nextUrl.searchParams.get("id");

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await Assignment.find({
      courseId: id,
      userId: user.id,
    })
      .sort({
        createdAt: -1,
      })
      .limit(1)
      .exec();

    return ApiResponse(
      200,
      "Last Assignment Get successfully 👌",
      result[0].createdAt
    );
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
