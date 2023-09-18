"use client";

import React, { FC } from "react";
import Nav from "../Nav/Nav";
import { MainContainer } from "@/universal";

export const Header: FC = () => {
  return (
    <MainContainer bgColor="black">
      <header className="overflow-visible">
        <Nav />
      </header>
    </MainContainer>
  );
};
