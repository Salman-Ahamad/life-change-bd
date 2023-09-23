"use client";

import ProfileDetails from "@/components/User/PhotoZone/ProfileDetails";
import ProfileFeed from "@/components/User/PhotoZone/ProfileFeed";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <ProfileDetails />
      <ProfileFeed />
    </div>
  );
};

export default page;
