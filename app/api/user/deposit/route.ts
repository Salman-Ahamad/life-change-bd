import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const PATCH = async (req: NextRequest) => {
  try {
    const { id, diopsideAmount } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    if (user.role !== UserRole.admin && user.role !== UserRole.controller) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const student = User.findOne({ _id: id }).lean();

    if (!student) {
      return ApiResponse(404, "Student id not found");
    }
    const incrementAmount = Number(diopsideAmount);

    const result = await User.updateOne(
      { _id: id },
      { $inc: { balance: incrementAmount } }
    );

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
