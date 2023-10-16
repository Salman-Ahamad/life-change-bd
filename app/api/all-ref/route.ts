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
    const inactiveBonus = nextUrl.searchParams.get("collectInactive");

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
      inactiveBonus && JSON.parse(inactiveBonus.toLowerCase());
    const formattingDate = new Date(Number(date));

    // let dateFilter = {};
    let filterById = {};
    let option = {};
    // let dateFilter = {
    //   reference: user.id,
    //   createdAt: { $gte: formattingDate },
    // };
    // let filterById = {
    //   userId: id,
    //   // reference: user.id,
    //   role: UserRole.active,
    // };

    const inactiveBonusOption = {
      role: UserRole.active,
      "settings.collectInactive": collectInactiveValue,
    };
    const idFilter = { userId: id };
    const dateFilter = { createdAt: { $gte: formattingDate } };

    switch (user.role) {
      case UserRole.admin:
        const admin = { "settings.admin": user.id };
        option =
          (id && { ...idFilter, ...admin }) ||
          (date && { ...dateFilter, ...admin }) ||
          (inactiveBonus && {
            ...inactiveBonusOption,
            ...admin,
          }) ||
          {};
        break;
      case UserRole.controller:
        const controller = {
          "settings.controller": user.id,
          role: UserRole.active,
        };
        option =
          (id && { ...idFilter, ...controller }) ||
          (date && { ...dateFilter, ...controller }) ||
          (inactiveBonus && {
            ...inactiveBonusOption,
            ...controller,
          }) ||
          {};
        break;

      default:
        break;
    }

    const admin = {
      "settings.admin": user.id,
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

    const option2 =
      (user.role === UserRole.admin && admin) ||
      (user.role === UserRole.controller && controller) ||
      (user.role === UserRole.consultant && consultant) ||
      (user.role === UserRole.teacher && teacher) ||
      (user.role === UserRole.gl && gl) ||
      {};
    const filter =
      (inactiveBonus && inactiveBonus) ||
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
