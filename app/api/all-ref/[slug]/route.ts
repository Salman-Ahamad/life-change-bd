import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { UserRole, inactiveLimit } from "@/lib";
import { AllRefer, User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const id = params.slug;

    // Get Current User
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return ApiResponse(404, "User not found❗");
    }

    if (currentUser.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const user = await User.findOne({ _id: id })
      .populate("courses")
      .select("-password");

    return ApiResponse(200, "User get successfully 👌", user);
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

    const user = await User.findOne({ _id: logInUser.id });
    const refList = await AllRefer.find({ referredId: logInUser.id })
      .populate("referUser")
      .sort({ createdAt: -1 })
      .limit(inactiveLimit + 1);

    const updateAndSave = async () => {
      const test1 = await User.updateOne(
        { _id: logInUser.id },
        { balance: user.balance++ }
      );

      const test2 = await User.updateOne(
        { _id: id },
        { "settings.collectInactive": true }
      );

      return ApiResponse(200, "Collect Money successfully ✅", {
        test1,
        test2,
      });
    };

    if (refList.length <= inactiveLimit) {
      await User.updateOne({ _id: logInUser.id }, { balance: user.balance++ });
      await User.updateOne({ _id: id }, { "settings.collectInactive": true });
      return ApiResponse(200, "Collect Money successfully ✅", {});
    } else {
      const active = refList.find(
        ({ referUser }) => referUser.role === UserRole.active
      );

      if (active) {
        await User.updateOne(
          { _id: logInUser.id },
          { balance: user.balance++ }
        );
        await User.updateOne({ _id: id }, { "settings.collectInactive": true });
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

// const user = await User.findOne({ _id: logInUser.id });
// const refUser = await User.findOne({ _id: id });
// const refList = await AllRefer.find({ referredId: logInUser.id })

//   .populate("referUser")
//   .sort({ createdAt: -1 })
//   .limit(inactiveLimit + 1);

// // console.log("🚀 ~ file: route.ts:54 ~ PATCH ~ refList:", { user, refUser });
// // console.log("🚀 ~ file: route.ts:55 ~ PATCH ~ refList:", refList);

// if (!refUser) {
//   return ApiResponse(404, "User not found");
// }

// const updateAndSave = async () => {
//   const test1 = await User.updateOne(
//     { _id: logInUser.id },
//     { balance: user.balance++ }
//   );
//   // user.balance++;
//   const test2 = await User.updateOne(
//     { _id: id },
//     { "settings.collectInactive": true }
//   );
//   console.log("🚀 ~ file: route.ts:70 ~ updateAndSave ~ test1:", {
//     test1,
//     test2,
//   });
//   // refUser.settings.collectInactive = true;
//   // await user.save();
//   // await refUser.save();
//   return ApiResponse(200, "Collect Money successfully ✅", {
//     test1,
//     test2,
//   });
// };

// await user.save();
// await refUser.save();
