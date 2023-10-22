"use client";

import { GoogleMeetLink } from "@/components";
import { FC } from "react";
import { ActivePageCard } from ".";

export const MeetingLink: FC<{ meetId: string; title?: string }> = ({
  meetId,
  title,
}) => {
  return (
    <ActivePageCard title={title ? title : ""}>
      <div className="w-full flex justify-center">
        <GoogleMeetLink meetId={meetId}>Get Meeting Links</GoogleMeetLink>
      </div>
    </ActivePageCard>
  );
};
