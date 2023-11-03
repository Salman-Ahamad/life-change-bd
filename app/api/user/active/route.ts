import { UserRole } from "@/lib";
import { AppConfig, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await User.find({ role: UserRole.active });

    return ApiResponse(200, "Active User get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

// Use this method to activate inactive user
export const PATCH = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.inactive) {
      return ApiResponse(404, "User already activated❗");
    }

    const appConfig = await AppConfig.findOne({}).select({ baseFee: 1 });
    const baseFee = await appConfig.baseFee;

    // Referer get 120
    await User.updateOne(
      { userId: user.reference },
      { $inc: { balance: 120 } },
      { new: true }
    );

    // Referer base fee status change and change balance and user role = active
    await User.updateOne(
      { _id: user.id },
      {
        "settings.activates": new Date(),
        "settings.activeBonus": true,
        role: UserRole.active,
        $inc: { balance: -baseFee },
      },
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
