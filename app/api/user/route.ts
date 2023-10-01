// import { connectDb } from "@/config";

import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/utils/actions/getCurrentUser";

// connectDb();

export const GET = async (req: NextRequest) => {
  try {
    const session = await getCurrentUser();

    return NextResponse.json(session);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
