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
      user.role !== UserRole.sgl &&
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
      case UserRole.admin:
        const admin = { "settings.admin": user.id };
        option = optionFn(admin, isActiveValue ? true : false);
        break;
      case UserRole.consultant:
        const consultant = {
          $or: [
            // { role: UserRole.inactive },
            { "settings.consultant": user.userId, role: UserRole.inactive },
          ],
        };
        option = optionFn(consultant);
        break;
      case UserRole.sgl:
        const sgl = {
          $or: [
            { role: UserRole.gl, "settings.sgl": user.userId },
            // { role: UserRole.inactive },
          ],
        };
        option = optionFn(sgl);
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

    const refList = await User.find(option)
      .sort({
        "settings.activates": -1,
        createdAt: -1,
      })
      .select({ password: 0 })
      .exec();

    let refCount = 0;
    await Promise.all(
      refList.map(async (gl) => {
        const userList = await User.find({
          "settings.gl": gl.userId,
          role: UserRole.active,
        }).exec();

        const countPromises = userList.map(async (user) => {
          const result = await User.countDocuments({
            reference: user.userId,
            role: UserRole.active,
          });
          return result;
        });

        const userCounts = await Promise.all(countPromises);
        refCount += userCounts.reduce((acc, count) => acc + count, 0);
      })
    );

    console.log("🚀 ~ file: route.ts:169 ~ GET ~ refCount:", { refCount });

    return ApiResponse(200, "Reference Count get successfully 👌", refCount);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
