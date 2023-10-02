import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import { APIResponse } from "@/utils";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async () => {
  try {
    const headersList = headers();
    const id = headersList.get("id");
    const role = headersList.get("role");

    if (role !== (UserRole.active || UserRole.admin)) {
      return APIResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const user = await User.findOne({ _id: id }).select("-password");

    return APIResponse(200, "User get successfully", user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { id, role, ...userData } = await req.json();

    if (role !== (UserRole.active || UserRole.admin)) {
      return APIResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await User.updateOne({ _id: id }, userData, {
      new: true,
    });

    return APIResponse(200, "User update successfully", result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
