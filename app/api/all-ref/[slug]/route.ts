import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { UserRole, inactiveLimit } from "@/lib";
import { AllRefer, AppConfig, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async (
  { nextUrl }: NextRequest,
  { params }: ISlugParams
) => {
  try {
    const id = params.slug;
    const isActive = nextUrl.searchParams.get("isActive");
    const isStudent = nextUrl.searchParams.get("isStudent");

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
      user.role !== UserRole.sgl &&
      user.role !== UserRole.gl &&
      user.role !== UserRole.trainer &&
      user.role !== UserRole.admin
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    let isActiveValue: boolean = isActive && JSON.parse(isActive.toLowerCase());
    let isStudentValue: boolean =
      isStudent && JSON.parse(isStudent.toLowerCase());

    let option = {};

    const optionFn = (option: object, activeId?: boolean) => {
      const idFilter = { userId: id };

      const active = activeId ? { role: UserRole.active } : {};
      const student = isStudentValue
        ? { $or: [{ role: UserRole.inactive }, { role: UserRole.active }] }
        : {};

      return (
        (id && { ...idFilter, ...active, ...student, ...option }) || {
          reference: user.userId,
        }
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
            { role: UserRole.gl, "settings.sgl": user.userId },
            { role: UserRole.inactive },
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
      .sort({
        "settings.activates": -1,
        createdAt: -1,
      })
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
      await User.updateOne({ _id: logInUser.id }, { $inc: { balance: 1 } });
      await User.updateOne({ _id: id }, { "settings.inactiveBonus": true });

      // This will reduce the main company balance by 1
      await AppConfig.updateOne(
        {},
        { $inc: { mainBalance: -1 } },
        { new: true }
      );

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
