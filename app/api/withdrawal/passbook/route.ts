import { UserRole } from "@/lib";
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

    const result = await Withdrawal.find({ userId: user.id });

    return ApiResponse(200, "Config get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
