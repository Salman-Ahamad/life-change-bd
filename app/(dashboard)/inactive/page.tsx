"use client";

import { Header, Tost } from "@/components";
import {
  ActivationPoint,
  Footer,
  ImageUploadSection,
  Meeting,
  Support,
} from "@/components/User/Inactive";
import { useCurrentUser } from "@/hooks";
import { INavItem } from "@/interface";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/active",
  },
  {
    label: "Profile",
    link: "/inactive/profile",
  },
  {
    label: "Courses",
    link: "/active/courses",
  },
  {
    label: "References",
    link: "/active/user/ref-list",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
  // {
  //   label: "Video Zone",
  //   link: "/active/video-zone",
  // },
];

const Inactive = () => {
  const user = useCurrentUser();

  return (
    <>
      <Header navData={navData} />
      {user && !user.isVerified && (
        <Tost label="Verify Email Address and Get 5 Taka" btnText="verify" />
      )}
      <ImageUploadSection />
      <Support />
      <section className="bg-black">
        <Meeting />
        <ActivationPoint />
        <Footer />
      </section>
    </>
  );
};

export default Inactive;
