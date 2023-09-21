"use client";

import { Header } from "@/components/User/Active";
import React from "react";
// Logout

const navData = [
  { label: "Back", link: "/user/ref-list" },
  { label: "Meeting Joining", link: "/user/ref-list/send-wish" },
];

const page = () => {
  return (
    <>
      <Header navData={navData} />
    </>
  );
};

export default page;
