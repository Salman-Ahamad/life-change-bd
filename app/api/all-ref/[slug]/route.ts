import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { UserRole, inactiveLimit } from "@/lib";
import { AllRefer, AppConfig, User } from "@/models";
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

    return ApiResponse(200, "Reference List get successfully 👌", refList);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const id = params.slug;

    // Get Current User
    const logInUser = await getCurrentUser();

    if (!logInUser) {
      return ApiResponse(404, "User not found❗");
    }

    const refList = await AllRefer.find({ referredId: logInUser.id })
      .populate("referUser")
      .sort({ createdAt: -1 })
      .limit(inactiveLimit + 1);

    if (refList.length <= inactiveLimit) {
      // TODO: We may invoke both line into one command. Please try following code.
      // await User.updateOne(
      //   { _id: logInUser.id },
      //   {
      //     $inc: { balance: 1 },
      //     $set: { "settings.inactiveBonus": true }
      //   }
      // );

      await User.updateOne({ _id: logInUser.id }, { $inc: { balance: 1 } });
      await User.updateOne({ _id: id }, { "settings.inactiveBonus": true });

      // This will reduce the main company balance by 1
      await AppConfig.updateOne(
        {},
        { $inc: { mainBalance: -1 } },
        { new: true }
      );

      // const result = await AppConfig.updateOne(
      //   { for: UserRole.admin },
      // {
      //   $inc: {
      //     mainBalance: -margeBalance,
      //     totalWithdraw: -margeBalance,
      //   },
      // }
      //   {
      //     new: true,
      //   }
      // );

      return ApiResponse(200, "Collect Money successfully ✅", {});
    } else {
      const active = refList.find(
        ({ referUser }) => referUser.role === UserRole.active
      );

      if (active) {
        await User.updateOne({ _id: logInUser.id }, { $inc: { balance: 1 } });
        await User.updateOne(
          { userId: id },
          { "settings.inactiveBonus": true }
        );
        return ApiResponse(200, "Collect Money successfully ✅", {});
      } else {
        return ApiResponse(
          401,
          "Money collection limit is over❗ Any one of the last 30 IDs should be activated😊"
        );
      }
    }
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
