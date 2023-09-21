"use client";

import React from "react";
import { Header } from "@/components/User/Active";

const navData = [
  { label: "Profile", link: "/" },
  { label: "Courses", link: "/user/active/courses" },
  { label: "References", link: "/" },
  { label: "Earn Reward Points", link: "/" },
  { label: "Instant Redeem", link: "/" },
  { label: "Messages", link: "/" },
  { label: "Transfer Points", link: "/" },
  { label: "Photo Zone", link: "/" },
  { label: "Video Zone", link: "/" },
  { label: "Logout", link: "/" },
];

const page = () => {
  return (
    <>
      <Header navData={navData} />
    </>
  );
};

export default page;
