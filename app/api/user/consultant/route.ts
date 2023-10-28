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
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    const user = await User.find({
      role: UserRole.inactive,
      "settings.consultant": id,
    });

    return ApiResponse(200, "Consultant get successfully 👌", user);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
