"use client";

import { Header } from "@/components/User/Active";
import React from "react";
//  PassbookRedeem List/histInstant RedeemLogout

const navData = [
  { label: "Back", link: "/user/active/withdrawal" },
  { label: "Profile", link: "/user/active/profile" },
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
