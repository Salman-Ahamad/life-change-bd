import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
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

    const result = await User.find({
      role: UserRole.active,
      "settings.gl": id,
    });

    return ApiResponse(200, "Group Leader get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
