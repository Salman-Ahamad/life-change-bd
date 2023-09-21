"use client";

import { Header } from "@/components";
import {
  ActivationPoint,
  Footer,
  ImageUploadSection,
  Meeting,
  Support,
} from "@/components/User/Inactive";
import { inActiveNavItems } from "@/lib/data";

const Inactive = () => (
  <>
    <Header navData={inActiveNavItems} />
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
