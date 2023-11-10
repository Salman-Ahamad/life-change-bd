import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
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
      user.role !== UserRole.admin &&
      user.role !== UserRole.gl &&
      user.role !== UserRole.trainer &&
      user.role !== UserRole.consultant
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
        (id && { $and: [idFilter, active, student, option] }) ||
        (date && {
          $and: [dateFilter, active, student, option],
        }) ||
        (inactiveBonus &&
          isActive && {
            $and: [inactiveBonusOption, activeBonusOption, student, option],
          }) ||
        (inactiveBonus && {
          $and: [inactiveBonusOption, student, option],
        }) || { reference: user.userId }
      );
    };

    switch (user.role) {
      case UserRole.consultant:
        const consultant = {
          "settings.consultant": user.userId,
          role: UserRole.active,
        };
        option = optionFn(consultant);
        break;
      case UserRole.gl:
        const gl = {
          $or: [
            { role: UserRole.active, "settings.gl": user.userId },
            // { role: UserRole.inactive },
          ],
        };
        option = optionFn(gl, isActiveValue ? true : false);
        break;
      case UserRole.trainer:
        const trainer = {
          role: UserRole.active,
          "settings.trainer": user.userId,
        };
        option = optionFn(trainer, isActiveValue ? true : false);
        break;

      default:
        break;
    }

    const userFindOption =
      (user.role === UserRole.gl && {
        role: UserRole.active,
        "settings.gl": user.userId,
      }) ||
      (user.role === UserRole.trainer && {
        role: UserRole.active,
        "settings.trainer": user.userId,
      }) ||
      (user.role === UserRole.consultant && {
        "settings.consultant": user.userId,
        role: UserRole.active,
      }) ||
      {};

    const refList = await User.find(userFindOption)
      .sort({
        "settings.activates": -1,
        createdAt: -1,
      })
      .select({ password: 0 })
      .exec();

    const activeCountPromises = refList.map(async (user) => {
      const active = {
        reference: user.userId,
        role: UserRole.active,
      };
      option = optionFn(active);
      const result = await User.countDocuments(option);
      return result;
    });
    const inactiveCountPromises = refList.map(async (user) => {
      const inactive = {
        reference: user.userId,
        role: UserRole.inactive,
      };
      option = optionFn(inactive);
      const result = await User.countDocuments(option);
      return result;
    });

    const activeCounts = await Promise.all(activeCountPromises);
    const inactiveCounts = await Promise.all(inactiveCountPromises);

    const activeRefCount: number = activeCounts.reduce(
      (total, count) => total + count,
      0
    );
    const inactiveRefCount: number = inactiveCounts.reduce(
      (total, count) => total + count,
      0
    );

    return ApiResponse(200, "Reference Count get successfully 👌", {
      active: activeRefCount,
      inactive: inactiveRefCount,
    });
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
