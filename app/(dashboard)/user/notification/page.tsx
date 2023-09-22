"use client";

import React from "react";
import { Header } from "@/components/User/Active";

const navData = [
  { label: "Back", link: "/user/active" },
  { label: "Memo", link: "/user/notification/memo" },
  { label: "Message", link: "/user/message" },
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
