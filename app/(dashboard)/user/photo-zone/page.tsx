"use client";

import React from "react";
import LeftSidebar from "@/components/User/PhotoZone/LeftSidebar";
import RightSidebar from "@/components/User/PhotoZone/RightSidebar";
import Feed from "@/components/User/PhotoZone/Feed";

const page = () => {
  return (
    <>
      <LeftSidebar />
      <RightSidebar />
      <Feed />
    </>
  );
};

export default page;
