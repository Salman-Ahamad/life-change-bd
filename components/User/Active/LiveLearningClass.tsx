"use client";

import { GoogleMeetLink } from "@/components";
import { useGetData } from "@/hooks";
import { IAppConfig, ICourse } from "@/interface";
import { useState } from "react";
import { ActivePageCard } from ".";

export const LiveLearningClass = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [appConfig, setAppConfig] = useState<IAppConfig>();

  useGetData("/config", setAppConfig, true);
  useGetData("/courses", setCourses, true);

  return (
    courses &&
    courses.map((course, idx) => (
      <ActivePageCard
        icon
        key={idx}
        title={course.title}
        className="flex flex-col justify-center items-center w-full max-w-xs bg-slate-200"
      >
        <GoogleMeetLink meetId={appConfig?.support.welcomeClass || ""}>
          Join Class
        </GoogleMeetLink>
      </ActivePageCard>
    ))
  );
};
