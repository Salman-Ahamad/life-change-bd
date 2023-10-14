"use client";

import React from "react";
import { ActivePageCard, DataRow } from ".";
import { useCurrentUser } from "@/hooks";

export const SupportTeam = () => {
  const user = useCurrentUser();

  return (
    <ActivePageCard title="Life change Support Team">
      <DataRow title="Your Consultant" />
      <DataRow title="Your Group Leader" />
      <DataRow title="Life Change BD Support" />
    </ActivePageCard>
  );
};
