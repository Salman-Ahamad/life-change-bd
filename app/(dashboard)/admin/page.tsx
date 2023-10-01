import getCurrentUser from "@/utils/actions/getCurrentUser";
import React from "react";

const page = async () => {
  const session = await getCurrentUser();
  console.log("Admin Session: ", session);

  return <div>page</div>;
};

export default page;
