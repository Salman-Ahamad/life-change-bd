import { connectDb } from "@/config";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import { NextRequest } from "next/server";

connectDb();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return ApiResponse(400, "Invalid token");
    }

    user.isVerfied = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return ApiResponse(200, "User verified successfully");
  } catch (error: any) {
    return ApiResponse(500, error.message);
  }
}
