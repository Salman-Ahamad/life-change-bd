// import { connectDb } from "@/config";

import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/utils/actions/getCurrentUser";

// connectDb();

export const GET = async (req: NextRequest) => {
  try {
    const session = await getCurrentUser();

    if (!session) {
      return NextResponse.json({ message: "You are not logged in." });
    }

    return NextResponse.json(session);

    // const reqBody = await req.json();
    // const { email, password: userPass, ...userData } = reqBody;

    // //check if user already exists
    // const user = await User.findOne({ email });

    // if (user) {
    //   return NextResponse.json(
    //     { error: "User already exists" },
    //     { status: 400 }
    //   );
    // }

    // //hash password
    // const salt = await genSalt(10);
    // const hashedPassword = await hash(userPass, salt);

    // const result = await User.create({
    //   ...userData,
    //   email,
    //   password: hashedPassword,
    // });

    // //send verification email
    // // await sendEmail({ email, emailType: "VERIFY", userId: result._id });

    // const finalResult = await User.findOne({ _id: result._id }).select(
    //   "-password"
    // );

    // return NextResponse.json({
    //   message: "User created successfully",
    //   success: true,
    //   data: finalResult,
    // });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
