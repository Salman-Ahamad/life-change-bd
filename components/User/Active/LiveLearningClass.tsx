"use client";

import { GoogleMeetLink } from "@/components";
import { useGetData } from "@/hooks";
import { ICourse } from "@/interface";
import { useState } from "react";
import { ActivePageCard } from ".";

export const LiveLearningClass = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useGetData("/courses", setCourses, true);

  return (
    courses &&
    courses.map(({ title, meetingId }, idx) => (
      <ActivePageCard
        icon
        key={idx}
        title={title}
        className="flex flex-col justify-center items-center w-full max-w-xs bg-slate-200"
      >
        <GoogleMeetLink meetId={meetingId || ""}>Join Class</GoogleMeetLink>
      </ActivePageCard>
    ))
  );
};
