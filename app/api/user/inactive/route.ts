import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { Types } from "mongoose";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    const user = await User.findOne({ role: UserRole.inactive }).select(
      "-password"
    );

    if (user.reference !== "-" && Types.ObjectId.isValid(user.reference)) {
      const result = await User.findOne({ _id: currentUser.id })
        .populate("courses")
        .populate({
          path: "reference",
          select: "userId",
        })
        .select("-password");

      return ApiResponse(200, "User get successfully 👌", result);
    }

    return ApiResponse(200, "User get successfully 👌", user);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
