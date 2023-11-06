import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await User.find({ role: UserRole.gl });

    return ApiResponse(200, "Active User get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
