"use client";

import { Header } from "@/components/User/Active";
import React from "react";
// Logout

const navData = [{ label: "Back", link: "/user/ref-list" }];

const page = () => {
  return (
    <>
      <Header navData={navData} />
    </>
  );
};

export default page;
