"use client";

import { Header } from "@/components";
import {
  ActivationPoint,
  Footer,
  Meeting,
  Support,
} from "@/components/User/Inactive";
import { inActiveNavItems } from "@/lib/data";

const Inactive = () => (
  <section className="bg-black">
    <Header navData={inActiveNavItems} />
    <Support />
    <Meeting />
    <ActivationPoint />
    <Footer />
  </section>
);

export default Inactive;
