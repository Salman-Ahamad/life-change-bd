import { connectDb } from "@/config";
import { AllRefer, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    // const user = await getCurrentUser();

    // if (!user) {
    //   return ApiResponse(404, "User not found❗");
    // }

    // if (
    //   currentUser.role !== UserRole.active &&
    //   currentUser.role !== UserRole.inactive &&
    //   currentUser.role !== UserRole.admin
    // ) {
    //   return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    // }

    const refList = await AllRefer.find({
      referredId: "6523f52df32839b523369fa1",
    })
      .populate("referUser")
      .sort({ createdAt: -1 });

    return ApiResponse(200, "User get successfully 👌", refList);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const referData = await req.json();
    // Get Current User
    const user = await getCurrentUser();
    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await AllRefer.create(referData);

    return ApiResponse(200, "Refer add successfully 👌", result);
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
