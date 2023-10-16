import { genSalt, hash } from "bcryptjs";
import { NextRequest } from "next/server";

import { connectDb } from "@/config";
import { User } from "@/models";
import { ApiResponse, generateStudentId } from "@/utils";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const {
      email,
      password: userPass,
      reference,
      ...userData
    } = await req.json();

    //check if user already exists
    const checkUserExists = await User.findOne({ email });

    if (checkUserExists) {
      return ApiResponse(400, "User already exists 🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️");
    }

    //hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(userPass, salt);

    const user = {
      ...userData,
      email,
      password: hashedPassword,
    };

    if (reference !== "-") {
      const refUser = await User.findOne({ userId: reference });
      if (refUser) {
        user.reference = refUser._id;
      } else {
        return ApiResponse(404, "Invalid Refer Id notfound❗");
      }
    }

    const id = await generateStudentId();
    user.userId = id;

    const result = await User.create(user);

    if (!result.id) {
      return ApiResponse(404, "Wrong reference Id❗");
    }

    const finalResult = await User.findOne({ id: result.id }).select(
      "-password"
    );

    return ApiResponse(200, "User created successfully 👌", finalResult);
  } catch (error: any) {
    return ApiResponse(500, error.message);
  }
};
