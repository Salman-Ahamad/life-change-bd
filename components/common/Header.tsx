"use client";

import { INav } from "@/interface";
import { MainContainer } from "@/universal";
import { FC } from "react";
import { Nav } from "..";

export const Header: FC<INav> = ({ navData }) => (
  <MainContainer bgColor="black" className="relative">
    <Nav navData={navData} />
  </MainContainer>
);
