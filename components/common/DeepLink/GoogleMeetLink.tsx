"use client";

import { IGoogleMeetDeepLink } from "@/interface";
import { Button, LinkButton } from "@/universal";
import Link from "next/link";
import { FC } from "react";

export const GoogleMeetLink: FC<IGoogleMeetDeepLink> = ({
  meetId,
  children,
}) => {
  return (
    <Link href={`https://meet.google.com/${meetId}`} target="_blank">
      <Button variant="secondary">{children || "Join Meet"}</Button>
    </Link>
  );
};
