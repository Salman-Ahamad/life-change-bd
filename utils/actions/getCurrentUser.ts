import { options } from "@/app/api/auth/[...nextauth]/options";
import { connectDb } from "@/config";
import { User } from "@/models";
import { getServerSession } from "next-auth/next";

export const getSession = async () => {
  return await getServerSession(options);
};

export const getCurrentUser = async () => {
  const session = await getSession();

  if (!session?.user) {
    console.error("User not found");
    return null;
  }

  connectDb();

  const user = await User.findOne({ email: session.user.email });

  return user;
};
