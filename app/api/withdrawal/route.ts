import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { Withdrawal } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const { amount, method } = await req.json();
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }
    const option = {
      amount,
      method,
      userId: user.id,
    };
    const result = await Withdrawal.create(option);

    return ApiResponse(200, "withdraw Request successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (
      user.role !== UserRole.admin &&
      user.role !== UserRole.controller
    ) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Withdrawal.findOne({ for: UserRole.admin });

    return ApiResponse(200, "Config get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { id, ...updatedData } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (
      user.role !== UserRole.admin &&
      user.role !== UserRole.controller
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const result = await Withdrawal.updateOne({ _id: id }, updatedData, {
      new: true,
    });

    return ApiResponse(200, "Config update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
