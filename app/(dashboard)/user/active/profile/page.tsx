"use client";

import { Header } from "@/components";
import { navData } from "@/lib/data";

const Profile = () => (
  <>
    <Header navData={navData.profile} />
  </>
);

export default Profile;
