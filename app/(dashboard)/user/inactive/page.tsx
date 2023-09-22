"use client";

import { Header, Tost } from "@/components";
import {
  ActivationPoint,
  Footer,
  ImageUploadSection,
  Meeting,
  Support,
} from "@/components/User/Inactive";
import { navData } from "@/lib/data";

const Inactive = () => (
  <>
    <Header navData={navData.inActive} />
    <Tost label="verify your email" btnText="verify" />
    <ImageUploadSection />
    <Support />
    <section className="bg-black">
      <Meeting />
      <ActivationPoint />
      <Footer />
    </section>
  </>
);

export default Inactive;
