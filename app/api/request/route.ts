import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { Request, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const courseData = await req.json();
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.consultant) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Request.create(courseData);

    return ApiResponse(200, "Request Send successfully 👌", result);
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
      user.role !== UserRole.controller &&
      user.role !== UserRole.admin
    ) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Request.find({ to: user.userId });

    return ApiResponse(200, "Request Get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { userId, reqId, ...updatedData } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    if (user.role === UserRole.active || user.role === UserRole.inactive) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const result = await User.updateOne({ userId }, updatedData, {
      new: true,
    });

    if (result.modifiedCount !== 0) {
      await Request.deleteOne({ _id: reqId });
    }

    return ApiResponse(200, "Accept Request successfully ✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
