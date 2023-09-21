"use client";

import { Header } from "@/components";
import {
  ActivationPoint,
  Footer,
  ImageUpload,
  Meeting,
  Support,
} from "@/components/User/Inactive";
import { inActiveNavItems } from "@/lib/data";

const Inactive = () => (
  <>
    <Header navData={inActiveNavItems} />
    <ImageUpload />
    <section className="bg-black">
      <Support />
      <Meeting />
      <ActivationPoint />
      <Footer />
    </section>
  </>
);

export default Inactive;
