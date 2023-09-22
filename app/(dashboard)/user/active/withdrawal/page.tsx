"use client";

import { Header } from "@/components/User/Active";
import React from "react";
//  PassbookRedeem List/histInstant RedeemLogout

const navData = [
  { label: "Profile", link: "/user/active/profile" },
  { label: "Change Payment Method", link: "/user/payment-method" },
  { label: "Passbook", link: "/user/passbook" },
  { label: "Redeem List/hist", link: "/user/redeem-list" },
  { label: "Instant Redeem", link: "/user/instant-redeem" },
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
