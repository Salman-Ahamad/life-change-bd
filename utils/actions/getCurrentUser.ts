import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { connectDb } from "@/config";
import { User } from "@/models";

export async function getSession() {
  return await getServerSession(options);
}

export default async function getCurrentUser() {
  const session = await getSession();

  if (!session?.user) {
    console.error("User not found");
    return null;
  }

  connectDb();

  const user = await User.findOne({ email: session.user.email });

  return user;
}
