"use client";

import React from "react";
import { DashboardHeader } from "@/components";
import { InActiveNavItems } from "@/lib/data";
import {
  ActivationPoint,
  Footer,
  Meeting,
  Support,
} from "@/components/User/Inactive";

const page = () => {
  return (
    <>
      <DashboardHeader navData={InActiveNavItems} />
      <Support />
      <Meeting />
      <ActivationPoint />
      <Footer />
    </>
  );
};

export default page;
