"use client";

import { Button } from "@/universal";
import React, { FC } from "react";

interface IGoogleMeetDeepLink {
  meetId: string;
  startTime?: string;
  endTime?: string;
}

export const GoogleMeetLink: FC<IGoogleMeetDeepLink> = ({ meetId }) => {
  const openJoinMeeting = () => {
    const url = `https://meet.google.com/${meetId}`;
    window.open(url, "_blank");
  };
  return (
    <Button variant="secondary" onClick={openJoinMeeting}>
      Join Meet
    </Button>
  );
};
