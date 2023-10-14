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
import { navData } from "@/lib/data";

const Inactive = () => {
  const user = useCurrentUser();
  console.log(user);

  return (
    <>
      <Header navData={navData.inActive} />
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
