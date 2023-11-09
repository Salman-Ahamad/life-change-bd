import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async ({ nextUrl }: NextRequest) => {
  try {
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
    if (user.role !== UserRole.consultant) {
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
      const dateFilter = singleDateValue
        ? {
            $or: [
              {
                "settings.activates": {
                  $exists: true,
                  $gte: startOfDay,
                  $lte: endOfDay,
                },
              },
              {
                "settings.activates": { $exists: false },
                createdAt: { $gte: startOfDay, $lte: endOfDay },
              },
            ],
          }
        : {
            $or: [
              {
                "settings.activates": {
                  $exists: true,
                  $gte: startOfMonth,
                  $lte: endOfMonth,
                },
              },
              {
                "settings.activates": { $exists: false },
                createdAt: { $gte: startOfMonth, $lte: endOfMonth },
              },
            ],
          };

      const active = activeId ? { role: UserRole.active } : {};
      const student = isStudentValue
        ? { $or: [{ role: UserRole.inactive }, { role: UserRole.active }] }
        : {};

      return (
        (date && {
          $and: [dateFilter, active, student, option],
        }) || { reference: user.userId }
      );
    };

    const activeUser = (isActive: boolean) => {
      const find = {
        "settings.consultant": user.userId,
        role: isActive ? UserRole.active : UserRole.inactive,
      };
      option = optionFn(find);
    };

    activeUser(true);
    const activeRefCount: number = await User.countDocuments(option);
    activeUser(false);
    const inactiveRefCount: number = await User.countDocuments(option);

    return ApiResponse(200, "Reference Count get successfully 👌", {
      active: activeRefCount,
      inactive: inactiveRefCount,
    });
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
