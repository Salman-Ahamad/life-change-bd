import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    const user = await User.find({ role: UserRole.inactive }).select(
      "-password"
    );

    return ApiResponse(200, "User get successfully 👌", user);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
