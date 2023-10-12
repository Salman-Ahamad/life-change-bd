import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { AllRefer, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async ({ nextUrl }: NextRequest) => {
  try {
    // Get Current User
    // const user = await getCurrentUser();
    const collectInactive = nextUrl.searchParams.get("collectInactive");

    // if (!user) {
    //   return ApiResponse(404, "User not found❗");
    // }
    // if (
    //   user.role !== UserRole.active &&
    //   user.role !== UserRole.inactive &&
    //   user.role !== UserRole.admin
    // ) {
    //   return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    // }

    const refList = await AllRefer.find({
      referredId: "6523f52df32839b523369fa1",
    })
      .populate("referUser")
      .sort({ createdAt: -1 });

    const filterableResult = refList.filter(({ referUser }) => {
      if (collectInactive) {
        if (collectInactive === "true") {
          return referUser.settings.collectInactive;
        } else if (collectInactive === "false") {
          return !referUser.settings.collectInactive;
        }
      }
      return referUser;
    });

    return ApiResponse(200, "User get successfully 👌", filterableResult);
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
