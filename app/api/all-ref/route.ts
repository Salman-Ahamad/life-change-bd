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
    const singleDate = nextUrl.searchParams.get("singleDate");
    const isActive = nextUrl.searchParams.get("isActive");
    const isStudent = nextUrl.searchParams.get("isStudent");
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
      user.role !== UserRole.trainer &&
      user.role !== UserRole.admin
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    let isActiveValue: boolean = isActive && JSON.parse(isActive.toLowerCase());
    let isStudentValue: boolean =
      isStudent && JSON.parse(isStudent.toLowerCase());
    let inactiveBonusValue: boolean =
      inactiveBonus && JSON.parse(inactiveBonus.toLowerCase());
    let singleDateValue: boolean =
      singleDate && JSON.parse(singleDate.toLowerCase());

    // single date filtering
    const startOfDay = new Date(Number(date));
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(Number(date));
    endOfDay.setHours(23, 59, 59, 999);

    // year and month filtering
    const formattingDate = new Date(Number(date));
    const month = formattingDate.getMonth();
    const year = formattingDate.getFullYear();
    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 1);

    let option = {};
    const inactiveBonusOption = {
      "settings.inactiveBonus": inactiveBonusValue,
    };
    const activeBonusOption = {
      "settings.activeBonus": isActiveValue,
    };
    const optionFn = (option: object, activeId?: boolean) => {
      const idFilter = { userId: id };
      const dateFilter = singleDateValue
        ? { createdAt: { $gte: startOfDay, $lt: endOfDay } }
        : { createdAt: { $gte: startOfMonth, $lt: endOfMonth } };

      const active = activeId ? { role: UserRole.active } : {};
      const student = isStudentValue
        ? { $or: [{ role: UserRole.inactive }, { role: UserRole.active }] }
        : {};

      return (
        (id && { ...idFilter, ...active, ...student, ...option }) ||
        (date && { ...dateFilter, ...active, ...student, ...option }) ||
        (inactiveBonus &&
          isActive && {
            ...inactiveBonusOption,
            ...activeBonusOption,
            ...student,
            ...option,
          }) ||
        (inactiveBonus && {
          ...inactiveBonusOption,
          ...student,
          ...option,
        }) || { reference: user.userId }
      );
    };

    switch (user.role) {
      case UserRole.admin:
        const admin = { "settings.admin": user.id };
        option = optionFn(admin, isActiveValue ? true : false);
        break;
      case UserRole.controller:
        const controller = {
          $or: [
            { role: UserRole.inactive },
            { "settings.controller": user.userId },
          ],
        };
        option = optionFn(controller);
        break;
      case UserRole.consultant:
        const consultant = {
          $or: [
            { role: UserRole.inactive },
            { "settings.consultant": user.userId },
          ],
        };
        option = optionFn(consultant);
        break;
      case UserRole.teacher:
        const teacher = {
          "settings.teacher": user.userId,
        };
        option = optionFn(teacher);
        break;
      case UserRole.sgl:
        const sgl = {
          $or: [
            { role: UserRole.active },
            { role: UserRole.inactive },
            { "settings.sgl": user.userId },
          ],
        };
        option = optionFn(sgl);
        break;
      case UserRole.gl:
        const gl = {
          $or: [
            { role: UserRole.active, "settings.gl": user.userId },
            { role: UserRole.inactive },
          ],
        };
        option = optionFn(gl, isActiveValue ? true : false);
        break;
      case UserRole.trainer:
        const trainer = {
          $or: [
            { role: UserRole.active, "settings.trainer": user.userId },
            { role: UserRole.inactive },
          ],
        };
        option = optionFn(trainer, isActiveValue ? true : false);
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

    return ApiResponse(200, "Reference List get successfully 👌", refList);
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
