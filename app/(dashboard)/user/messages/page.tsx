"use client";

import React from "react";
import { Header } from "@/components/User/Active";

const navData = [
  { label: "Homepage", link: "/user/active" },
  { label: "Profile", link: "/user/profile" },
  { label: "Notification", link: "/user/notification" },
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
