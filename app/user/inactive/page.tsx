import { DashboardHeader } from "@/components";
import { InActiveNavItems } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardHeader navData={InActiveNavItems} />
    </>
  );
};

export default page;
