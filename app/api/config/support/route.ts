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

    if (
      currentUser.role !== UserRole.active &&
      currentUser.role !== UserRole.inactive &&
      currentUser.role !== UserRole.controller &&
      currentUser.role !== UserRole.consultant &&
      currentUser.role !== UserRole.teacher &&
      currentUser.role !== UserRole.gl &&
      currentUser.role !== UserRole.admin
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const user = await User.findOne({ _id: currentUser.id })
      .populate("courses")
      .select({ settings: 1 });

    const consultant = User.findOne({ _id: user.settings.consultant })
      .select({ phone: 1 })
      .exec();
    const gl = User.findOne({ _id: user.settings.gl })
      .select({ phone: 1 })
      .exec();

    return ApiResponse(200, "Sub-admin get successfully 👌", {
      consultant,
      gl,
    });
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
