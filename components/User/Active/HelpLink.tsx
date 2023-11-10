"use client";

import { GoogleMeetLink } from "@/components";
import { FC } from "react";
import { ActivePageCard } from ".";

export const HelpLink: FC<{ meetId: string }> = ({ meetId }) => {
  return (
    <ActivePageCard title="May I help you">
      <div className="w-full flex justify-center">
        <GoogleMeetLink meetId={meetId}>Get Links</GoogleMeetLink>
      </div>
    </ActivePageCard>
  );
};
