"use client";

import { Header } from "@/components/User/Active";
import React from "react";
// Logout

const navData = [
  { label: "Back", link: "/user/active" },
  { label: "Meeting Joining", link: "/user/ref-list/meeting" },
  { label: "Passbook", link: "/user/passbook" },
  { label: "Reference Joining", link: "/user/ref-list/joining" },
  { label: "Send Wish", link: "/user/ref-list/send-wish" },
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
