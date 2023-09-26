"use client";

import Feed from "@/components/User/PhotoZone/Feed";
import LeftSidebar from "@/components/User/PhotoZone/LeftSidebar";
import RightSidebar from "@/components/User/PhotoZone/RightSidebar";

const PhotoZone = () => (
  <main>
    <LeftSidebar />
    <RightSidebar />
    <Feed />
  </main>
);

export default PhotoZone;
