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

    if (
      user.role !== UserRole.active &&
      user.role !== UserRole.inactive &&
      user.role !== UserRole.controller &&
      user.role !== UserRole.consultant &&
      user.role !== UserRole.teacher &&
      user.role !== UserRole.gl &&
      user.role !== UserRole.admin
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    // const user = await User.findOne({ _id: currentUser.id })
    //   .populate("courses")
    //   .select({ settings: 1 });

    const trainer = await User.findOne({ userId: user.settings.trainer })
      .select({ phone: 1 })
      .exec();

    const gl = await User.findOne({ userId: user.settings.gl })
      .select({ phone: 1 })
      .exec();

    return ApiResponse(200, "Sub-admin get successfully 👌", {
      trainer,
      gl,
    });
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
