"use client";

import { Header } from "@/components/User/Active";
import React from "react";
// Logout

const navData = [
  { label: "Back", link: "/user/active" },
  { label: "Profile", link: "/user/active/profile" },
  { label: "Courses", link: "/courses" },
  { label: "Reference", link: "/user/ref-list" },
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
