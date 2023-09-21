"use client";

import React from "react";
import { Header } from "@/components/User/Active";

const navData = [
  { label: "Homepage", link: "/user/active" },
  { label: "Instant Redeem Home", link: "/user/instant-redeem" },
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
