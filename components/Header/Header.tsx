"use client";

import React, { FC } from "react";
import Nav from "../Nav/Nav";
import { MainContainer } from "@/universal";

const Header: FC = () => {
  return (
    <MainContainer bgColor="black">
      <header>
        <Nav />
      </header>
    </MainContainer>
  );
};

export default Header;
