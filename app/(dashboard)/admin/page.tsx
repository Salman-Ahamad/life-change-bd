import getCurrentUser from "@/utils/actions/getCurrentUser";
import React from "react";

const page = () => {
  const session = getCurrentUser();
  console.log(session);

  return <div>page</div>;
};

export default page;
