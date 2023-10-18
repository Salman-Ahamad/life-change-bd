import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { UserRole, inactiveLimit } from "@/lib";
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
      role: UserRole.active,
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

export const PATCH = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const id = params.slug;

    // Get Current User
    const logInUser = await getCurrentUser();

    if (!logInUser) {
      return ApiResponse(404, "User not found❗");
    }

    const user = await User.findOne({ userId: id });
    const refList = await AllRefer.find({ referredId: logInUser.id })
      .populate("referUser")
      .sort({ createdAt: -1 })
      .limit(inactiveLimit + 1);

    if (refList.length <= inactiveLimit) {
      await User.updateOne({ _id: logInUser.id }, { $inc: { balance: 1 } });
      await User.updateOne(
        { userId: id },
        { "settings.collectInactive": true }
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
          { "settings.collectInactive": true }
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
