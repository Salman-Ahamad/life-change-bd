import { genSalt, hash } from "bcryptjs";
import { Types } from "mongoose";
import { NextRequest } from "next/server";

import { connectDb } from "@/config";
import { UserRole, inactiveLimit } from "@/lib";
import { AllRefer, User } from "@/models";
import { ApiResponse } from "@/utils";

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
    const user = await User.findOne({ email });

    if (user) {
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

    const newUser = new User({
      ...userData,
      email,
      password: hashedPassword,
      reference,
    });

    const savedUser = await newUser.save();

    if (reference !== "-") {
      if (Types.ObjectId.isValid(reference)) {
        const refData = {
          referredId: reference,
          referUser: savedUser._id,
        };
        const newRef = await AllRefer.create(refData);

        const refUser = await User.findOne({ _id: reference });
        const refList = await AllRefer.find({ referredId: reference })
          .populate("referUser")
          .sort({ createdAt: -1 })
          .limit(inactiveLimit + 1);

        if (refList.length <= inactiveLimit) {
          console.log("limit ase add hobe");
          refUser.balance++;
        } else {
          const active = refList.find(
            ({ referUser }) => referUser.role === UserRole.active
          );
          if (active) {
            console.log("active ase add hobe");
            refUser.balance++;
          } else {
            console.log("limit ses");
          }
        }

        // refUser.balance++;
        await refUser.save();
      }
    }

    const finalResult = await User.findOne({ _id: savedUser._id }).select(
      "-password"
    );

    return ApiResponse(200, "User created successfully 👌", finalResult);
  } catch (error: any) {
    return ApiResponse(500, error.message);
  }
};
