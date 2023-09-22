"use client";

import { Header } from "@/components/User/Active";

const navData = [
  { label: "Profile", link: "/user/active/profile" },
  { label: "Courses", link: "/user/courses" },
  { label: "References", link: "/user/ref-list" },
  { label: "Instant Redeem", link: "/user/instant-redeem" },
  { label: "Messages", link: "/user/messages" },
  { label: "Transfer Points", link: "/user/transfer-points" },
  { label: "Photo Zone", link: "/user/photo-zone" },
  { label: "Video Zone", link: "/player" },
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
