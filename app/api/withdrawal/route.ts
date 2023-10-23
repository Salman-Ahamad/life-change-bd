import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { AppConfig, User, Withdrawal } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const { amount, ...withdrawalData } = await req.json();
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }
    const amountToNumber = Number(amount);

    await User.findOneAndUpdate(
      { _id: user.id },
      { $inc: { balance: -amountToNumber } },
      { new: true }
    );

    const option = {
      userId: user.userId,
      amount: amountToNumber,
      ...withdrawalData,
    };

    const result = await Withdrawal.create(option);

    return ApiResponse(200, "withdraw Request successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (
      user.role !== UserRole.admin &&
      user.role !== UserRole.controller
    ) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Withdrawal.find({ status: "pending" });

    return ApiResponse(200, "Config get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const status = req.nextUrl.searchParams.get("status");
    const { id, ...updatedData } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (
      user.role !== UserRole.admin &&
      user.role !== UserRole.controller
    ) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    if (status === "complete") {
      const result = await Withdrawal.updateOne({ _id: id }, updatedData, {
        new: true,
      });

      if (result.acknowledged && result.modifiedCount === 1) {
        // Fetch the updated document by its _id
        const updatedDocument = await Withdrawal.findOne({ _id: id });
        if (
          updatedDocument &&
          updatedDocument.amount &&
          updatedDocument.status === "complete"
        ) {
          // This will increase the totalWithdraw
          await AppConfig.updateOne(
            {},
            { $inc: { totalWithdraw: updatedDocument.amount } }
          );
        } else {
          console.log("Document not found after update.");
        }
      }

      return ApiResponse(200, "Withdrawal complete successfully 🛠️✅", result);
    } else if (status === "reject") {
      const result = await Withdrawal.updateOne({ _id: id }, updatedData, {
        new: true,
      });

      if (result.acknowledged && result.modifiedCount === 1) {
        // Fetch the updated document by its _id
        const updatedDocument = await Withdrawal.findOne({ _id: id });

        if (
          updatedDocument &&
          updatedDocument.amount &&
          updatedDocument.status === "reject"
        ) {
          // This will increase the totalWithdraw
          await User.findOneAndUpdate(
            {
              userId: updatedDocument.userId,
            },
            { $inc: { balance: updatedDocument.amount } },
            { new: true }
          );

          return ApiResponse(
            200,
            "Withdrawal Reject successfully 🛠️✅",
            result
          );
        } else {
          console.log("Document not found after update.");
        }
      }
    }
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
