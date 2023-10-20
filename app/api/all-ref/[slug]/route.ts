import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { UserRole, inactiveLimit } from "@/lib";
import { AllRefer, AppConfig, User } from "@/models";
import { ApiResponse, convertBoolean } from "@/utils";
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
    //
    let inactiveBonusValue = inactiveBonus && convertBoolean(inactiveBonus);

    const inactiveBonusOption = {
      role: UserRole.active,
      "settings.inactiveBonus": inactiveBonusValue,
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
      (inactiveBonus && inactiveBonusOption) ||
      (date && dateFilter) ||
      (id && filterById) ||
      {};

    const refList = await User.find(option)
      .sort({ createdAt: -1 })
      .select({ password: 0 })
      .exec();

    return ApiResponse(200, "Regerance list get successfully 👌", refList);
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
      await User.updateOne({ userId: id }, { "settings.inactiveBonus": true });
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
