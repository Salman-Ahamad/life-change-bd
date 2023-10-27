import { connectDb } from "@/config";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { Types } from "mongoose";
import { NextRequest } from "next/server";

connectDb();

export const GET = async () => {
  try {
    // const headersList = headers();
    // const id = headersList.get("id");
    // const role = headersList.get("role");

    // Get Current User
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    const user = await User.findOne({ _id: currentUser.id })
      .populate("courses")
      .populate({
        path: "settings.admin",
        select: "firstName lastName image id",
      })
      .populate({
        path: "settings.controller",
        select: "firstName lastName image id",
      })
      .populate({
        path: "settings.consultant",
        select: "firstName lastName image id",
      })
      .populate({
        path: "settings.teacher",
        select: "firstName lastName image id",
      })
      .populate({
        path: "settings.gl",
        select: "firstName lastName image id",
      })
      .select("-password");

    if (user.reference !== "-" && Types.ObjectId.isValid(user.reference)) {
      const result = await User.findOne({ _id: currentUser.id })
        .populate("courses")
        .populate({
          path: "reference",
          select: "userId",
        })
        .select("-password");

      return ApiResponse(200, "User get successfully 👌", result);
    }

    return ApiResponse(200, "User get successfully 👌", user);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const updatedData = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (!user.role) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await User.updateOne({ _id: user.id }, updatedData, {
      new: true,
    });

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
