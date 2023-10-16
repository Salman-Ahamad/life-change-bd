import { genSalt, hash } from "bcryptjs";
import { Types } from "mongoose";
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

    if (reference !== "-") {
      if (Types.ObjectId.isValid(reference)) {
        const refUser = await User.findOne({ _id: reference });
        if (!refUser) {
          return ApiResponse(404, "reference user notfound❗");
        }
      } else {
        return ApiResponse(404, "Wrong reference Id❗");
      }
    }

    //hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(userPass, salt);

    const user = {
      ...userData,
      email,
      password: hashedPassword,
      reference,
    };

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
