import { connectDb } from "@/config";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { compare, genSalt, hash } from "bcryptjs";
import { NextRequest } from "next/server";

export const PATCH = async (req: NextRequest) => {
  try {
    connectDb();
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const { newPassword } = await req.json();

    //hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(newPassword, salt);

    const result = await User.updateOne(
      { _id: user.id },
      { password: hashedPassword },
      {
        new: true,
      }
    );

    return ApiResponse(200, "Password Change successfully", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
