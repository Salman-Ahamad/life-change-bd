import { connectDb } from "@/config";
import { User } from "@/models";
import { genSalt, hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/mailer";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { email, password, ...userData } = reqBody;

    console.log({ data: reqBody });

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
    const hashedPassword = await hash(password, salt);

    const result = await User.create({
      ...userData,
      email,
      password: hashedPassword,
    });

    // const newUser = new User({
    //   userData,
    //   email,
    //   password: hashedPassword,
    // });

    // const savedUser = await newUser.save();

    //send verification email

    // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
