import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { APIResponse } from "@/utils";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

connectDb();

export const GET = async () => {
  try {
    const headersList = headers();
    const id = headersList.get("id");
    const role = headersList.get("role");

    if (role !== (UserRole.active || UserRole.admin)) {
      return APIResponse("denied❗ unauthorized user 😠😡😠");
    }

    const user = await User.findOne({ _id: id }).select("-password");

    return APIResponse("User get successfully", user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
