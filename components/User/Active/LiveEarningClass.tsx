"use client";

import React from "react";
import { ActivePageCard, DataRow } from ".";

export const LiveEarningClass = () => {
  return (
    <ActivePageCard title="Join Live Earning Training Class">
      <DataRow title="Photo Editing & Sharing Class" btnText="ViewClass" icon />
      <DataRow title="Lead Generation Class" btnText="ViewClass" icon />
    </ActivePageCard>
  );
};
