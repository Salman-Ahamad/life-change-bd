import { connectDb } from "@/config";
import { AppConfig, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const PATCH = async (req: NextRequest) => {
  try {
    const { userId, refId } = await req.json();
    console.log("🚀 ~ file: route.ts:13 ~ PATCH ~ userId:", { userId, refId });

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (!user.role) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const appConfig = await AppConfig.findOne({}).select({ baseFee: 1 });
    const baseFee = await appConfig.baseFee;

    // Referer get 120
    await User.updateOne(
      { userId: refId },
      { $inc: { balance: 120 } },
      { new: true }
    );

    // Referer base fee status change
    await User.updateOne(
      { _id: userId },
      { "settings.activeBonus": true, $inc: { balance: baseFee } },
      { new: true }
    );
    // This will reduce the main company balance by 120
    const balanceIncrease = baseFee - 120;
    await AppConfig.updateOne(
      {},
      { $inc: { mainBalance: balanceIncrease } },
      { new: true }
    );

    return ApiResponse(200, "Add Active Bonus successfully ✅", {});
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
