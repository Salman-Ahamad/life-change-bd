"use client";

import { Header } from "@/components/User/Active";
import React from "react";

const navData = [
  { label: "Back", link: "/user/active" },
  { label: "Withdrawal", link: "/user/active/withdrawal" },
  { label: "Points", link: "/courses" },
  { label: "Edit Profile", link: "/user/ref-list" },
  { label: "Document Verification", link: "/user/ref-list" },
  { label: "Passbook", link: "/user/ref-list" },
  { label: "Redeem List/hist", link: "/user/ref-list" },
  { label: "Instant Redeem", link: "/user/ref-list" },
  { label: "Photo Zone", link: "/user/ref-list" },
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
