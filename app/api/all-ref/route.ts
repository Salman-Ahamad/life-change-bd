import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { AllRefer, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async ({ nextUrl }: NextRequest) => {
  try {
    const id = nextUrl.searchParams.get("id");
    const date = nextUrl.searchParams.get("date");
    const collectInactive = nextUrl.searchParams.get("collectInactive");

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }
    if (
      user.role !== UserRole.active &&
      user.role !== UserRole.controller &&
      user.role !== UserRole.consultant &&
      user.role !== UserRole.teacher &&
      user.role !== UserRole.gl &&
      user.role !== UserRole.admin
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    let collectInactiveValue: boolean =
      collectInactive && JSON.parse(collectInactive.toLowerCase());

    const collectInactiveOption = {
      role: UserRole.active,
      "settings.collectInactive": collectInactiveValue,
    };
    const formattingDate = new Date(Number(date));
    const dateFilter = {
      reference: user.id,
      createdAt: { $gte: formattingDate },
    };
    const filterById = {
      userId: id,
      reference: user.id,
      role: UserRole.active,
    };
    const controller = {
      "settings.controller": user.id,
      role: UserRole.active,
    };
    const consultant = {
      "settings.consultant": user.id,
      role: UserRole.active,
    };
    const teacher = {
      "settings.teacher": user.id,
      role: UserRole.active,
    };
    const gl = {
      "settings.gl": user.id,
      role: UserRole.active,
    };

    const option =
      (user.role === UserRole.admin && {}) ||
      (user.role === UserRole.controller && controller) ||
      (user.role === UserRole.consultant && consultant) ||
      (user.role === UserRole.teacher && teacher) ||
      (user.role === UserRole.gl && gl) ||
      (collectInactive && collectInactiveOption) ||
      (date && dateFilter) ||
      (id && filterById) ||
      {};

    const refList = await User.find(option)
      .sort({ createdAt: -1 })
      .select({ password: 0 })
      .exec();

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
