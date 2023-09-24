"use client";

import { FC } from "react";

import { Footer, Navbar } from "@/components";
import { IChildren } from "@/interface";
import { navData } from "@/lib/data";

const PublicLayout: FC<IChildren> = ({ children }) => (
  <main>
    <Navbar navData={navData.common} />
    {children}
    <Footer />
  </main>
);

export default PublicLayout;
