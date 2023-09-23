"use client";

import { Header } from "@/components";
import { navData } from "@/lib/data";

const Active = () => (
  <>
    <Header navData={navData.active} />
  </>
);

export default Active;
