"use client";

import { IGoogleMeetDeepLink } from "@/interface";
import { Button } from "@/universal";
import { FC } from "react";

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
