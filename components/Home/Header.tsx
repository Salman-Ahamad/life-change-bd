"use client";

import { commonNavItems } from "@/public/data";
import { MainContainer } from "@/universal";
import { FC } from "react";
import { Nav } from "..";

export const Header: FC = () => (
  <MainContainer bgColor="black" className="relative">
    <Nav navData={commonNavItems} />
  </MainContainer>
);
