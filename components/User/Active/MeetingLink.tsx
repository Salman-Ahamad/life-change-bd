"use client";

import { GoogleMeetLink } from "@/components";
import { FC } from "react";
import { ActivePageCard } from ".";

export const MeetingLink: FC<{ meetId: string }> = ({ meetId }) => {
  return (
    <ActivePageCard title="Life Change BD Support Meeting">
      <div className="w-full flex justify-center">
        <GoogleMeetLink meetId={meetId}>Get Meeting Links</GoogleMeetLink>
      </div>
    </ActivePageCard>
  );
};
