import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export async function getSession() {
  return await getServerSession(options);
}

export default async function getCurrentUser() {
  const session = await getSession();
  console.log("Session Data: ", session);

  if (!session?.user?.email) {
    return null;
  }

  return session;
}
