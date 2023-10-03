import { connectDb } from "@/config";
import { User } from "@/models";
import { getSession } from "./getCurrentUser";

export default async function updateProfile() {
  const session = await getSession();

  let data = null;
  let loading = false;
  let error = null;

  if (!session?.user.id) {
    error = "User not found";
    return;
  }

  loading = true;

  connectDb();

  const user = await User.findOne({ email: session.user.email });

  data = user;
  loading = false;

  return { data, loading, error };
}
