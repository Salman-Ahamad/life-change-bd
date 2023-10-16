import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";

connectDb();

export const GET = async () => {
  try {
    const result = await User.find({
      userId: "230020",
      reference: "652aa94a209ab943ff720421",
      role: UserRole.active,
    });
    return ApiResponse(200, "User get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
