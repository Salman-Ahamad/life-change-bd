import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

connectDb();

export const GET = async () => {
  try {
    const headersList = headers();
    const id = headersList.get("id");
    const role = headersList.get("role");

    if (role !== (UserRole.active || UserRole.admin)) {
      return NextResponse.json({
        message: "denied❗ unauthorized user 😠😡😠",
        success: false,
        data: {},
      });
    }

    const user = await User.findOne({ _id: id }).select("-password");

    return NextResponse.json({
      message: "User get successfully",
      success: true,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
