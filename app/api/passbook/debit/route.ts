import { Withdrawal } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await Withdrawal.find({ userId: user.userId }).sort({
      createdAt: -1,
    });

    return ApiResponse(200, "Withdrawal data get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
