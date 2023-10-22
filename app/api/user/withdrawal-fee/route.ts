import { connectDb } from "@/config";
import { AppConfig, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

connectDb();

export const PATCH = async () => {
  try {
    // withdrawalFee means the Pending Fee
    const updatedData = {
      $inc: { balance: -200 },
      "settings.withdrawalFee": true,
    };

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await User.findOneAndUpdate({ _id: user.id }, updatedData, {
      new: true,
    });
    // This will increase 200 in the totalPendingFee balance
    const pendingFeeUpdate = await AppConfig.updateOne(
      {},
      { $inc: { totalPendingFee: 200 } }
    );

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
