import { options } from "@/app/api/auth/[...nextauth]/options";
import { connectDb } from "@/config";
import { IUser } from "@/interface";
import { User } from "@/models";
import { getServerSession } from "next-auth/next";

export async function getSession() {
  return await getServerSession(options);
}

export default async function getCurrentUser(): Promise<IUser | null> {
  const session = await getSession();

  if (!session?.user) {
    return null;
  }

  connectDb();

  const user = await User.findOne({ email: session.user.email });
  if (user) {
    return user;
  } else {
    console.error("User not found");
    return null;
  }
}
