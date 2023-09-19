"use client";

import React from "react";
import { DashboardHeader } from "@/components";
import { InActiveNavItems } from "@/lib/data";
import { Meeting, Support } from "@/components/User/Inactive";

const page = () => {
  return (
    <>
      <DashboardHeader navData={InActiveNavItems} />
      <Support />
      <Meeting />
    </>
  );
};

export default page;
