"use client";

import React from "react";
import { Header } from "@/components/User/Active";

const navData = [
  { label: "Back", link: "/user/notification" },
  { label: "Homepage", link: "/user/active" },
];

const page = () => {
  return (
    <>
      <Header navData={navData} />
    </>
  );
};

export default page;
