import { connectDb } from "@/config";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const PATCH = async (req: NextRequest) => {
  try {
    const { userId, refId } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (!user.role) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    await User.updateOne(
      { userId: refId },
      { $inc: { balance: 120 } },
      { new: true }
    );
    await User.updateOne(
      { _id: userId },
      { "settings.activeBonus": true },
      { new: true }
    );

    return ApiResponse(200, "Add Active Bonus successfully ✅", {});
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
