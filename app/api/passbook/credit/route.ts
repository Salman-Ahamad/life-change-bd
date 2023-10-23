import { Earning } from "@/models/earnings";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await Earning.find({ userId: user.userId }).sort({
      createdAt: -1,
    });

    return ApiResponse(200, "Earning data get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { userId, amount, comments } = await req.json();
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }
    const amountToNumber = Number(amount);

    // await User.findOneAndUpdate(
    //   { _id: user.id },
    //   { $inc: { balance: -amountToNumber } },
    //   { new: true }
    // );

    // const option = {
    //   userId: user.id,
    //   amount: amountToNumber,
    //   ...withdrawalData,
    // };

    const result = await Earning.create({ userId, amount, comments });

    return ApiResponse(200, "withdraw Request successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
