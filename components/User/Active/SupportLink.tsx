"use client";

import { Button, Title } from "@/universal";
import React from "react";
import { ActivePageCard } from ".";

export const SupportLink = () => {
  return (
    <ActivePageCard title="May I help you">
      <div className="w-full flex justify-center">
        <Button variant="secondary">Get Links</Button>
      </div>
    </ActivePageCard>
  );
};
