import { connectDb } from "@/config";
import { User } from "@/models";
import { genSalt, hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/mailer";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const { email, password: userPass, ...userData } = await req.json();

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(userPass, salt);

    const result = await User.create({
      ...userData,
      email,
      password: hashedPassword,
    });

    //send verification email
    // await sendEmail({ email, emailType: "VERIFY", userId: result._id });

    const finalResult = await User.findOne({ _id: result._id }).select(
      "-password"
    );

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data: finalResult,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
