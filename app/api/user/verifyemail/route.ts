import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log("🚀 ~ file: route.ts:11 ~ POST ~ token:", token);

    // const user = await User.findOne({
    //   verifyToken: token,
    //   verifyTokenExpiry: { $gt: Date.now() },
    // });

    // if (!user) {
    //   return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    // }

    // console.log("🚀 ~ file: route.ts:22 ~ POST ~ user:", user);

    // user.isVerified = true;
    // user.role = UserRole.active;
    // user.verifyToken = "";
    // user.verifyTokenExpiry = "";

    // await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      // success: true,
    });
  } catch (error: any) {
    console.log("🚀 ~ file: route.ts:37 ~ POST ~ error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
