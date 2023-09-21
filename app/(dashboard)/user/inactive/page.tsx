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
  <>
    <Header navData={inActiveNavItems} />
    <Support />
    <Meeting />
    <ActivationPoint />
    <Footer />
  </>
);

export default Inactive;
