"use client";

import React from "react";
import { Header } from "@/components/User/Active";

const navData = [
  { label: "Homepage", link: "/user/active" },
  { label: "Passbook", link: "/user/passbook" },
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
