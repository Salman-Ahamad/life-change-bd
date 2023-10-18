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
    const inactiveBonus = nextUrl.searchParams.get("inactiveBonus");

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

    let inactiveBonusValue: boolean =
      inactiveBonus && JSON.parse(inactiveBonus.toLowerCase());
    const formattingDate = new Date(Number(date));

    let option = {};
    const inactiveBonusOption = {
      "settings.inactiveBonus": inactiveBonusValue,
    };
    const optionFn = (option: object, activeId?: boolean) => {
      const idFilter = { userId: id };
      const dateFilter = { createdAt: { $gte: formattingDate } };
      const active = activeId ? { role: UserRole.active } : {};
      return (
        (id && { ...idFilter, ...active, ...option }) ||
        (date && { ...dateFilter, ...active, ...option }) ||
        (inactiveBonus && {
          ...inactiveBonusOption,
          ...option,
        }) ||
        {}
      );
    };

    switch (user.role) {
      case UserRole.admin:
        const admin = { "settings.admin": user.id };
        option = optionFn(admin, false);
        break;
      case UserRole.controller:
        const controller = {
          "settings.controller": user.id,
        };
        option = optionFn(controller);
        break;
      case UserRole.consultant:
        const consultant = {
          "settings.consultant": user.id,
        };
        option = optionFn(consultant);
        break;
      case UserRole.teacher:
        const teacher = {
          "settings.teacher": user.id,
        };
        option = optionFn(teacher);
        break;
      case UserRole.gl:
        const gl = {
          "settings.teacher": user.id,
        };
        option = optionFn(gl);
        break;
      case UserRole.active:
        const active = {
          reference: user.userId,
        };
        option = optionFn(active);
        break;

      default:
        break;
    }

    const refList = await User.find(option)
      .sort({ createdAt: -1 })
      .select({ password: 0 })
      .exec();

    return ApiResponse(200, "Referance List get successfully 👌", refList);
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
