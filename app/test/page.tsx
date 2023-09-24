import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Test = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/test");
  }

  return (
    <div>
      <h1>This test page</h1>
    </div>
  );
};

export default Test;
