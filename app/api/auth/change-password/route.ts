import { connectDb } from "@/config";
import { compare, genSalt, hash } from "bcryptjs";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

export const PATCH = async (req: NextRequest) => {
  try {
    connectDb();
    // Get Current User
    const user = await getCurrentUser();

    const { oldPassword, newPassword, reTypePassword } = await req.json();
    console.log("Req Data", oldPassword);

    const validPassword = await compare(oldPassword, user.password);

    if (!validPassword) {
      return ApiResponse(401, "Password not matched!", user);
    }

    //hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(newPassword, salt);

    const result = await User.updateOne(
      { _id: user.id },
      { password: hashedPassword },
      {
        new: false,
      }
    );

    // return ApiResponse(200, "User update successfully", result);
    return ApiResponse(200, "User update successfully", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
