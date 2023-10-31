import { connectDb } from "@/config";
import { IIdParams } from "@/interface";
import { UserRole } from "@/lib";
import { Request } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const DELETE = async (req: NextRequest, { params }: IIdParams) => {
  try {
    const id = params.id;

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    if (user.role === UserRole.active || user.role === UserRole.inactive) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const result = await Request.deleteOne({ _id: id });

    return ApiResponse(200, "Accept Request successfully ✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
