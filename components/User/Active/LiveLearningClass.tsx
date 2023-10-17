"use client";

import { Button } from "@/universal";
import React from "react";
import { ActivePageCard, DataRow } from ".";

export const LiveLearningClass = () => {
  return (
    <ActivePageCard title="Join Live Training Class">
      <DataRow title="Photo Editing & Sharing Class" btnText="ViewClass" icon />
      <DataRow title="Lead Generation Class" btnText="ViewClass" icon />
    </ActivePageCard>
  );
};
