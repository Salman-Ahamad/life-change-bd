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
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const Inactive = () => {
  const user = useCurrentUser(true);

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
