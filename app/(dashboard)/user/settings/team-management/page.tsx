"use client";

import { Header } from "@/components";
import { navData } from "@/lib";
import React from "react";

const TeamManagement = () => {
  return (
    <main>
      <Header navData={navData.settings} />
      <p>TeamManagement</p>
    </main>
  );
};

export default TeamManagement;
