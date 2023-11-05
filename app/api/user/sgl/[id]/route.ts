import { connectDb } from "@/config";
import { IIdParams } from "@/interface";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async (req: NextRequest, { params }: IIdParams) => {
  try {
    const id = params.id;
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await User.findOne({ userId: id }).select("-password");

    if (result.role !== UserRole.sgl) {
      return ApiResponse(404, "Group Leader Not Found⛔");
    }

    return ApiResponse(200, "Group Leader get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
