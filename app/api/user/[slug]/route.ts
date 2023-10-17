import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const id = params.slug;

    // Get Current User
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    const user = await User.findOne({ _id: id })
      .populate("courses")
      .populate({
        path: "settings.controller",
        select: "firstName lastName image id", // Specify the fields you want to include
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

    // Set return based on user role

    switch (currentUser.role) {
      case "admin":
        return ApiResponse(200, "User get successfully 👌", user);

      case "controller":
        if (currentUser.id === user?.settings?.controller?.id) {
          return ApiResponse(200, "User get successfully 👌", user);
        }
        break;

      case "consultant":
        if (currentUser.id === user?.settings?.consultant?.id) {
          return ApiResponse(200, "User get successfully 👌", user);
        }
        break;

      case "gl":
        if (currentUser.id === user?.settings?.gl?.id) {
          return ApiResponse(200, "User get successfully 👌", user);
        }
        break;

      case "teacher":
        if (currentUser.id === user?.settings?.teacher?.id) {
          return ApiResponse(200, "User get successfully 👌", user);
        }
        break;

      case "active":
        if (currentUser.id === user?.id) {
          return ApiResponse(200, "User get successfully 👌", user);
        }
        break;

      default:
        return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const id = params.slug;
    const updatedData = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    if (user.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const result = await User.updateOne({ _id: id }, updatedData, {
      new: true,
    });

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const DELETE = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const id = params.slug;

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    if (user.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const result = await User.deleteOne({ _id: id });

    if (!result.deletedCount) {
      return ApiResponse(500, "Something went wrong 🚨🚩");
    } else {
      return ApiResponse(200, "User deleted successfully 🚨✔️");
    }
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
