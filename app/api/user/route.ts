import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async () => {
  try {
    // const headersList = headers();
    // const id = headersList.get("id");
    // const role = headersList.get("role");

    // Get Current User
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    if (
      currentUser.role !== UserRole.active &&
      currentUser.role !== UserRole.inactive &&
      currentUser.role !== UserRole.controller &&
      currentUser.role !== UserRole.consultant &&
      currentUser.role !== UserRole.teacher &&
      currentUser.role !== UserRole.gl &&
      currentUser.role !== UserRole.admin
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const user = await User.findOne({ _id: currentUser.id })
      .populate("courses")
      .select("-password");

    return ApiResponse(200, "User get successfully 👌", user);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const updatedData = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (!user.role) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await User.updateOne({ _id: user.id }, updatedData, {
      new: true,
    });

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
