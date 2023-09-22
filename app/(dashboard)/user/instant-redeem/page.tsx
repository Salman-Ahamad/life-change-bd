"use client";

import React from "react";
import { Header } from "@/components/User/Active";

const navData = [
  { label: "Homepage", link: "/user/active" },
  { label: "Request/History", link: "/user/redeem-list" },
  { label: "Logout", link: "/user/" },
];

const page = () => {
  return (
    <>
      <Header navData={navData} />
    </>
  );
};

export default page;
