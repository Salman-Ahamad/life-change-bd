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
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    const user = await User.findOne({ userId: id }).select("-password");

    if (user.role !== UserRole.consultant) {
      return ApiResponse(404, "Consultant Not Found⛔");
    }

    return ApiResponse(200, "Consultant get successfully 👌", user);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
