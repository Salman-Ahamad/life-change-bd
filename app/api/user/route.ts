import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

connectDb();

export const GET = async () => {
  try {
    const headersList = headers();
    const id = headersList.get("id");
    const role = headersList.get("role");

    if (role !== (UserRole.active || UserRole.admin)) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const user = await User.findOne({ _id: id }).select("-password");

    return ApiResponse(200, "User get successfully 👌", user);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { id, role, ...updatedData } = await req.json();

    if (role !== (UserRole.active || UserRole.admin)) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await User.updateOne({ _id: id }, updatedData, {
      new: true,
    });

    return ApiResponse(200, "User update successfully", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
