import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await User.find({ "settings.sendWish": false });

    return ApiResponse(200, "Config get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async ({ nextUrl }: NextRequest) => {
  try {
    const id = nextUrl.searchParams.get("id");

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (!user.role) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await User.updateOne(
      { _id: id },
      { "settings.sendWish": true },
      {
        new: true,
      }
    );

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
