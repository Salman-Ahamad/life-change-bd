"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Test1 = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("./api/auth/signin?callbackUrl=/test1");
    },
  });

  return (
    <div>
      {session?.user ? (
        <h1>This is test one page!</h1>
      ) : (
        <h1>This is test one page!</h1>
      )}
    </div>
  );
};

export default Test1;
