"use client";

import { Button } from "@/universal";
import React from "react";
import { ActivePageCard, DataRow } from ".";

export const LiveLearningClass = () => {
  return (
    <ActivePageCard title="Join Live Learning Training Class">
      <DataRow title="Photo Editing & Sharing Class" btnText="ViewClass" />
      <DataRow title="Lead Generation Class" btnText="ViewClass" />
    </ActivePageCard>
  );
};
